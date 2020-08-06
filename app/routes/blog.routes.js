module.exports = server =>{
    const blogs = require('../controllers/blog.controller')

    const router = require('express').Router()

    router.post('/', blogs.create)

    router.get('/', blogs.findAll)

    server.use('/api/blogs', router)
}