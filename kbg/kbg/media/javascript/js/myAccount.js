/**
 * @author {xing.lin@ymail.com}
 */
$(function(){
	//get account info from server by ajax request
	var data = accountInfo;
	$("#buyAccountNum").change(changeAccoutBuy);
	generateAccountType(data);
	generateConsumeRecords(data.consumRecords);
});

//change the buy number
function changeAccoutBuy(){
	var val = $("#buyAccountNum").val();
	$('#accountBuyButton').val("购买"+val+"点");
}

//生成 账户 类型
function generateAccountType(data){
	if(typeof data != 'undefined' && typeof data.accountType != 'undefined'){
		var html = '';
		var button = '';
		switch(data.accountType){
			case 0:
				html = '普通用户';
				button += '<input type="button" value="升级VIP用户" onclick="upgradVIPAccount();"/>';
				button += '<input type="button" value="升级钻石用户" onclick="upgradDiamondAccount();" />';
				break;
			case 1:
				html = 'VIP用户';
				button += '<input type="button" value="升级钻石用户" onclick="upgradDiamondAccount();" />';
				break;
			case 2:
				html = '钻石用户';
				break;
		}
		$("#myAccount .accountType").html(html);
		$("#myAccount .upgradAccount").html(button);
	}else{
		alert('网络有故障。请检查网络并刷新页面。');
	}
}

//升级VIP 账户
function upgradVIPAccount(){
	$("#payPanel").dialog({
		title:"升级VIP",
		buttons:{
			"OK":function(){}
		}
	});
}

//升级钻石用户
function upgradDiamondAccount(){
	$("#payPanel").dialog({
		title:"升级钻石用户",
		buttons:{
			"OK":function(){}
		}
	});
}

//click buy
function clickBuyButton(){
	var pay = $("#accountBuyButton").val();
	$("#payPanel .amount").html($("#buyAccountNum").val()+"元");
	$("#payPanel").dialog({
		title: pay,
		width:500,
		resizable:false
	});
}

//
function generateConsumeRecords(data){
	var html = '';
	var len = data.length;
	for(var i=0; i< len; i++){
		html += '<div class="item" index="' + data.infoId + '">';
		html += '	<div class="time">' + data.time + '</div>';
		html += '	<div class="price">' + data.infoPrice + '</div>';
		html += '</div>';
	} 
	$('.consumRecords').html(html);
}
