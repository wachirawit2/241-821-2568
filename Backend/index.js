const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;

//path = GET /users
app.get('/users',  (req, res) => {
    res.json(users);
});

//path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({ 
        message: 'User added successfully', 
        user: user });
})

//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id
    let updatedUser = req.body;
    // หา users จาก id
    let selectedIndex = users.findIndex(user => user.id == id)
    //update users นั้น
    if (updatedUser.name) {
        users[selectedIndex].name = updatedUser.name    
    }
    if (updatedUser.age) {
        users[selectedIndex].age = updatedUser.age
    }

    //ส่ง response กลับไปว่า update users ที่เลือกสำเร็จแล้ว

    res.json({
        message: 'User updated successfully',
        data : {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })  
})

//path = DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    let id = req.params.id
    let selectedIndex = users.findIndex(user => user.id == id)
    if (selectedIndex !== -1) {
        users.splice(selectedIndex, 1)
        res.json({
            message: 'User deleted successfully',
            data: {
                indexDeleted: selectedIndex
            }
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})

//path = delete /users
app.delete('/users', (req, res) => {
    // หา index ของ users ทีต้องการลบ id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);
    // ลบ user จาก array โดยใช้ delete
    user.splice(seletedIndex,1);
    // ส่ง response กลับไปว่า delete user ที่เลือกสำเร็จแล้ว
    res.json({
        message: 'User deleted successfully',
        data: {
            indexDeleted: seletedIndex
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});