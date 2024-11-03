from pymongo import MongoClient
my_client = MongoClient("localhost", 27017)
# -----------------------------------------------

my_db = my_client["ece3"] # create/use database
my_collection = my_db["students"] # create/use collection

# --------------create documents-----------------
my_collection.insert_one({"name":"hari", "city":"pdl"})
my_collection.insert_many([
    {"name":"anil", "city":"kvp"},
    {"name":"nick", "city":"ong"}
])

# -----------------update documents-----------------
my_collection.update_one({'city': 'ong'},{"$set":{'city': 'ongole'}})

# -----------------delete documents-----------------
my_collection.delete_many({'name': 'hari'})

# read documents
output = list(my_collection.find())
print(output)