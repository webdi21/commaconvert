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
		console.log(outNum);
		inObj.val(outNum);
	}
}

$(function() {

	$(document).on('focus', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.hide();
		}
	}).on('blur', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.show();
		}
	}).on('change', '.js-fbox > .js-fbox-input', function() {
		var $el = $(this);
		var $box = $el.closest('.js-fbox');
		var $place = $box.find('.js-fbox-place');

		if ( $el .val() == '' ) {
			$place.show();
		} else  {
			$place.hide();
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
	}).on('keydown keyup', '.js-fbox-comma > .js-fbox-input', function(e) {
		var code = e.which?e.which:e.keyCode;
		
		if ( (code >=48 && code<=57) || (code >=96 && code<=105) || code==8 ) {
			setComma($(this), $(this).val());
		} else {
			$(this).val( $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ) );
			return false;
		}
	});
});