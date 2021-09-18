const express = require ('express');
const app = express();

const { user } = require ('./models');

app.use(express.json())

app.use(express.urlencoded({
    extended:false
})
)

app.get ('/users', (req,res)=>{
    user.findAll()
    .then((users) =>{
        res.json(users);
    })
})

app.post ('/users', (req,res)=>{
    user.create({
        username: "test",
        password: "testpassword"
    })
    .then(()=>{
        res.send('user berhasil dibuat')
    })
})


app.listen(3002, ()=>{
    console.log("server menyala")
})