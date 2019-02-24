let express = require('express');
let router = express.Router();

let mongoose =  require('mongoose');

// create a refrence ti the databse schema
let contact = require('../models/contact');

/* GET Contact List Page - READ Operation*/
router.get('/',(req,resnext)=> {
    contact.find((err,contactList)=> {
        if(err)
        {
            return console.error(err);
        }
        else{
            console.log(contactList);

            
        }
    });
})

module.exports = router;