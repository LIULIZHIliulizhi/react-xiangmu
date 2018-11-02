/**
 * Created by 29671 on 2018/10/31.
 */
import axios from 'axios'
export default function ajax(url,data,type='GET'){
  let querystring = ''
  //发送get请求，如果用户通过data传参，将data以查询字符串的方式拼接到url后面
  // Object.keys(object) 将传入对象的可枚举属性存储在一个数组中,可通过forEach方法遍历data的属性得到每个属性的值
  if(data){
    Object.keys(data).forEach(key=>{
      const value = data[key];
      querystring += key + '='+value + '&'
    })
    //substring(start，end) 方法截取字符串 参数start 是开始截取的位置 ，end 是截取到哪里
    querystring = querystring.substring(0,querystring.length-1)
  }

  if(type.toUpperCase() === 'GET'){
    //发送get请求，如果用户通过data传参，将data以查询字符串的方式拼接到url后面
    url += '?'+querystring
    return axios.get(url)
  }else{
    return axios.post(url,querystring,{
      //
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}