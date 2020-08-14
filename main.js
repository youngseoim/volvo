(function () {
  const visual = document.querySelector('.visual ul');
  const visualItem = document.querySelectorAll('.visual li');
  const bottomList = document.querySelector('.bottom-nav');
  let number = 1;
  let progress;

  for(var i = 0; i < visualItem.length; i++){
    visualItem[i].style.left = i * 100 + '%';
  };

  moveSlide(number);

  

  document.addEventListener('scroll', () => {
    progress = ((document.scrollingElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight) * 100;
    if(progress > 90){
      bottomList.classList.add('on');
    }else{
      bottomList.classList.remove('on');
    }
  })


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
