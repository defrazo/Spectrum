$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('p11inp');
		q2 = localStorage.getItem('p12inp');
		q3 = localStorage.getItem('p21inp');
		q4 = localStorage.getItem('p22inp');
		q5 = localStorage.getItem('p31inp');
		q6 = localStorage.getItem('p32inp');
		q7 = localStorage.getItem('p41inp');
		q8 = localStorage.getItem('p42inp');
		q9 = localStorage.getItem('p51inp');
		q10 = localStorage.getItem('p52inp');
		q11 = localStorage.getItem('p61inp');
		q12 = localStorage.getItem('p62inp');
		q13 = localStorage.getItem('p71inp');
		q14 = localStorage.getItem('p72inp');
		q15 = localStorage.getItem('p81inp');
		q16 = localStorage.getItem('p82inp');
		q17 = localStorage.getItem('p91inp');
		q18 = localStorage.getItem('p92inp');
		q19 = localStorage.getItem('p101inp');
		q20 = localStorage.getItem('p102inp');
		q21 = localStorage.getItem('p111inp');
		q22 = localStorage.getItem('p112inp');
		q23 = localStorage.getItem('p121inp');
		q24 = localStorage.getItem('p122inp');
		q25 = localStorage.getItem('p131inp');
		q26 = localStorage.getItem('p132inp');
		q27 = localStorage.getItem('p141inp');
		q28 = localStorage.getItem('p142inp');
		q29 = localStorage.getItem('p151inp');
		q30 = localStorage.getItem('p152inp');
		q31 = localStorage.getItem('p161inp');
		q32 = localStorage.getItem('p162inp');
		q33 = localStorage.getItem('p171inp');
		q34 = localStorage.getItem('p172inp');
		q35 = localStorage.getItem('p181inp');
		q36 = localStorage.getItem('p182inp');
		q37 = localStorage.getItem('p191inp');
		q38 = localStorage.getItem('p192inp');
		q39 = localStorage.getItem('p201inp');
		q40 = localStorage.getItem('p202inp');
		fac = localStorage.getItem('facinp');

	var v1 = Math.pow((parseInt(q1) - parseInt(q2)),2);
	var v2 = Math.pow((parseInt(q3) - parseInt(q4)),2);
	var v3 = Math.pow((parseInt(q5) - parseInt(q6)),2);
	var v4 = Math.pow((parseInt(q7) - parseInt(q8)),2);
	var v5 = Math.pow((parseInt(q9) - parseInt(q10)),2);
	var v6 = Math.pow((parseInt(q11) - parseInt(q12)),2);
	var v7 = Math.pow((parseInt(q13) - parseInt(q14)),2);
	var v8 = Math.pow((parseInt(q15) - parseInt(q16)),2);
	var v9 = Math.pow((parseInt(q17) - parseInt(q18)),2);
	var v10 = Math.pow((parseInt(q19) - parseInt(q20)),2);
	var v11 = Math.pow((parseInt(q21) - parseInt(q22)),2);
	var v12 = Math.pow((parseInt(q23) - parseInt(q24)),2);
	var v13 = Math.pow((parseInt(q25) - parseInt(q26)),2);
	var v14 = Math.pow((parseInt(q27) - parseInt(q28)),2);
	var v15 = Math.pow((parseInt(q29) - parseInt(q30)),2);
	var v16 = Math.pow((parseInt(q31) - parseInt(q32)),2);
	var v17 = Math.pow((parseInt(q33) - parseInt(q34)),2);
	var v18 = Math.pow((parseInt(q35) - parseInt(q36)),2);
	var v19 = Math.pow((parseInt(q37) - parseInt(q38)),2);
	var v20 = Math.pow((parseInt(q39) - parseInt(q40)),2);
	
	var sum = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 + v12 + v13 + v14 + v15 + v16 + v17 + v18 + v19 + v20;
	
	var k = (1 - (sum * 0.00075)).toFixed(2);
	
	switch (true) {
		case (k <= 0.5) : var ks = 'Заниженная самооценка'; break;
		case ((k >= 0.51) && (k <= 0.75)) : var ks = 'Адекватная самооценка'; break;
		case ((k >= 0.751) && (k <= 0.85)) : var ks = 'Высокая самооценка'; break;
		case (k >= 0.851): var ks = 'Завышенная самооценка'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#fac').append(fac);
	$('#status').append(ks);
});