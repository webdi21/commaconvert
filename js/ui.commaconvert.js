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

	$(document).on('keydown keypress keyup', '.js-fbox-comma > .js-fbox-input', function() {
		var val = $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );
		val = val.replace(/,/g, "");
		val = parseInt(val);

		if ( isNaN(val) ) { val = '' };
		$(this).val(val);
		setComma($(this), $(this).val());
	});
});