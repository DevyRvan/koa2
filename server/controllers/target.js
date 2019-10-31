/**
├── controllers
    └── target.js
*/
const TargetModel = require('../modules/target')

class targetController {
    /**
     * 创建指标
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_tar_name // 指标名称
            && req.jz_tar_a // 指标1
            && req.jz_tar_b // 指标2
            && req.jz_tar_c // 指标3
            && req.jz_tar_d // 指标4
        ) {
            try {
                // 创建指标模型
                const data = await TargetModel.createTarget(req);
                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await TargetModel.getTargetDetail(ret.id);
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
     * 获取指标信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询指标模型
            let data = await TargetModel.getTarget(params);
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
     * 获取指标详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                // 查询指标详情模型
                let data = await TargetModel.getTargetDetail(id);
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
     * 修改指标信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_tar_name // 指标名称
            && req.jz_tar_a // 指标1
            && req.jz_tar_b // 指标2
            && req.jz_tar_c // 指标3
            && req.jz_tar_d // 指标4
        ) {
            try {
                // 修改指标模型
                const data = await TargetModel.updateTarget(req);
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
     * 删除指标
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除指标模型
                const data = await TargetModel.delTarget(id);
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

module.exports = targetController
