from django.contrib.auth.models import User
from django.db import models
from django.db.models import CASCADE, ForeignKey, Model


# from enum import IntEnum, unique
# @unique
# class RecordType(IntEnum):
#     ASSET = 1
#     LIABILITY = 2


class RecordType(Model):
    name = models.CharField(max_length=10)

    def __repr__(self):
        return self.name


class Record(Model):
    user = ForeignKey(User, on_delete=CASCADE)
    date_time = models.DateTimeField('date & time')
    name = models.CharField(max_length=200)
    # type_ = models.PositiveSmallIntegerField('record type')
    type = ForeignKey(RecordType, on_delete=CASCADE)
    amount = models.PositiveIntegerField('amount')

    def __repr__(self):
        return f'Record({self.user_id}, {self.date_time}, {self.name}, {self.type}, {self.amount})'
