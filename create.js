const { user } = require ('./models');

user.create({
    username: 'test',
    password: 'lorem ipsum dolor sit amet',
})

.then((user)=>{
    console.log(user)
})