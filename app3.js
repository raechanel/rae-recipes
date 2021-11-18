function seafoodQuestion(){
    let anotherPicuture = prompt('Do you like seafood?');
    let picURL = "https://www.lifesambrosia.com/wp-content/uploads/creamy-shrimp-and-scallop-pasta-1-500x500.jpg"

    if(anotherPicuture.toLowerCase() == "yes"){
    // <img id="shrimp" src="https://www.lifesambrosia.com/wp-content/uploads/creamy-shrimp-and-scallop-pasta-1-500x500.jpg ">

        document.write('<img src="' + picURL + '">')
    }
}

seafoodQuestion ();