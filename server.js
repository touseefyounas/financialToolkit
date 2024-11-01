const express = require('express')

const session = require('express-session')

const app = express()

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

