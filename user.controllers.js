//functtion
 const user = require("../models/user.model");


 // controller for inserting users


 const insertUsers = async(req, res) => {




    const {users} = req.body;
    console.log(users)
    const insertedUsers = await User.insertMany(users)
    return res.status(201).json({ message : "user inserted",})

    // const insertedUsers = await UserActivation.insertMany([{
    //     "name": "abc",
    //     "email":"abc@gmail.com",
    //     "city": "delhi",
    //     "gender": "male",
    //     "password": "abc",
    //     "age": 30

    // },

    // {
    //     "name": "bd",
    //     "email":"bd@gmail.com",
    //     "city": "delhi",
    //     "gender": "male",
    //     "password": "bd",
    //     "age": 29 
    // },
    // ])

    // return res.json({message : "user inserted", data : insertUsers})
 }
 module.exports ={insertUsers}