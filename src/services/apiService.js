import {Post} from './httpService';
import {success,error,info,warning,def} from './toasterService';
export const login=(data)=>{
    return Post("https://reqres.in/api/users",data)
        .then(response => {
          return response.json()
        })
        .catch(err => {
            success(err.message||"Login Error");
            info(err.message||"Login Error");
            error(err.message||"Login Error");
            warning(err.message||"Login Error");
            def(err.message||"Login Error");
        });
}