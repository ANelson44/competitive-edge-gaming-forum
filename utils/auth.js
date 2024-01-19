const withAuth = (req, res, next) => {

    // if not logged in can view only
    if (!req.session.logged_in) {
        res.locals.canPost = false;
        
    } else {
        // only allow post if logged in
        res.locals.canPost = true;
    }

    next();
}