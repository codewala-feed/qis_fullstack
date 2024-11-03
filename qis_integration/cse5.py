from pymongo import MongoClient

my_client = MongoClient("localhost", 27017)

my_db = my_client["cse5"]
collection = my_db["students"]
# -----------------------------------------------------------

# collection.insert_one({"name":"hari", "city":"ong"})
# collection.insert_many([
#     {"name":"anil", "city":"pdl"},
#     {"name":"sunil", "course":"python"}
# ])

# collection.update_many({"name":"sunil"},{"$set":{"name":"kumar"}})

collection.delete_one({"name":"anil"})

output = list(collection.find())
print(output)