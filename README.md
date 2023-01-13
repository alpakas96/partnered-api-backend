
# John's Harry Potter API

## Make sure to install: 

- Node
- MongoDB and Mongoose
- Express


### Seeding

lib/db/seed.js takes the data in
`houses.json` and `characters.json` and seeds it into the database.

characters are a subdocument of houses in the database.


### API

These routes are in index.js:

1. A root route (`'/'`) that redirects to the houses route.

2. A houses list route (`'/house'`) that returns a JSON array of all the houses
   in the database.

3. A house detail route (`'/house/5a05e2b252f721a3cf2ea33f'`) that returns the
   document for the house in the url parameter.

4. A house create route (`'/house'`) that a user could send a `POST` request to
   in order to create a new house.



