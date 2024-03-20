/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nelson Monteiro';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Francesinha', 'Rojões', 'Tripas', 'Picanha'];
foodElement.innerHTML = favoriteFoods.join('<br>');

const newFavoriteFood = 'Bola';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.shift();
favoriteFoods.pop();

foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');