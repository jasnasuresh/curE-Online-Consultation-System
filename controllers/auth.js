const mysql=require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db= mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password:process.env.pwd,
    database: process.env.DATABASE
});
var1="";
var2="";
exports.search_doctor = async (req,res) => {
    try{
    console.log(req.body);
    const {city,specialization}=req.body;
    console.log(city);
    console.log(specialization);
    db.query('select * from doctor where city=? and specialization=?',[city,specialization], function(error, result){
      var i;
      
      var r=""
      if(city!='Kannur'){
        for(i=0;i<10;i++){
        if(result[i])
        r+='<h2  ><a href="/doctor_profile0">'+(i+1)+" "+result[i].firstName+'</a></h2>';
        }}
        else{
        r+='<h2  ><a href="/doctor_profile1">'+1+" "+result[0].firstName+'</a></h2>';
        r+='<h2  ><a href="/doctor_profile2">'+2+" "+result[1].firstName+'</a></h2>';
        var2=result[0].email;
      }res.send('<body style="background: url(https://media.istockphoto.com/photos/medical-blurred-background-picture-id673212904?k=6&m=673212904&s=612x612&w=0&h=sHdi3YfjepMf5UvtE6zKGIta7bGDKylp0XEL7nEiAFA=); background-repeat: no-repeat;  text-decoration= none;    background-size: cover; align-items:center; padding-left: 40rem; "><h1 style="font-size: 40px; margin-top: 125px; margin-bottom: 60px; ">Doctor List'+r+'</h1></body>');
      
    });
}
 
catch(error){console.log(error);}
}    
exports.pupdate= async(req,res)=>{
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const password=req.body.password;
    const cpwd=req.body.cpwd;
    const city=req.body.city;
    db.query('SELECT email from patient where email = ?', [email], async (error, result) => {
        if(error) {
            console.log(error);
        }
       if(password !== cpwd ){
           return res.render('pupdate', {
               message: 'Password donot match'
              });
        }
        
        let hpwd = await bcrypt.hash(password,5);
        console.log(hpwd);
        if(!firstName || !email || !age || !password || !city){return res.status(400).render('pupdate',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('update patient set ? where email = ?',[{firstName: firstName,email: email, age: age, password: hpwd, city: city},email], async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        })}
      
        
        
    });
    
}
exports.dupdate= async(req,res)=>{
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const password=req.body.password;
    const cpwd=req.body.cpwd;
    const city=req.body.city;
    const specialization=req.body.specialization;
    const qualification=req.body.qualification;
    const day=req.body.day;
    const time=req.body.time;
    const time_off=req.body.time_off;
    db.query('SELECT email from doctor where email = ?', [email], async (error, result) => {
        if(error) {
            console.log(error);
        }
       if(password !== cpwd ){
           return res.render('dupdate', {
               message: 'Password donot match'
              });
        }
        
        let hpwd = await bcrypt.hash(password,5);
        console.log(hpwd);
        if(!firstName || !email || !age || !password || !city || !specialization || !qualification || !day || !time || !time_off){return res.status(400).render('dupdate',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('update doctor set ? where email=?',[{firstName: firstName,email: email, age: age, password: hpwd, city: city, specialization:specialization, qualification:qualification, day:day, time:time, time_off:time_off},d2], async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        })}
      
        
        
    });
    
}
exports.vprofile= async (req,res)=>{
    try{
        res.send('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="/123.css"><h1 style="text-align:center; color:black;font-family:georgia,garamond,serif;font-size:60px;font-style:italic;"> Patient Profile </h1> </head> <body> <div class="container"><div class="main-body"<div class="row field-sm"> <div class="col-md-4 mb-3"><div class="profile"> <div class="profile-body"><div class="d-flex flex-column align-items-center text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RDPHl3rdTI167jIkE0gfZ9lA8vi9iyg3Qw&usqp=CAU" alt="Admin" class="rounded-circle" width="150"> <div class="mt-3"><h4></h4>  <button class="btn btn-primary"><a href="/pupdate">Update</a></button> </div>  </div> </div>  <div class="profile mt-3"> <ul class="list-group list-group-flush"> <div class="col-md-8"> <div class="profile mb-3"><div class="profile-body"> <div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Full Name</h6> </div><div class="col-sm-9 text-secondary">'+p1+'</div></div> <hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Email</h6> </div> <div class="col-sm-9 text-secondary">'+p2+'</div></div><hr><div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Age</h6></div> <div class="col-sm-9 text-secondary">'+p3+'</div></div><hr><div class="row"><div class="col-sm-3"> <h6 class="mb-0">City</h6></div><div class="col-sm-9 text-secondary">'+p4+'</div></div><hr></div></div></div></div></div></div></div></body>');
    }
    catch(error){console.log(error);}
}   

