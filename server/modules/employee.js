/**
├── modules
    └── employee.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
// 引入上一步的文章数据表模型文件
const Employee = Sequelize.import('../schema/employee');

// 自动创建表
// Employee.sync({force: false});

class EmployeeModel {
    /**
     * 创建员工模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createEmployee(data) {
        return await Employee.create({
            // jz_emp_id: data.jz_emp_id, // 员工编号 jz_emp_id
            jz_emp_name: data.jz_emp_name, // 员工姓名 jz_emp_name
            jz_emp_dep: data.jz_emp_dep, // 员工部门 jz_emp_dep
            jz_emp_job: data.jz_emp_job, // 员工岗位 jz_emp_job
            jz_emp_phone: data.jz_emp_phone, // 电话号码 jz_emp_phone
            jz_emp_email: data.jz_emp_email, // 邮箱地址 jz_emp_email
            jz_emp_time: data.jz_emp_time // 入职时间 jz_emp_time
        })
    }

    /**
     * 查询取所有员工数据
     * @param data
     * @returns {Promise<Model>}
     */
    static async getEmployee(data) {
        console.log(data)
        return await Employee.findAll({
            where: {
                jz_emp_name: {
                    [Op.like]: `%${data.jz_emp_name}%`
                },
                jz_emp_dep: {
                    [Op.like]: `%${data.jz_emp_dep}%`
                },
                jz_emp_job: {
                    [Op.like]: `%${data.jz_emp_job}%`
                }
            },
            'limit': 10,                      // 每页多少条
            'offset': data.page ? 10 * (data.page - 1) : 0
        })
    }

    /**
     * 查询取员工详情数据
     * @param id  员工ID
     * @returns {Promise<Model>}
     */
    static async getEmployeeDetail(id) {
        return await Employee.findOne({
            where: {
                jz_emp_id: id
            }
        })
    }

    /**
     * 修改员工数据
     * @param  员工修改数据
     * @returns {Promise<Model>}
     */
    static async updateEmployee(data) {
        return await Employee.update(
            data,
            {
                where: {
                    jz_emp_id: data.jz_emp_id
                }
            }
        )
    }
    /**
     * 删除员工数据
     * @param id  员工ID
     * @returns {Promise<Model>}
     */
    static async delEmployee(id) {
        return await Employee.destroy({
            where: {
                jz_emp_id: id
            }
        })
    }
}

module.exports = EmployeeModel
