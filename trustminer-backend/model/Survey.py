from mongoengine import Document
from mongoengine import DateTimeField, StringField


class Survey(Document):
    participant_id = (StringField(required=True, unique=True),)
    last_updated = (DateTimeField(),)
    created = (DateTimeField(),)
