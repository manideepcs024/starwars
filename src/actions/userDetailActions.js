export function userDetailsFetchSuccess(user){
    console.log("USER", user);
    return {type: "USER_DETAIL_SUCCESS", payload: {user: user}};
}

export function userDetailsFetchRequest(){
    console.log("I am called user fecth");
    return function(dispatch){
    console.log("I am called user fecth here...");
        
        fetch('https://api.github.com/users/manideepcs024')
  .then(function(response) {
      response.json().then(body=>{
          console.log("User Details", body);
           return   dispatch(userDetailsFetchSuccess(body));

    });
   
    
     
    // return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  }); 
    };
}