/**
 * @author {xing.lin@ymail.com}
 */

//get new msg from server
function generateNewMsgs(){
	var html = '';
	//ajax request from server
	html += '<div class="text fleft">你发布的<a href="examCases.html?caseID=1234567">2011/12/23--江苏苏州--计算机二级</a>有<a href="/examCases/1234567">12</a>个人看过，<a href="/examCases/1234567">3</a>个人投标</div><div class="close fright"></div>';
	//html += '<div class="text fleft">你投标的<span>2012/01/14--安徽蚌埠--高等数学</span>已经采纳，请准时参加，预祝考试顺利。</div><div class="close fright">X</div>';
	$('#content .newMsg .msgContent').html(html);
	$('#content .newMsg .msgContent .close').unbind('click').click(function(){
		$('#content .newMsg').fadeOut(1000);	
	});
}

//generate one case of publish exam
function generateExamCase(){
	var html = '';
	//ajax request to server
	for(var i =0; i< publishData.length; i++){
		html += '<div class="oneCase">';
		html += '	<span class="user">'+ publishData[i].user +'</span>在';
		html += '	<span class="day">'+ publishData[i].day +'</span>发布';
		html += '	<a href="examCases.html?caseID='+ publishData[i].id +'"><span class="address">'+ publishData[i].address +'</span>--';
		html += '	<span class="course">'+ publishData[i].course +'</span>--';
		html += '	<span class="pay">'+ publishData[i].pay +'</span></a>';
		html += '</div>';
	}
	$('#content .publishExamCase .examCase').html(html);
	
	var timeId = setInterval(function(){
		var mtop = parseInt($('.publishExam .examCase').css('margin-top').replace('px',''));
		if(mtop <= -1 * 42 * (publishData.length-1)){
			mtop = 0;
		}else{
			mtop -= 42;
		}
		$('.publishExam .examCase').css({
			'margin-top':mtop+'px'
		});
	},1000 * 3);
}

//generate msgs
function generateMsgsContent(){
	var html = '';
	html += '<table cellspacing="0" cellpadding="0">';
	html += '	<tr><th></th>';
	html += '	<th>考试时间<span class="sort up"></span></th>';
	html += '	<th>考试地点</th>';
	html += '	<th>考试科目</th>';
	html += '	<th>考试报价<span class="sort up"></span></th></tr>';
	for(var i = 0; i< 10; i++){
		if(i%2==1){
			html += '<tr id="'+ i +'" class="odd">';	
		}else{
			html += '<tr id="'+ i +'" class="even">';
		}
		html += '	<td align="center" class="priority urgency">紧急</td>';
		html += '	<td>2012/02/12</td>';
		html += '	<td>江苏-苏州</td>';
		html += '	<td>高等数学</td>';
		html += '	<td>1200.00</td>';
		html += '</tr>';
	}
	html += '</table>';
	$('#msgsContainer .msgsContent').html(html);
	
	$('#msgsContainer .msgsContent table tr').unbind('click').click(function(){
		var id = $(this).attr('id');
		if(id == ''){
			return  false;
		}
		location.href = 'examCases.html?caseID='+ id;
	});
	
	//click sort 
	$('#msgsContainer .msgsContent th .sort').unbind('click').click(function(){
		if($(this).hasClass('up')){
			$(this).removeClass('up').addClass('down');
			getExamCases();
		}else{
			$(this).removeClass('down').addClass('up');
			getExamCases();
		}
	});
}

/**
 * get case info list
 * @param {Object} examTime string 考试时间
 * @param {Object} examAddr string 考试地点
 * @param {Object} examCourse string 考试科目
 * @param {Object} examPrice int 考试报价
 * @param {Object} timeAsc boolea 时间排序 
 * @param {Object} priceAsc boolean 报价排序
 * @param {Object} currentPage int 当前第几页
 * @param {Object} totalPage 每页多少行
 */
function getCase(examTime, examAddr, examCourse, examPrice, timeAsc, priceAsc, currentPage, totalPage){
	//$.ajax();
}

/** get case by ajax **/
function getExamCases(){
	
}

function generateCurrentDay(){
	var time;
	time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() +1;
	var day = time.getDate();
	$('#examDay input').val(year+'-'+month+'-'+day);
	$('#calendar').datepicker({
		dateFormat:'yy-mm-dd'
	});
}

//show top providers
function showTopTenProviders(){
	var html = '';
	for(var i = 0; i < providers.length; i++){
		html += '<div class="fleft user">';
		html += '	<table id="'+ providers[i].userId +'">';
		html += '		<tr><td rowspan="4">';
		html += '			<img width="80px" src="' +providers[i].userPhoto+ '" />';
		html += '		</td><td>';
		html += '			<div class="start start'+ providers[i].userClass +'"></div>';
		html += '		</td></tr>';
		html += '		<tr><td>';
		html += '			<span class="">' +providers[i].userName+ '</span>';
		html += '		</td></tr>';
		html += '		<tr><td>';
		html += '			<span class="">' +providers[i].userAddr+ '</span>';
		html += '		</td></tr>';
		html += '		<tr><td>';
		html += '			成功<span>' +providers[i].examWell+ '</span>';
		html += '		</td></tr>';
		html += '	</table>';
		html += '</div>';
	}
	html += '<div class="clear"></div>';
	$('#providers .providers-content').html(html);
	
	$('#providers .providers-content table').click(function(){
		var teacherID = $(this).attr('id');
		//location.href = 'teacher.html?teacherID=' + teacherID;
		$('#teacherInfoDetails').dialog({
			title:'详细信息',
			modal:true,
			resizable:false
		});
	});
}

$(function(){
	generateNewMsgs();
	generateExamCase();
	//$('#examDay').datepicker();
	generateCurrentDay();
	generateMsgsContent();
	$('#pagination .pagniation').pagination(50,{
		callback: '',
	    current_page:0,
	    items_per_page:10,
	    num_edge_entries:1,
		prev_text:"&lt",
		next_text:"&gt"
	});
	
	showTopTenProviders();
	
	$('input.blue').unbind('click').click(function(){
		//check user login
		location.href = 'publicMsg.html';
	});
});