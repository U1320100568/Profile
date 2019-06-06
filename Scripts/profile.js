
function settle(data){
	//展示promise 只會呼叫一次resolve，可靠性和可控性
	return new Promise(function(resolve,reject){
		//TODO settle account
		// throw new 'error'; // 若失敗調用reject
		resolve();
		// do something else
		resolve();//bug 重複呼叫
	});
}
function deduct(){
	console.log("already charge money...");
}
function deductFail(){
	console.log("Deduct Failed..");
}
settle({}).then(deduct,deductFail);//callback 附加在 promise物件

