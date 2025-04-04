# People Project
- MVC structure
- MongoDB with Mongoose (built in persnal Docker container)
- Frontend with ejs library using API call

### DIY 1  (CREATE)
1. Create a folder that contains an app.js file
2. Add to the folder a model named personModel.js that contains the following fields: first name, family name, city, country, salary
     - Database is set up to **Docker container** with official mongodb image.
     - **db**: 'Webapp', **collection**: 'People'
3. Add a new function that insert person to db
     ```shell
     curl -X POST http://localhost:3000/api/v1/people/addPerson \
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

### DIY 2 (RETRIEVE)
1. Add a new function to app.js to retrieve the data from the db
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products
     - **localhost:3000/api/v1/people**
     ```shell
     % curl http://localhost:3000/api/v1/people
     [{"_id":"67edec2e3512d00490300589","firstName":"Yihwan","familyName":"Kim","city":"Vancouver","country":"Canada","salary":100000},{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000},{"_id":"67edf4403512d0049030058b","firstName":"Carlos","familyName":"Ramirez","city":"Mexico City","country":"Mexico","salary":75000},{"_id":"67edf4403512d0049030058c","firstName":"Ava","familyName":"Smith","city":"New York","country":"USA","salary":92000},{"_id":"67ef1ef633fe304b88350124","firstName":"Ian","familyName":"Park","city":"Vancouver","country":"Canada","salary":90000,"__v":0}]
     ```

### DIY 3 (RETRIEVE)
1. Add a new function to app.js to retrieve the person by _id from the db
     - ***getPersonById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select an id)
     ```shell
     % curl -X GET http://localhost:3000/api/v1/people/find/67ef1ef633fe304b88350124
     ```

### DIY 4 (UPDATE)
1. Add a new function to app.js to update the person by _id
     - ***updateSalaryById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select an id and run from postman patch request and update the salary to 10000 for id selected)
     ```shell
     % curl -X PATCH http://localhost:3000/api/v1/people/updateSalary/67ef1ef633fe304b88350124 \
     -H "Content-Type: application/json" \
     -d '{"salary": 10000}'
     ```

### DIY 5 (DELETE)
1. Add a new function to app.js to delete person by _id
     - ***deletePersonById()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/products/_ _ _ _ _ _ _ _ _ _ (select an id and run from postman delete request and delete the selected person)
     ```shell
     % curl -X DELETE http://localhost:3000/api/v1/products/67ef1f219f1570e0662f660f \
     -H "Content-Type: application/json" \
     -d '{"salary": 10000}'
     ```

### DIY 6 (FILTER)
1. Update the function from exercise 2 and to filter data from db.
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all person with salary 1000
     ```shell
     % curl -X GET 'http://localhost:3000/api/v1/people?salary=100000'
     {"status":"success","data":[{"_id":"67edec2e3512d00490300589","firstName":"Yihwan","familyName":"Kim","city":"Vancouver","country":"Canada","salary":100000}]}
     ```
3. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all person with salary firstname Mike
     ```shell
     % curl -X GET 'http://localhost:3000/api/v1/people?firstName=Ian'   
     {"status":"success","data":[{"_id":"67ef1ef633fe304b88350124","firstName":"Ian","familyName":"Park","city":"Vancouver","country":"Canada","salary":10000,"__v":0}]}
     ```

### DIY 7 (FILTER)
1. Update the function from exercise 6 and to advance filter data from db.
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all persons with salary above 1000
     ```shell
     % curl "http://localhost:3000/api/v1/people?salary_gt=80000"
     {"status":"success","data":[{"_id":"67edec2e3512d00490300589","firstName":"Yihwan","familyName":"Kim","city":"Vancouver","country":"Canada","salary":100000},{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000},{"_id":"67edf4403512d0049030058c","firstName":"Ava","familyName":"Smith","city":"New York","country":"USA","salary":92000}]}
     ```
3. Rerun the application and navigate to localhost:3000/api/v1/persons/ and add parameters to the query that retrieve all persons with salary below 1000
     ```shell
     % curl "http://localhost:3000/api/v1/people?salary_lt=100000"
     {"status":"success","data":[{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000},{"_id":"67edf4403512d0049030058b","firstName":"Carlos","familyName":"Ramirez","city":"Mexico City","country":"Mexico","salary":75000},{"_id":"67edf4403512d0049030058c","firstName":"Ava","familyName":"Smith","city":"New York","country":"USA","salary":92000},{"_id":"67ef1ef633fe304b88350124","firstName":"Ian","familyName":"Park","city":"Vancouver","country":"Canada","salary":10000,"__v":0}]}
     ```
4. Rerun the application and navigate to localhost:3000/api/v1/persons/ and add parameters to the query that retrieve all persons with salary between 1000 to 2000
     ```shell
     % curl "http://localhost:3000/api/v1/people?salary_gt=80000&salary_lt=90000"
     {"status":"success","data":[{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000}]}
     ```

### DIY 8 (SORT)
1. Update the function from exercise 6 and to and add the option to sort.
     - ***getAllPeople()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/persons/ and retrieve all persons sorting according to salary
     ```shell
     % curl "http://localhost:3000/api/v1/people?sort=salary"
     {"status":"success","data":[{"_id":"67ef1ef633fe304b88350124","firstName":"Ian","familyName":"Park","city":"Vancouver","country":"Canada","salary":10000,"__v":0},{"_id":"67edf4403512d0049030058b","firstName":"Carlos","familyName":"Ramirez","city":"Mexico City","country":"Mexico","salary":75000},{"_id":"67edf4403512d0049030058a","firstName":"Emily","familyName":"Wong","city":"Toronto","country":"Canada","salary":85000},{"_id":"67edf4403512d0049030058c","firstName":"Ava","familyName":"Smith","city":"New York","country":"USA","salary":92000},{"_id":"67edec2e3512d00490300589","firstName":"Yihwan","familyName":"Kim","city":"Vancouver","country":"Canada","salary":100000}]}

     % curl "http://localhost:3000/api/v1/people?sort=-salary"
     $ curl "http://localhost:3000/api/v1/people?sort=country,salary"
     ```

### DIY 9 (GROUP)
1. Add a function that displays statistics about people. The function will return the average salary, the
minimum salary and the maximum salary
     - ***getStatistics()*** in personController.js
2. Rerun the application and navigate to localhost:3000/api/v1/get/statistic/ and retrieve the
average, max salary and max salary
     ```shell
     % curl "http://localhost:3000/api/v1/people/statistic"
     {"status":"success","data":{"averageSalary":72400,"minSalary":10000,"maxSalary":100000}}
     ```