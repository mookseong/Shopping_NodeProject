const userService = require("../service/user-service");
const commentService = require("../service/comment-service")


exports.usersIndex = async (req, res, next) => {
    await userService.findAllUser()
        .then((users) => res.json(users))
        .catch(err => {
            console.error(err);
            next(err);
        })
};

exports.usersComments = async (req, res, next) => {
    await commentService.findAllUser()
        .then((comments) => res.json(comments))
        .catch(err => {
            console.error(err);
            next(err);
        })
};

exports.usersDataComments = async (req, res, next) => {
    await commentService.findAllData()
        .then((comments) => res.json(comments))
        .catch(err => {
            console.error(err);
            next(err);
        })
};