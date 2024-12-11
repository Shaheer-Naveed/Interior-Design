document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('number').value;
    var feed = document.getElementById('feedback').value;

    nameRegex = /^[a-zA-Z]$/;
    emailRegex = /^[a-zA-Z\d]+@[a-zA-z]+\.[a-zA-Z]$/;
    numRegex = /^[\d] $/;

    if (name == '' || email == '' || num == '' || !nameRegex.test(name) || !emailRegex.test(email) || !numRegex.test(num)  ) {
        alert('please fill the required fields');
    }
    else {
        alert('Name:' + name + '\nEmail:' + email + '\nNumber:' + num + '\nFeedback:' + feed);
    }
});
})