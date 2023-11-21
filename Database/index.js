import fs from 'fs'
import path from 'path'

const readJsonFileSync = filePath => {
  const fullFilePath = path.join('./Database', filePath)
  const fileContents = fs.readFileSync(fullFilePath, 'utf8')
  return JSON.parse(fileContents)
}

const courses = readJsonFileSync('./courses.json')
const modules = readJsonFileSync('./modules.json')
const assignments = readJsonFileSync('./assignments.json')
const users = readJsonFileSync('./users.json')
const grades = readJsonFileSync('./grades.json')
const enrollments = readJsonFileSync('./enrollments.json')

export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments
}
