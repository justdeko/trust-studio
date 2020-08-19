from flask import Flask
from flask import request
from flask_mongoengine import MongoEngine

from repository.survey_repository import SurveyRepository

app = Flask(__name__)
mongo_db = MongoEngine()
mongo_db.init_app(app)


@app.route("/startsession", methods=["GET"])
def start_session():
    return "Hello World!"


@app.route("/survey", methods=["POST"])
def post_analytics():
    survey_data = request.json
    added = SurveyRepository.add_or_update(survey_data)
    if added:
        message = "Survey data created"
    else:
        message = "Survey data updated"
    return {"message": message}, 200


if __name__ == "__main__":
    app.run()
