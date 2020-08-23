from model.Survey import Survey


class SurveyRepository:
    @staticmethod
    def add_or_update(participant_data):
        entity = Survey.objects(participant_id=participant_data["id"]).first
        if entity is None:
            entity = Survey(participant_data)
        entity.save()
        return entity
