const express = require('express');
const app = express();
const array_sort = require("./lib/array-sort")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})




app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.get("/task1", (req, res) => {
    let colors = ["Red", "Blue", "Yellow", "Green"]
    console.log("Before ", colors)

    let result = array_sort.ascending_sort(colors)
    console.log("After ", result)

    return res.send(result)
})

app.get("/task2", (req, res) => {
    let colors = ["Red", "Blue", "Yellow", "Green"]
    console.log("Before ", colors)

    let result = array_sort.descending_sort(colors)
    console.log("After ", result)

    return res.send(result)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})