/**
├── controllers
    └── plan.js
*/
const PlanModel = require('../modules/plan')

class planController {
    /**
     * 创建指标计划
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_emp_name // 员工姓名
            // 计划编号 jz_plan_id
            // 员工姓名 jz_emp_name
            // 指标名称 jz_tar_name
            // 员工岗位 jz_emp_job
        ) {
            try {
                // 创建指标计划模型
                const data = await PlanModel.createPlan(req);
                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await PlanModel.getPlanDetail(ret.id);
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
                    data: err
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
     * 获取指标计划信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询指标计划模型
            let data = await PlanModel.getPlan(params);
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
                msg: '查询失败'
            }
        }
    }

    /**
     * 获取指标计划详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                // 查询指标计划详情模型
                let data = await PlanModel.getPlanDetail(id);
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
                    data
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
     * 修改指标计划信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_plan_id // 计划编号
            && req.jz_emp_name // 员工姓名
            && req.jz_tar_name // 指标名称
            // 计划编号 jz_plan_id
            // 员工姓名 jz_emp_name
            // 指标名称 jz_tar_name
        ) {
            try {
                // 修改指标计划模型
                const data = await PlanModel.updatePlan(req);
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
                    data: err
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
     * 删除指标计划
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除指标计划模型
                const data = await PlanModel.delPlan(id);
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

module.exports = planController
