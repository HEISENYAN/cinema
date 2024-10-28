import express from "express"
import session from "express-session"
const app = express()
const path = "static"
app.use(
    session({
        secret:"cinema",
        resave:false,
        saveUninitialized:false,
        cookie:{httpOnly:true, masAge:60000}
    })
)
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}));
app.use('/',express.static(path)) // Use static files in /static

app.listen(8080)