/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Nelson Monteiro',
    photo: 'images/profile.jpg',
    favoriteFoods: [
        'Pizza', 
        'Francesinha', 
        'Rojões', 
        'Tripas', 
        'Picanha'
    ],
    hobbies: [
        'Play videogames',
        'Mountain Biking',
        'Play with my children',
        'Watch movies',
        'Listen music'
    ],
    placesLived: [] // Initialize placesLived as an array
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Ermesinde, Porto, Portugal',
        length: '26 years'
    },
    {
        place: 'Valongo, Porto, Portugal',
        length: '2 years'
    },
    {
        place: 'Rio Tinto, Porto, Portugal',
        length: '1 year'
    },
    {
        place: 'São Félix da Marinha, Porto, Portugal',
        length: '1 year'
    },
    {
        place: 'Portsmouth, Hampshire, UK',
        length: '8 years'
    },
    {
        place: 'Waterlooville, Hampshire, UK',
        length: '1 year'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let livedLocations = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    livedLocations.appendChild(dt);
    livedLocations.appendChild(dd);
});
