let preloader = document.querySelector('.preloader');
let funcTime = function() {
    window.onload = () => {
        
        preloader.style.display = 'none';
    }
}

setTimeout(function(){ 
    preloader.style.display = 'none';
},4000);