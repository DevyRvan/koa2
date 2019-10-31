/**
├── controllers
    └── check.js
*/
const CheckModel = require('../modules/check')

class checkController {
    /**
     * 创建考核
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            // 考核编号 jz_check_id
            req.jz_emp_name // 员工姓名
        ) {
            try {
                // 创建考核模型
                const data = await CheckModel.createCheck(req);
                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await CheckModel.getCheckDetail(ret.id);
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
     * 获取考核信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询考核模型
            let data = await CheckModel.getCheck(params);
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
     * 获取考核详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                // 查询考核详情模型
                let data = await CheckModel.getCheckDetail(id);
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
     * 修改考核信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_emp_name // 员工姓名
            && req.jz_check_person // 考核人
            && req.jz_check_grade // 考核分数
            && req.jz_check_flag // 是否考核
        ) {
            try {
                // 修改考核模型
                const data = await CheckModel.updateCheck(req);
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
     * 删除考核
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除考核模型
                const data = await CheckModel.delCheck(id);
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

module.exports = checkController
