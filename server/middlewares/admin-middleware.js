const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = (req.user).isadmin;
    console.log(adminRole);
    if(!adminRole){
        return res
        .status(200)
        .json({message : "Access denied. User is not an admin"})
    }
    //if user is an admin proceed to the next middleware
    
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
