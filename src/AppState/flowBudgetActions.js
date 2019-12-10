import * as Acts from './actionType'

export const AddItem = () => ({type:Acts.ADD_ITEM})

export const FieldChange = (type, ...others) => {
	let data = {}
	if(type == 'title') {
		data = {id:others[0], title:others[1]}
		return {type:Acts.HANDLE_TITLE, data}
		}
		
	else if (type == 'price') {
		data = {id:others[0], price:others[1]}
		return ({type:Acts.HANDLE_PRICE, data})
		}	
		
	return Acts.HANDLE_PRICE,0
}

export const DeleteItem = (id) => ({type:Acts.DELETE_ITEM, data:id})
export const SetBudget = (amount) => ({type:Acts.SET_BUDGET, data:amount})
export const SaveTemporarily = () => ({type:Acts.SAVE_TEMPORARILY})
export const LoadSaved = () =>({type:Acts.LOAD_SAVED})
export const ownload
