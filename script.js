//menu bar

var menuBar=document.getElementById('menu-bar');
var btnBack=document.getElementById('btn-back');
var menu=document.getElementById('menu');
  menu.addEventListener('click',function(){
  menuBar.style.transition='all 1s';
  menuBar.style.transform='translate(0,0)';
  
});

btnBack.addEventListener('click',function(){
  menuBar.style.transition='all 1s';
  menuBar.style.transform='';
  
});


//shoping page

var forward=document.getElementById('btn-forward');
var backward=document.getElementById('btn-backward');
var secondSlide=document.getElementById('second-slide');
var firstSlide=document.getElementById('first-slide');

forward.addEventListener('click',function(){
 secondSlide.style.transition='all 2s';
 secondSlide.style.transform='translate(0,0)';
 firstSlide.style.transition='all 2s';
 firstSlide.style.transform='translate(100%,0)';
});
backward.addEventListener('click',function(){
 secondSlide.style.transition='all 2s';
 secondSlide.style.transform='translate(-100%,0)';
 firstSlide.style.transition='all 2s';
 firstSlide.style.transform='translate(0,0)';

});
