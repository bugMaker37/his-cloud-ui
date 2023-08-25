import request from '@/utils/request'

// 查询药物入库明细列表
export function listDetail(query) {
  return request({
    url: '/outpatient/detail/list',
    method: 'get',
    params: query
  })
}

// 查询药物入库明细详细
export function getDetail(id) {
  return request({
    url: '/outpatient/detail/' + id,
    method: 'get'
  })
}

// 新增药物入库明细
export function addDetail(data) {
  return request({
    url: '/outpatient/detail',
    method: 'post',
    data: data
  })
}

// 修改药物入库明细
export function updateDetail(data) {
  return request({
    url: '/outpatient/detail',
    method: 'put',
    data: data
  })
}

// 删除药物入库明细
export function delDetail(id) {
  return request({
    url: '/outpatient/detail/' + id,
    method: 'delete'
  })
}
