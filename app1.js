function askUserEmail(){
    let email = prompt('Enter your Email Address to subscribe!');

    console.log(email);
    //         'Welcome ' + 'Rae'
    if(email== 'hayesregan@yahoo.com'){
        document.write('Welcome Chef ' + email)
    } else {
        document.write('Welcome Foodie' + email)
    }
}

askUserEmail ()