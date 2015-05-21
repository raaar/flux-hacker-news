var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Firebase     = require('firebase');
var _           = require('lodash');

var CHANGE_EVENT = "change";



var Router = require('react-router');


var _path = Router.HashLocation.getCurrentPath();
window.onhashchange = function(){
    _path = Router.HashLocation.getCurrentPath();
    AppStore.emitChange()
};




var storyCount = 35;
var fb ='https://hacker-news.firebaseio.com/v0/';
var topstories =  new Firebase( fb + 'topstories');
var _stories = [];

if(localStorage.savedStorage){
    var _saved = JSON.parse(localStorage.savedStorage);
} else {
    var _saved = [];
}
/*
var loadSaved = function(){
    if(localStorage.favouritesStorage){ 
        _saved = JSON.parse(localStorage.savedStorage);
        console.log(_saved)
        AppStore.emitChange();
    } 
}

loadSaved();
*/

//console.log(_saved)



var loadStory = function(ids){
    var newsItem = 'https://hacker-news.firebaseio.com/v0/item/',
      stories = [];

    ids.forEach(function (id){
      var currentItem = new Firebase (newsItem + id);
      currentItem.once('value', function(snap){

        _stories.push(snap.val());
        AppStore.emitChange();

      })
    })
}

var getData = function(){
  var items = [];
  var topIds = [];

  topstories.once('value', function (snap){
    snap.forEach(function (itemSnap){
      items.push(itemSnap.val());
    })
    topIds = _.take(items, storyCount);

    loadStory(topIds)
  })
}
getData();




var _catalog = [
    {id:1, title: 'Widget #1', cost: 1},
    {id:2, title: 'Widget #2', cost: 2},
    {id:3, title: 'Widget #3', cost: 3}
  ];

var _cartItems = [];




function _increaseItem(index){
  _cartItems[index].qty++;
}

function _decreaseItem(index){
  if(_cartItems[index].qty>1){
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}


function _addItem(item){

    var oldSaved = _saved;
    oldSaved.push(item);

    _saved = _.uniq(oldSaved, 'title');
    localStorage.setItem('savedStorage', JSON.stringify(_saved))
}


console.log(_saved)

function _removeItem(item){

    var arrayFavourites = _saved;

    var removed = _.remove(arrayFavourites, item)

    _saved = arrayFavourites;

    //console.log(arrayFavourites)
    
    //_saved = newFavourites;

    localStorage.setItem('favouritesStorage', JSON.stringify(arrayFavourites))    

    AppStore.emitChange();  
}



var _path = Router.HashLocation.getCurrentPath();;
function _urlChange(path){
    _path = Router.HashLocation.getCurrentPath();
    AppStore.emitChange()
}


			   
var AppStore = assign({}, EventEmitter.prototype, {
  emitChange:function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart:function(){
    return _cartItems
  },

  getCatalog:function(){
    return _stories
  },

  getStories:function(){
    return _stories
  },
  getSaved: function(){
    return _saved
  },

  getPath: function(){
    return _path;
  },

  dispatcherIndex:AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.item);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;

      case AppConstants.URL_CHANGE:
        _urlChange(payload.action.path);
        break;

    }
    AppStore.emitChange();

    return true;
  })
})

module.exports = AppStore;