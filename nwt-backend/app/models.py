from itertools import chain

from django.contrib.auth.models import User
from django.db import models
from django.db.models import CASCADE, ForeignKey, Model


class PrintableModel(Model):
    """
    https://stackoverflow.com/questions/21925671
    """

    def __str__(self):
        return str(self.to_dict())

    def to_dict(self, *, exclude: set[str] = set()):
        opts = self._meta
        data = {}
        for f in chain(opts.concrete_fields, opts.private_fields):
            if f.name not in exclude:
                data[f.name] = f.value_from_object(self)
        for f in opts.many_to_many:
            if f.name not in exclude:
                data[f.name] = [i.id for i in f.value_from_object(self)]
        return data

    class Meta:
        abstract = True


class RecordType(PrintableModel):
    name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name


class Record(PrintableModel):
    user = ForeignKey(User, on_delete=CASCADE)
    date_time = models.DateTimeField('date & time')
    name = models.CharField(max_length=200)
    # type_ = models.PositiveSmallIntegerField('record type')
    type = ForeignKey(RecordType, on_delete=CASCADE)
    amount = models.PositiveIntegerField('amount')

    def __str__(self):
        return f'Record({self.user_id}, {self.date_time}, {self.name}, {self.type}, {self.amount})'
