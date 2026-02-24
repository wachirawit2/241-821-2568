const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;
app.use(bodyParser.json());
let users = []
let counter = 1;

let conn = null
const initDbConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

// path = GET users สำหรับ get ข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

app.listen(port, async () => {
    await initDbConnection();
    console.log(`Server is running at http://localhost:${port}`);
});