const mongoose = require( 'mongoose')
require('dotenv').config();
const users = require ('./data/users')
const products = require ('./data/products')
const User = require ('./server/models/user.model')
const Product = require ('./server/models/product.model')
const Order = require ('./server/models/order.model')
const connectDB = require('./server/config/db')


connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Datos importados!')
    process.exit()

} catch (error) {
    console.error(`${error}`)
    process.exit(1)
}
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Datos destruidos!')
        process.exit()
} catch (error) {
    console.error(`${error}`)
    process.exit(1)
}
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}