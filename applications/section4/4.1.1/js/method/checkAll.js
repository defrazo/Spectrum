$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=e1]:checked").is(':checked'),
		v6 = $("input[name=e2]:checked").is(':checked'),
		v7 = $("input[name=e3]:checked").is(':checked'),
		v8 = $("input[name=e4]:checked").is(':checked'),
		v9 = $("input[name=e5]:checked").is(':checked'),
		v10 = $("input[name=e6]:checked").is(':checked'),
		v11 = $("input[name=e7]:checked").is(':checked'),
		v12 = $("input[name=e8]:checked").is(':checked'),
		v13 = $("input[name=e9]:checked").is(':checked'),
		v14 = $("input[name=e10]:checked").is(':checked'),
		v15 = $("input[name=e11]:checked").is(':checked'),
		v16 = $("input[name=e12]:checked").is(':checked'),
		v17 = $("input[name=e13]:checked").is(':checked'),
		v18 = $("input[name=e14]:checked").is(':checked'),
		v19 = $("input[name=e15]:checked").is(':checked'),
		v20 = $("input[name=e16]:checked").is(':checked'),
		v21 = $('#date').val(),
		v22 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v20) {
		if (!v5) $("#d1").addClass("error_designation"); 
		else $("#d1").removeClass("error_designation");

		if (!v6) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v7) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if ((!v5) || (!v6) || (!v7)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");

		if (!v8) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v9) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");
		
		if (!v10) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if ((!v8) || (!v9) || (!v10)) $("#tab3").addClass("error_radio");
		else $("#tab3").removeClass("error_radio");

		if (!v11) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v12) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v13) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if ((!v11) || (!v12) || (!v13)) $("#tab4").addClass("error_radio");
		else $("#tab4").removeClass("error_radio");

		if (!v14) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");

		if (!v15) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!v16) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if ((!v14) || (!v15) || (!v16)) $("#tab5").addClass("error_radio");
		else $("#tab5").removeClass("error_radio");

		if (!v17) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v18) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v19) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if (!v20) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if ((!v17) || (!v18) || (!v19) || (!v20)) $("#tab6").addClass("error_radio");
		else $("#tab6").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};