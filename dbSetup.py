from influxdb import InfluxDBClient
import pandas_datareader.data as web
import pandas as pd

'''
By running this Python file, historical opening prices for selected stocks
will be stored into an InfluxDB database. Before running the code, make
sure that you have InfluxDB installed and activated using this command:

sudo systemctl start influxdb

You will also need a Quandl API Key. Set the Quandl API Key environment
variable by entering this command into the terminal:

export QUANDL_API_KEY='YourQuandlApiKey'

A lot of parameters about the data can be changed, such as the start and
stop time for the historical period and the stocks whose data will be
retrieved. Note that Quandl does not have data for years past 2018, but
InfluxDB is designed as a real time TSDB.

Note: You will have to change the necessary parameters in
django_project/app/views.py
'''

# Changeable Parameters; Note Quandl is missing full data for some stocks,
# such as Apple, and gives 249 days of data instead of 250 like the others.
database_name = 'StockApp'
table_name = 'StockPrices'
ticker_symbols = ['FB', 'GOOGL', 'AMD', 'NFLX', 'MSFT', 
    'TWTR', 'NVDA', 'DIS', 'ZNGA', 'TGT', 'WMT', 'SBUX',
    'JPM', 'BAC', 'TSLA', 'F', 'GE']
ticker_symbols.sort()
start_date = '2017-01-01'
end_date = '2018-01-01'


# InfluxDBClient has additional parameters, such as username and password.
# Add them if necessary.
client = InfluxDBClient(host='localhost', port=8086)
print('Successfully connected to InfluxDB')
client.create_database(database_name)
client.switch_database(database_name)
print('Successfully created database')


# Data Collection
mainDf = ''
for i in ticker_symbols:
    print('Working on', i, '  ', end='\r')
    df = web.DataReader(i, 'quandl', start_date, end_date)
    if mainDf is '': # First time we retrieve data: create the main dataframe
                        # With only the timestamps
        mainDf = pd.DataFrame(index=df.index)
    mainDf[i] = df['Open']
print('Finished collecting data from Quandl')

# Create JSON for InfluxDB
json_body = []
for time, prices in mainDf.iterrows():
    time_str = time.strftime('%Y-%m-%d') # Converts timestamp to string
    point = {'measurement': table_name, "time": time_str}
    print('Working on day', time_str, '  ', end='\r')
    fields = {}
    for i in ticker_symbols:
        fields[i] = round(prices[i], 2)
    point['fields'] = fields
    json_body.append(point)
print('Finished creating JSON for inputting data into InfluxDB')

# Input data into InfluxDB
client.write_points(json_body)
print('Finished inputting into InfluxDB')
print('Success')