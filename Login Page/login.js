//Login
 
    function validateform(){  
        var name=document.myform.email.value;  
        var password=document.myform.password.value;  
          
        if (name==null || name==""){  
          alert("Email can't be blank");  
          return false;  
        }else if(password.length<6){  
          alert("Password must be at least 6 characters long.");  
          return false;  
          }  
        }   


// //RESTApi simultion
// fetch("https://example.com").then((res, req) => {
//     if (user > 0) {
//         res.status(400)
//     } else {
//         return user = null
//     }
// }).catch((error) => {
//     return error().res.status(401)
// })

// //login
// const LoginUser = () => {
//     if (userName === db.username && password === db.password) {
//         return `Welcome ${Username}`;
//     } else if (!password && !userName) {
//         return `User not found`
//     } else {
//         return `error logging in`
//     }
// }

