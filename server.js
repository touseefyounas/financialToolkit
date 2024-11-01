require('dotenv').config()

const express = require('express')
const session = require('express-session')

const store = new session.MemoryStore()

const app = express()

const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        maxAge: 300000000
    }
}))

app.get('/', (req, res) => {
    res.send('Financial Kit Backend Running');
})

app.use(express.json())

app.post('/login', (req, res, next)=> {
    userController.loginUser(req, res, next);
})


app.post('/logout', (req, res)=> {
    req.session.destroy((err) => {
        if (err){
            return res.status(500).send('Failed to log out')
        }
        res.send('Logged Out Successfully')
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})