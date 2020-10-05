// 封装所有关于首页的请求 ,进行统一管理
import {request} from "./request";
export function gethomemultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function gethomegoods(type,page) {
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}
