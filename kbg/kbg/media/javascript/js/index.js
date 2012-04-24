//modify by xlin in 20120421 to add init data method
$(function(){
	initPersonData();
});

//init person data
function initPersonData(){
	ajaxPersonDate();
}

//show person data
function showPersonData(data){
	
}

//ajax request
function ajaxPersonDate(){
	$.ajax({
		url:'/AJAX/getPersonOrderInfo/',
		type:'POST',
		data:{
			data:''
		},
		success:function(data, txtStatus){
			showPersonData(data);
		},
		error:function(){
		}
	});
}