const express = require('express');
const router = express.Router();



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
   },
   {
    name: "SK",
    age: 20,
    votingStatus: false
   },
   {
    name: "AA",
    age: 70,
    votingStatus: false
   },
   {
    name: "SC",
    age: 5,
    votingStatus: false
   },
   {
    name: "HO",
    age: 40,
    votingStatus: false
   }
   ]
   router.post('/persons', function(req,res){
       let votingage=req.query.votingage
       let newpersons=[]
       for(let i=0;i<persons.length;i++){
           if(persons[i].age>votingage){
               persons[i].votingStatus=true}
           newpersons=persons.filter(element=>element.votingStatus===true)
           }
           res.send({persons,newpersons})
       
       
       
       
   })
  
   
   module.exports = router;








