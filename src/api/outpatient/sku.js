import request from '@/utils/request'

// 查询药物规格列表
export function listSku(query) {
  return request({
    url: '/outpatient/sku/list',
    method: 'get',
    params: query
  })
}

// 查询药物规格详细
export function getSku(id) {
  return request({
    url: '/outpatient/sku/' + id,
    method: 'get'
  })
}

// 新增药物规格
export function addSku(data) {
  return request({
    url: '/outpatient/sku',
    method: 'post',
    data: data
  })
}

// 修改药物规格
export function updateSku(data) {
  return request({
    url: '/outpatient/sku',
    method: 'put',
    data: data
  })
}

// 删除药物规格
export function delSku(id) {
  return request({
    url: '/outpatient/sku/' + id,
    method: 'delete'
  })
}
