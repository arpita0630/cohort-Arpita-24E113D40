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
    const loginQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`;
    try{
        const result = await db.query(loginQuery, [
            username,password
        ]);
        res.status(200).json(result.rows[0]);
   
 }
    catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});
app.patch('/profile', async(req, res) => {
    const { username, password } = req.body;
    const loginQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`;
    try{
        const result = await db.query(loginQuery, [
            username,password
        ]);
        res.status(200).json(result.rows[0]);
   
 

    const { username, email, age } = req.body;
    const updateUserQuery = `UPDATE users SET email = $1, age = $2 WHERE username = $3 RETURNING *`;
    try
    {
        const result= await db.query(updateUserQuery, [
            email, age, username

        ]);
        res.status(200).json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update user profile' });
    }
}
catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});
app.delete("/profile", async (req, res) => {
    const getuser = req.user.registration_number;
    const deleteUserQuery = `DELETE FROM users WHERE registration_number = $1`;
    try {
        await db.query(deleteUserQuery, [getuser]);
        res.status(200).json({
            status: "success",
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Something went wrong"
        });
    }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
