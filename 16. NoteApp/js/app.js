
let input = document.querySelector ('input');
let colers = document. querySelectorAll ('.color-box')

let addbtn = document.querySelector ('#btn-save')
let deletebtn = document.querySelector('#btn-delete');

let listed = document.querySelector('#listed')


colers.forEach(
    function(color){
     color.addEventListener('click', function() {
     input.style.backgroundColor = event.target.style.backgroundColor
})
})

addbtn.addEventListener('click', addbtnHandler);
function addbtnHandler(){
    let newDivElem = document.createElement('div')
      newDivElem.className = 'card shadow-sm rounded'
      newDivElem.addEventListener('click', function(){
      newDivElem.remove()
      } )
    let newpElm = document.createElement('p')
    newpElm.className = 'card-text p-3'
    newpElm.innerHTML = input.value
    
    newDivElem.append(newpElm)
    listed.append(newDivElem)
    newDivElem.style.backgroundColor = input.style.backgroundColor
    input.value = ''
}

deletebtn.addEventListener('click', function(){
    input.value = ''
    input.style.backgroundColor=''
})