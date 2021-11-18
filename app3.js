let anotherPicuture = prompt('Do you like seafood?');
let picURL = "https://www.lifesambrosia.com/wp-content/uploads/creamy-shrimp-and-scallop-pasta-1-500x500.jpg"
if(anotherPicuture.toLowerCase() == "yes"){
    // <img id="shrimp" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsystemofabrown.com%2Fshrimp-scallop-pasta-in-white-wine-cream-sauce%2F&psig=AOvVaw2gSvHIqRVzK_HAoKq0fNwY&ust=1637281718174000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj3zuzToPQCFQAAAAAdAAAAABAY">

    document.write('<img src="' + picURL + '">')
}