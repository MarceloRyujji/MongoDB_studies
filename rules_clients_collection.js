db.createCollection("clients",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name", "ID","Email","Phone_Number","country"],
            properties:{
                name:{
                        bsonType: "string",
                        description: "inform the name of the client"
                     },
                ID:{
                        bsonType: "int",
                        description: "inform the id of the order"
                     },
                Email:{
                         bsonType: "string",
                         description: "inform the id of the service"
                     },
                Phone_Number:{
                        bsonType: "string",
                        description: "inform the Email of the client"
                    },
                country:{
                        bsonType: "string",
                        description: "inform the country of the client"
                    },
            }
        }
    }
})