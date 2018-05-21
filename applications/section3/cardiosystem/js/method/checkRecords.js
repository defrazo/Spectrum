$(document).ready(function() { //Проверка ввода фамилии 
	$('#sname').focusout(function() { //Проверяет значение поля при снятии фокуса с него
		var sname = $('#sname').val();
		
		if (sname != '')	{
		
			if (isValidSname(sname)) { //Убирает класс ошибки с поля ввода
				$('#sname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vSname', 1);
			} else { //Добавляет класс ошибки к полю ввода
				$('#sname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0)); //Удаляет строку
			} 
		}
		
		$('#sname').keyup(function() { //Убирает пробелы и прочие символы
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) { //Проверяет соответствие значения поля типу данных
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() { //Проверка ввода имени
	$('#fname').focusout(function() {
		var fname = $('#fname').val();
		
		if (fname != '')	{
			
			if (isValidFname(fname)) {
				$('#fname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vFname', 1);
			} else {
				$('#fname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#fname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidFname(valfname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valfname);
}

$(document).ready(function() { //Проверка ввода отчества
	$('#mname').focusout(function() {
		var mname = $('#mname').val();
		
		if (mname != '')	{
			
			if (isValidMname(mname)) {
				$('#mname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vMname', 1);
			} else {
				$('#mname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));	
			}
		}
		
		$('#mname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidMname(valmname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valmname);
}


$(document).ready(function() { //Проверка ввода возраста
	$('#age').focusout(function() {
		var age = $('#age').val();
		
		if (($(this).val() < 6) || ($(this).val() > 75)) $(this).val($(this).val().substr(0, 0));

		if (age != '') {
		
			if (isValidAge(age)) {
				$('#age').css('border', '1px solid #0dd01a');
				localStorage.setItem('vAge', 1);
			} else {
				$('#age').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#age').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#age').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidAge(valage) {
	if ($('#age').val().length == 1) { //Проверяет при длине значения = 1
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valage);
	} 

	if ($('#age').val().length == 2) { //Проверяет при длине значения = 2
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valage);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#weight').focusout(function() {
		var weight = $('#weight').val();
		
		if (($(this).val() < 30) || ($(this).val() > 200)) $(this).val($(this).val().substr(0, 0));

		if (weight != '') {
			
			if (isValidWeight(weight)) {
				$('#weight').css('border', '1px solid #0dd01a');
				localStorage.setItem('vWeight', 1);
			} else {
				$('#weight').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#weight').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#weight').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWeight(valweight) {
	if ($('#weight').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valweight);
	}

	if ($('#weight').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valweight);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#height').focusout(function() {
		var height = $('#height').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (height != '') {
			
			if (isValidHeight(height)) {
				$('#height').css('border', '1px solid #0dd01a');
				localStorage.setItem('vheight', 1);
			} else {
				$('#height').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#height').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#height').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeight(valheight) {
	if ($('#height').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheight);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#heightsit').focusout(function() {
		var heightsit = $('#heightsit').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (heightsit != '') {
			
			if (isValidHeightsit(heightsit)) {
				$('#heightsit').css('border', '1px solid #0dd01a');
				localStorage.setItem('vheightsit', 1);
			} else {
				$('#heightsit').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightsit').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightsit').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightsit(valheightsit) {
	if ($('#heightsit').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightsit);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#heightmother').focusout(function() {
		var heightmother = $('#heightmother').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (heightmother != '') {
			
			if (isValidHeightmother(heightmother)) {
				$('#heightmother').css('border', '1px solid #0dd01a');
				localStorage.setItem('vheightmother', 1);
			} else {
				$('#heightmother').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightmother').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightmother').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightmother(valheightmother) {
	if ($('#heightmother').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightmother);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#heightfather').focusout(function() {
		var heightfather = $('#heightfather').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (heightfather != '') {
			
			if (isValidHeightfather(heightfather)) {
				$('#heightfather').css('border', '1px solid #0dd01a');
				localStorage.setItem('vheightfather', 1);
			} else {
				$('#heightfather').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightfather').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightfather').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightfather(valheightfather) {
	if ($('#heightfather').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightfather);
	}
}

$(document).ready(function() { 
	$('#lung').focusout(function() {
		var lung = $('#lung').val();
		
		if (($(this).val() < 1000) || ($(this).val() > 8000)) $(this).val($(this).val().substr(0, 0));

		if (lung != '') {
			if (isValidLung(lung)) {
				$('#lung').css('border', '1px solid #0dd01a');
				localStorage.setItem('vlung', 1);
			} else {
				$('#lung').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#lung').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#lung').keyup(function() {
		if ($(this).val().length > 4) $(this).val($(this).val().substr(0, 4));         
	});
});

function isValidLung(vallung) {
	if ($('#lung').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9][0-9][0-9]/);
		return pattern.test(vallung);
	}
}

$(document).ready(function() { //Проверка ввода систолического давления  
	$('#dynam').focusout(function() {
		var dynam = $('#dynam').val();
		
		if (($(this).val() < 8) || ($(this).val() > 80)) $(this).val($(this).val().substr(0, 0));
		
		if (dynam != '') {
			
			if (isValidDynam(dynam)) {
				$('#dynam').css('border', '1px solid #0dd01a');
				localStorage.setItem('vdynam', 1);
			} else {
				$('#dynam').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dynam').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#dynam').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidDynam(valdynam) {
	if ($('#dynam').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdynam);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#chest').focusout(function() {
		var chest = $('#chest').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (chest != '') {
			
			if (isValidChest(chest)) {
				$('#chest').css('border', '1px solid #0dd01a');
				localStorage.setItem('vchest', 1);
			} else {
				$('#chest').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#chest').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#chest').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidChest(valchest) {
	if ($('#chest').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valchest);
	}

	if ($('#chest').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valchest);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#shoulders').focusout(function() {
		var shoulders = $('#shoulders').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (shoulders != '') {
			
			if (isValidShoulders(shoulders)) {
				$('#shoulders').css('border', '1px solid #0dd01a');
				localStorage.setItem('vshoulders', 1);
			} else {
				$('#shoulders').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#shoulders').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#shoulders').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidShoulders(valshoulders) {
	if ($('#shoulders').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valshoulders);
	}

	if ($('#shoulders').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valshoulders);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#waist').focusout(function() {
		var waist = $('#waist').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (waist != '') {
			
			if (isValidWaist(waist)) {
				$('#waist').css('border', '1px solid #0dd01a');
				localStorage.setItem('vwaist', 1);
			} else {
				$('#waist').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#waist').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#waist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWaist(valwaist) {
	if ($('#waist').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valwaist);
	}

	if ($('#waist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valwaist);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#legs').focusout(function() {
		var legs = $('#legs').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (legs != '') {
			
			if (isValidLegs(legs)) {
				$('#legs').css('border', '1px solid #0dd01a');
				localStorage.setItem('vlegs', 1);
			} else {
				$('#legs').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#legs').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#legs').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidLegs(vallegs) {
	if ($('#legs').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(vallegs);
	}

	if ($('#legs').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(vallegs);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var age = $('#age').val();
	var weight = $('#weight').val();
	var height = $('#height').val();
	var heightsit = $('#heightsit').val();
	var heightmother = $('#heightmother').val();
	var heightfather = $('#heightfather').val();
	var lung = $('#lung').val();
	var dynam = $('#dynam').val();
	var chest = $('#chest').val();
	var waist = $('#waist').val();
	var legs = $('#legs').val();
	var shoulders = $('#shoulders').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');

	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');	

	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');

	if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');	

	if (isValidHeightsit(heightsit)) $('#heightsit').css('border', '1px solid #0dd01a');

	if (isValidHeightmother(heightmother)) $('#heightmother').css('border', '1px solid #0dd01a');		

	if (isValidHeightfather(heightfather)) $('#heightfather').css('border', '1px solid #0dd01a');

	if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');

	if (isValidDynam(dynam)) $('#dynam').css('border', '1px solid #0dd01a');

	if (isValidChest(chest)) $('#chest').css('border', '1px solid #0dd01a');

	if (isValidWaist(waist)) $('#waist').css('border', '1px solid #0dd01a');
	
	if (isValidShoulders(shoulders)) $('#shoulders').css('border', '1px solid #0dd01a');

	if (isValidLegs(legs)) $('#legs').css('border', '1px solid #0dd01a');					
});