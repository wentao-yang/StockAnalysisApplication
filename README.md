# StockAnalysisApplication [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An application that stores historical stock data into an InfluxDB database, uses Django as the backend framework for the API, and React as the frontend framework with Bootstrap. 

## Technologies

- [Django](https://docs.djangoproject.com/en/3.1/topics/install/)
- [InfluxDB](https://docs.influxdata.com/influxdb/v1.8/introduction/install/)
- [Grafana](https://grafana.com/docs/grafana/latest/installation/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- Postman

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

Then, open ```dbSetup.py``` and change the necessary parameters. More instructions will be in the file's comments. After this, you can run the setup file:

```
> python3 dbSetup.py
```
