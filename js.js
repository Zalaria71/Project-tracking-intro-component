let btn = document.getElementById("btn");
let list = document.querySelector('.u-list');
let i = 0 ;
btn.onclick = function (event){
    if(i%2 == 0){
        list.style.display = "flex";
    }
        
    else{
        list.style.display = "none";

    }
        
    i++;
}