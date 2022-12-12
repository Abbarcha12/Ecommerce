const router = require("express").Router()
const User = require("../models/User")
// User Register

router.post("/register", async (req, res) => {
 const newUser = new User({
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,

 })
 try {
  const savedUser = await newUser.save()

 } catch (error) {
console.log(error)
 }
})


module.exports = router