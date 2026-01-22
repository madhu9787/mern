const jwt=require('jsonwebtoken')
exports.protect=(req,res,next)=>{// middleware to protect routes
    const token=req.headers.authorization.split(' ')[1];// getting token from headers
    if(!token)// checking if token is present in headers
    {
        res.status(401).json({msg :"Not authorized"})
    }
    try{
       
         const decoded=jwt.verify(token,process.env.JWT_SECRET)// it will give us the payload we set while creating the token
         req.user=decoded// setting the user in request so that we can access it in the protected routes
         next()// proceed to the next middleware or route handler used only in middleware
    }
    catch(error){



        res.send("Invalid token")
    }
}