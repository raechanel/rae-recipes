function askUserEmail(){
    let email = prompt('Enter your Email Address to subscribe!');

    console.log(email);
    //         'Welcome ' + 'Rae'
    if(email== 'hayesregan@yahoo.com'){
        document.write('Welcome Chef ' + email)
    } else {
        document.write('Welcome Foodie '  + email)
    }
}


function seafoodQuestion(){
    let exit = false;
    while (exit==false) 
    {let anotherPicuture = prompt('Do you want to see a seafood picture?');
    if(anotherPicuture.toLowerCase() == "yes"){
        // <img id="shrimp" src="https://www.lifesambrosia.com/wp-content/uploads/creamy-shrimp-and-scallop-pasta-1-500x500.jpg ">
        let picURL = "https://www.lifesambrosia.com/wp-content/uploads/creamy-shrimp-and-scallop-pasta-1-500x500.jpg"
            document.write('<img id="pasta" src="' + picURL + '">') 
            break;}
    if(anotherPicuture.toLowerCase() == "no"){
        exit = true;
    
    }
    else { alert ('Please enter "Yes" or "No"')}}
   
}

function anotherRecipe(){
    let userAnswer = prompt('You can get the recipe for our second best dish. Just type YES!');
    // console.log(userAnswer);
    if(userAnswer.toUpperCase() == "YES"){
        document.write('<h1>Seafood Alfredo</h1> <h2> Ingredients </h2> <p> <ul> <li> 4 ounces uncooked fettuccine <li> 1/4 pound uncooked medium shrimp, peeled and deveined <li> 1/4 pound sea scallops, halved <li> 2 tablespoons olive oil, divided <li> 1 small shallot, chopped <li> 1 garlic clove, minced <li> 1/4 cup chicken broth <li> 1/4 cup white wine or additional chicken broth <li> 1 cup heavy whipping cream or half-and-half cream <li> 1/2 cup grated Parmesan cheese <li> 1 Roma tomato, diced <li> 2 tablespoons minced fresh parsley </ul> </p> <h2>Directions</h2> <p> <ol> <li> Cook the fettuccine according to package directions. Meanwhile, in a large skillet, saute shrimp and scallops in 1 tablespoon oil for 3-5 minutes or until shrimp turn pink and scallops are opaque. Remove and keep warm.</li> <li>In the same skillet, saute shallot in remaining oil until tender. Add garlic; cook 1 minute longer. Stir in broth and wine. Bring to a boil. Reduce heat; simmer, uncovered, for 6-8 minutes or until most of the liquid has evaporated. Stir in cream; cook, uncovered, over medium heat for 5 minutes or until thickened.</li> <li> Drain fettuccine; stir into cream sauce. Add shrimp, scallops and cheese; toss to coat. Sprinkle with tomato and parsley.</li> </ol> </p>')
    }
    console.log(userAnswer);
}
 
