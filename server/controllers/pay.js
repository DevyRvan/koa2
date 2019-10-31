/**
├── controllers
    └── pay.js
*/
const PayModel = require('../modules/pay')

class payController {
    /**
     * 创建薪酬
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_emp_name // 员工姓名
            // 薪酬编号 jz_pay_id
            // 员工编号 jz_emp_id
            // 员工姓名 jz_emp_name
            // 基本工资 jz_pay_base
            // 加班工资 jz_pay_add
            // 绩效工资 jz_pay_per
            // 补贴 jz_pay_sub
        ) {
            try {
                // 创建薪酬模型
                const data = await PayModel.createPay(req);
                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await PayModel.getPayDetail(ret.id);
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
     * 获取薪酬信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询薪酬模型
            let data = await PayModel.getPay(params);
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
                data: err.messege
            }
        }
    }

    /**
     * 获取薪酬详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                // 查询薪酬详情模型
                let data = await PayModel.getPayDetail(id);
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
     * 修改薪酬信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_pay_id // 薪酬编号
            && req.jz_emp_name // 员工姓名
            && req.jz_pay_base // 基本工资
            && req.jz_pay_add // 加班工资
            && req.jz_pay_per // 绩效工资
            && req.jz_pay_sub // 补贴
        ) {
            try {
                // 修改薪酬模型
                const data = await PayModel.updatePay(req);
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
     * 删除薪酬
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除薪酬模型
                const data = await PayModel.delPay(id);
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

module.exports = payController
