import {httpAxios} from "@/app/httpHelper";
export const screenShot=async (data)=>{
    const result=await httpAxios
        .post('/api/screen',{...data})
        .then((response)=>response.data);
    return result;
}