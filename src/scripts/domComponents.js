// This module is responsible for appending DOM components to the DOM.

const domComponents = {
    createDomElement (elementType, content, cssClass) {
      const element = document.createElement(elementType);
      element.textContent = content;
      if(cssClass) {
        element.classList.add(cssClass);
      }
      return element;
    },
    createResourcesDocumentFragments(resourcesArray) {
  
      let domFragments = {
        articles: document.createDocumentFragment(),
        videos: document.createDocumentFragment()
      };
      resourcesArray.forEach(resourceObj => {
        const resourceSection = this.createDomElement("section", null, "resource-section");
        const linkElement = this.createDomElement("a", resourceObj.name, null);
        linkElement.setAttribute("href", resourceObj.link);
        resourceSection.appendChild(linkElement);
        if(resourceObj.type === "Video") {
          domFragments.videos.appendChild(resourceSection);
        } else if(resourceObj.type === "Article"){
          domFragments.articles.appendChild(resourceSection);
        }
      });
    
      return domFragments;
      }
  };