//Login
const userName = document.getElementsById('email').toLowerCase();
const password = document.getElementsById('inputPassword3');

const user = {
    userName = userName,
    password = password
}

fetch("locahost:3000").then(() => (res, req) {
    if (user > 0) {
        res.status(400)
    } else {
        return user = null
    }
}). catch (error) {
    return errror().res.status(401)
}


const LoginUser = () => {
    if (userName === db.username && password === db.password) {
        return `Welcome ${Username}`;
    } else if (!password && !userName) {
        return `User not found`
    } else {
        return `error logging in`
    }
};