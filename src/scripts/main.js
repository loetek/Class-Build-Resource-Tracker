data.getResources()
.then(resourcesArray => {
  console.log(resourcesArray);
  let resourcesFragments = domComponents.createResourcesDocumentFragments(resourcesArray);
  console.log(resourcesFragments);
  domBuilder.appendAllResources(resourcesFragments);
});
