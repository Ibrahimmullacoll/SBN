let x = document.getElementsByClassName("nav_item");
// let y = document.getElementsByClassName("music_item");

    for(let i of x){
        i.addEventListener('click', function(){
            for(let j of x){
                j.style.border = "none";  
            }
            i.style.border = "3px solid #9AB3F5";        
        });     
    }