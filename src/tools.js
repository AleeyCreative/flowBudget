export function isNotDesktop(){
	return window.innerWidth <= 500 ? true : false
}

export function handler(appState,actiontype,data){
	if(data)
		return appState.dispatch({type:actiontype,data:data})
	return appState.dispatch({type:actiontype})		
	}


export function writeContent (data) {
	let {items, budget, total, remaining} = data
	let fileContent = `----------------------------------`
	fileContent+= `
BUDGET AMOUNT : ₦ ${budget}
AMOUNT USED : ₦ ${total}
AMOUNT REMAINING : ₦ ${remaining}
PERCENTAGE USED : ${parseInt(total/budget * 100)} %
----------------------------------



`
	let count = 1
	for (let item of items) {
		fileContent+= `	${count}. ${item.title}	- ₦${item.price} \n`
		count++
	}
	fileContent+=`


----------------------------------
Date Generated : ${new Date().toDateString()}
Time Generated: ${new Date().toTimeString()}
	`
	return fileContent

}
