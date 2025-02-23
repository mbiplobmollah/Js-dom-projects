console.log('external file');

// option 2 to handle click event

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// option 3 to handle click event using get element by id

const btnBlue = document.getElementById('btn-make-blue');
// console.log(btnBlue);
btnBlue.onclick = function makeBlue(){
document.body.style.backgroundColor = 'blue'
}

// option 4 different version

const btnPurple = document.getElementById('btn-make-purple');
// console.log(btnPurple)

function makePurple(){
document.body.style.backgroundColor = 'purple'        
}       
btnPurple.onclick = makePurple;