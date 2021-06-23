//Login
const name = document.getElementsById('fname').toLowerCase();
const password = document.getElementsById('inputPassword3')


const Login = () => {
    if (username === username && password === password) {
        return `Welcome ${name}`;
    } else {
        return `error logging in`
    }
};