/**
├── modules
    └── target.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Target = Sequelize.import('../schema/target');

// 自动创建表
// Target.sync({force: false});

class TargetModel {
    /**
     * 创建指标模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createTarget(data) {
        return await Target.create({
            // jz_tar_id: data.jz_tar_id, // 指标编号 jz_tar_id
            jz_tar_name: data.jz_tar_name, // 指标名称 jz_tar_name
            jz_tar_a: data.jz_tar_a, // 指标1 jz_tar_a
            jz_tar_b: data.jz_tar_b, // 指标2 jz_tar_b
            jz_tar_c: data.jz_tar_c, // 指标3 jz_tar_c
            jz_tar_d: data.jz_tar_d, // 指标4 jz_tar_d
            jz_tar_person: data.jz_tar_person // 适用人群 jz_tar_person
        })
    }

    /**
     * 查询取所有指标数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getTarget(data) {
        return await Target.findAndCountAll({
            where: {
                jz_tar_name: {
                    [Op.like]: `%${data.jz_tar_name}%`
                },
                jz_tar_person: {
                    [Op.like]: `%${data.jz_tar_person}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': 10 * (data.page - 1)
        })
    }

    /**
     * 查询取指标详情数据
     * @param id  指标ID
     * @returns {Promise<Model>}
     */
    static async getTargetDetail(id) {
        return await Target.findOne({
            where: {
                jz_tar_id: id
            }
        })
    }

    /**
     * 修改指标数据
     * @param  指标修改数据
     * @returns {Promise<Model>}
     */
    static async updateTarget(data) {
        return await Target.update(
            data,
            {
                where: {
                    jz_tar_id: data.jz_tar_id
                }
            }
        )
    }
    /**
     * 删除指标数据
     * @param id  指标ID
     * @returns {Promise<Model>}
     */
    static async delTarget(id) {
        return await Target.destroy({
            where: {
                jz_tar_id: id
            }
        })
    }
}

module.exports = TargetModel
