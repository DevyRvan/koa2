/**
 ├── routes
 └── index2.js
 */
const Router = require('koa-router')
const EmployeeController = require('../controllers/employee')
const DepartmentController = require('../controllers/department')
const TargetController = require('../controllers/target')
const PlanController = require('../controllers/plan')
const CheckController = require('../controllers/check')
const PayController = require('../controllers/pay')

const router = new Router({
    prefix: '/api'
})

/**
 * 员工接口
 */
// test 
router.get('/getDome', EmployeeController.getDome)
// 创建员工接口（路由）
router.post('/createEmployee', EmployeeController.create);
// 获取员工数据接口（路由）
router.get('/getEmployee', EmployeeController.get);
// 获取员工详情接口（路由）
router.get('/getEmployeeDetail', EmployeeController.detail);
// 修改员工数据接口（路由）
router.post('/updateEmployee', EmployeeController.update);
// 删除员工详情接口（路由）
router.post('/delEmployee', EmployeeController.delete);

/**
 * 部门接口
 */
// 创建部门接口（路由）
router.post('/createDepartment', DepartmentController.create);
// 获取部门数据接口（路由）
router.get('/getDepartmentmployee', DepartmentController.get);
// 获取部门详情接口（路由）
router.get('/getDepartmentDetai', DepartmentController.detail);
// 修改部门数据接口（路由）
router.post('/updateDepartment', DepartmentController.update);
// 删除部门详情接口（路由）
router.post('/delDepartment', DepartmentController.delete);

/**
 * 指标接口
 */
// 创建指标接口（路由）
router.post('/createTarget', TargetController.create);
// 获取指标数据接口（路由）
router.get('/getTarget', TargetController.get);
// 获取指标详情接口（路由）
router.get('/getTardetail', TargetController.detail);
// 修改指标数据接口（路由）
router.post('/updateTarget', TargetController.update);
// 删除指标详情接口（路由）
router.post('/delTarget', TargetController.delete);

/**
 * 指标计划接口
 */
// 创建指标计划接口（路由）
router.post('/createPlan', PlanController.create);
// 获取指标计划数据接口（路由）
router.get('/getPlan', PlanController.get);
// 获取指标计划详情接口（路由）
router.get('/getPlanDetail', PlanController.detail);
// 修改指标计划数据接口（路由）
router.post('/updatePlan', PlanController.update);
// 删除指标计划详情接口（路由）
router.post('/delPlan', PlanController.delete);

/**
 * 考核接口
 */
// 创建考核接口（路由）
router.post('/createCheck', CheckController.create);
// 获取考核数据接口（路由）
router.get('/getCheck', CheckController.get);
// 获取考核详情接口（路由）
router.get('/getCheckDetail', CheckController.detail);
// 修改考核数据接口（路由）
router.post('/updateCheck', CheckController.update);
// 删除考核详情接口（路由）
router.post('/delCheck', CheckController.delete);

/**
 * 薪酬接口
 */
// 创建薪酬接口（路由）
router.post('/createPay', PayController.create);
// 获取薪酬数据接口（路由）
router.get('/getPay', PayController.get);
// 获取薪酬详情接口（路由）
router.get('/getPayDetail', PayController.detail);
// 修改薪酬数据接口（路由）
router.post('/updatePay', PayController.update);
// 删除薪酬详情接口（路由）
router.post('/delPay', PayController.delete);


module.exports = router
