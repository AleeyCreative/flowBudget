import React, {useState} from 'react'
import AppState from '../AppState/appState'
import * as ActionType from '../AppState/actionType'
const Settings = (props) => {
	return(
	<AppState.Consumer>
	{(AppState)=> (
		<PersonalInfo />
		<div className='divider'/>
		<AppInfo />
		<div className='divider' />
		<Buttons>
			
		</Buttons>
	)}
	</AppState.Consumer>
	)
}

export const PersonalInfo = (props) => {	
	return(
		<div className='set-of-fields'>
				<InfoField 
					onChange={(e)=>props.dispatch({type:ActionType.CHANGE_NAME,data:e.target.value})}
					type='text'
					defaultValue={props.appState.user.name}
					which='name'
					/>
			
			
				<InfoField 
					onChange={(e)=>props.appState.dispatch({type:ActionType.CHANGE_NAME,data:e.target.value})}
					type='email'
					defaultValue={props.appState.user.email}
					/>
					
				<InfoField 
					onChange={(e)=>props.dispatch({type:ActionType.CHANGE_NAME,data:e.target.value})}
					type='password'
					/>
				
					
				
		</div>
	)
}


export const InfoField  = (props) => {
	const responsive_font = isMobile() ? 'fonts-mobile' : 'fonts-normal' 
	const namefield = props.which === 'name' ? 'name-field' : ''
 	const fieldclass = `info-field ${responsive_font} ${namefield}` 
	return (
	<input className={fieldclass} {...props}  />
 )

export default Settings	
