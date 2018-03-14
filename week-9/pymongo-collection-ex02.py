from pymongo import MongoClient
import pprint

client = MongoClient('localhost', 27017)

db = client.web335

employee_id = "0000002"
pprint.pprint(db.users.find_one({"employee_id": employee_id}))