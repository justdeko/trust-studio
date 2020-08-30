from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from flask_mongoengine import MongoEngine
from marshmallow import Schema, fields, ValidationError

from repository.survey_repository import SurveyRepository

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["MONGODB_SETTINGS"] = {
    "db": "trust_studio",
    "host": "mongodb://db/trust_studio",
    "port": 27017,
}
mongo_db = MongoEngine()
mongo_db.init_app(app)


class UserEventSchema(Schema):
    event_id = fields.Str()
    type = fields.Str()
    timestamp = fields.DateTime()
    state = fields.Str()


class SurveySchema(Schema):
    survey_id = fields.Str()
    question3_attempts = fields.Int()
    question4_attempts = fields.Int()
    question1_duration = fields.Int()
    question2_duration = fields.Int()
    question3_duration = fields.Int()
    question4_duration = fields.Int()
    question5_duration = fields.Int()
    question3_solved = fields.Bool()
    question4_solved = fields.Bool()
    intro_duration = fields.Int()
    tour_duration = fields.Int()
    user_events = fields.List(fields.Nested(UserEventSchema))


@app.route("/helloworld", methods=["GET"])
def hello_world():
    return "Hello World!"


@app.route("/survey", methods=["POST"])
@cross_origin()
def post_analytics():
    survey_data = request.json
    print("this happened")
    print(survey_data)
    try:
        result = SurveySchema().load(survey_data)
        survey = SurveyRepository.add_or_update(result)
        return {"message": "Survey submitted", "survey_id": str(survey.id)}, 200
    except ValidationError as err:
        return {"message": err.messages}, 422


# run the command "docker run -p 27017:27017 mongo" beforehand for testing
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
