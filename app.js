const express = require('express');
const app = express();

//Middlewares
// app.use('/posts', () => {
//     console.log('Middleware')
// })

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home')
})
app.get('/posts', (req, res) => {
    res.send('we are on posts')
})

//get, post, delete, patch (update)

app.listen(3000, () => console.log('app running'));