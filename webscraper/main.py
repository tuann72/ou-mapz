import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from scraper import intialize_scraper


def main():
    cred = credentials.Certificate("")
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    data = intialize_scraper()

    db.collection("scraped_data").add(data)


if __name__ == "__main__":
    main()
