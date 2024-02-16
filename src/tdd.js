    // return a mesaage if no email is passed 
    // return a mesaage if email is not string  
    // return a mesaage if length is less than 8 characters 
    // return a mesaage if invalid email is passed  
    // return a mesaage if invalid email is passed 
    // return success message if valid email passed 

module.exports.validateEmail = (email) => {
    if(!email || typeof email !== "string") {
      return "invalid email";
    }
  
    if(email.trim().length < 8) {
      return "email should be at least 8 characters";
    }
  
    if(!email.includes("@") || !email.includes(".com")) {
      return "please enter valid email";
    }
  
    return "valid email, success";
  }
  