const p = document.getElementById('fisrtP');
const b = document.getElementById('body');

function hideMe(){
     if (p.style.display == "none" ) {
     p.style.display = "block" ;    
   } else {
       p.style.display = "none";
   }
}

function changeTheme(){
    if(b.style.backgroundColor == "white"){
    b.style.backgroundColor = "blue";
    b.style.color = "white";
} else {
    b.style.backgroundColor = "white";
    b.style.color = "black";
}
}