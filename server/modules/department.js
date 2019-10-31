/**
├── modules
    └── department.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Department = Sequelize.import('../schema/department');

// 自动创建表
// Department.sync({force: false});

class DepartmentModel {
    /**
     * 创建部门模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createDepartment(data) {
        return await Department.create({
            // jz_dep_id: data.jz_dep_id, // 部门编号 jz_dep_id
            jz_dep_name: data.jz_dep_name, // 部门名称 jz_dep_name
            jz_dep_person: data.jz_dep_person // 部门负责人 jz_dep_person
        })
    }

    /**
     * 查询取所有部门数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getDepartment(data) {
        return await Department.findAndCountAll({
            where: {
                jz_dep_name: {
                    [Op.like]: `%${data.jz_dep_name}%`
                },
                jz_dep_person: {
                    [Op.like]: `%${data.jz_dep_person}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': 10 * (data.page - 1)
        })
    }

    /**
     * 查询取部门详情数据
     * @param id  部门ID
     * @returns {Promise<Model>}
     */
    static async getDepartmentDetail(id) {
        return await Department.findOne({
            where: {
                jz_dep_id: id
            }
        })
    }

    /**
     * 修改部门数据
     * @param  部门修改数据
     * @returns {Promise<Model>}
     */
    static async updateDepartment(data) {
        return await Department.update(
           data,
           {
                where: {
                    jz_dep_id: data.jz_dep_id
                }
           }
        )
    }
    /**
     * 删除部门数据
     * @param id  部门ID
     * @returns {Promise<Model>}
     */
    static async delDepartment(id) {
        return await Department.destroy({
            where: {
                jz_dep_id: id
            }
        })
    }
}

module.exports = DepartmentModel
