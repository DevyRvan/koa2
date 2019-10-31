/**
├── schema
    └── plan.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('plan', {
        // 计划编号 jz_plan_id
        jz_plan_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 员工姓名 jz_emp_name
        jz_emp_name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_emp_name',
        },
        // 计划名称 jz_plan_name
        jz_plan_name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_plan_name',
        },
        // 指标名称 jz_tar_name
        jz_tar_name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_tar_name',
        },
        // 员工岗位 jz_emp_job
        jz_emp_job: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'jz_emp_job',
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
