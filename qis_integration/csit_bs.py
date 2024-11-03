from pymongo import MongoClient

my_client = MongoClient("localhost", 27017)
# -----------------------------------------------------

my_db = my_client["csit_bs"]
my_collection = my_db["students"]

# creating documents in collection
my_collection.insert_one({"name":"hari", "city":"pdl"})

my_collection.insert_many([
    {"name":"siva", "city":"hyd"},
    {"name":"nick", "city":"ong"}
])

# updating documents
my_collection.update_one({"city":"ong"}, {"$set":{"city":"ongole"}})

# deleting documents
my_collection.delete_one({"studentId":1})

# reading documents in collection
output = list(my_collection.find())
print(output)