module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next(); // Proceed to the next middleware or route handler
        }
        res.redirect('/admin/login'); // Redirect to the login page if not authenticated
    }
};