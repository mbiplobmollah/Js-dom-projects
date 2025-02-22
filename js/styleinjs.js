// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    console.log(section)
    section.style.border = '3px solid steelblue';
    section.style.margin = '4px';
    section.style.borderRadius = '8px';
    section.style.padding = '4px';
    section.style.backgroundColor = 'lightgray';

}
// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer);
// placesContainer.style.backgroundColor = 'green'

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')