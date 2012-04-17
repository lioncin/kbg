/**
 * @author {xing.lin@ymail.com}
 */

function getCaseByAjax(id){
//	$.ajax({
//		url:'',
//		success:''
//	});
}

function showCurrentCase(id){
	//getCaseByAajx
	
}
$(function(){
	var case_id = location.search.split('caseID')[1].replace('=','');
	if(typeof case_id == 'undefined' || case_id=='' || case_id==null){
		location.href='index.html';
	}else{
		showCurrentCase(case_id);
	}
});
