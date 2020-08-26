backend:
	sudo systemctl start influxdb
	python3 django_project/manage.py runserver

db:
	sudo systemctl start influxdb

grafana:
	sudo systemctl start grafana-server

django:
	python3 django_project/manage.py runserver

stop:
	sudo systemctl stop influxdb
	sudo systemctl stop grafana-server

# Only test when dbSetup.py has been ran successfully
# and InfluxDB is activated
test:
	python3 django_project/manage.py test app
