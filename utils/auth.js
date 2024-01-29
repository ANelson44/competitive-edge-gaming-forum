const withPostAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.locals.canPost = false;
    } else {
      res.locals.canPost = true;
    }
  
    next();
  };
  
  const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  module.exports = {withAuth ,withPostAuth};
