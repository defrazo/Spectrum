$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	age = localStorage.getItem('ageinp');
	weight = localStorage.getItem('weightinp');
	height = localStorage.getItem('heightinp');
	heightsit = localStorage.getItem('heightsitinp');
	heightmother = localStorage.getItem('heightmotherinp');
	heightfather = localStorage.getItem('heightfatherinp');
	lung = localStorage.getItem('lunginp');
	dynam = localStorage.getItem('dynaminp');
	chest = localStorage.getItem('chestinp');
	waist = localStorage.getItem('waistinp');
	shoulder = localStorage.getItem('shoulderinp');
	shoulders = localStorage.getItem('shouldersinp');
	legs = localStorage.getItem('legsinp');
	gender = localStorage.getItem('genderinp');
	fac = localStorage.getItem('facinp');
	
	if ((height != '') && (heightmother != '') && (heightfather != '')) {
		switch (true) {
			case (gender == 'Мужской') : var heightr = (parseFloat(heightmother) * 1.08 + parseFloat(heightfather)) / 2; break;
			case (gender == 'Женский') : var heightr = (parseFloat(heightmother) + parseFloat(heightfather) * 0.93) / 2; break;
		}
	}

	if ((weight != '') && (height != '')) {
		
		switch (true) {
			case (height <= 165) : var tmt = height - 100; break;
			case ((height >= 165.1) && (height <= 175)) : var tmt = height - 105; break;
			case (height >= 165.1) : var tmt = height - 110; break;
		}

		if (weight > tmt) {
			tmtpercent = tmt / 100;
			tmtdiff = ((weight - tmt) / tmtpercent).toFixed();

			switch (true) {
				case (tmtdiff <= 10) : var adiposity = '(У вас ожирение I степени)'; break;
				case ((tmtdiff >= 11) && (tmtdiff <= 29)) : var adiposity = '(У вас ожирение II степени)'; break;
				case ((tmtdiff >= 30) && (tmtdiff <= 49)) : var adiposity = '(У вас ожирение III степени)'; break;
				case ((tmtdiff >= 50) && (tmtdiff <= 99)): var adiposity = '(У вас ожирение IV степени)'; break;
				case (tmtdiff >= 100) : var adiposity = '(У вас ожирение V степени)'; break;
			}
		} else var adiposity = '';

		switch (true) {
			case (gender == 'Мужской') : var pimt = height - 100 - (height - 150) / 4; break;
			case (gender == 'Женский') : var pimt = height - 100 - (height - 150) / 5; break;
		}

		if (weight > pimt) {
			pimtpercent = pimt / 100;
			pimtdiff = ((weight - pimt) / pimtpercent).toFixed();

			switch (true) {
				case (pimtdiff <= 10) : var adiposit = '(У вас ожирение I степени)'; break;
				case ((pimtdiff >= 11) && (pimtdiff <= 29)) : var adiposit = '(У вас ожирение II степени)'; break;
				case ((pimtdiff >= 30) && (pimtdiff <= 49)) : var adiposit = '(У вас ожирение III степени)'; break;
				case ((pimtdiff >= 50) && (pimtdiff <= 99)): var adiposit = '(У вас ожирение IV степени)'; break;
				case (pimtdiff >= 100) : var adiposit = '(У вас ожирение V степени)'; break;
			}
		}  else var adiposit = '';

		if ((weight != '') && (height != '')) {
			var obese = weight / (height / 100);
		
			switch (true) {
				case (obese <= 18) : var obesestatus = '(Отличное состояние)'; break;
				case ((obese >= 19) && (obese <= 24)) : var obesestatus = '(Нормальное состояние)'; break;
				case ((obese >= 25) && (obese <= 27)) : var obesestatus = '(Повышенная тучность)'; break;
				case (obese >= 28) : var obesestatus = '(Ожирение организма)'; break;
			}

			if ((weight > tmt) || (weight > pimt)) {
				var quetelet = (weight / ((height / 100) * (height / 100))).toFixed();

				switch (true) {
					case (gender == 'Мужской') :
						switch (true) {
							case (quetelet <= 25) : var queteletstatus = '(Норма)'; break;
							case ((quetelet >= 25.01) && (quetelet <= 29.9)) : var queteletstatus = '(Избыточная масса)'; break;
							case ((quetelet >= 30.01) && (quetelet <= 39)) : var queteletstatus = '(Ожирение)'; break;
							case (quetelet >= 40) : var queteletstatus = '(Значительное ожирение)'; break;
						}
					break;
					case (gender == 'Женский') :
						switch (true) {
							case (quetelet <= 24) : var queteletstatus = '(Норма)'; break;
							case ((quetelet >= 24.01) && (quetelet <= 29.9)) : var queteletstatus = '(Избыточная масса)'; break;
							case ((quetelet >= 30.01) && (quetelet <= 39)) : var queteletstatus = '(Ожирение)'; break;
							case (quetelet >= 40) : var queteletstatus = '(Значительное ожирение)'; break;
						}
					break;
				}
			} else {
				var quetelet = (weight * 1000) / height;

				switch (true) {
					case (quetelet <= 299) : var queteletstatus = '(Истощение)'; break;
					case ((quetelet >= 300) && (quetelet <= 319)) : var queteletstatus = '(Очень плохо)'; break;
					case ((quetelet >= 320) && (quetelet <= 359)) : var queteletstatus = '(Плохо)'; break;
					case ((quetelet >= 360) && (quetelet <= 389)) : var queteletstatus = '(Средне)'; break;
					case ((quetelet >= 390) && (quetelet <= 400)) : var queteletstatus = '(Идеально)'; break;
					case ((quetelet >= 401) && (quetelet <= 415)) : var queteletstatus = '(Хорошо)'; break;
					case ((quetelet >= 416) && (quetelet <= 450)) : var queteletstatus = '(Излишний вес)'; break;
					case ((quetelet >= 450) && (quetelet <= 540)) : var queteletstatus = '(Чрезмерный вес)'; break;
					case (quetelet >= 540) : var queteletstatus = '(Ожирение)'; break;
				}
			}
		}

		if ((lung != '') && (weight != '')) var lindex = (lung / weight).toFixed();

		if ((dynam != '') && (weight != '')) var strindex = (dynam / weight).toFixed(2);

		if ((height != '') && (heightsit != '')) var ipb = (((height - heightsit) / heightsit) * 100).toFixed();

		if ((chest != '') && (height != '')) {
			var pgt = ((chest / height) * 100).toFixed();

			var erris = (chest - (0.5 * height)).toFixed();
		}

		if ((shoulders != '') && (height != '')) var propindex = ((shoulders / height) * 100).toFixed();

		if ((height != '') && (weight != '') && (chest = '')) {
			var ipin = (parseFloat(height) - (parseFloat(weight) + parseFloat(chest))).toFixed();

			switch (true) {
				case (ipin <= 10) : var ipinstatus = '(Крепкое телосложение)'; break;
				case ((ipin >= 11) && (ipin <= 20)) : var ipinstatus = '(Хорошее телосложение)'; break;
				case ((ipin >= 21) && (ipin <= 25)) : var ipinstatus = '(Среднее телосложение)'; break;
				case ((ipin >= 26) && (ipin <= 35)) : var ipinstatus = '(Слабое телосложение)'; break;
				case (ipin >= 36) : var ipinstatus = '(Очень слабое телосложение)'; break;
			}
		}

		if ((legs != '') && (heightsit != '')) {
			var iskell = ((legs / heightsit) * 100).toFixed();

			switch (true) {
				case (iskell <= 84.9) : var iskellstatus = '(Короткие ноги)'; break;
				case ((iskell >= 85) && (iskell <= 89)) : var iskellstatus = '(Средние ноги)'; break;
				case (iskell >= 90) : var iskellstatus = '(Длинные ноги)'; break;
			}
		}
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#heightr').append((heightr).toFixed()).append(' см');
	$('#tmt').append(tmt).append(' кг. '+ adiposity);
	$('#pimt').append(pimt).append(' кг. '+ adiposit);
	$('#obese').append(obese).append('. '+ obesestatus);
	$('#quetelet').append(quetelet).append('. '+ queteletstatus);
	$('#lindex').append(lindex);
	$('#strindex').append(strindex);
	$('#ipb').append(ipb).append('%');
	$('#pgt').append(pgt).append('%');
	$('#propindex').append(propindex).append('%');
	$('#erris').append(erris);
	$('#ipin').append(ipin).append('. '+ ipinstatus);
	$('#iskell').append(iskell).append('%').append(' '+ iskellstatus);
	$('#gender').append(gender);
	$('#fac').append(fac);
	$('#age').append(age).append(' лет');
});