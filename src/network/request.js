import axios from 'axios'


export function request(config) {
  // return new Promise((resolve, reject) => {
    //1:创建axios实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:8000/api/z8',
        timeout:3000,
    });
    //axios 拦截器

  // 3.请求拦截
  instance.interceptors.request.use(
    config => {
      //console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 4.响应拦截
  instance.interceptors.response.use(
    result => {
      //console.log(result);
      return result.data;
    },
    err => {
      console.log(err);
    }
  );

  // 5.返回实例
  return instance(config);
}
