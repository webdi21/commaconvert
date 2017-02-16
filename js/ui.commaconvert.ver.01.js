function setComma(inObj, inNum) {
	var val, outNum;
	var rgx1 = /\D/g;  // /[^0-9]/g 와 같은 표현
	var rgx2 = /(\d+)(\d{3})/; 

	val = inNum.replace(/,/g, "");
	val = parseInt(val) + '';

	outNum = val;
	if ( ! isNaN(outNum) ) {
		while (rgx2.test(outNum)) {
			outNum = outNum.replace(rgx2, '$1' + ',' + '$2');
		}
		inObj.val(outNum);
	}
}

$(function() {

	$(document).on('focus', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.hide(100);
		}
	}).on('blur', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.show(100);
		}
	}).on('change', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.show(100);
		} else  {
			$place.hide(100);
		}
	});

	$('.js-fbox > .js-fbox-input').each(function(i, item) {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.show();
		} else {
			$place.hide();
		}
	});

	$(document).on('keydown', '.js-fbox-comma > .js-fbox-input', function() {
		$(this).val( $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ) );
	}).on('keydown keypress keyup', '.js-fbox-comma > .js-fbox-input', function(e) {
		var code = e.which?e.which:e.keyCode;
		
		$('#aaa').text(code);
		if ( (code >=48 && code<=57) || (code >=96 && code<=105) || code==8 ) {
			setComma($(this), $(this).val());
		} else if ( code == 9 ) {
		} else {
			$(this).val( $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ) );
			return false;
		}
	});
});