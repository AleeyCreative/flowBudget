import React from 'react'
import uuid from 'uuid'
export const AppState = React.createContext({})


const firsItem = { id:uuid.v4(), price:0, title:'' }
export const initialState = {
	items : [firsItem],
	budget : 0,
	total : 0,
	remaining : 0	
}

export const setInitState = (state) => state
export default AppState
