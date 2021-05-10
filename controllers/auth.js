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
    db.query('select * from doctorr where city=? and specialization=?',[city,specialization], function(error, result){
      var i;
      
      var r=""
      
        for(i=0;i<10;i++){
        if(result[i])
        r+='<h2  >'+(i+1)+" "+result[i].firstName+'</h2>';
        }res.send('<body style="background: url(https://media.istockphoto.com/photos/medical-blurred-background-picture-id673212904?k=6&m=673212904&s=612x612&w=0&h=sHdi3YfjepMf5UvtE6zKGIta7bGDKylp0XEL7nEiAFA=); background-repeat: no-repeat;  text-decoration= none;    background-size: cover; align-items:center; padding-left: 40rem; "><form action="/auth/search" method="POST"><input type="text" name="doctor" placeholder="Doctor name" id="doctor" style="height=50%; margin-top=100px"><input class="btn" type="submit" name="submit" value="➡"><h1 style="font-size: 40px; margin-top: 100px; margin-bottom: 60px; ">Doctor List'+r+'</h1></form></body>');
      
    });
}
 
catch(error){console.log(error);}
}    
exports.pupdate= async(req,res)=>{
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    
    const city=req.body.city;
 
        
        if(!firstName || !email || !age ||  !city){return res.status(400).render('pupdate',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('update patientt set ? where email = ?',[{firstName: firstName,email: email, age: age, city: city},email], async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        })}
      
        
        
   
    
}
exports.search= async(req,res)=>{
    try{
        const firstName=req.body.doctor;
        console.log(firstName);
        db.query('select * from doctorr where firstName = ?',[firstName], async(error,result)=>{
        var2=result[0].firstName;    
        res.send('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="/123.css"><h1 style="text-align:center; color:black;font-family:georgia,garamond,serif;font-size:60px;font-style:italic;"> Doctor Profile </h1> </head> <body> <div class="container"><div class="main-body"<div class="row field-sm"> <div class="col-md-4 mb-3"><div class="profile"> <div class="profile-body"><div class="d-flex flex-column align-items-center text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RDPHl3rdTI167jIkE0gfZ9lA8vi9iyg3Qw&usqp=CAU" alt="Admin" class="rounded-circle" width="150"> <div class="mt-3"><h4></h4>  <button class="btn btn-primary"><a href="/pay">Proceed to pay</a></button> </div>  </div> </div>  <div class="profile mt-3"> <ul class="list-group list-group-flush"> <div class="col-md-8"> <div class="profile mb-3"><div class="profile-body"> <div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Full Name</h6> </div><div class="col-sm-9 text-secondary">Dr. '+result[0].firstName+'</div></div> <hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Email</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].email+'</div></div><hr><div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Age</h6></div> <div class="col-sm-9 text-secondary">'+result[0].age+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Specialization</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].specialization+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Qualification</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].qualification+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Day</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].day+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_on</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].time+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_off</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].time_off+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Fee</h6> </div> <div class="col-sm-9 text-secondary">'+result[0].fee+'</div></div><hr></div></div></div></div></div></div></div></body>');
     })}
     catch(error){console.log(error);}
 } 
    

exports.dupdate= async(req,res)=>{
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const city=req.body.city;
    const specialization=req.body.specialization;
    const qualification=req.body.qualification;
    const day=req.body.day;
    const time=req.body.time;
    const time_off=req.body.time_off;
    
       
        if(!firstName || !email || !age || !city || !specialization || !qualification || !day || !time || !time_off){return res.status(400).render('dupdate',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('update doctorr set ? where email=?',[{firstName: firstName,email: email, age: age,  city: city, specialization:specialization, qualification:qualification, day:day, time:time, time_off:time_off},d2], async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        });
    } 
      
    }
exports.vprofile= async (req,res)=>{
    try{
        res.send('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="/123.css"><h1 style="text-align:center; color:black;font-family:georgia,garamond,serif;font-size:60px;font-style:italic;"> Patient Profile </h1> </head> <body><button class="btn-right"><a href="/patient_home">Back</a></button> <div class="container"><div class="main-body"<div class="row field-sm"> <div class="col-md-4 mb-3"><div class="profile"> <div class="profile-body"><div class="d-flex flex-column align-items-center text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RDPHl3rdTI167jIkE0gfZ9lA8vi9iyg3Qw&usqp=CAU" alt="Admin" class="rounded-circle" width="150"> <div class="mt-3"><h4></h4>  <button class="btn btn-primary"><a href="/pupdate">Update</a></button> </div>  </div> </div>  <div class="profile mt-3"> <ul class="list-group list-group-flush"> <div class="col-md-8"> <div class="profile mb-3"><div class="profile-body"> <div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Full Name</h6> </div><div class="col-sm-9 text-secondary">'+p1+'</div></div> <hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Email</h6> </div> <div class="col-sm-9 text-secondary">'+p2+'</div></div><hr><div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Age</h6></div> <div class="col-sm-9 text-secondary">'+p3+'</div></div><hr><div class="row"><div class="col-sm-3"> <h6 class="mb-0">City</h6></div><div class="col-sm-9 text-secondary">'+p4+'</div></div><hr></div></div></div></div></div></div></div></body>');
    }
    catch(error){console.log(error);}
}   

