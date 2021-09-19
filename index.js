const express = require ('express');
const app = express();

const { user } = require ('./models');

app.use(express.json())

app.use(express.urlencoded({
    extended:false
})
)

app.set('view engine', 'ejs');

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

app.get('/users/update/:id', (req,res)=>{
    user.findOne({where: {id:req.params.id}
    })
    .then((user)=>{
        res.render('users/update', {user})
    })
})

app.post('/users/update/:id', (req,res)=>{
    user.update({
        username: req.body.username,
        password: req.body.password
    }, {where: {id: req.params.id}
    })
    .then(()=>{
        res.send('data berhasil di update')
    })
})

app.get ('/users/delete/:id', (req,res)=>{
    user.destroy({where: {id: req.params.id}})
    .then(()=>{
        res.send('data user berhasil di hapus')
    })
})





app.listen(3002, ()=>{
    console.log("server menyala")
})