const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul li')
var sectionindex = 0;

function setindex(){
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' +(sectionindex)* -20 +'%)';
}
document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click',function(){
        sectionindex = ind;
        setindex();
        indicator.classList.add('selected');   
    });
});

leftArrow.addEventListener('click',function(){
    sectionindex = (sectionindex > 0) ? sectionindex - 1 : 0 ;
    indicatorParents.children[sectionindex].classList.add('selected')
    setindex();
});
    
rightArrow.addEventListener('click',function(){
    sectionindex = (sectionindex < 3) ? sectionindex + 1 : 3 ;
    indicatorParents.children[sectionindex].classList.add('selected');
    setindex();
});