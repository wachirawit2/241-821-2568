const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let users = []
let counter = 1;
let conn = null

const initMySQL = async () => {
    try {
        conn = await mysql.createConnection({
            host: '127.0.0.1', 
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8821
        });
        console.log("Database connected successfully!"); // เพิ่มบรรทัดนี้
    } catch (err) {
        console.error("Database connection FAILED:", err); // เพิ่มบรรทัดนี้
    }
}
// path = GET users สำหรับ get ข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running at http://localhost:${port}`);
});
// path = GET users/:id สำหรับ get ข้อมูล user ตาม id
app.get('/users/:id', async (req, res) => {
    try { 
        const userId = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', [userId]);
        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' }; 
        }

        res.json(results[0][0]);
    } catch (error) { 
        console.error('Error fetching user:', error.message);
        let statusCode = error.statusCode || 500; 
        
        res.status(statusCode).json({
            message: error.message || 'Error fetching user',
            error: error.message 
        });
    }
});
const validateData = (userData) => { // แก้ไข: เพิ่ม parameter userData
    let errors = [];
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if(!userData.age){
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender){
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests){
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 ข้อ');
    }
    if (!userData.description){
        errors.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ');
    }
    return errors; // แก้ไข: ต้อง return errors กลับไปด้วย
}

// path = POST users สำหรับสร้าง user ใหม่
app.post('/users', async (req, res) => {
    try {
        let user = req.body; 
        const errors = validateData(user); // แก้จาก validataData เป็น validateData
        if (errors.length > 0) {
            // ถ้ามี error
            res.status(500).json({
                message: 'กรอกข้อมูลไม่ครบถ้วน',
                errors: errors // แก้จาก error,errors และ results[0] ออกเพราะมันยังไม่มีค่า
            });
            return; // เพิ่ม return เพื่อให้หยุดทำงาน ไม่ไปบันทึกลง DB ต่อ
        }

        const [results] = await conn.query('INSERT INTO users SET ?', user); 
        
        res.json({
            message: 'User created successfully',
            data: results 
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

// path = DELETE /users/:id สำหรับลบ user ตาม id
app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const [results] = await conn.query('DELETE FROM users WHERE id = ?', [userId]);

        if (results.affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }

        res.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error deleting user',
            error: error.message
        });
    }
});


// PUT /users/:id สำหรับแก้ไขข้อมูล user ตาม id 
app.put('/users/:id', async (req, res) => {
    try {
        let updatedUser = req.body;
        const results =await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, req.params.id]);
        if (results[0].affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found'};
        }
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error updating user',
            error: error.message
        });
    }
});
