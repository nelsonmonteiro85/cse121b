// reusable!
const myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  
  // requires a food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires a place object
  // returns that object's properties embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );
  