
### DIY 1  
1. Create a folder that contains an app.js file
2. Add to the folder a model named PersonModel.js that contains the following fields: first name, family name, city, country, salary
     - Database is set up to **Docker container** with official mongodb image.
     - **db**: 'Webapp', **collection**: 'People'
3. Add a new function that insert person to db
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
     - ***getAllPeople()*** in personModel.js
2. Rerun the application and navigate to localhost:3000/api/v1/products
     - **localhost:3000/api/v1/people**
