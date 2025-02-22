// 1. where to add.
const placesList = document.getElementById('places-list');
// 2. what to be added.
const li = document.createElement('li');
li.innerText = 'pahartoli bon'

// 3. add the child.

placesList.append(li)

// 1. where to be added

const mainContent = document.getElementById('main-content');

// 2. what to be added
const newSection = document.createElement('section');


const h1 = document.createElement('h1');
h1.innerText = 'This my new header for new section';
newSection.appendChild(h1);

const ul = document.createElement('ul');
newSection.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'rose';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'belly';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'sunflower';
ul.appendChild(li3);


mainContent.append(newSection);

// set innerHTML directly

const sectionFood = document.createElement('section');
sectionFood.innerHTML = `
<h1>My Food section</h1>
<ul>
<li>Burger</li>
<li>Pizza</li>
<li>Salad</li>
</ul>
`;

mainContent.append(sectionFood);