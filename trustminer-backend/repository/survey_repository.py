from model.Survey import Survey


class SurveyRepository:
    @staticmethod
    def add_or_update(participant_data):
        entity = Survey.objects(participant_id=participant_data["id"]).first
        new = False
        if entity is None:
            new = True
            entity = Survey(participant_data)
        entity.save()
        return new
