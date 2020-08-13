(function () {

  const visual = document.querySelector('.visual ul');
  const visualItem = document.querySelectorAll('.visual li');
  let number = 1;

  for(var i = 0; i < visualItem.length; i++){
    visualItem[i].style.left = i * 100 + '%';
  };

  moveSlide(number);

  function moveSlide(n){
    for(var i = 0; i < visualItem.length; i++){
      visualItem[i].classList.remove('on');
    };
    visualItem[n].classList.add('on');
    visual.style.left = '-' + (n * 100) + '%';

    number++
    number = (number >= visualItem.length) ? 0 : number;
    setTimeout(function(){moveSlide(number)}, 5000);
  }
})();
