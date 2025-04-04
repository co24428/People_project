
### DIY 1  
1. Create a folder that contains an app.js file
2. Add to the folder a model named personModel.js that contains the following fields: first name, family name, city, country, salary
     - Database is set up to **Docker container** with official mongodb image.
     - **db**: 'Webapp', **collection**: 'People'
3. Add a new function that insert person to db
     ```shell
     curl -X POST http://localhost:3000/api/v1/people/add-person \
     -H "Content-Type: application/json" \
     -d '{
     "firstName": "Ian",
     "familyName": "Park",
     "city": "Vancouver",
     "country": "Canada",
     "salary": 90000
     }'
     ```
4. Run the application and insert 3 persons to db
     ```shell
     db.People.insertMany([
     { 'firstName': 'Emily', 'familyName': 'Wong', 'city': 'Toronto', 'country': 'Canada', 'salary': 85000 },
     { 'firstName': 'Carlos', 'familyName': 'Ramirez', 'city': 'Mexico City', 'country': 'Mexico', 'salary': 75000 },
     { 'firstName': 'Ava', 'familyName': 'Smith', 'city': 'New York', 'country': 'USA', 'salary': 92000 }
     ])
     ```
5. Check in mongodb that the entries have been entered

### DIY 2
1. Add a new function to app.js to retrieve the data from the db
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products
     - **localhost:3000/api/v1/people**
     ```
     % curl http://localhost:3000/api/v1/people
     [{"_id":"67edec2e3512d00490300589","firstName":"Yihwan","familyName":"Kim","city":"Vancouver","country":"Canada","salary":100000},{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000},{"_id":"67edf4403512d0049030058b","firstName":"Carlos","familyName":"Ramirez","city":"Mexico City","country":"Mexico","salary":75000},{"_id":"67edf4403512d0049030058c","firstName":"Ava","familyName":"Smith","city":"New York","country":"USA","salary":92000},{"_id":"67ef1ef633fe304b88350124","firstName":"Ian","familyName":"Park","city":"Vancouver","country":"Canada","salary":90000,"__v":0}]
     ```

### DIY 3
1. Add a new function to app.js to retrieve the person by _id from the db
     - ***getPersonById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select an id)
     ```
     % curl -X GET http://localhost:3000/api/v1/people/find/67ef1ef633fe304b88350124
     ```

### DIY 4
1. Add a new function to app.js to update the person by _id
     - ***updateSalaryById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select an id and run from postman patch request and update the salary to 10000 for id selected)
     ```
     % curl -X PATCH http://localhost:3000/api/v1/people/updateSalary/67ef1ef633fe304b88350124 \
     -H "Content-Type: application/json" \
     -d '{"salary": 10000}'
     ```

### DIY 5
1. Add a new function to app.js to delete person by _id
     - ***deletePersonById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select
an id and run from postman delete request and delete the selected person)
     ```
     % curl -X DELETE http://localhost:3000/api/v1/products/67ef1f219f1570e0662f660f \
     -H "Content-Type: application/json" \
     -d '{"salary": 10000}'
     ```

### DIY 6
1. Update the function from exercise 2 and to filter data from db.
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all person
with salary 1000
3. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all person
with salary firstname Mike