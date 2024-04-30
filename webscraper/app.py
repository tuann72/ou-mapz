from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from scraper import intialize_scraper


flaskApp = Flask(__name__)


@flaskApp.route("/", methods=["GET"])
def main():
    cred = credentials.Certificate("webscraper/ou-mapz-markers.json")
    app = firebase_admin.initialize_app(cred)

    db = firestore.client()

    data = intialize_scraper()

    for i in data:
        db.collection("Engage Data").add(i)

    # print(data)

    return "data uploaded"


if __name__ == "__main__":
    flaskApp.run(port=8000, debug=True)
