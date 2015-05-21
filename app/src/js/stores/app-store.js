var AppDispatcher      = require('../dispatchers/app-dispatcher'),
    AppConstants       = require('../constants/app-constants'),
    assign             = require('object-assign'),
    EventEmitter       = require('events').EventEmitter,
    _                  = require('lodash'),
    Router             = require('react-router'),
    _path = Router.HashLocation.getCurrentPath();

var Firebase     = require('firebase'),
    fb ='https://hacker-news.firebaseio.com/v0/',
    topstories =  new Firebase( fb + 'topstories'),
    storyCount = 35,
    _stories = [];

var CHANGE_EVENT = "change";



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


if(localStorage.savedStorage){
    var _saved = JSON.parse(localStorage.savedStorage);
} else {
    var _saved = [];
}


window.onhashchange = function(){
    _path = Router.HashLocation.getCurrentPath();
    AppStore.emitChange()
};


function _addItem(item){
    var oldSaved = _saved;
    oldSaved.push(item);

    _saved = _.uniq(oldSaved, 'title');
    localStorage.setItem('savedStorage', JSON.stringify(_saved))
}


function _removeItem(item){
    var arrayFavourites = _saved;

    // _.remove will modify 'arrayFavourites' and return it without 'item'
    var removed = _.remove(arrayFavourites, item)

    _saved = arrayFavourites;
    localStorage.setItem('favouritesStorage', JSON.stringify(arrayFavourites))    

    AppStore.emitChange();  
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

    getStories:function(){
        return _stories
    },
    getSaved: function(){
        return _saved
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
        }
        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;