1.generate package.json
2.create express server
3.Install mongoose and connect to MongoDB server
       
        REST API ----MongoDB native driver --->DB server
        REST API ----Mongoose ODM tool --->DB server

4.Build API
   -CRUD operations
5.create schema and Model of the Resource (API)

6.create API and define routes

###User Authentication
        -submit credentials and get token


        req-----> public routes (By anyone)
        
        req---> middleware ----> Protected routes (By authenticated users only)