used to create package.json file
   npm init -y  
to install express mpdule for api creation
   npm install express

   use userdetails
   show dbs
   db  
   db.createCollection("users")
   show collections
for inserting data there are 3 way
   insert()
   insertOne()
   insertMany()

   db.users.insert([{"name":"nikita","age":22,"place":"pune"},{"name":"siddhi","age":22,"place":"shd"},{"name":"anvita","age":24,"place":"mumbai"}])

   db.users.find()

   db.users.find({"place":"pune"})

   db.users.remove({"place":"pune"})

   db.users.update({"place":"mumbai"},{$set:{"name":"nikita","age":22}})

for mongodb connection with node js required library
   npm i mongoose