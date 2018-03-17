var user1 = {
    "first_name": "Johann", "last_name": "Bach", "employee_id": "0011223", "email": "jbach@me.com", "date_created": new Date()}

var user2 = {
    "first_name": "Wolfgang", "last_name": "Mozart", "employee_id": "0000001", "email": "wmozart@me.com", "date_created": new Date()}

var user3 = {
    "first_name": "Ludwig", "last_name": "Beethoven", "employee_id": "0000002", "email": "lbeethoven@me.com", "date_created": new Date()}

var user4 = {
    "first_name": "Giuseppe", "last_name": "Verdi", "employee_id": "0000003", "email": "gverdi@me.com", "date_created": new Date()}

var user5 = {
    "first_name": "Frederic", "last_name": "Chopin", "employee_id": "0000004", "email": "fchopin@me.com", "date_created": new Date()}

db.users.insert(user1)
db.users.insert(user2)
db.users.insert(user3)
db.users.insert(user4)
db.users.insert(user5)

db.users.find()
db.users.find({"employee_id": "0011223"}, {"first_name": 1, "last_name": 1})
db.users.findOne()

db.users.update(
    {"employee_id": "0011223"}, 
    {
        "$set": {"email": "jbach@mail.com"}
    }
)
db.users.findOne()

db.users.remove({"employee_id": "0011223"})
db.users.find()

db.users.ensureIndex({"email": 1}, {"unique": true})
db.users.insert(
    {"email": "wmozart@me.com"}
)
db.users.insert(
    {"email": "lbeethoven@me.com"}
)

db.users.ensureIndex({"employee_id": 1}, {"unique": true, "sparse": true})

db.createCollection("roles", {"capped": true, "size": 10000})

