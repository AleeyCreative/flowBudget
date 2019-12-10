import React from 'react'
import AppState from '../AppState/appState'
import * as Act from '../AppState/actionType'
import  {isNotDesktop,handler} from '../tools'
import styled from 'styled-components'

let Credit_ = styled.div`
width : 100%
text-align : center
position : fixed
bottom : 0px
color : white
left : 0px
padding : 5px

`
const Credit = () => {
	return(
	<Credit_ className='credit blue darken-4'>
		Credits : <span className='credits-to'> AleeyCreative </span>
	</Credit_>
	)
}

export default Credit
