db.createCollection("service",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["service_name", "price"],
            properties:{
                service_name:{
                        bsonType: "string",
                        description: "inform the name of the service"
                     },
                price:{
                        bsonType: "string",
                        description: "inform the price of the order"
                     },
            }
        }
    }
})