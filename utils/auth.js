const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.locals.canPost = false;
    } else {
      res.locals.canPost = true;
    }
  
    next();
  };
  
  module.exports = withAuth;
