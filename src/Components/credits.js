import React from 'react'
import AppState from '../AppState/appState'
import * as Act from '../AppState/actionType'
import  {isNotDesktop,handler} from '../tools'

const Credit = () => {
	return(
	<div className='credit blue darken-4'>
		Credits : <span className='credits-to'> AleeyCreative </span>		
	</div>	
	)
}

export default Credit
