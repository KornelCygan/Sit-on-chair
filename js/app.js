document.addEventListener('DOMContentLoaded', function(){

    // Trundle menu
    var liToHover = document.querySelector('header nav > ul > li');
    var hiddenList = document.querySelector('.hiddenList');

    liToHover.addEventListener('mouseover', function(){
        hiddenList.classList.remove('noShow');
    });
    liToHover.addEventListener('mouseout', function(){
        hiddenList.classList.add('noShow');
    });

    // Slider

    var next = document.querySelector('.right');
    var prev = document.querySelector('.left');
    var list = document.querySelectorAll('.pictures li');
    var index = 0;

    list[index].classList.add('visible');
    // console.log(list);

    next.addEventListener('click', function(){
        list[index].classList.remove('visible');
        index++;
        if(index==list.length){
            index=0;
        }
        list[index].classList.add('visible');
    });

    prev.addEventListener('click', function(){
        list[index].classList.remove('visible');
        index--;
        if(index==-1){
            index=list.length-1;
        }
        list[index].classList.add('visible');
    });

// Hidde name in hover box

    var imgBox = document.querySelectorAll('.imgBox');
    var name = document.querySelectorAll('.name');

    imgBox[0].addEventListener('mouseover', function(){
        name[0].classList.add('noShow');
    });
    imgBox[1].addEventListener('mouseover', function(){
        name[1].classList.add('noShow');
    });

    imgBox[0].addEventListener('mouseout', function(){
        name[0].classList.remove('noShow');
    });
    imgBox[1].addEventListener('mouseout', function(){
        name[1].classList.remove('noShow');
    });

});