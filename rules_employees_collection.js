db.createCollection("employees",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name", "userId","contact","adress","country"],
            properties:{
                name:{
                        bsonType: "string",
                        description: "inform the name of the employees"
                     },
                userId:{
                        bsonType: "int",
                        description: "inform the id of the employees"
                     },
                contact:{
                         bsonType: "string",
                         description: "inform the phone number of the employees"
                     },
                adress:{
                        bsonType: "string",
                        description: "inform the adress of the employees"
                    },
                country:{
                        bsonType: "string",
                        description: "inform the country of the employees"
                    },
            }
        }
    }
})