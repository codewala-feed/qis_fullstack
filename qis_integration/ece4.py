from pymongo import MongoClient
my_client = MongoClient("localhost", 27017)
# ------------------------------------------
my_db = my_client["ece4"] #create/use database
my_collection = my_db["students"] # create/use collection

# # create documents
# my_collection.insert_one({"name":"anil", "city":"ong"})
# my_collection.insert_many([
#     {"name":"hari", "city":"kvp"},
#     {"name":"nick", "city":"pdl"}
# ])

# # update document
# my_collection.update_one({'city':'ong'}, {"$set":{'city': 'ongole'}})

# delete document
my_collection.delete_one({ 'name': 'hari'})

# read documents
output = list(my_collection.find())
print(output)