//Login

function validateform(){  
    //formValidation
        var email = document.myform.email.value;  
        var password = document.myform.password.value;  
          
        if (email == null || email == ""){  
          alert("Email can't be blank");  
          return false;  
        } else if(password.length < 6){  
          alert("Password must be at least 6 characters long.");  
          return false;  
          } else if (password.length == "") {
              alert("Please type in password")
          } 

      //Email & password validation
            if (email == "") {  
            email.innerHTML =  
            " <i class='bi bi-check-circle'></i> Please enter your email";  
            status=false;  
            } else {  
            email.innerHTML = " <i class='bi bi-check-circle'></i>";  
            status = true;  
            }  
            if (password < 6) {  
            password.innerHTML =  
            " <i class='bi bi-check-circle'></i> Password must be at least 6 char long";  
            status = false;  
            } else {  
            password.innerHTML = " <i class='bi bi-check-circle'></i>";  
            }  
            return status;  
    }
      


    //RESTApi simultion
    fetch("https://example.com").then((res, req) => {
        if (user > 0) {
            res.status(400)
        } else {
            return user = null
        }
    }).catch((error) => {
        return error().res.status(401)
    })

    //login
    const LoginUser = () => {
        if (userName === db.username && password === db.password) {
            return `Welcome ${Username}`;
        } else if (!password && !userName) {
            return `User not found`
        } else {
            return `error logging in`
        }
    }

