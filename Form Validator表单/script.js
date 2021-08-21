const { url } = require("inspector");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit");
// const small=document.getElementsByTagName('small');



// 触发submit事件
function triggersubmit() {
    if (uname() === false) {
        return triggersubmit();//若失败，则重新返回点击提交
    }
    else if (enteremail() === false) {
        return triggersubmit();
    }
    else if (enterpassword() === false) {
        return triggersubmit();
    }
    else if (enterpassword2() === false) {
        return triggersubmit();
    }
    else {
        alert('全部输入成功');
    }
}

// 用户名事件
function uname() {
    const username1 = username.value;
    if (username1 >= 3) {
        fetch("http://localhost:8080/")
        .then(username1=>username1.json)
    } else {
        alert('username框至少输入三个字符');
        return false;
    }
}

// 邮件事件
function enteremail() {
    const email1 = email.value;
    if (email1.length >= 3) {
        
    } else {
        alert('电子邮件无效');
        return false;
    }
}

//密码事件
function enterpassword() {
    const password1 = password.value;
    if (password1.length >= 6) {
        password1.innerHTML=html;
    } else {
        alert('密码必须至少6个字符');
        return false;
    }
}
// 第二次输入密码
function enterpassword2() {
    const password2_1 = password2.value;
    if (password2_1.length >= 6) {
        password2.innerHTML=html;
    } else {
        alert('再次输入密码错误');
        return false;
    }
}