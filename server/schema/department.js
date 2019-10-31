/**
├── schema
    └── department.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('department', {
        // 部门编号 jz_dep_id
        jz_dep_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 部门名称 jz_dep_name
        jz_dep_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_dep_name',
        },
        // 部门负责人 jz_dep_person
        jz_dep_person: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_dep_person',
        }


    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
