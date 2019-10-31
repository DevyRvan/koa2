/**
├── controllers
    └── department.js
*/
const DepartmentModel = require('../modules/department')

class departmentController {
    /**
     * 创建部门
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_dep_name // 部门名称
            && req.jz_dep_person // 部门负责人
        ) {
            try {
                // 创建部门模型
                const data = await DepartmentModel.createDepartment(req);
                // 把刚刚新建的ID查询详情，且返回新创建的信息详情
                // const data = await DepartmentModel.getDepartmentDetail(ret.id);
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
     * 获取部门信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        let params = ctx.request.query;
        try {
            // 查询部门模型
            let data = await DepartmentModel.getDepartment(params);
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
     * 获取部门详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                // 查询部门详情模型
                let data = await DepartmentModel.getDepartmentDetail(id);
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
     * 修改部门信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (
            req.jz_dep_name // 部门名称
            && req.jz_dep_person // 部门负责人
        ) {
            try {
                // 修改部门模型
                const data = await DepartmentModel.updateDepartment(req);
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
     * 删除部门
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        // 接收客服端
        let id = ctx.request.body.id;
        if (id) {
            try {
                // 删除部门模型
                const data = await DepartmentModel.delDepartment(id);
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

module.exports = departmentController
