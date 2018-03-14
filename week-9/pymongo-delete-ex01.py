from pymongo import MongoClient
import pprint
import datetime 

client = MongoClient('localhost', 27017)

db = client.web335

result = db.users.delete_one({
    "employee_id": "0000008"
})
print(result) 

pprint.pprint(db.users.find_one({"employee_id": "0000008"}))