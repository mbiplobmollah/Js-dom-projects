document.getElementById('btn-update-title')
.addEventListener('click', function(){
   // console.log('btn clicked')
   const pageTitle = document.getElementById('page-title');
   // console.log(pageTitle)
   pageTitle.innerText = 'This is the new text';
})

const btnLogin = document.getElementById('btn-login')
.addEventListener('click', function (){
    const pTitle = document.getElementById('paragraph-title');
    pTitle.innerText = 'User Biplob'
})