var express = require("express");
var redux = require("redux");

const initialState = 0;

function counter(state = initialState, action) { // initialState first time but when defined it uses its current value
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

let store = redux.createStore(counter);

const fallback = action => {
	// You can implement something useful here instead
	console.log(action + ' is called.');
}

const printStore = store => {
	// You can do some asserts here if your app should for example always have some props to prevent errors
	if(store) {
		console.log(store);
	}
}

store.subscribe(() => {
	fallback();
	printStore(store.getState());
});

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1