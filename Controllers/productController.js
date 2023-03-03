//* genera un id random para nuestros productos, que no se repite
const { v4: uuid4 } = require('uuid')

let products = [];

const createProduct = (req, res) => {
    try {
        const {name, price, isAvailable, stock } = req.body

        products.push({
            id: uuid4(), 
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
        console.log(process.env.CLAVE_DE_ACCESO)
        const clave = req.headers.clave;
        console.log(clave)
        if(clave === process.env.CLAVE_DE_ACCESO){
            res.json({
                success: true,
                message: "Has obtenido la informacion de todos los productos de la base de datos",
                info: products
            })
        } else {
            throw new Error("Te pasaste de pillin, vuelve a intentarlo mas tarde!!!!")
        }
        
    } catch (error) {
        res.json({
            success: false, message: error.message
        })
    }
}

const editProduct = (req, res) => {
    try {
        //* capturar id que vienen en la url
        const id = req.params.productId;

        const {name, price, isAvailable, stock } = req.body;

        const productEdit = {
            name,
            price,
            isAvailable,
            stock
        };

        products = products.map((product) => {
            if(product.id === id){
                return productEdit;
            } else {
                return product
            }
        })

        res.json({
            success: true,
            message: "Producto editado",
            info: products
        })
    } catch (error) {
        res.json({success: false, message: error.message})
    }
    
}

const deleteProduct = (req, res) => {
    try {
        const id = req.params.productId;

        if(!products.find((product) => product.id !== id)){
            throw new Error("Producto no existe!!!")
        } else {
            products = products.filter((product) => product.id !== id); 
                res.json({
                    success: true,
                    message: "Has elimanado un producto",
                    info: products
                })
        }
    } catch (error) {
        res.json({success: false, message: error.message}) 
    }
}

module.exports = { createProduct, getProducts, editProduct, deleteProduct }