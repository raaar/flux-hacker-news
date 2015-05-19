var AppConstants = require('../constants/app-constants.js'),
	AppDispatcher = require('../dispatchers/app-dispatcher.js');


var	AppActions = {
	addItem: function(item){
		console.log(item.id)
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			item: item
		})
	},
	removeItem: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			index: index
		})
	}
}

module.exports = AppActions;