const body= document.querySelector('body');
const color= document.querySelectorAll('.box');

color.forEach(function (col) {
    console.log(col);
    col.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id=== "color-red"){
            body.style.backgroundColor="red";
        }
        if(e.target.id=== "color-orange"){
            body.style.backgroundColor="orange";
        }
        if(e.target.id=== "color-yellow"){
            body.style.backgroundColor="yellow";
        }
        if(e.target.id=== "color-green"){
            body.style.backgroundColor="green";
        }
        if(e.target.id=== "color-blue"){
            body.style.backgroundColor="blue";
        }
        if(e.target.id=== "color-indigo"){
            body.style.backgroundColor="indigo";
        }
        if(e.target.id=== "color-violet"){
            body.style.backgroundColor="violet";
        }
    })
})






































