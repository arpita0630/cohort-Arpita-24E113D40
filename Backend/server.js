const  express = require("express");
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to User Management API'
    })
})
app.get('/users', async(req, res) => {
    const getUsersQuery = `SELECT * FROM users`;
    try {
        const result = await db.query(getUsersQuery);
        res.status(200).json(result.rows)
        
    }

    catch (error) {
    res.status(500).json([]);
}
    }
)

app.post('/user', async(req, res) => {
      const { username, registration_no, email, password,age} = req.body;
        const insertUserQuery = `INSERT INTO users (username, registration_no, email, password, age) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        try{
            const result = await db.query(createUserQuery, [
            username,
            regustration_no,
            email,
            password,
            age
        ]);
        res.status(201).json(result.rows[0]);}
        catch (error) {
        res.status(500).json({ error: 'Failed to create user' });

        }
   } )
app.post('/login',async(req, res) => {
    const { username, password } = req.body;
    const getUserQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`;
    try{
        const result = await db.query(getUserQuery, [
            username,password
        ]);
        res.status(200).json(result.rows[0]);
   
 }
    catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
