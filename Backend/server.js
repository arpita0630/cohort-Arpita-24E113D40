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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
