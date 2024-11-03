from pymongo import MongoClient

my_client = MongoClient("localhost", 27017)

my_db = my_client["cse3"]
students = my_db["students"]

# students.insert_one({"name":"ravi", "course":"python"})
# students.insert_many([
#     {"name":"anil", "course":"flask"},
#     {"name":"kumar", "course":"sql"}
# ])

# students.delete_one({"name":"anil"})

students.update_many({"name":"kumar"}, {"$set":{"name":"raju"}})

output = list(students.find())
for data in range(len(output)):
    print(output[data])