const express = require('express')
const app =express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

let users =[
   
];



app.get('/',(req,res)=>{

    res.render('Home',{users:users})
})

app.get('/adduser',(req,res)=>{
    res.render("AddUser")
})

app.post('/adduser',(req,res)=>{
    const {name,email} = req.body;
 
    const newUser ={id:Date.now(),name:name,email:email}
    users.push(newUser)

    res.redirect('/');

})
app.get('/edituser/:id',(req,res)=>{
    let id = req.params.id
    let user = users.find((it)=> it.id ==id)
    console.log(user);
    
 res.render('EditUser',{user}) 

})
app.post('/edituser/:id',(req,res)=>{
    let {name ,email} =req.body
    console.log(name,email);
    console.log()

    let user = users.find((it)=>it.id ==req.params.id)
     user.name =name
     user.email =email
    console.log(users);
    res.redirect('/')
})





app.listen(4000,()=>console.log('server is running')
)










