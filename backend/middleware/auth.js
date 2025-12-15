import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next)=>{
    const token = req.headers.token;

    if(!token){
        return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = { id: token_decode.id };
        next();
    } catch (error) {
        return res.status(401).json({
      success: false,
      message: "Not authorized",
    });
    }
}

export default authMiddleware;
