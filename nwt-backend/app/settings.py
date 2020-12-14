from common.biject import Bijection

PAGE_HOME = 'home/'
PAGE_LOGIN = 'login/'
PAGE_LOGOUT = 'logout/'
PAGE_AFTER_LOG = PAGE_HOME

RECORD_TYPE_ASSET_NAME = 'asset'
RECORD_TYPE_ASSET_ID = None

RECORD_TYPE_LIABILITY_NAME = 'liability'
RECORD_TYPE_LIABILITY_ID = None

RecordTypeConverter: Bijection[int, str] = Bijection()


def setup_record_types():
    global RECORD_TYPE_ASSET_ID, RECORD_TYPE_LIABILITY_ID
    from .models import RecordType

    def create_record_type(name: str) -> int:
        rts = RecordType.objects.filter(name=name)
        if len(rts) == 0:
            rt = RecordType(name=name)
            rt.save()
        else:
            rt = rts[0]

        RecordTypeConverter.add(rt.id, name)
        return rt.id

    RECORD_TYPE_ASSET_ID = create_record_type(RECORD_TYPE_ASSET_NAME)
    RECORD_TYPE_LIABILITY_ID = create_record_type(RECORD_TYPE_LIABILITY_NAME)
