const db = require('../models')
const Blog = db.blogs
const Op = db.Sequelize.Op
const upload = require("../middleware/upload");



exports.create = (req, res) => {
    console.info('----------------',req.body);
  if(!req.body.title) {
      res.status(400).send({
          message: 'Content can not be empty!'
      })
  }
      Blog.create({ ...req.body, published: !!req.body.published })
       .then(data => {
             res.send(data)
          })
          .catch(err => {
             res.status(500).send({
                 message: err.message
             })
          })
}

exports.findAll = (req, res) => {
    const title = req.body.title
    const condition = title ? { title: { [Op.like]: `%${title}%` } }: null
    Blog.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}