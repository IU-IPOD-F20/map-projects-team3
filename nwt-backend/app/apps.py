from django.apps import AppConfig

from . import settings


def get_create_rt_id(name: str) -> int:
    from .models import RecordType
    rts = RecordType.objects.filter(name=name)
    if len(rts) == 0:
        rt = RecordType(name=name)
        rt.save()
    else:
        rt = rts[0]
    return rt.id


class Config(AppConfig):
    name = 'app'

    def ready(self):
        settings.RECORD_TYPE_ASSET_ID = get_create_rt_id(settings.RECORD_TYPE_ASSET_NAME)
        settings.RECORD_TYPE_LIABILITY_ID = get_create_rt_id(settings.RECORD_TYPE_LIABILITY_NAME)
