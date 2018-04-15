(function($){
$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('#modal-1');
	if (e.target! = popup[0] && popup.has(e.target).length === 0){
		$('#modal-1').fadeOut();
		
	}
});
$(document).ready(function() {
	$('#form-2').submit(function() {
		if (document.form.name.value == '' || document.form.phone.value == '' || document.form.company.value == '' || document.form.select.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "robinson.php",
			data: $(this).serialize()
		}).done(function(){
			$('#modal-1').fadeOut();
			$('modal-2').fadeIn();

		});
		return false;
	});
});
});