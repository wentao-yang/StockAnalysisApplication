from django.shortcuts import render
from django.http import JsonResponse
from influxdb import InfluxDBClient

'''
Please change the following parameters and start the InfluxDB service
using the following command:

sudo systemctl start influxdb
'''

# Parameters
database_name = 'StockApp'
client = InfluxDBClient(host='localhost', port=8086)
client.switch_database(database_name) # Connects to database in InfluxDB

def home(request):
    '''
    Homepage
    '''
    return render(request, 'home.html')

def data(request, symbol):
    '''
    Returns all data in database for a stock
    '''
    json_body = {'symbol': symbol}

    # Query data from InfluxDB based on ticker symbol
    query_string = 'select ' + symbol + ' from StockPrices'
    raw_data = client.query(query_string).raw['series'][0]['values']

    # Input data into correct format
    data = {}
    for i in raw_data:
        data[i[0]] = i[1] # time: price
    json_body['data'] = data

    return JsonResponse(json_body)

def symbols(request):
    '''
    Returns all the ticker symbols of the stocks in database
    '''
    return JsonResponse({'names': client.query('select * from StockPrices limit 1').raw['series'][0]['columns'][1:]})