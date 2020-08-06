module.exports = (sequelize, Sequelize) => {
    return sequelize.define('blog', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        pic: {
            type: Sequelize.STRING
        }
    })
}