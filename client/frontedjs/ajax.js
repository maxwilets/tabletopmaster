const axios = require('axios');

const formCall = {
    saving: (id, method)=>{
        axios({
            method:"GET",
            url:"/getid",
            type: method
        }).then(data=>data.saving)
    },
    health: (id)=>{
        axios({
            method:"GET",
            url:"/gethealth",
        }).then(data=>data.health)
    }
        
    
};
module.export = formCall;