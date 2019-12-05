
<img src="icon.png" align="right" />


# Government Funding JSON API [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

I Built this project to help people understand funding in their state as well as their respected agencies. This project is intended for all of the CRUD compatitbilities as well as inform people about their local congressional justification on the Budget. Another big reason I created this API was I wanted the public to know where there money is going and have all data to be as transparent as possible. 

### Live URL: [https://governmentfundingapi.herokuapp.com/state/]
### Live URL: [https://frontendapi-c6jjpsx8x.now.sh/]

## Installation Instructions

1. clone this repository
```
fork
then
git clone https://github.com/nickmckenney/Building-a-JSON-API
```
2. change into the directory
```
cd <Your Directory>
```
3. install dependencies
```
npm install
```
4. run the project
```
npm start
```
5. Your have a clone copy!

## How I found My API
#### I always had a very strong interest for government and politics as well as current events. This API took a step towards that and incorporated financial information and budgeting. I choose this API because of the documentation as well which could be found here [https://api.usaspending.gov/]

## Steps to get API to work

1. Connect to database & test connection (Intial part was using a local server and was not deployed to heroku. I used Mongoose,mongodb, and express to get the backend API to work.
2. Create an Index.js with orangized Routes
3. Create schemas and seed database
4. Make API routes and test all endpoints
5. Develop bigger and better features

## Routes/Express

 ### The Below exsamples are showing how to use CRUD
   
   ### READING
   
  * Retrieve a list of all states
  ```
     GET https://governmentfundingapi.herokuapp.com/state
   ```
   ### This was intended for retriving the amount of Money each state receives. An exsample of this would be something like the below JSON data with
   
  
 ```
         
"_id": "5dcde967836a2a0004aafb45",
"code": "ND",
"name": "North Dakota",
"amount": 71588296679.46,
"fips": "38",
"__v": 0

#
``` 

        Read a congressional justification 
        
 
        GET https://governmentfundingapi.herokuapp.com/congress
      
        
         * Read the Grants and Contracts
       
        GET https://governmentfundingapi.herokuapp.com/AwardId
       
        
          * Read the Contractors and the spending information on them
     
        GET https://governmentfundingapi.herokuapp.com/AwardSpending
				
		
     
  * Update a states information
  ```
  POST https://governmentfundingapi.herokuapp.com/state/<STATENAME>
  ```
### The reason for updating a states information is that every so often the budget changes for each state and new amounts will be needed to change that
       
  * Delete an entire State
    * DELETE https://governmentfundingapi.herokuapp.com/state/<STATENAME>

## What Helped Me Create This Project Was

  - Node
     - Helps Javascript run a server with HTTP Requests
  - Express
     - Part of Node.js that allows for Routers to work which are the paths to the URL
  - MongoDB
     - A non-relational database that works with Node.js and helped create a functional local Host
  - Mongoose
     - Worked well with seeding and Schemas. Helped pull data from JSON and parse through it
  - Body-Parser
     - Part of Node.js that help with parsing middleware

### What I can take away from this API project
##### I learned a very value lesson in the project which is learning how important my commits are and learn to use proper msg syntax for each commit I do so that in the future if anything goes wrong I will know where to revert to.

