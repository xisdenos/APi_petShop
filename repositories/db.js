import Sequelize from 'sequelize'

const sequelize = new Sequelize("postgres://eehopoua:PbGIhJk9JeKA9xvKC31bDm7q-66OqseB@castor.db.elephantsql.com/eehopoua", 
{
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})

export default sequelize