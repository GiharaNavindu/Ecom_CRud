const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    deafalt:1
                }
            }
        ],
        amount:{
            type:Number,
            required:true
        },
        address:{
            type:Object,
            required:true
        },
        Status:{
            type:String,
            default:"pending"
        }
    },

    {timestamps:true}
);



module.exports = MongoServerClosedError.model("Order",OrderSchema);
