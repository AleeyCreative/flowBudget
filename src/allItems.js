import React, {useState} from 'react'
import AppState from '../AppState/appState'

const AllItems = () => {
	function ListOfItems({items}){
			return items.map(item => (
				<Item
					budget={item.budget}
					title={title}
					date={item.date}
					total={item.total}
			))
	}	
	
	return(
	<AppState.Consumer>
	{({items})=> (
		<div className='allitems'> 
			<ListOfItems items={items} />
		</div>
	)}
	</AppState.Consumer>
	)
}


export const Item = (props) => {
	function handleDate({date}) {
		return new Date(date).toDateString()
	}	
	
	const date = handleDate(props)
	return(
		<div className='allitems-item'>
			<div className='budget-amount'> {props.budget} </div>
			<div className='details-field'> 
				<div className='budget-title'> {props.title} </div>
				<div className='budget-date'> { date } </div>
			</div>
			
			<div className='budget-total'> {total} </div>
		</div>
	)
}
export default AllItems
