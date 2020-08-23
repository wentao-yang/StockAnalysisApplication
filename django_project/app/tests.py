from django.test import TestCase
from . import urls, views

class TestModels(TestCase):
    '''
    Please only test after running dbSetup.py successfully. To run these
    tests, go to the directory that contains makefile and use this command:

    make test
    '''
    def test_urls(self): # Tests routing
        self.assertGreaterEqual(len(urls.urlpatterns), 4)
    def test_views(self): # Tests database name
        self.assertGreater(len(views.database_name), 0)
    def test_db_1(self): # Tests number of stocks
        self.assertEqual(len(views.client.query('select * from StockPrices limit 1').raw['series'][0]['columns'][1:]), 17)
    def test_db_2(self): # Tests individual values
        total_count = 0 #
        contains_zero = False

        stock_symbols = views.client.query('select * from StockPrices limit 1').raw['series'][0]['columns'][1:]
        for i in stock_symbols:
            query_string = 'select ' + i + ' from StockPrices'
            raw_data = views.client.query(query_string).raw['series'][0]['values']

            for j in raw_data:
                total_count += 1
                if (j[1] <= 0):
                    contains_zero = True
                    break
            if (contains_zero):
                break
        self.assertEqual(total_count, 4250)
        self.assertEqual(contains_zero, False)
