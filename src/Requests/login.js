import React, {useEffect, useState} from 'react'

export default function loginUser(user){
 const[token,setLoginToken] = useState()
 const url  = '/myapi/login'
 var errorOccured = false
 useEffect( async () => {
 	const token = await fetch(url)
 	if(token)
 		setLoginToken(token)
  else
  	errorOccured = true
 })
	return errorOccured ? null : token
}



