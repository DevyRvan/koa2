/**
├── schema
    └── check.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('check', {
        // 考核编号 jz_check_id
        jz_check_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 员工编号 jz_emp_id
        jz_emp_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_emp_id',
        },
        // 员工姓名 jz_emp_name
        jz_emp_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_name',
        },
        // 指标名称 jz_tar_name
        jz_tar_name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_tar_name',
        },
        // 考核人 jz_check_person
        jz_check_person: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_check_person',
        },
        // 考核分数 jz_check_grade
        jz_check_grade: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_check_grade',
        },
        // 是否考核 jz_check_flag DataTypes.BOOLEAN
        jz_check_flag: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            field: 'jz_check_flag',
        }


    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
