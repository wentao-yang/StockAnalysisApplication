from django.test import TestCase
from . import urls, views

class TestModels(TestCase):
    def test_urls(self):
        self.assertGreaterEqual(len(urls.urlpatterns), 4)
    def test_views(self):
        self.assertGreater(len(views.database_name), 0)