import express from 'express'
import session from 'express-session'
import cors from 'cors'
import Hello from './hello.js'
import CourseRoutes from './courses/routes.js'
import Lab5 from './lab5.js'
import ModuleRoutes from './modules/routes.js'
import 'dotenv/config'
import mongoose from 'mongoose'
import UserRoutes from './users/routes.js'
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING)
const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
)
const sessionOptions = {
  secret: 'any string',
  resave: false,
  saveUninitialized: false
}
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true
  }
}

app.use(session(sessionOptions))

CourseRoutes(app)
app.use(express.json())
ModuleRoutes(app)
UserRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
