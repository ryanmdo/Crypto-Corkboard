const router = require("express").Router();


    router.get('testing',function(request,response){

        response.json('stuff')
        console.log('/testing called')
    })



module.exports = router;