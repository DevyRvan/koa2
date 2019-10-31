/**
├── schema
    └── pay.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('pay', {
        // 薪酬编号 jz_pay_id
        jz_pay_id: {
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
        // 基本工资 jz_pay_base
        jz_pay_base: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_pay_base',
        },
        // 加班工资 jz_pay_add
        jz_pay_add: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_pay_add',
        },
        // 绩效工资 jz_pay_per
        jz_pay_per: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_pay_per',
        },
        // 补贴 jz_pay_sub
        jz_pay_sub: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jz_pay_sub',
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
