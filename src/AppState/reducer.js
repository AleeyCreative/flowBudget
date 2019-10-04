import * as ACTION from './actionType'
import uuid from 'uuid'
import {budget} from '../constants'

export default function Reducer(state, action) {
switch (action.type) 
 {
  case ACTION.ADD_ITEM:
  	return addItem(state)
   break

  case ACTION.DELETE_ITEM:
  	return deleteItem(state,action.data)
   break
   
  case ACTION.SET_BUDGET:
   return {...state, budget : action.data, remaining:action.data}
   break
      
  case ACTION.HANDLE_PRICE:
   return handlePrice(state, action.data)
   break

  case ACTION.HANDLE_TITLE:
   return handleTitle(state,action.data)
   break
	case ACTION.SAVE_TEMPORARILY:
		return saveTemporarily(state)
	case ACTION.LOAD_SAVED:
		return loadBudget()
	default:
		return state
 }
}




function addItem(state) {
	const newItem = {
	id:uuid.v4(),
	title:'',
	price:0
	}
	const items = state.items
	items.push(newItem)
	console.log(state)
	return {...state,items}
}

function deleteItem(state,id) {
 const items_ = state.items.filter(item => id !== item.id)
 const {total, remaining} = calculateTotalAndRemaining(items_,state.budget)
 return {...state, items:items_, total, remaining}
}

function handlePrice(state, currentItem){
 const items_ = state.items
 	for(let item of items_) {
 		if(item.id === currentItem.id)
 			item.price = currentItem.price
 	}
 	console.log(currentItem.price)
 	const {total, remaining} = calculateTotalAndRemaining(items_,state.budget)
 	console.log(state.total)
	return {...state,items:items_, total, remaining} 
}

function handleTitle(state, {id, title}) {
	const items_ = state.items
	console.log(title)
	for(let item of items_) {
		if(item.id === id)
			item.title = title
	}
	return {...state, items:items_}
}

function saveTemporarily(data){

const saveTimer = setInterval(() => {
	const ls = localStorage
	try {
	ls.setItem('budgets',JSON.Stringify(data))
	alert('saved successfully')
	}
	catch(e){
	console.log('An error occured')
	}
}, 1000)
}

function loadBudget() {
		const items = JSON.parse(localStorage.getItem(budget))	
	return budget
}

/*****************************/

function calculateTotalAndRemaining(items,budget) {
	let sum = 0
	const items_ = items
	console.log(items_)
	for(let item of items_)
		sum= sum + parseInt(item.price)
	return {total:sum, remaining:budget - sum} 
}

