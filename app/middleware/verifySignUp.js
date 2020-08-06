const db = require('../models')
const ROLES = db.ROLES
const User = db.user

checkDuplicateUsernameOrEmail  = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: "user already exists with given username"
            })
            return
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message: "email already exists with given email"
                })
            }
            next()
        })
    })
}


checkRolesExisted  = (req, res, next) => {
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
}

module.exports = verifySignUp