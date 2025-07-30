import jwt from "jsonwebtoken"

const authAdmin = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ success: false, message: "Not Authorized, Login Again" });
    }
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.adminId = token_decode.id;
        next();
    } catch (error) {
        console.log("AuthAdmin - JWT Verification Error:", error);
        res.json({ success: false, message: "Not Authorized, Login Again" })
    }
}

export default authAdmin;