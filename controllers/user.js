import User from "../models/user"

// API list tài khoản
export const List = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không list được tài khoản ra"
        })
    }
} 

// API đăng kí tài khoản
export const Creat = async (req, res) =>{
    try {
        const user = await new User (req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Đăng kí tài khoản không thành công"
        })
    }
}