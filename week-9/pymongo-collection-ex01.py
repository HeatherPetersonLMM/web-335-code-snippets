from pymongo import MongoClient
import pprint

client = MongoClient('localhost', 27017)

db = client.web335

pprint.pprint(db.users.find_one())