start_backend:
	sudo systemctl start influxdb
	sudo systemctl start grafana-server
	python3 django_project/manage.py runserver

# Only test when dbSetup.py has been ran successfully
# and InfluxDB is activated
test:
	python3 django_project/manage.py test app

stop:
	sudo systemctl stop influxdb
	sudo systemctl stop grafana-server
