/**
├── modules
    └── check.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Check = Sequelize.import('../schema/check');

// 自动创建表
// Check.sync({force: false});

class CheckModel {
    /**
     * 创建考核模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createCheck(data) {
        return await Check.create({
            // jz_check_id: data.jz_check_id, // 考核编号 jz_check_id
            // jz_emp_id: data.jz_emp_id, // 员工编号 jz_emp_id
            jz_tar_name: data.jz_tar_name, // 指标名字 jz_tar_name
            jz_emp_name: data.jz_emp_name, // 员工姓名 jz_emp_name
            jz_check_person: data.jz_check_person, // 考核人 jz_check_person
            jz_check_grade: data.jz_check_grade, // 考核分数 jz_check_grade
            jz_check_flag: data.jz_check_flag // 是否考核 jz_check_flag
        })
    }

    /**
     * 查询取所有考核数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getCheck(data) {
        return await Check.findAndCountAll({
            where: {
                jz_emp_name: {
                    [Op.like]: `%${data.jz_emp_name}%`
                },
                jz_tar_name: {
                    [Op.like]: `%${data.jz_tar_name}%`
                },
                jz_check_person: {
                    [Op.like]: `%${data.jz_check_person}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': 10 * (data.page - 1)
        })
    }

    /**
     * 查询取考核详情数据
     * @param id  考核ID
     * @returns {Promise<Model>}
     */
    static async getCheckDetail(id) {
        return await Check.findOne({
            where: {
                jz_check_id: id
            }
        })
    }

    /**
     * 修改考核数据
     * @param  考核修改数据
     * @returns {Promise<Model>}
     */
    static async updateCheck(data) {
        return await Check.update(
           data,
           {
                where: {
                    jz_check_id: data.jz_check_id
                }
            }
        )
    }
    /**
     * 删除考核数据
     * @param id  考核ID
     * @returns {Promise<Model>}
     */
    static async delCheck(id) {
        return await Check.destroy({
            where: {
                jz_check_id: id
            }
        })
    }
}

module.exports = CheckModel
