'use strict';


var imgArr = [];
var shown = [];
var resultsArray = [];
var itemOne = document.getElementById('item_one');
var itemTwo = document.getElementById('item_two');
var itemThree = document.getElementById('item_three');
var clicks = 0;

var clickEvent = function(){
  var imgID = event.target.id;
  for(var i = 0; i < imgArr.length; i++){
    if (imgArr[i].name === imgID) {
      imgArr[i].clickCount++;
    }
  }
  selectPics();
  clicks++;
  if (clicks >= 25) {
    itemOne.removeEventListener('click', clickEvent);
    itemTwo.removeEventListener('click', clickEvent);
    itemThree.removeEventListener('click', clickEvent);
    results();
  }
};

itemOne.addEventListener('click', clickEvent);
itemTwo.addEventListener('click', clickEvent);
itemThree.addEventListener('click', clickEvent);

function saved() {
  localStorage.clicks = JSON.stringify(clicks);
  localStorage.imgArr = JSON.stringify(imgArr);
}

function items(name, path) {
  this.name=name;
  this.path=path;
  this.clickCount= 0;
  this.displayCount=0;
  imgArr.push(this);
}

if (localStorage.clicks) {
  clicks = JSON.parse(localStorage.clicks);
  imgArr = JSON.parse(localStorage.imgArr);
} else {
  new items('bag', 'assets/bag.jpg');
  new items('banana', 'assets/banana.jpg');
  new items('bathroom', 'assets/bathroom.jpg');
  new items('boots', 'assets/boots.jpg');
  new items('breakfast', 'assets/breakfast.jpg');
  new items('gum', 'assets/bubblegum.jpg');
  new items('chair', 'assets/chair.jpg');
  new items('cthulhu', 'assets/cthulhu.jpg');
  new items('dogduck', 'assets/dog-duck.jpg');
  new items('dragon', 'assets/dragon.jpg');
  new items('pen', 'assets/pen.jpg');
  new items('petsweep', 'assets/pet-sweep.jpg');
  new items('scissors', 'assets/scissors.jpg');
  new items('shark', 'assets/shark.jpg');
  new items('sweep', 'assets/sweep.png');
  new items('tauntaun', 'assets/tauntaun.jpg');
  new items('unicorn', 'assets/unicorn.jpg');
  new items('usb', 'assets/usb.gif');
  new items('watercan', 'assets/water-can.jpg');
  new items('wine', 'assets/wine-glass.jpg');
}

function render(randomOne, randomTwo, randomThree, imgOne, imgTwo, imgThree) {
  itemOne.setAttribute('src', imgOne.path);
  itemOne.setAttribute('id', imgOne.name);

  itemTwo.setAttribute('src', imgTwo.path);
  itemTwo.setAttribute('id', imgTwo.name);

  itemThree.setAttribute('src', imgThree.path);
  itemThree.setAttribute('id', imgThree.name);

  shown.push(imgArr[randomOne]);
  shown.push(imgArr[randomTwo]);
  shown.push(imgArr[randomThree]);
}

function results() {
  var list = document.getElementById('results');
  var item = document.createElement('ul');
  for (var i = 0; i < imgArr.length; i++) {
    resultsArray.push('<li> name: ' + imgArr[i].name + 'Clicks: ' +
    imgArr[i].clickCount + ' times shown: ' +
    imgArr[i].displayCount + '</li>');
  }
  resultsArray = resultsArray.join('');
  item.innerHTML = resultsArray;
  list.appendChild(item);
  createChart();
}

function createChart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var nameArr = [];
  var clicksArr = [];
  var shownArr = [];

  for(var i = 0; i < imgArr.length; i++){
    nameArr.push(imgArr[i].name);
    clicksArr.push(imgArr[i].clickCount);
    shownArr.push(imgArr[i].displayCount);
  }
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArr,
      datasets: [
        {
          label: '# of clicks',
          data: clicksArr,
          backgroundColor: '#888'
        },
        {
          label: '# of times shown',
          data: shownArr,
          backgroundColor: '#222'
        }
      ]
    },
    options: {
      responsive: false
    }
  });
}


function randomNumberGen() {
  return Math.floor(Math.random() * (imgArr.length));
}

function selectPics() {
  var randomOne = randomNumberGen();
  var imgOne = imgArr[randomOne];

  var randomTwo = randomNumberGen();
  while(randomTwo === randomOne) {
    randomTwo = randomNumberGen();
  }
  var imgTwo = imgArr[randomTwo];

  var randomThree = randomNumberGen();
  while (randomThree === randomOne || randomThree === randomTwo){
    randomThree = randomNumberGen();
  }
  var imgThree = imgArr[randomThree];

  imgOne.displayCount++;
  imgTwo.displayCount++;
  imgThree.displayCount++;
  render(randomOne, randomTwo, randomThree, imgOne, imgTwo, imgThree);

}
selectPics();
