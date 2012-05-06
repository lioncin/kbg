//modify by xlin in 20120421 to add init data method
$(function(){
	initPersonData();
});

//init person data
function initPersonData(){
	//ajaxPersonDate();
}

//show person data
function showPersonData(data){
	var html='';
	html+='abc';
	$('#showUserMsg').html(html);
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
			console.log(111)
			if(txtStatus=='success'){
				showPersonData(data);
			}
		},
		error:function(){
		}
	});
}