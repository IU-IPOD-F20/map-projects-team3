from django.apps import AppConfig
from django.db import connection


class Config(AppConfig):
    name = 'app'

    def ready(self):
        from .models import RecordType
        from . import settings
        if f'{self.name}_{RecordType.__name__.lower()}' in connection.introspection.table_names():
            settings.setup_record_types()
