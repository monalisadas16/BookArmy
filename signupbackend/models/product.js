const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannt exceed 100 characters']
    },
    price:{
        type: Number,
        required:[true, 'Please enter product price'],
        maxLength:[5,'Product name cannt exceed 5 characters'],
        default:0.0
    },
    description:{
        type: String,
        required:[true, 'Please enter product description'],
    },
    rating:{
        type: Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type: String,
        required:[true, 'Please select category for this product'],
        enum:{
            values:[
                'Fiction',
                'Children',
                'Romance',
                'Thirller',
                'Mystry',
                'Historical',
                'Young Adult',
                'Horror'
            ],
            message :'Please select correct category for product'  
        }
    }, 
    seller:{
        type:String,
        required:[true,'Please enter product seller']
    },

    stock:{
        type:Number,
        required: [true,'Please enter product stock'],
        maxlength:[5,'product name cannot exceed 5 characters'],
        default:0
    },

    numofReviws:{
        type:Number,
        defult:0
    },
    review:[
        {
            name:
            {
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('Product', productSchema)