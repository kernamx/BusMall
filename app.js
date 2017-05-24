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
  imgArr.push(this);
}

new Items('bag', 'assets/bag.jpg');
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

function displayImg() {
  var firstPath = document.createElement('img');
  var secondPath = document.createElement('img');
  var thirdPath = document.createElement('img');

  firstPath.src = bag.path;
  firstImg.appendChild(firstPath);

  secondPath.src = boots.path;
  secondImg.appendChild(secondPath);

  thirdPath.src = pen.path;
  thirdImg.appendChild(thirdPath);
}
displayImg();


firstImg.addEventListener('click', displayImg);
firstImg.removeChild(firstImg.childNodes[0]);

secondImg.addEventListener('click', displayImg);
secondImg.removeChild(secondImg.childNodes[0]);

thirdImg.addEventListener('click', displayImg);
thirdImg.removeChild(thirdImg.childNodes[0]);


var first;
var second;
var third;

function getRandNum() {
  return Math.floor(Math.random() * imgArr.length);
}

function randImg() {
  if (counter > 25) {
    tallyClicks();
  }
  var randImgOne = getRandNum();
  first = imgArr[randImgOne];

  //first.shown += 1;
  //first.canShow = 2;
  //timeOut.push(first);
  imgArr.splice(randImgOne);

  var randImgTwo= getRandNum();
  second = imgArr[randImgTwo];

  second.shown += 1;
  second.canShow = 2;
  timeOut.push(second);
  imgArr.splice(randImgTwo);

  var randImgThree = getRandNum();
  third = imgArr[randImgThree];

  third.shown += 1;
  third.canShow = 2;
  timeOut.push(third);
  imgArr.splice(randImgThree);
  displayImg();
}

randImg();

// function trackClicks(image) {
//   counter++;
//   image.clicks++;
//
//   function tallyClicks() {
//     results.style.visibility = 'visible';
//
//     for (var i=0; i < timeOut.length; i++) {
//       imgArr.push(timeOut[i]);
//     }
//   }
//
//   for (var j=0; j < imgArr.length; j++) {
//     if (imgArr[j].clicks > 0) {
//       var tally = document.createElement('p');
//       tally.innerHTML = 'Items: ' + imgArr[j].name +
//       'Shown: ' + imgArr[j].shown +
//       'Clicked: ' + imgArr[j].clicked;
//       results.appendChild(tally);
//     }
//   }
// }
//
//
//
// function updateTimeOut() {
//   for (var i=0; i < timeOut.length; i++) {
//     if (timeOut[i].canShow > 0) {
//       timeOut[i].canShow--;
//     } else {
//       imgArr.push(timeOut[i]);
//       timeOut.splice(timeOut[i], 1);
//       i -= 1;
//     }
//   }
// }
// updateTimeOut();




// var canvas = document.getElementById('chart');
// var ctx = canvas.getContext('2d');
//
// var chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: [];
//     data: randImg(),
//     backgroundColor: ['#444', '#888', '#e3e3e3', '#9cafb1' ];
//   }
//   options: {}
// });
