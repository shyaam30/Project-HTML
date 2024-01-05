
const signUp = e => {   
        
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
        
    
    let formData = JSON.parse(localStorage.getItem('formData')) ||  [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
             data.fname.toLowercase() == fname.toLowercase() &&
             data.lname.toLowercase() == lname.toLowercase()
            );

    if(!exist){
        formData.push({fname,lname,email,pwd});
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created.\n\nPlesae Sign In using the link below.");
    }
    else{
        alert("Ooopsss....Duplicate found!!!\n You have alerady signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value; 
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowercase() == email && data.pwd.toLowercase() == pwd );
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}