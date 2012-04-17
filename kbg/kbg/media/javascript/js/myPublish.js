/**
 * @author {xing.lin@ymail.com}
 */
$(function(){
	generateMsgInfo();//我发布的考试信息
	generateEmploy();//我应征的考试信息
});

function generateMsgInfo(){
	var html='';
	//get ajax data from server
	html+='<table cellspacing="0" cellpadding="0">';
	html+='<thead><td>状态<span class="sort up"></span></td><td>发布时间<span class="sort up"></span></td><td>考试时间<span class="sort up"></span></td><td>考试信息</td>';
	html+='<td>查看次数</td><td>考试人</td><td>是否通过</td><td>考试分数</td><td>动作</td></thead>';
	for(var i=0; i<publishMsg.length; i++){
		html+='<tr id="'+publishMsg[i].id+'" status="'+publishMsg[i].status+'">';
		var text = '';
		switch(publishMsg[i].status){
			case 0:
				text='新建';
				break;
			case 1:
				text='正在处理';
				break;
			case 2:
				text='已经确定';
				break;
			case 3:
				text='已经结束';
				break;
		}
		html+='<td>'+text+'</td>';
		html+='<td>'+publishMsg[i].publishTime+'</td>';
		html+='<td>'+publishMsg[i].examTime+'</td>';
		html+='<td>'+publishMsg[i].publishInfo+'</td>';
		html+='<td>'+publishMsg[i].clickCount+' <span class="moreUser">谁来看过</span></td>';
		if(publishMsg[i].winnerName==''){
			html+='<td>&nbsp;</td>';
		}else{
			html+='<td><a href="teacher.html?teacherID='+publishMsg[i].winnerID+'">'+publishMsg[i].winnerName+'</a></td>';
		}
		switch(publishMsg[i].scoreType){
			case 0:
				html+='<td>遗憾，再接再厉</td>';
				break;
			case 1:
				html+='<td>恭喜，通过</td>';
				break;
			default:
				html+='<td>&nbsp;</td>';
		}
		
		if(publishMsg[i].score==''){
			html+='<td>&nbsp;</td>';
		}else{
			html+='<td>'+publishMsg[i].score+'</td>';
		}
		html+='<td><div class="actionButton editButton"></div><div class="actionButton delButtion"></div></td>';
		html+='</tr>';
		html+='<tr id="clickUser'+publishMsg[i].id+'" class="hidden">';
		html+='<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>';
		html+='<td>';
		for(var j=0; j<publishMsg[i].clickUser.length; j++){
			html+='<a>'+publishMsg[i].clickUser[j]+'</a>';
		}
		html+='</td>';
		html+='</tr>';
	}
	html+='</table>';
	$('#myPublishInfo .publishInfo').html(html);
	
	//bind click function for edit button and del button
	$('#myPublishInfo .publishInfo .editButton').unbind('click').click(function(){
		var id = $(this).parent().parent().attr('id');
		location.href = 'examCases.html?caseID='+ id;
	});
	$('#myPublishInfo .publishInfo .delButtion').unbind('click').click(function(){
		var status = $(this).parent().parent().attr('status');
		if(status==2){
			alert('考试已经确定，不能删除。');
		}else{
			confirm('你确定要删除这条吗？');
		}
	});
	
	$('#myPublishInfo td .moreUser').unbind('click').click(function(){
		var id= $(this).parent().parent().attr('id');
		if($('#clickUser'+id).hasClass('hidden')){
			$('#clickUser'+id).removeClass('hidden');
		}else{
			$('#clickUser'+id).addClass('hidden');
		}
	});
}	


function generateEmploy(){
	//ajax get data from server
	var html='';
	html+='<table cellspacing="0" cellpadding="0">';
	html+='	<thead>';
	html+='		<td>状态</td>';
	html+='		<td>发布人</td>';
	html+='		<td>考试时间</td>';
	html+='		<td>考试地点</td>';
	html+='		<td>考试信息</td>';
	html+='		<td>我的报价</td>';
	html+='		<td>操作</td>';
	html+='	</thead>';
	for(var i=0; i<enlist.length; i++){
		html+='<tr>';
		if(enlist[i].status==0){
			html+='<td>正在进行中</td>';
		}else{
			html+='<td>已经被采纳</td>';
		}
		html+='<td>'+enlist[i].builderName+'</td>';
		html+='<td>'+enlist[i].publishTime+'</td>';
		html+='<td>'+enlist[i].examAddr+'</td>';
		html+='<td>'+enlist[i].examInfo+'</td>';
		html+='<td>'+enlist[i].myPrice+'</td>';
		html+='<td><button>退出应征</button></td>';
		html+='</tr>';
	}
	html+='</table>';
	$('#myAccept .enlist').html(html);
}