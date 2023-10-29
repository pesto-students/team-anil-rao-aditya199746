const mongoose = require('mongoose');
const bcrypt=require("bcryptjs")

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

userSchema.pre("save",async function(next){
  if(this.isModified("password"))
  {
      this.password=await bcrypt.hash(this.password,12)
      console.log(this.password,"...")
  }  
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;