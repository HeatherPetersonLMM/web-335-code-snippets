from pymongo import MongoClient
import pprint
import datetime 

client = MongoClient('localhost', 27017)

db = client.web335

db.users.update_one(
    {"employee_id": "0000008"}, 
    {
        "$set": {
            "email": "cdebussy001@me.com"
        }
    }
)

pprint.pprint(db.users.find_one({"employee_id": "0000008"}))