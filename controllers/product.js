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

// API Get a product
export const Read = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id });
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
    // res.json(products.find(item => item.id === +req.params.id));
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

// API Delete sản phẩm
 export const Remove = async (req, res) => {

    try {
        const product = await Product.findOneAndDelete({_id: req.params.id });
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
    // res.json(products.filter(item => item.id === +req.params.id));
 }

 export const Update = async (req, res) => {
    const condition = {_id: req.params.id };
    const update = req.body;
    const optional = { new : true}
    try {
        const product = await Product.findOneAndUpdate(condition,update,optional);
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
    // res.json(products.map(item => item.id == req.params.id ? req.body : item));
 }