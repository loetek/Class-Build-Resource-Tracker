//This section gets all the data from the api/ database to be populated.

//Brings them in like it is an object. 

const data = {
    getResources() {
      return fetch("http://localhost:8088/resources")
      // .then(function(response){
      //   response.json();
      // })
      .then(response => response.json());
    }

    queryResources(userInput) {
        return fetch(`http://localhost:8088/resources?q=${userInput}`)
        // .then(function(response){
        //   response.json();
        // })
        .then(response => response.json());
      }
  


  };