from django.apps import AppConfig


class Config(AppConfig):
    name = 'app'

    def ready(self):
        from . import settings
        settings.setup()
