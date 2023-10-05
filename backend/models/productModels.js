const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        maxLength: [8, "Price can't exceed 8 Characters limit"]
    },
    productRatings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    }],
    category: {
        type: String,

    },
    Stock: {
        type: Number,
        maxLength: [100, "Stock Limit Full"],
        default: 1
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "user",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);