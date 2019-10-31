/**
├── modules
    └── pay.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Pay = Sequelize.import('../schema/pay');

// 自动创建表
// Pay.sync({force: false});

class PayModel {
    /**
     * 创建薪酬模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createPay(data) {
        console.log(data)
        return await Pay.create({
            // jz_pay_id: data.jz_pay_idtle, // 薪酬编号 jz_pay_id
            // jz_emp_id: 0, // 员 工编号 jz_emp_id
            jz_emp_name: data.jz_emp_name, // 员 工姓名 jz_emp_name
            jz_pay_base: data.jz_pay_base, // 基本工资 jz_pay_base
            jz_pay_add: data.jz_pay_add, // 加班工资 jz_pay_add
            jz_pay_per: data.jz_pay_per, // 绩效工资 jz_pay_per
            jz_pay_sub: data.jz_pay_sub // 补贴 jz_pay_sub
        })
    }

    /**
     * 查询取所有薪酬数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getPay(data) {
        return await Pay.findAndCountAll({
            where: {
                jz_emp_name: {
                    [Op.like]: `%${data.jz_emp_name}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': 10 * (data.page - 1)
        })
    }

    /**
     * 查询取薪酬详情数据
     * @param id  薪酬ID
     * @returns {Promise<Model>}
     */
    static async getPayDetail(id) {
        return await Pay.findOne({
            where: {
                jz_pay_id: id
            }
        })
    }

    /**
     * 修改薪酬数据
     * @param  薪酬修改数据
     * @returns {Promise<Model>}
     */
    static async updatePay(data) {
        return await Pay.update(
           data,
            {
                where: {
                    jz_pay_id: data.jz_pay_id
                }
            }
        )
    }
    /**
     * 删除薪酬数据
     * @param id  薪酬ID
     * @returns {Promise<Model>}
     */
    static async delPay(id) {
        return await Pay.destroy({
            where: {
                jz_pay_id: id
            }
        })
    }
}

module.exports = PayModel
