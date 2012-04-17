/**
 * @author {xing.lin@ymail.com}
 */
function getTeacherByAjax(id){
	
}

function showCurrentTeacher(id){
	//getTeacherByAjax(id);
}
$(function(){
	var teacherID = location.search.split('=')[1].replace('=','');
	if(typeof teacherID == 'undefined' || teacherID == '' || teacherID == null){
		location.href='index.html';
	}else{
		showCurrentTeacher(teacherID);
	}
});
