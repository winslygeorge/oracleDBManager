# oracleDBManager for Node JS with Express
Hello and Welcome to my OracleDbManager for node js with express server.
#### Here is the youtube tuitorial link for oracleDBManager -> 
## What is oracleDBManager?

OracleDBManager is a library that is built or developed to assit developers who are interested in developing fast projects that use oracle databases with node js access APIś.
OracleDBManager have made it easier for developers to set and access oracle databases faster with just a few lines of codes. 
If you are looking forward to using oracle databases with node js for faster development of projects then oracleDBManager is the way to go.

## Setup Oracle autonmous Database
 1. Install oracle instantclient on your machine. link-> https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/installing-oracle-database-instant-client.html#GUID-A0AAF57E-D74F-43F1-BD92-81D197EFE17F
 2. Create a cloud oracle Database i.e autonomous database . link-> https://docs.oracle.com/en-us/iaas/Content/Database/Tasks/adbcreating.htm
 3. Create a table in the database created . link-> https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/tasks_create_tables_model_data.html
 4. Download The databaseś connection wallet . link-> https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/cswgs/autonomous-connect-download-credentials.html
 
 ## Setup node js express server with required modules to set up for oracle database access
 
 1. Install the latest version of node js. Link-> https://nodejs.org/en/download/
 2. Setup express development Environment. link-> https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
 3. Install nodejs modules required for oracle express i.e npm i express oracledb express-oracle-session2 jquery
 
 ## Download oracleDBManager folder from github
 1. link-> https://github.com/winslygeorge/oracleDBManager
 2. Save the folder inside the folder of your project
 
 ### Now you are set and ready to start using oracleDBManager.
 
 ## To use oracleDBManager in the project
 1. Set the dbconfig.js file from the oracleDBManager folder to use your credidentials.
 2. open your app.js or index.js file.
 3. Require dbmanager.js class file from oracleDBManager folder example 
    -> const dbManager = require('./oracleDBManager/dbmanager') 
 4. Instantiate dnManager class example
    -> const db = new dbManager()
 
 ## Insert operation using dbmanager
 
 To perform insert operation to Oracle Database using oracleDBManager is as simple as 
 1. create an object that entails the fieldsname : value, tablename: ¨tablename¨ , operation : insert; example
 
        var student = {
       
         FIRST_NAME : "winslow", // fieldname : value
         LAST_NAME : "george", //fieldname : value
         COURSE : "Software Development", //fieldname : value
         operation: "insert", // operation : we are performing an insert operation
         tablename : "STUDENTS" // tablename : the name of the table
        }

2. use the db instance to run the query and return the results as simple as this without having to write the code for query and execution e.g
       
       db.run(student).then(function (feedback) {
        // feedback contains the results from the query.
        if (feedback.code === 200) {
            
            res.send("Ok")
        } else {
            
            res.send(feedback.result)
        }})

 #### Full code for insert
 
      const express = require('express')

      const app = express()

      const port = 3001

      const dbManager = require('./oracleDBManager/dbmanager')

      const db = new dbManager()

      app.get('/', (req, res) =>{ 

      var student = {
         FIRST_NAME : "winslow",
         LAST_NAME : "george",
         COURSE : "Software Development",
         operation: "insert",
         tablename : "STUDENTS"
         }
       db.run(student).then(function (feedback) {
        
           if (feedback.code === 200) {
            
           res.send("Ok")
        } else {
            
           res.send(feedback.result)
        }})})
       app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
 ## Select operation with oracleDBManager
 
 To perform select operation is a little different from insert operation.
 
 In select operation we don´t put fieldsname and values as ´fieldsname : value ´ as in insert operation insted we introduce a new variable called ´fields´ which will contain an array of the fieldsnames your are targeting and the ´wfield´ contains an array of the where clause fieldsname and the ´wvalue´ contains an array of where clause values .
 
 example code 
 
    var getStudent = {
     tablename = "students",
     operation = "select",
     fields = ["first_name", "last_name", "course"],
     wfield = ["course"],
     wvalue = ["Software Development"]
    }

to perform selection on all record without specification i.e
select * from *tablename

    var getStudent = {
     tablename = "students",
     operation = "select",
     fields = [],
    }
    
 #### Full code on select 
 // Feedback.results will return a json of records from the database query.
  
      const express = require('express')

      const app = express()

      const port = 3001

      const dbManager = require('./oracleDBManager/dbmanager')

      const db = new dbManager()

      app.get('/', (req, res) =>{ 

      var getStudent = {
       tablename = "students",
       operation = "select",
       fields = ["first_name", "last_name", "course"],
       wfield = ["course"],
       wvalue = ["Software Development"]
      }
       db.run(getStudent).then(function (feedback) {
        
           if (feedback.code === 200) {
         
           res.send(feedback.result)
        } else {
            
           res.send(feedback.result)
        }})})
       app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
### Update for oracleDBManager 

For updating records using oracleDBManager we use fieldsname : value to change value and then we add where and the val to select specific record to update or change. 

example code

      var updateorder = {
       operation: "update",
       tablename: "students",
       course : "Business Management",
       where: "first_name",
       val: "winslow",
      };

### Delete fo oracleDBManagement

For deleting records using oracleDBMnagement we just state the where field as wfield : fieldsname and where value as wvalue : value
example code 

    var deleteOrder = {
      tablename: "students",
      operation: "delete",
      wfield: "first_name",
      wvalue: "winslow",
    };
    
### Thank you guys and I hope you find OracleDBManager easy to use 
#### For any question you can comment on the comment section on my youtube tuitorial or even here...