exports.v1profile= async (req,res)=>{
    try{
        res.send('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="/123.css"><h1 style="text-align:center; color:black;font-family:georgia,garamond,serif;font-size:60px;font-style:italic;"> Doctor Profile </h1> </head> <body> <div class="container"><div class="main-body"<div class="row field-sm"> <div class="col-md-4 mb-3"><div class="profile"> <div class="profile-body"><div class="d-flex flex-column align-items-center text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RDPHl3rdTI167jIkE0gfZ9lA8vi9iyg3Qw&usqp=CAU" alt="Admin" class="rounded-circle" width="150"> <div class="mt-3"><h4></h4>  <button class="btn btn-primary"><a href="/dupdate">Update</a></button> </div>  </div> </div>  <div class="profile mt-3"> <ul class="list-group list-group-flush"> <div class="col-md-8"> <div class="profile mb-3"><div class="profile-body"> <div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Full Name</h6> </div><div class="col-sm-9 text-secondary">'+d1+'</div></div> <hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Email</h6> </div> <div class="col-sm-9 text-secondary">'+d2+'</div></div><hr><div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Age</h6></div> <div class="col-sm-9 text-secondary">'+d3+'</div></div><hr><div class="row"><div class="col-sm-3"> <h6 class="mb-0">City</h6></div><div class="col-sm-9 text-secondary">'+d4+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Specialization</h6> </div> <div class="col-sm-9 text-secondary">'+d5+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Qualification</h6> </div> <div class="col-sm-9 text-secondary">'+d6+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Day</h6> </div> <div class="col-sm-9 text-secondary">'+d7+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_on</h6> </div> <div class="col-sm-9 text-secondary">'+d8+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_off</h6> </div> <div class="col-sm-9 text-secondary">'+d9+'</div></div><hr></div></div></div></div></div></div></div></body>');
    }
    catch(error){console.log(error);}
}   

exports.loginp = async (req,res)=>{
    try{
      const{email,password}=req.body;
      var1=email;
      if(!email || !password ){
          return res.status(400).render('loginp',{
              message: "Please provide all credentials"
          })
      };
      db.query('select * from patient where email=?',[email], async (error,result) =>{
        p1=result[0].firstName;
        p2=result[0].email;
        p3=result[0].age;
        p4=result[0].city;
        if(!result || !(await bcrypt.compare(password, result[0].password))){
            res.status(401).render('loginp', {
                message: "Wrong Credential"
            })
        }
        else {
            
            res.render("patient_home");}
    })
    }catch(error){
       console.log(error);
    }
}
exports.logina = async (req,res)=>{
    try{
      const{email,password}=req.body;
      
      if(!email || !password ){
          return res.status(400).render('logina',{
              message: "Please provide all credentials"
          })
      };
      db.query('select * from admin where email=?',[email], async (error,result) =>{
          if(!result || (password !== result[0].password)){
              res.status(401).render('logina', {
                  message: "Wrong Credential"
              })
          }
          else {
             res.render("admin_home");}
      })
    }catch(error){
       console.log(error);
    }
}
exports.logind = async (req,res)=>{
    try{
      const{email,password}=req.body;
      if(!email || !password ){
          return res.status(400).render('logind',{
              message: "Please provide all credentials"
          })
      };
      db.query('select * from doctor where email=?',[email], async (error,result) =>{
          d1=result[0].firstName;
          d2=result[0].email;
          d3=result[0].age;
          d4=result[0].city;
          d5=result[0].specialization;
          d6=result[0].qualification;
          d7=result[0].day;
          d8=result[0].time;
          d9=result[0].time_off;
          if(!result || !(await bcrypt.compare(password, result[0].password))){
              res.status(401).render('logind', {
                  message: "Wrong Credential"
              })
          }
          else {
             res.render("doctor_home");}
      })
    }catch(error){
       console.log(error);
    }
}
exports.doctor_profile1 = async (req,res)=>{
    try{
      res.render("logind");
    }catch(error){
       console.log(error);
    }
}
exports.pay = async(req,res)=>{
   try{ db.query('insert into appointment set ?',{patient:var1,doctor:var2},async (error,result) =>{
        if(error){
            console.log(error);
        } 
        else {
            
            res.render("patient_home");
        }
    })}catch(error){console.log(error);}
}
exports.registerd = (req,res) => {
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const password=req.body.password;
    const cpwd=req.body.cpwd;
    const city=req.body.city;
    const specialization =req.body.specialization;
    const qualification = req.body.qualification;
    const day = req.body.day;
    const time = req.body.time;
    const time_off = req.body.time_off;   

    db.query('SELECT email from doctor where email = ?', [email], async (error, result) => {
        if(error) {
            console.log(error);
        }
        if(result.length>0){
            return res.render('registerd', {
                message: 'Email already in use'
            });
        }
        else if(password !== cpwd ){
           return res.render('./registerd', {
               message: 'Password donot match'
              });
        }
        let hpwd = await bcrypt.hash(password,5);
        console.log(hpwd);
        if(!firstName || !email || !age || !password || !city || !specialization || !qualification ||!day ||!time || !time_off){return res.status(400).render('registerd',{
            message: "Please provide all credentials"
        });}
      else{  db.query('insert into doctor1 set ?',{firstName: firstName,email: email, age: age, password: hpwd, city: city, specialization: specialization, qualification: qualification, day:day, time:time, time_off:time_off},async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
        })
       
    }
    });
   
}
exports.registerp = (req,res) => {
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const password=req.body.password;
    const cpwd=req.body.cpwd;
    const city=req.body.city;
    db.query('SELECT email from patient where email = ?', [email], async (error, result) => {
        if(error) {
            console.log(error);
        }
        if(result.length>0){
            return res.render('registerp', {
                message: 'Email already in use'
            });
        }
        else if(password !== cpwd ){
           return res.render('registerp', {
               message: 'Password donot match'
              });
        }
        
        let hpwd = await bcrypt.hash(password,5);
        console.log(hpwd);
        if(!firstName || !email || !age || !password || !city){return res.status(400).render('registerp',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('insert into patient set ?',{firstName: firstName,email: email, age: age, password: hpwd, city: city}, async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        })}
      
        
        
    });
    
}
