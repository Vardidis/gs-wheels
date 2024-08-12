const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
            // Check if the username matches the one in the environment variable
            if (username !== 'admin') {
                return done(null, false, { message: 'Incorrect username' });
            }

            // Compare the password with the hashed password from the environment variable
            bcrypt.compare(password, 'admin', (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, { username }); // Pass the user object
                } else {
                    return done(null, false, { message: 'Incorrect password' });
                }
            });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        if (username === 'admin') {
            done(null, { username });
        } else {
            done(new Error("User not found"), null);
        }
    });
}
