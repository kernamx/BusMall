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
}

var bag = new Items('bag', 'bag.jpg');
var banana = new Items('banana', 'banana.jpg');
var bathroom = new Items('bathroom', 'bathroom.jpg');
var boots = new Items('boots', 'boots.jpg');
var breakfast = new Items('breakfast', 'breakfast.jpg');
var bubblegum = new Items('bubblegum', 'bubblegum.jpg');
var chair = new Items('chair', 'chair.jpg');
var cthulhu = new Items('cthulhu', 'cthulhu.jpg');
var dogDuck = new Items('dogDuck', 'dog-duck.jpg');
var dragon = new Items('dragon', 'dragon.jpg');
var pen = new Items('pen', 'pen.jpg');
var petSweep = new Items('petSweep', 'pet-sweep.jpg');
var scissors = new Items('scissors', 'scissors.jpg');
var shark = new Items('shark', 'shark.jpg');
var sweep = new Items('sweep', 'sweep.png');
var tauntaun = new Items('tauntaun', 'tauntaun.jpg');
var unicorn = new Items('unicorn', 'unicorn.jpg');
var usb = new Items('usb', 'usb.gif');
var waterCan = new Items('waterCan', 'water-can.jpg');
var wineGlass = new Items('wineGlass', 'wine-glass.jpg');
