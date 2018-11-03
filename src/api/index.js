//发送请求模块
import ajax from './ajax'
export const reqLogin = data=>ajax('/login',data,'POST')
export const reqRegister = data=>ajax('/register',data,'POST');
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');