exports.v1profile= async (req,res)=>{
    try{
       res.send('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="/123.css"><h1 style="text-align:center; color:black;font-family:georgia,garamond,serif;font-size:60px;font-style:italic;"> Doctor Profile </h1> </head> <body><button class="btn-right"><a href="/doctor_home">Back</a></button> <div class="container"><div class="main-body"<div class="row field-sm"> <div class="col-md-4 mb-3"><div class="profile"> <div class="profile-body"><div class="d-flex flex-column align-items-center text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RDPHl3rdTI167jIkE0gfZ9lA8vi9iyg3Qw&usqp=CAU" alt="Admin" class="rounded-circle" width="150"> <div class="mt-3"><h4></h4>  <button class="btn btn-primary"><a href="/dupdate">Update</a></button> </div>  </div> </div>  <div class="profile mt-3"> <ul class="list-group list-group-flush"> <div class="col-md-8"> <div class="profile mb-3"><div class="profile-body"> <div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Full Name</h6> </div><div class="col-sm-9 text-secondary">'+d1+'</div></div> <hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Email</h6> </div> <div class="col-sm-9 text-secondary">'+d2+'</div></div><hr><div class="row"> <div class="col-sm-3"> <h6 class="mb-0">Age</h6></div> <div class="col-sm-9 text-secondary">'+d3+'</div></div><hr><div class="row"><div class="col-sm-3"> <h6 class="mb-0">City</h6></div><div class="col-sm-9 text-secondary">'+d4+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Specialization</h6> </div> <div class="col-sm-9 text-secondary">'+d5+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Qualification</h6> </div> <div class="col-sm-9 text-secondary">'+d6+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Day</h6> </div> <div class="col-sm-9 text-secondary">'+d7+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_on</h6> </div> <div class="col-sm-9 text-secondary">'+d8+'</div></div><hr><div class="row"> <div class="col-sm-3"><h6 class="mb-0">Time_off</h6> </div> <div class="col-sm-9 text-secondary">'+d9+'</div></div><hr></div></div></div></div></div></div></div></body>');
    }
    catch(error){console.log(error);}
}   
exports.pcal= async (req,res)=>{
    try{
        db.query('update app set status = "Pending" where date > CURRENT_DATE', async (error,result) =>{
            if(error){
                console.log(error);
            } 
        });
        db.query('update app set status = "Consulted" where date < CURRENT_DATE', async (error,result) =>{
            if(error){
                console.log(error);
            } 
        });
        db.query('select * from app where patient like ? order by date desc',[p1], async (error,result) =>{
            if(error){
                console.log(error);
            } 
        else{
            var i;
            var r="";
            for(i=0;i<20;i++){
                if(result[i]){
                    
                    r+='<tr><td>'+(i+1)+'</td><td>Dr. '+result[i].doctor+'</td><td>'+result[i].date+'</td><td>'+result[i].time+' hrs</td><td><a href="https://localhost:8443/">'+result[i].status+'</a></td></tr> ';
                }
            }
        res.send('<head><title>Consultation</title><link rel="stylesheet" href="/ta.css"></head><body><button class="btn-right"><a href="/patient_home">Back</a></button><div class="cont"><h1>REMINDER</h1><table class="content-table"><thead><tr><th>S.no</th><th>Doctor</th><th>Date</th><th>Time</th><th>Status</th> </tr> </thead><tbody>'+r+'</tbody> </table> </div></body>');
    }});}
    catch(error){console.log(error);}
}   
exports.dcal= async (req,res)=>{
    try{
        db.query('update app set status = "Pending" where date > CURRENT_DATE', async (error,result) =>{
            if(error){
                console.log(error);
            } 
        });
        db.query('update app set status = "Consulted" where date < CURRENT_DATE', async (error,result) =>{
            if(error){
                console.log(error);
            } 
        });
        db.query('select * from app where doctor like ? order by date desc',[d1], async (error,result) =>{
            if(error){
                console.log(error);
            } 
        else{
            var i;
            var r="";
            for(i=0;i<20;i++){
                if(result[i]){
                    
                    r+='<tr><td>'+(i+1)+'</td><td>'+result[i].patient+'</td><td>'+result[i].date+'</td><td>'+result[i].time+' hrs</td><td><a href="https://localhost:8443/">'+result[i].status+'</a></td></tr> ';
                }
            }
        res.send('<head><title>Consultation</title><link rel="stylesheet" href="/ta.css"></head><body><button class="btn-right"><a href="/doctor_home">Back</a></button><div class="cont"><h1>REMINDER</h1><table class="content-table"><thead><tr><th>S.no</th><th>Patient</th><th>Date</th><th>Time</th><th>Status</th> </tr> </thead><tbody>'+r+'</tbody> </table> </div></body>');
    }});}
    catch(error){console.log(error);}
}   
exports.loginp = async (req,res)=>{
    try{
      const{email,password}=req.body;
      
      if(!email || !password ){
          return res.status(400).render('loginp',{
              message: "Please provide all credentials"
          })
      };
      db.query('select * from patientt where email=?',[email], async (error,result) =>{
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
      db.query('select * from adminn where email=?',[email], async (error,result) =>{
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
      db.query('select * from doctorr where email=?',[email], async (error,result) =>{
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
   try{ db.query('insert into appointmentt set ?',{patient:p1,doctor:var2},async (error,result) =>{
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
    const Answer=req.body.Answer; 

    db.query('SELECT email from doctorr where email = ?', [email], async (error, result) => {
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
        if(!firstName || !email || !age || !password || !city || !specialization || !qualification ||!day ||!time || !time_off ||!Answer){return res.status(400).render('registerd',{
            message: "Please provide all credentials"
        });}
      else{  db.query('insert into doctor11 set ?',{firstName: firstName,email: email, age: age, password: hpwd, city: city, specialization: specialization,  qualification: qualification, day:day, time:time, time_off:time_off, Answer:Answer}, async (error,result) =>{
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
exports.doctor_auth = (req,res) => {
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
    const Answer=req.body.Answer;
    const fee=req.body.fee; 

        
        if(!firstName || !email || !age || !password || !city || !specialization || !qualification ||!day ||!time || !time_off ||!Answer || !fee){return res.status(400).render('doctor_auth',{
            message: "Please provide all credentials"
        });}
      else{  db.query('insert into doctorr set ?',{firstName: firstName,email: email, age: age, password: password, city: city, specialization: specialization,  qualification: qualification, day:day, time:time, time_off:time_off, Answer:Answer}, async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("admin_home");
            }
            
        })
       
    }
  
   
}
exports.registerp = (req,res) => {
    console.log(req.body);
    const firstName=req.body.firstName;
    const email = req.body.email;
    const age = req.body.age;
    const password=req.body.password;
    const cpwd=req.body.cpwd;
    const city=req.body.city;
    const Answer=req.body.Answer;
    db.query('SELECT email from patientt where email = ?', [email], async (error, result) => {
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
        if(!firstName || !email || !age || !password || !city || !Answer){return res.status(400).render('registerp',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('insert into patientt set ?',{firstName: firstName,email: email, age: age, password: hpwd, city: city, Answer:Answer}, async (error,result) =>{
            if(error){
                console.log(error);
            } 
            else {
                res.render("index");
            }
            
        })}
      
        
        
    });
    
}

exports.admin_confirm = (req,res) => {
    console.log(req.body);
    const patient=req.body.patient;
    const doctor = req.body.doctor;
    const fee = req.body.fee;
    const date=req.body.date;
    const time=req.body.time;
        
       
        if(!patient || !doctor || !fee || !date || !time){return res.status(400).render('admin_confirm',{
            message: "Please provide all credentials"
        });}
        else{
        db.query('insert into app set ?',{patient:patient, doctor:doctor, fee:fee, date:date, time:time, status:'-'}, async (error,result) =>{
                
                return res.render("admin_home");
           
            
        })}
      
        
        
    }
exports.pforgot_pw = async(req,res) => {
    const {email,answer} = req.body
    try{
        if(!email || !answer){
            return res.status(400).render('pforgot_pw',{
                message: "Please enter all the fields"
            })
        }
        db.query('SELECT * FROM patientt WHERE email = ?',[email],async(error,results)=>{
            //const answer = req.body
            console.log(results);
            console.log(answer)
            console.log(results[0])
            if(results[0]==undefined){
               return res.status(400).render('pforgot_pw',{
                    message:"The entered email address is not registered"
                })
            }
            //const {email,answer} =req.body;
            else if(answer!=results[0].Answer){
                console.log(email)
                //console.log(results[0].Email)
                res.render('pforgot_pw',{
                    message:"Your answer to the security question is incorrect"
                })
            }
            else if(answer==results[0].Answer){
               res.render('preset_pw',{
                    message:"You can now reset you password"
                })
            }
        })
    }
    catch(error){
        console.log(error);
    }
}
exports.preset_pw = (req,res) => {
    console.log(req.body);

    const {email,pw,rpw} = req.body;

    db.query('SELECT * FROM patientt WHERE email = ?',[email],async(error,results) =>{
        if(error){
            console.log(error);
        }
        if(pw != rpw){
            return res.render('preset_pw',{
                message: "Passwords do not match"
            });
        }
        let hashedPassword = await bcrypt.hash(pw,5);
        console.log(hashedPassword)
        db.query('UPDATE patientt SET ? where email=?',[{Password:hashedPassword},email],async(error,results) => {
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('loginp',{
                        message: "Password reset successfully"
                    })

                }})
        });
}
exports.dforgot_pw = async(req,res) => {
    const {email,answer} = req.body
    try{
        if(!email || !answer){
            return res.status(400).render('dforgot_pw',{
                message: "Please enter all the fields"
            })
        }
        db.query('SELECT * FROM doctorr WHERE email = ?',[email],async(error,results)=>{
            //const answer = req.body
            console.log(results);
            console.log(answer)
            console.log(results[0])
            if(results[0]==undefined){
               return res.status(400).render('dforgot_pw',{
                    message:"The entered email address is not registered"
                })
            }
            //const {email,answer} =req.body;
            else if(answer!=results[0].Answer){
                console.log(email)
                //console.log(results[0].Email)
                res.render('dforgot_pw',{
                    message:"Your answer to the security question is incorrect"
                })
            }
            else if(answer==results[0].Answer){
               res.render('dreset_pw',{
                    message:"You can now reset you password"
                })
            }
        })
    }
    catch(error){
        console.log(error);
    }
}
exports.dreset_pw = (req,res) => {
    console.log(req.body);

    const {email,pw,rpw} = req.body;

    db.query('SELECT * FROM doctorr WHERE email = ?',[email],async(error,results) =>{
        if(error){
            console.log(error);
        }
        if(pw != rpw){
            return res.render('dreset_pw',{
                message: "Passwords do not match"
            });
        }
        let hashedPassword = await bcrypt.hash(pw,5);
        console.log(hashedPassword)
        db.query('UPDATE doctorr SET ? where email=?',[{Password:hashedPassword},email],async(error,results) => {
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('logind',{
                        message: "Password reset successfully"
                    })

                }})
        });
}
exports.aforgot_pw = async(req,res) => {
    const {email,answer} = req.body
    try{
        if(!email || !answer){
            return res.status(400).render('aforgot_pw',{
                message: "Please enter all the fields"
            })
        }
        db.query('SELECT * FROM adminn WHERE email = ?',[email],async(error,results)=>{
            //const answer = req.body
            console.log(results);
            console.log(answer)
            console.log(results[0])
            if(results[0]==undefined){
               return res.status(400).render('aforgot_pw',{
                    message:"The entered email address is not registered"
                })
            }
            //const {email,answer} =req.body;
            else if(answer!=results[0].Answer){
                console.log(email)
                //console.log(results[0].Email)
                res.render('aforgot_pw',{
                    message:"Your answer to the security question is incorrect"
                })
            }
            else if(answer==results[0].Answer){
               res.render('areset_pw',{
                    message:"You can now reset you password"
                })
            }
        })
    }
    catch(error){
        console.log(error);
    }
}
exports.areset_pw = (req,res) => {
    console.log(req.body);

    const {email,pw,rpw} = req.body;

    db.query('SELECT * FROM adminn WHERE email = ?',[email],async(error,results) =>{
        if(error){
            console.log(error);
        }
        if(pw != rpw){
            return res.render('areset_pw',{
                message: "Passwords do not match"
            });
        }
        
        console.log(hashedPassword)
        db.query('UPDATE adminn SET ? where email=?',[{Password:hashedPassword},email],async(error,results) => {
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('logina',{
                        message: "Password reset successfully"
                    })

                }})
        });
}