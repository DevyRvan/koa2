/**
├── schema
    └── employee.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('employee', {
        // 员工编号
        jz_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 员工姓名 jz_emp_name
        jz_emp_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_name',
        },
        // 员工部门 jz_emp_dep
        jz_emp_dep: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_dep',
        },
        // 员工岗位 jz_emp_job
        jz_emp_job: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_job',
        },
        // 电话号码 jz_emp_phone
        jz_emp_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_phone',
        },
        // 邮箱地址 jz_emp_email
        jz_emp_email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_email',
        },
        // 入职时间 jz_emp_time
        jz_emp_time: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_emp_time',
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
