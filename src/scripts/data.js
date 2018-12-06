//This section gets all the data from the api/ database to be populated.

const data = {
    getResources() {
      return fetch("http://localhost:8088/resources")
      // .then(function(response){
      //   response.json();
      // })
      .then(response => response.json());
    }
  };