/**
├── schema
    └── target.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('target', {
        // 指标编号 jz_tar_id
        jz_tar_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 指标名称 jz_tar_name
        jz_tar_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_name',
        },
        // 指标1 jz_tar_a
        jz_tar_a: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_a',
        },
        // 指标2 jz_tar_b
        jz_tar_b: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_b',
        },
        // 指标3 jz_tar_c
        jz_tar_c: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_c',
        },
        // 指标4 jz_tar_d
        jz_tar_d: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_d',
        },
        // 适用人群 jz_tar_person
        jz_tar_person: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jz_tar_person',
        }

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
