const axios = require('axios');

const formCall = {
    saving: (id, method)=>{
        axios({
            method:"GET",
            url:"/getid",
            method: method
        }).then(data=>data.saving)
    }
        
    
};
module.export = formCall;