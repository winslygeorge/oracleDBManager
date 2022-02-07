module.exports = {

//The username used to create the oracle autonomous database 
    user: process.env.username || "<<username>>", 
    
//Password set to access the database 
    password: process.env.Password || "<<database password>>",
    
//The connection string of choice from tnsnames.ora file
    connectionString: process.env.conString|| "<<db connetion string>>"
}