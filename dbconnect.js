const  dbcon = require('oracledb')
const config = require('./dbconfig')
//const dbcon = db()
let con

dbcon.outFormat = dbcon.OUT_FORMAT_OBJECT;
async function getConnection(){

    try{

        con   = await dbcon.getConnection(config)
      
      
          console.log('connection was successful')

          return con;
      }catch(e){
      
          console.error(e);
      }
         
return null;
}

module.exports =getConnection()