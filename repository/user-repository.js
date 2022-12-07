const User = require('../models/user');

exports.findUserById = (id) => User.findOne({where: {id}});

exports.findAllUser = () => User.findAll({attributes: ['id', 'name', 'description']});

exports.createUser = (id, password, name, description) => User.create({id, password, name, description});

exports.deleteUser = (id) => User.destroy({where: {id}});

exports.getUser = (id) => User.findOne({where: {id}, attributes: ['id', 'name', 'description']});

exports.updateUser = (id, description) => User.update({description}, {where: {id}});
