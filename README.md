## How to use node.js server with mongodb

First things first.
```
npm install
```

Time to test a Server
```
node server.js
```

Stop the server
```
pkill node
```
In mongodb container (as CREATE DATABASE):
```
use todolist
```


Now, time to find it in mongo:
```
curl localhost:4201/todos
```

Show documents/collections
```
show collections
```

All
```
db.todolists.find()
```
Delete all documents
```
db.todolists.deleteMany({});
```
API calls

Create a first todo item
```
curl -H "Content-Type: application/json" -X POST -d '{"id":"1","name":"oleg_test","complete":"false"}' localhost:4201/todos 
```
Get all todos
```
curl -H "Content-Type: application/json" localhost:4201/todos
```
Get specific one
```
curl -H "Content-Type: application/json" localhost:4201/todos/5cce9dc8a3f121270d8e655b
```
Get by user name
```
curl -H "Content-Type: application/json" localhost:4201/todos/names/oleg_test
```
Update the Todo item
```
curl -H "Content-Type: application/json" -X PUT -d '{"id":"1","name":"oleg_test","complete":"true"}' localhost:4201/todos/5cce9ce32313ae235d15f4b4
```
Delete the Todo item
```
curl -H "Content-Type: application/json" -X DELETE localhost:4201/todos/5cce9da71e053e269a1e78fc
```
Get todos by state
```
 curl -H "Content-Type: application/json" localhost:4201/todos/states/false
```
Get a count of documents by state
```
curl -H "Content-Type: application/json" localhost:4201/todos/counters/false
```
