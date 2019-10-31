/**
├── controllers
    └── employee.js
*/
const EmployeeModel = require('../modules/employee')
const PlanModel = require('../modules/plan')
const PayModel = require('../modules/pay')
const CheckModel = require('../modules/check')

class employeeController {
    /**
     * 创建员工
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_emp_name // 员工姓名
            && req.jz_emp_dep // 员工部门
            && req.jz_emp_job // 员工岗位
            && req.jz_emp_time // 入职时间
        ) {
            try {
                // 创建员工模型
                const data = await EmployeeModel.createEmployee(req);
                // 创建指标模型
                await PlanModel.createPlan({
                    'jz_emp_name': req.jz_emp_name,
                    'jz_plan_name': '', // 计划名称 jz_plan_name
                    'jz_tar_id': '', // 指标编号 jz_tar_id
                    'jz_tar_name': '', // 指标名称 jz_tar_name
                    'jz_emp_job':''
                });
                // 创建薪酬模型
                await PayModel.createPay({
                    'jz_emp_name': req.jz_emp_name,
                    'jz_pay_base': 0, // 基本工资 jz_pay_base
                    'jz_pay_add': 0, // 加班工资 jz_pay_add
                    'jz_pay_per': 0, // 绩效工资 jz_pay_per
                    'jz_pay_sub': 0 // 补贴 jz_pay_sub
                });
                // 创建考核模型
                await CheckModel.createCheck({
                    'jz_emp_name': req.jz_emp_name,
                    'jz_tar_name': '', // 指标名字 jz_tar_name
                    'jz_check_person': '', // 考核人 jz_check_person
                    'jz_check_grade': 0, // 考核分数 jz_check_grade
                    'jz_check_flag': false // 是否考核 jz_check_flag
                });

                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await EmployeeModel.getEmployeeDetail(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '添加成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '添加失败',
                    data: err.message
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
    }
    // getDome
    /**
     * 获取员工信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getDome(ctx) {
        // let params = ctx.request.query;
        let params = {
            jz_emp_name: '',
            jz_emp_dep: '',
            jz_emp_job: ''
        }
        try {
            // 查询员工模型
            let data = await EmployeeModel.getEmployee(params);
            let list = []
            for (let i = 0; i < data.length; i++) {
                list.push({})
                list[i].id = data[i].jz_emp_id
                list[i].name = data[i].jz_emp_name
                list[i].phone = data[i].jz_emp_phone
                list[i].job = data[i].jz_emp_job
            }
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                list
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
                data: err.message
            }
        }
    }

    /**
     * 获取员工信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询员工模型
            let data = await EmployeeModel.getEmployee(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
            }
        }
    }

    /**
     * 获取员工详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id
        if (id) {
            try {
                // 查询员工详情模型
                let data = await EmployeeModel.getEmployeeDetail(id);
                /*await EmployeeModel.createEmployee({
                    jz_emp_name: '王一山',
                    jz_emp_dep: '市场营销部',
                    jz_emp_job: '销售经理',
                    jz_emp_email: 'zhangyishan@163.com',
                    jz_emp_phone: '13254125668',
                    jz_emp_time: '2016-10-18'
                })*/
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    // data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: 'ID必须传'
            }
        }
    }

    /**
     * 修改员工信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_emp_id // 员工编号
            && req.jz_emp_name // 员工姓名
            && req.jz_emp_dep // 员工部门
            && req.jz_emp_job // 员工岗位
            && req.jz_emp_time // 入职时间
        ) {
            try {
                // 修改员工模型
                const data = await EmployeeModel.updateEmployee(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '修改失败',
                    data: err.message
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }

    /**
     * 删除员工
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除员工模型
                const data = await EmployeeModel.delEmployee(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '删除失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: 'ID不能为空',
            }
        }

    }
}

module.exports = employeeController
