$(function () {
	var display = "<option>Năm</option>";
	for (var i = 2017; i >= 1900; i--) {
		display +="<option>"+i+"</option>";}
	$('.year').html(display);
}
)
$(function () {
	var display = "<option>Ngày</option>";
	for (var i = 1; i <= 31; i++) {
		display +="<option>"+i+"</option>";}
	$('.date').html(display);
})
$(function () {
	var display = "<option>Tháng</option>";
	for (var i = 1; i <= 12; i++) {
		display +="<option>"+i+"</option>";}
	$('.month').html(display);
})
$('#sign-up').on('submit',function() {  /********** Hàm điều kiện dữ liệu nhập **********/
	var error = true;
		$('span').css('padding', '5px');
			/********** Hàm điều kiện user-name **********/
		if ($('#last-name').val().trim()==''||/[0-9]/.test($('#first-name').val())){
			$('#first-name').prev('span').html('<i class="fa fa-exclamation-circle"></i>'+' Họ của bạn là gì?</br>(không chứa số)');
			error = false;
		} else{
			$('#first-name').prev('span').text(''); $('.error1').css('padding', '0px');
		}

		if ($('#last-name').val().trim()==''||/[0-9]/.test($('#last-name').val())){
			$('#last-name').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Tên của bạn là gì?</br>(không chứa số)');
			error = false;
		} else{
			$('#last-name').next('span').text(''); $('.error2').css('padding', '0px');
		}
			/********** Hàm điều kiện mobile **********/
		if (/^(01[2689]|09|08)[0-9]{8}$/.test($('#mobile').val())){
			$('#mobile').next('span').text(''); $('.error3').css('padding', '0px');
		} else{
			$('#mobile').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Nhập chính xác số di động của bạn.</br> ex: 01649723264, 086897193...');
			error = false;
		}
			/********** Hàm điều kiện email **********/
		if (/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($('#email').val())){
				$('#email').next('span').text(''); $('.error6').css('padding', '0px');
		} else{
			$('#email').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Nhập chính xác </br>email của bạn. </br>ex: abc@gmail.com, </br>abc@yahoo.com');
			error = false;
		}
			/********** Hàm điều kiện pass-word **********/
		if ($('#pass-word').val().trim() == ''|| $('#pass-word').val().length<6 ){
			$('#pass-word').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Nhập mật khẩu tối thiểu 6 ký tự là số,</br> chữ cái và dấu chấm câu.');
			error = false;
		} else{
			$('#pass-word').next('span').text(''); $('.error4').css('padding', '0px');
		}
			/********** Hàm điều kiện ngày tháng năm sinh **********/
		if ($('.date').val()=='Ngày'|| $('.month').val()=='Tháng' || $('.year').val()=='Năm' ){
			$('.year').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Bạn cần cung cấp đầy đủ </br>ngày sinh của mình.');
			error = false;
		} else{
			$('.year').next('span').text('');$('.error5').css('padding', '0px');
		}
	return error;
})

/********** Lấy dữ liệu từ URL **********/
var url = decodeURIComponent($(location).attr('href'));
var data_url = url.substring(url.search('html')+5);
var arr_data = data_url.split('&'); /****Mảng dữ liệu từ URL****/
var first_name = arr_data[0].substring(arr_data[0].search('=')+1)+'+';
var last_name = arr_data[1].substring(arr_data[1].search('=')+1);
var mobile = arr_data[2].substring(arr_data[2].search('=')+1);
var email = arr_data[3].substring(arr_data[3].search('=')+1);
var pass_word = arr_data[4].substring(arr_data[4].search('=')+1);
var gender = arr_data[8].substring(arr_data[8].search('=')+1);
var user_name = ((first_name+last_name).split('+')).join(' ');
var birth = arr_data[5].substring(arr_data[5].search('=')+1)+'+'+arr_data[6].substring(arr_data[6].search('=')+1)+'+'+arr_data[7].substring(arr_data[7].search('=')+1);
var birth_day = (birth.split('+')).join('/');
/***** Gán dữ liệu****/
$(".home").click(function(){
    window.location.href = 'https://www.facebook.com/';
});
$('.user-name').val(user_name);
$('.birth-day').val(birth_day);
$('.gender').val(gender);
$('.your-email').val(email);
$('.your-mobile').val(mobile);
$('.pass').val(pass_word);