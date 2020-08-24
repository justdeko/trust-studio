from mongoengine import (
    DateTimeField,
    IntField,
    EmbeddedDocument,
    StringField,
    EmbeddedDocumentListField,
    BooleanField,
)
from mongoengine import Document


class UserEvent(EmbeddedDocument):
    event_id = StringField()
    type = StringField()
    timestamp = DateTimeField()
    state = StringField()


class Survey(Document):
    question3_attempts = IntField()
    question4_attempts = IntField()
    question1_duration = IntField()
    question2_duration = IntField()
    question3_duration = IntField()
    question4_duration = IntField()
    question5_duration = IntField()
    question3_solved = BooleanField()
    question4_solved = BooleanField()
    intro_duration = IntField()
    tour_duration = IntField()
    user_events = EmbeddedDocumentListField(UserEvent)
