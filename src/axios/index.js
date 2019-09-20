import JSONP from 'jsonp'

export default {
      jsonp(url){
        return new Promise((resolve,reject)=>{
            JSONP(url,
            function(err,response){
                console.log(response);
                if(response.status==1000){
                    resolve(response)
                }else{
                    reject(response.desc)
                }
            })
        })
     }
}