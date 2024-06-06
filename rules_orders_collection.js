db.createCollection("orders",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name_client", "order_ID","service_id","client_Email","country"],
            properties:{
                name:{
                        bsonType: "string",
                        description: "inform the name of the client"
                     },
                order_ID:{
                        bsonType: int,
                        description: "inform the id of the order"
                     },
                service_id:{
                         bsonType: "string",
                         description: "inform the id of the service"
                     },
                client_Email:{
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