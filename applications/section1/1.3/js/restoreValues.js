$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('pulseinp') != '')	$('#pulse').val(localStorage.getItem('pulseinp'));
	if (localStorage.getItem('sistinp') != '')	$('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('rec1inp') != '')	$('#rec1').val(localStorage.getItem('rec1inp'));
	if (localStorage.getItem('rec2inp') != '')	$('#rec2').val(localStorage.getItem('rec2inp'));
	if (localStorage.getItem('lunginp') != '')	$('#lung').val(localStorage.getItem('lunginp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('dynaminp') != '')	$('#dynam').val(localStorage.getItem('dynaminp'));
});