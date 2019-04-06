const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../../config/keys').secretOrKey;
const User = require('../../models/User');
const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check for user
    User.findOne({ username })
        .then(user => {
            if (!user) {
                res.status(400).json({ error: 'User not found' });
            }
            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User matched
                        // Creating payload
                        const payload = {
                            id: user.id,
                            username: user.username
                        }
                        // Sign token
                        jwt.sign(payload, secret, { expiresIn: 3600 * 24 }, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });

                    } else {
                        res.status(400).json({ error: 'Password does not match' });
                    }
                })
                .catch(error => console.log(error));
        })
});

module.exports = router;