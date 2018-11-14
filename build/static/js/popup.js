let wrap = document.querySelector('.wrapper'),
    link = document.querySelector('.comments-content__top-link'),
    popUp = document.querySelector('.pop-up'),
    closePopup = document.querySelector('.close-popup'),
    comm = document.querySelector('.comments-content__top-right'),
    overflow = document.createElement('div');
    overlay	= document.querySelector('.overlay');
    
let OpenWindow =()=>{
    overflow.className='overflow';
    document.body.appendChild(overflow);
    overflow.style.display = 'block';
    overlay.style.display="block";
    
}
link.addEventListener('click',OpenWindow);

let CloseWindow =()=>{
    overflow.style.display="none";
    overlay.style.display="none";
    wrap.style.filter="none";
    wrap.style.background="none";
}
closePopup.addEventListener('click',CloseWindow);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay') === null||e.target==overlay){
        
        overlay.style.display = 'none';
        wrap.style.filter="none";
        wrap.style.background="none";
        overflow.style.display="none";
    } 
    
});






// $('.comments-content__top-link').click(function(){
//     $('.wrapper').css("filter", "blur(5px)");
//     $('.wrapper').css('background','#ccc');
//     $('.overlay').fadeIn();
//     $('.overlay').css("filter","none");
    

// })

// $('.close-popup').click(function(){
//     $('.overlay').fadeOut();
//     $('.wrapper').css('filter','none');
//     $('.wrapper').css('background','none');
//     $('#name').val('');
//     $('#email').val('');
//     $('#message').val('');
// })

// $(document).mouseup(function(e){
//     let popup = $('.pop-up')
    
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.wrapper').css('filter','none');
//         $('.wrapper').css('background','none');
//         $('.overlay').fadeOut();
//         $('#name').val('');
//         $('#email').val('');
//         $('#message').val('');

//     }
// })

