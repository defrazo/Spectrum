$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('#age').val(),
		v5 = $('#height').val(),
		v6 = $('#weight').val(),
		v7 = $('input[name="gender"]').is(':checked'),
		v8 = $("input[name=c1]:checked").is(':checked'),
		v9 = $("input[name=c2]:checked").is(':checked'),
		v10 = $("input[name=c3]:checked").is(':checked'),
		v11 = $("input[name=c4]:checked").is(':checked'),
		v12 = $("input[name=c5]:checked").is(':checked'),
		v13 = $("input[name=c6]:checked").is(':checked'),
		v14 = $("input[name=c7]:checked").is(':checked'),
		v15 = $("input[name=c8]:checked").is(':checked'),
		v16 = $("input[name=c9]:checked").is(':checked'),
		v17 = $("input[name=c10]:checked").is(':checked'),
		v18 = $("input[name=c11]:checked").is(':checked'),
		v19 = $("input[name=c12]:checked").is(':checked'),
		v20 = $("input[name=c13]:checked").is(':checked'),
		v21 = $("input[name=c14]:checked").is(':checked'),
		v22 = $("input[name=c15]:checked").is(':checked'),
		v23 = $("input[name=c16]:checked").is(':checked'),
		v24 = $("input[name=c17]:checked").is(':checked'),
		v25 = $("input[name=c18]:checked").is(':checked'),
		v26 = $("input[name=c19]:checked").is(':checked'),
		v27 = $("input[name=c20]:checked").is(':checked'),
		v28 = $("input[name=c21]:checked").is(':checked'),
		v29 = $("input[name=c22]:checked").is(':checked'),
		v30 = $('#date').val(),
		v31 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && 
		(v30) && (v31)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || 
		(!v30) || (!v31)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v29) {
		if (!v8) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v9) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v10) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v11) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v12) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if ((!v8) || (!v9) || (!v10) || (!v11) || (!v12)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");
		
		if (!v13) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if (!v14) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v15) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v16) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!v17) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");

		if ((!v13) || (!v14) || (!v15) || (!v16) || (!v17)) $("#tab3").addClass("error_radio");
		else $("#tab3").removeClass("error_radio");

		if (!v18) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!v19) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!v20) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v21) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v22) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if ((!v18) || (!v19) || (!v20) || (!v21) || (!v22)) $("#tab4").addClass("error_radio");
		else $("#tab4").removeClass("error_radio");

		if (!v23) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!v24) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if (!v25) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!v26) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!v27) $("#d20").addClass("error_designation");
		else $("#d20").removeClass("error_designation");

		if (!v28) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if ((!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28)) $("#tab5").addClass("error_radio");
		else $("#tab5").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};