/**
 * @author {xing.lin@ymail.com}
 */
$(function(){
	var day = new Date();
	var year = day.getFullYear();
	var month = day.getMonth();
	var day = day.getDate();
	$('#exam_day').val(year + '/' + month + '/' + day);
	
	$('#newOrder .orderContent .otherInfo .more').unbind('click').click(function(){
		$('#newOrder .orderContent .otherInfo .moreInfo').toggle();
		if($('#newOrder .orderContent .otherInfo .moreInfo').hasClass('hidden')){
			$('#newOrder .orderContent .otherInfo .more').text('展开');
		}else{
			$('#newOrder .orderContent .otherInfo .more').text('隐藏');
		}
	});
	
	$('#newOrder .examTeacher .more').click(function(){
		$('#newOrder .examTeacher .condition').toggle();
	});
	
});

/**
 * click value confirm
 */
function valueConfirm(){
	
}
