var AppConstants = require('../constants/app-constants.js'),
	AppDispatcher = require('../dispatchers/app-dispatcher.js');


var	AppActions = {
	addItem: function(item){
		//console.log(item.id)
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			item: item
		})
	},
	removeItem: function(item){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			item: item
		})
	},

	urlChange: function(path){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.URL_CHANGE,
			path: path
		})
	}


}

module.exports = AppActions;