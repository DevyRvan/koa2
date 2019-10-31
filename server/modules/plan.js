/**
├── modules
    └── plan.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Plan = Sequelize.import('../schema/plan');

// 自动创建表
// Plan.sync({force: false});

class PlanModel {
    /**
     * 创建指标计划模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createPlan(data) {
        console.log(data)
        return await Plan.create({
            // jz_plan_id: data.jz_plan_id, // 计划编号 jz_plan_id
            jz_emp_name: data.jz_emp_name, // 员工姓名
            jz_plan_name: data.jz_plan_name, // 计划名称 jz_plan_name
            jz_tar_id: data.jz_tar_id, // 指标编号 jz_tar_id
            jz_tar_name: data.jz_tar_name, // 指标名称 jz_tar_name
            jz_emp_job: data.jz_emp_job // 员 工岗位 jz_emp_job
        })
    }

    /**
     * 查询取所有指标计划数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getPlan(data) {
        return await Plan.findAll({
            where: {
                jz_emp_job: {
                    [Op.like]: `%${data.jz_emp_job}%`
                },
                jz_tar_name: {
                    [Op.like]: `%${data.jz_tar_name}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': 10 * (data.page - 1)
        })
    }

    /**
     * 查询取指标计划详情数据
     * @param id  指标计划ID
     * @returns {Promise<Model>}
     */
    static async getPlanDetail(id) {
        return await Plan.findAndCountAll({
            where: {
                jz_plan_id: id
            }
        })
    }

    /**
     * 修改指标计划数据
     * @param  指标计划修改数据
     * @returns {Promise<Model>}
     */
    static async updatePlan(data) {
        return await Plan.update(
            data,
            {
                where: {
                    jz_plan_id: data.jz_plan_id
                }
            }
        )
    }
    /**
     * 删除指标计划数据
     * @param id  指标计划ID
     * @returns {Promise<Model>}
     */
    static async delPlan(id) {
        return await Plan.destroy({
            where: {
                jz_plan_id: id
            }
        })
    }
}

module.exports = PlanModel
