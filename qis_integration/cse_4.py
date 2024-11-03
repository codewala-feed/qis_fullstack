

from pymongo import MongoClient

my_client = MongoClient("localhost", 27017)
my_db = my_client["cse4"]
my_collection = my_db["students"]

# # inserting documents in collection
# my_collection.insert_one({"name":"nick", "city":"pdl"})
# my_collection.insert_many([
#     {"name":"charan", "city":"kvp"},
#     {"name":"hari", "city":"ong"}
# ])

# # updating documents in collection
# my_collection.update_many({"city":"ong"}, {"$set":{"city":"ongole"}})

# #deleting documents in collection
# my_collection.delete_one({"name":"charan"})

#reading collection
output = list(my_collection.find())
print(output)