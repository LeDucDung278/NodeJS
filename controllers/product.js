import mongoose from "mongoose";
// fake data
// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"}
// ];

// khoi tao model
const Product = mongoose.model('Product', {name: String})

// API List sản phẩm
export const List = async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Loi nhe"
        })
    }
}

export const Read =  (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
 }

// API thêm sản phẩm
 export const Creat = async (req, res) => {
     try {
         const product = await new Product (req.body).save();
         res.json(product)
     } catch (error) {
         res.status(400).json({
             message: "khong them duoc san pham"
         })
     }
 }

 export const Remove = (req, res) => {
    res.json(products.filter(item => item.id === +req.params.id));
 }

 export const Update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
 }