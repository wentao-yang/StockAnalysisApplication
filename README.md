# StockAnalysisApplication [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An application that stores historical stock data into an InfluxDB database, uses Django as the backend framework for the API, and React as the frontend framework with Bootstrap. 

## Technologies

- [Django](https://docs.djangoproject.com/en/3.1/topics/install/)
- [InfluxDB](https://docs.influxdata.com/influxdb/v1.8/introduction/install/)
- [Grafana](https://grafana.com/docs/grafana/latest/installation/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- Postman

## Note

Grafana and React both use Port 3000, and this application did not change the ports of either technology.

## Getting Started

This application retrieves the 2018 historical data for a selected number of stocks from Quandl. Make sure that you have an API key from Quandl, and you can sign up for one [here](https://www.quandl.com/sign-up).

You will need to install a few of the above technologies. The install guide for each can be reached by clicking the name of the technology.

After the installation and cloning, you should install the Python3 packages needed by opening up the terminal in the home directory of the project and entering this:

```
> pip3 install -r requirements.txt
```

## Setting up the Database

First, activate InfluxDB:

```
> make db
```

You will need to create an environment variable for the Quandl API Key:

```
export QUANDL_API_KEY='YOURQUANDLAPIKEY'
```

Then, open ```dbSetup.py``` and change the necessary parameters. More instructions will be in the file's comments. After this, you can run the setup file:

```
> python3 dbSetup.py
```

To test that the database has been set up correctly:

```
> make test
```

## Grafana

Now, all the data within the Database can be viewed in visual graphs using Grafana. Start Grafana using this command:

```
> make grafana
```

## Stopping Grafana and InfluxDB After Use

You can stop both services using this command:

```
> make stop
```

## Activating Django as the Backend Framework

Before activating Django, go into ```/django_project/app/views.py``` and change the parameters similar to dbSetup.py. Next, create a new Django Secret Key and set an environment variable for it:

```
export DJANGO_SECRET_KEY="YOURDJANGOSECRETKEY"
```

You can get a new DJango Secret Key using the following Python code:

```
from django.core.management.utils import get_random_secret_key  
print(get_random_secret_key())
```


Then, you can activate Django as the backend framework:

```
> make django
```

For more information about the API, press [here](https://documenter.getpostman.com/view/12455453/TVCY6C1H) for the Postman documentation. 

Note that Cross Origin Access has been enabled for Port 3000 (React's port) using [```corsheaders```](https://pypi.org/project/django-cors-headers/).

## Activating React as the Frontend Framework

Open up a new terminal and go into the ```react-app``` directory:

```
> cd react-app
```

Then, build the application to retrieve the necessary node modules:

```
> npm build
```

Now, you can activate React by:

```
> yarn start
```

or

```
> npm start
```

Now, ```http://localhost:3000/``` should be the URL of your React application, and you can access it from an internet browser. 
