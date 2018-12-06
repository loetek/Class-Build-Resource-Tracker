// This module is responsible for taking data, building out DOM components and returning those components.
// This will append input. It will also appendResources. appendAllResources.  This Creates the HTML data. 
//


// This module is responsible for taking data, building out DOM components and returning those components.

const domBuilder = {
    name: "Dom Builder Component",
    // appendInputForm : function() {
    //   console.log("Hello");
    // }
    appendInputForm () {
      let formContainer = document.querySelector("#form-container");
  
      formContainer.innerHTML = `<section>
      <label for="resourcename">Resource Name</label>
      <input type="text" name="resourcename" id="resource-name">
      </section>
      <section>
      <label for="resourcelink">Resource Link</label>
      <input type="text" name="resourcelink" id="resource-link">
      </section>
      <section>
      <label for="resourcetype">Resource Type</label>
      <input type="radio" name="resourcetype" value="Video" checked> Video
      <input type="radio" name="resourcetype" value="Article"> Article<br>
      </section>
      <section>
        <button type="button" id="add-button">Add Resource</button>
      </section>`;
    },
    appendResourceContainers () {
      let divContainer = document.querySelector("#display-container");
      divContainer.appendChild(domComponents.createDomElement("h3", "Video Resources", null));
      const videosContainer = domComponents.createDomElement("article", null, "resource-container");
      videosContainer.setAttribute("id", "videos-container");
      divContainer.appendChild(videosContainer);
      divContainer.appendChild(domComponents.createDomElement("h3", "Article Resources", null));
      const articlesContainer = domComponents.createDomElement("article", null, "resource-container");
      articlesContainer.setAttribute("id", "articles-container");
      divContainer.appendChild(articlesContainer);
    },
    appendAllResources (fragmentsObj) {
      let articlesContainer = document.querySelector("#articles-container");
      let videosContainer = document.querySelector("#videos-container");
      articlesContainer.innerHTML = "";
      videosContainer.innerHTML = "";
      articlesContainer.appendChild(fragmentsObj.articles);
      videosContainer.appendChild(fragmentsObj.videos);
    },
    appendSearchContainer () {
      let divContainer = document.querySelector("#display-container");
  
      const searchContainer = domComponents.createDomElement("article", null, "search-container");
  
      searchContainer.appendChild(domComponents.createDomElement("label", "Search", null));
      let searchInput = document.createElement("input");
      searchInput.setAttribute("type", "text");
      searchInput.setAttribute("name", "searchinput");
      searchContainer.appendChild(searchInput);
  
      let searchButton = domComponents.createDomElement("button", "Search", null);
      searchButton.setAttribute("id", "search-button");
      // searchButton.addEventListener("click", eventListeners.handleSearchButton);
      searchContainer.appendChild(searchButton);
  
      divContainer.appendChild(searchContainer);
    }
  };