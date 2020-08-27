from model.Survey import Survey


class SurveyRepository:
    @staticmethod
    def add_or_update(participant_data):
        print(participant_data)
        survey_id = participant_data.get("survey_id")
        if survey_id is not None:
            entity = Survey.objects(id=survey_id).first()
        else:
            entity = None
        if entity is None:
            if survey_id is not None:
                del participant_data["survey_id"]
            entity = Survey(**participant_data)
        entity.save()
        return entity
