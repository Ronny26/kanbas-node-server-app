import express from 'express'
import cors from 'cors'
import Hello from './hello.js'
import CourseRoutes from './courses/routes.js'
import Lab5 from './lab5.js'
import ModuleRoutes from './modules/routes.js'
import 'dotenv/config'
const app = express()
app.use(cors())
CourseRoutes(app)
app.use(express.json())
ModuleRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
