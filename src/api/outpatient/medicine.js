import request from '@/utils/request'

// 查询药物管理列表
export function listMedicine(query) {
  return request({
    url: '/outpatient/medicine/page',
    method: 'get',
    params: query
  })
}

// 查询药物管理详细
export function getMedicine(id) {
  return request({
    url: '/outpatient/medicine/' + id,
    method: 'get'
  })
}

// 新增药物管理
export function addMedicine(data) {
  return request({
    url: '/outpatient/medicine',
    method: 'post',
    data: data
  })
}

// 修改药物管理
export function updateMedicine(data) {
  return request({
    url: '/outpatient/medicine',
    method: 'put',
    data: data
  })
}

// 删除药物管理
export function delMedicine(id) {
  return request({
    url: '/outpatient/medicine/' + id,
    method: 'delete'
  })
}
