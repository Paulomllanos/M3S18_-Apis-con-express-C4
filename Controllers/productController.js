
let products = [];

const createProduct = (req, res) => {
    try {
        const {name, price, isAvailable, stock } = req.body

        products.push({
            name,
            price,
            isAvailable,
            stock
        });

        res.json({
            success: true,
            message: "Has creado un producto!!!"
        })

    } catch (error) {
        res.json({
            success: false, message: error.message
        })
    }
}

const getProducts = (req, res) => {
    try {
        const result = products.map((product) => product)

        res.json({
            success: true,
            message: result
        })
    } catch (error) {
        res.json({
            success: false, message: error.message
        })
    }
}

module.exports = { createProduct, getProducts }