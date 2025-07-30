import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.docId = token_decode.id;
        next();
    } catch (error) {
        console.log("AuthDoctor - JWT Verification Error:", error);
        res.json({ success: false, message: 'Not Authorized Login Again' });
    }
}

export default authDoctor;