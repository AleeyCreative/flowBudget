export function isNotDesktop(){
	return window.innerWidth <= 500 ? true : false
}

export function handler(appState,actiontype,data){
	if(data)
		return appState.dispatch({type:actiontype,data:data})
	return appState.dispatch({type:actiontype})		
	}


