'use strict';

var firstImg = document.getElementById('itemOne');
var secondImg = document.getElementById('itemTwo');
var thirdImg = document.getElementById('itemThree');
var imgArr = [];
var timeOut = [];
var counter = 0;

var results = document.getElementById('results');


function Items(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  this.flag = false;
  this.flagCounter = 0;
  imgArr.push(this);
}

var bag = new Items('bag', 'assets/bag.jpg');
var banana = new Items('banana', 'assets/banana.jpg');
var bathroom = new Items('bathroom', 'assets/bathroom.jpg');
var boots = new Items('boots', 'assets/boots.jpg');
var breakfast = new Items('breakfast', 'assets/breakfast.jpg');
var bubblegum = new Items('bubblegum', 'assets/bubblegum.jpg');
var chair = new Items('chair', 'assets/chair.jpg');
var cthulhu = new Items('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Items('dogDuck', 'assets/dog-duck.jpg');
var dragon = new Items('dragon', 'assets/dragon.jpg');
var pen = new Items('pen', 'assets/pen.jpg');
var petSweep = new Items('petSweep', 'assets/pet-sweep.jpg');
var scissors = new Items('scissors', 'assets/scissors.jpg');
var shark = new Items('shark', 'assets/shark.jpg');
var sweep = new Items('sweep', 'assets/sweep.png');
var tauntaun = new Items('tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Items('unicorn', 'assets/unicorn.jpg');
var usb = new Items('usb', 'assets/usb.gif');
var waterCan = new Items('waterCan', 'assets/water-can.jpg');
var wineGlass = new Items('wineGlass', 'assets/wine-glass.jpg');

var first;
var second;
var third;

firstImg.addEventListener('click', function() {
  trackClicks(first);
  randImg();
});

secondImg.addEventListener('click', function() {
  trackClicks(second);
  randImg();
});

thirdImg.addEventListener('click', function() {
  trackClicks(third);
  randImg();
});

function trackClicks(image) {
  counter++;
  image.clicks = image.clicks + 1;

  function tallyClicks() {
    results.style.visibility = 'visible';

    for (var i=0; i < timeOut.length; i++) {
      imgArr.push(timeOut[i]);
    }
  }

  for (var j=0; j < imgArr.length; j++) {
    if (imgArr[j].clicks > 0) {
      var tally = document.createElement('p');
      tally.innerHTML = 'Items: ' + imgArr[j].name +
      'Shown: ' + imgArr[j].shown +
      'Clicked: ' + imgArr[j].clicked;
      results.appendChild(tally);
    }
  }
}

function randImg() {
  if (counter > 26) {
    tallyClicks();
  }
  var randImg = getRandNum();
  first = imgArr[randomIndex];

  first.shown += 1;
  first.canShow = 2;
  timeOut.push(first);
  imgArr.splice(randomIndex, 1);

  randomIndex = getRandNum();
  second = imgArr[randomIndex];

  second.shown += 1;
  second.canShow = 2;
  timeOut.push(second);
  imgArr.splice(randomIndex, 1);

  randomIndex = getRandNum();
  third = imgArr[randomIndex];

  timeOut.push(third);
  third.shown += 1;
  third.canShow = 2;
  imgArr.splice(randomIndex, 1);
  displayImg();
}

function displayImg() {
  var firstPath = document.createElement('img');
  var secondPath = document.createElement('img');
  var thirdPath = document.createElement('img');

  firstPath.src = bag.path;
  //firstImg. removeChild(firstImg.childNodes[0]);
  firstImg.appendChild(firstPath);

  //secondImg.removeChild(secondImg.childNodes[0]);
  secondPath.src = boots.path;
  secondImg. appendChild(secondPath);

  //thirdImg.removeChild(thirdImg.childNodes[0]);
  thirdPath.src = pen.path;
  thirdImg.appendChild(thirdPath);

  updateTimeOut();
}
displayImg();

function updateTimeOut() {
  for (var i=0; i < timeOut.length; i++) {
    if (timeOut[i].canShow > 0) {
      timeOut[i].canShow--;
    } else {
      imgArr.push(timeOut[i]);
      timeOut.splice(timeOut[i], 1);
      i -= 1;
    }
  }
}

function getRandNum() {
  return Math.floor(Math.random() * imgArr.length);
}
randImg();


var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [];
    data: randImg(),
    backgroundColor: ['#444', '#888', '#e3e3e3', '#9cafb1' ];
  }
  options: {}
});
