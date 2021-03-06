$(document).ready(function() {

	var	sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		cold = parseFloat(localStorage.getItem('coldinp')),
		weight = parseFloat(localStorage.getItem('weightinp')),
		height = parseFloat(localStorage.getItem('heightinp')),
		pulse = parseFloat(localStorage.getItem('pulseinp')),
		sist = parseFloat(localStorage.getItem('sistinp')),
		dia = parseFloat(localStorage.getItem('diainp')),
		gender = localStorage.getItem('genderinp'),
		rec1 = parseFloat(localStorage.getItem('rec1inp')),
		rec2 = parseFloat(localStorage.getItem('rec2inp')),
		exercval = parseFloat(localStorage.getItem('exercvalinp')),
		lift = parseFloat(localStorage.getItem('liftinp')),
		jump = parseFloat(localStorage.getItem('jumpinp')),
		group = localStorage.getItem('groupinp'),
		recovery = localStorage.getItem('recoveryinp'),
		exercise = localStorage.getItem('exerciseinp'),
		lung = parseFloat(localStorage.getItem('lunginp')),
		training = parseFloat(localStorage.getItem('traininginp')),
		fac = localStorage.getItem('facinp');
	
	imt = parseFloat(height) - parseFloat(weight);
	cap = parseFloat(lung) / parseFloat(weight);
	
	var points = 0;
	if (group == 'Основная') {

		switch (true) {
			case (pulse >= 90) : points = points + 1; break;
			case (pulse >= 76 && pulse <= 89) : points = points + 2; break;
			case (pulse >= 68 && pulse <= 75) : points = points + 3; break;
			case (pulse >= 60 && pulse <= 67) : points = points + 4; break;
			case (pulse >= 51 && pulse <= 59) : points = points + 5; break;
			case (pulse <= 50) : points = points + 6; break;
		}

		switch (true) {
			case (imt <= 90) : points = points + 1; break;
			case (imt >= 91 && imt <= 95) : points = points + 2; break;
			case (imt >= 96 && imt <= 100) : points = points + 3; break;
			case (imt >= 101 && imt <= 105) : points = points + 4; break;
			case (imt >= 106 && imt <= 109) : points = points + 6; break;
			case (imt >= 110) : points = points + 8; break;
		}

		if (gender == 'Мужской') {

			if (recovery == 'Бег') {

				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 12.01) : points = points + 1; break;
					case (rec >= 11.01 && rec <= 12.00) : points = points + 2; break;
					case (rec >= 10.01 && rec <= 11.00) : points = points + 3; break;
					case (rec >= 9.01 && rec <= 10.00) : points = points + 4; break;
					case (rec >= 8.01 && rec <= 9.00) : points = points + 5; break;
					case (rec >= 7.30 && rec <= 8.00) : points = points + 7; break;
					case (rec <= 7.29) : points = points + 9; break;
				} 
			} else {

				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 3.00) : points = points + 1; break;
					case (rec >= 2.01 && rec <= 2.59) : points = points + 3; break;
					case (rec >= 1.01 && rec <= 2.00) : points = points + 5; break;
					case (rec <= 1.00) : points = points + 7; break;
				}	
			}

			if (exercise == 'push') {

				switch (true) {
					case (exercval <= 1) : points = points + 1; break;
					case (exercval >= 2 && exercval <= 3) : points = points + 2; break;
					case (exercval >= 4 && exercval <= 6) : points = points + 3; break;
					case (exercval >= 7 && exercval <= 10) : points = points + 4; break;
					case (exercval >= 11 && exercval <= 14) : points = points + 5; break;
					case (exercval >= 15) : points = points + 6; break;
				}
			} else {

				switch (true) {
					case (exercval <= 3) : points = points + 1; break;
					case (exercval >= 4 && exercval <= 9) : points = points + 2; break;
					case (exercval >= 10 && exercval <= 19) : points = points + 3; break;
					case (exercval >= 20 && exercval <= 29) : points = points + 4; break;
					case (exercval >= 30 && exercval <= 39) : points = points + 5; break;
					case (exercval >= 40) : points = points + 6; break;
				}
			}

			switch (true) {
				case (jump <= 199) : points = points + 1; break;
				case (jump >= 200 && jump <= 209) : points = points + 2; break;
				case (jump >= 210 && jump <= 219) : points = points + 3; break;
				case (jump >= 220 && jump <= 229) : points = points + 4; break;
				case (jump >= 230 && jump <= 239) : points = points + 5; break;
				case (jump >= 240) : points = points + 6; break;
			}
		} else {

			if (recovery == 'Бег') {

				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 14.01) : points = points + 1; break;
					case (rec >= 13.01 && rec <= 14.00) : points = points + 2; break;
					case (rec >= 12.01 && rec <= 13.00) : points = points + 3; break;
					case (rec >= 11.01 && rec <= 12.00) : points = points + 4; break;
					case (rec >= 10.01 && rec <= 11.00) : points = points + 5; break;
					case (rec >= 9.30 && rec <= 10.00) : points = points + 7; break;
					case (rec <= 9.29) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 3.01) : points = points + 1; break;
					case (rec >= 2.01 && rec <= 3.00) : points = points + 3; break;
					case (rec >= 1.01 && rec <= 2.00) : points = points + 5; break;
					case (rec <= 1.00) : points = points + 7; break;
				}	
			}

			switch (true) {
				case (lift <= 10) : points = points + 1; break;
				case (lift >= 11 && lift <= 19) : points = points + 2; break;
				case (lift >= 20 && lift <= 29) : points = points + 3; break;
				case (lift >= 30 && lift <= 39) : points = points + 4; break;
				case (lift >= 40 && lift <= 49) : points = points + 5; break;
				case (lift >= 50) : points = points + 6; break;
			}

			switch (true) {
				case (jump <= 140) : points = points + 1; break;
				case (jump >= 141 && jump <= 149) : points = points + 2; break;
				case (jump >= 150 && jump <= 159) : points = points + 3; break;
				case (jump >= 160 && jump <= 169) : points = points + 4; break;
				case (jump >= 170 && jump <= 179) : points = points + 5; break;
				case (jump >= 180) : points = points + 6; break;
			}
		}
		
		switch (true) {
			case (cold >= 5) : points = points + 1; break;
			case (cold >= 3 && cold <= 4) : points = points + 2; break;
			case (cold <= 2) : points = points + 3; break;
		}
	} else {
		
		switch (true) {
			case (pulse >= 90) : points = points + 1; break;
			case (pulse >= 76 && pulse <= 89) : points = points + 2; break;
			case (pulse >= 68 && pulse <= 75) : points = points + 3; break;
			case (pulse >= 60 && pulse <= 67) : points = points + 4; break;
			case (pulse >= 51 && pulse <= 59) : points = points + 5; break;
			case (pulse <= 50) : points = points + 6; break;
		}

		if (gender == 'Мужской') {

			switch (true) {
				case (sist >= 140 && dia >= 90) : points = points + 1; break;
				case (sist >= 131 && sist <= 139 && dia >= 81 && dia <= 89) : points = points + 2.5; break;
				case (sist >= 121 && sist <= 130 && dia >= 76 && dia <= 80) : points = points + 4.5; break;
				case (sist >= 111 && sist <= 120 && dia >= 71 && dia <= 75) : points = points + 6.5; break;
				case (sist <= 110 && dia <= 70) : points = points + 8.5; break;
			}
			
			switch (true) {
				case (lung <= 50) : points = points + 1; break;
				case (lung >= 51 && lung <= 55) : points = points + 2; break;
				case (lung >= 56 && lung <= 60) : points = points + 3; break;
				case (lung >= 61 && lung <= 65) : points = points + 4.5; break;
				case (lung >= 66 && lung <= 69) : points = points + 6.5; break;
				case (lung >= 70) : points = points + 8.5; break;
			}

			if (recovery == 'Бег') {

				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 12.01) : points = points + 1; break;
					case (rec >= 11.01 && rec <= 12.00) : points = points + 2; break;
					case (rec >= 10.01 && rec <= 11.00) : points = points + 3; break;
					case (rec >= 9.01 && rec <= 10.00) : points = points + 4; break;
					case (rec >= 8.01 && rec <= 9.00) : points = points + 5; break;
					case (rec >= 7.30 && rec <= 8.00) : points = points + 7; break;
					case (rec <= 7.29) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 3.01) : points = points + 1; break;
					case (rec >= 2.01 && rec <= 3.00) : points = points + 3; break;
					case (rec >= 1.01 && rec <= 2.00) : points = points + 5; break;
					case (rec < 1.00) : points = points + 7; break;
				}	
			}

			if (exercise == 'push') {

				switch (true) {
					case (exercval <= 1) : points = points + 1; break;
					case (exercval >= 2 && exercval <= 3) : points = points + 2; break;
					case (exercval >= 4 && exercval <= 6) : points = points + 3; break;
					case (exercval >= 7 && exercval <= 10) : points = points + 4; break;
					case (exercval >= 11 && exercval <= 14) : points = points + 5; break;
					case (exercval >= 15) : points = points + 6; break;
				}
			} else {
				
				switch (true) {
					case (exercval <= 4) : points = points + 1; break;
					case (exercval >= 5 && exercval <= 9) : points = points + 2; break;
					case (exercval >= 10 && exercval <= 19) : points = points + 3; break;
					case (exercval >= 20 && exercval <= 29) : points = points + 4; break;
					case (exercval >= 30 && exercval <= 39) : points = points + 5; break;
					case (exercval >= 40) : points = points + 6; break;
				}
			}

			switch (true) {
				case (jump <= 200) : points = points + 1; break;
				case (jump >= 201 && jump <= 209) : points = points + 2; break;
				case (jump >= 210 && jump <= 219) : points = points + 3; break;
				case (jump >= 220 && jump <= 229) : points = points + 4; break;
				case (jump >= 230 && jump <= 239) : points = points + 5; break;
				case (jump >= 240) : points = points + 6; break;
			}
		} else { 
			
			switch (true) {
				case (sist <= 80 && dia <= 50) : points = points + 1; break;
				case (sist >= 81 && sist <= 89 && dia >= 51 && dia <= 54) : points = points + 2.5; break;
				case (sist >= 90 && sist <= 99 && dia >= 55 && dia <= 59) : points = points + 4.5; break;
				case (sist >= 100 && dia >= 76) : points = points + 7.5; break;
			}

			switch (true) {
				case (lung <= 40) : points = points + 1; break;
				case (lung >= 41 && lung <= 45) : points = points + 2; break;
				case (lung >= 46 && lung <= 50) : points = points + 3; break;
				case (lung >= 51 && lung <= 55) : points = points + 4.5; break;
				case (lung >= 56 && lung <= 60) : points = points + 6.5; break;
				case (lung >= 61) : points = points + 8.5; break;
			}

			if (recovery == 'Бег') {

				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 14.01) : points = points + 1; break;
					case (rec >= 13.01 && rec <= 14.00) : points = points + 2; break;
					case (rec >= 12.01 && rec <= 13.00) : points = points + 3; break;
					case (rec >= 11.01 && rec <= 12.00) : points = points + 4; break;
					case (rec >= 10.01 && rec <= 11.00) : points = points + 5; break;
					case (rec >= 9.31 && rec <= 10.00) : points = points + 7; break;
					case (rec <= 9.30) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

				switch (true) {
					case (rec >= 3.01) : points = points + 1; break;
					case (rec >= 2.01 && rec <= 3.00) : points = points + 3; break;
					case (rec >= 1.01 && rec <= 2.00) : points = points + 5; break;
					case (rec <= 1.00) : points = points + 7; break;
				}	
			}

			switch (true) {
				case (lift <= 10) : points = points + 1; break;
				case (lift >= 11 && lift <= 19) : points = points + 2; break;
				case (lift >= 20 && lift <= 29) : points = points + 3; break;
				case (lift >= 30 && lift <= 39) : points = points + 4; break;
				case (lift >= 40 && lift <= 49) : points = points + 5; break;
				case (lift >= 50) : points = points + 6; break;
			}

			switch (true) {
				case (jump <= 140) : points = points + 1; break;
				case (jump >= 141 && jump <= 149) : points = points + 2; break;
				case (jump >= 150 && jump <= 159) : points = points + 3; break;
				case (jump >= 160 && jump <= 169) : points = points + 4; break;
				case (jump >= 170 && jump <= 179) : points = points + 5; break;
				case (jump >= 180) : points = points + 6; break;
			}
		}
		
		switch (true) {
			case (training <= 0) : points = points + 1.5; break;
			case (training >= 1 && training <= 2) : points = points + 2.5; break;
			case (training >= 3 && training <= 4) : points = points + 5.5; break;
			case (training >= 5 && training <= 7) : points = points + 7; break;
			case (training >= 8 && training <= 9) : points = points + 8; break;
			case (training >= 10) : points = points + 9; break;
		}

		switch (true) {
			case (cold >= 6) : points = points + 1; break;
			case (cold >= 4 && cold <= 5) : points = points + 2; break;
			case (cold >= 2 && cold <= 3) : points = points + 3; break;
			case (cold <= 1): points = points + 7.5; break;
		}
	}

	var groupout = localStorage.getItem('groupinp');

	if (groupout == 'Основная') {

		avg = points / 6;

		switch (true) {
			case (avg >= 6.0) : status = 'Супервысокий'; break;
			case (avg >= 5.0 && avg <= 5.9) : status = 'Очень высокий'; break;
			case (avg >= 4.0 && avg <= 4.9) : status = 'Высокий'; break;
			case (avg >= 3.0 && avg <= 3.9) : status = 'Средний'; break;
			case (avg >= 2.0 && avg <= 2.9) : status = 'Низкий'; break;
			case (avg <= 1.9) : status = 'Очень низкий'; break;
		} 
	} else { 
		
		avg = points / 8;

		switch (true) {
			case (avg >= 6.0) : status = 'Супервысокий'; break;
			case (avg >= 5.0 && avg <= 5.9) : status = 'Очень высокий'; break;
			case (avg >= 4.0 && avg <= 4.9) : status = 'Высокий'; break;
			case (avg >= 3.0 && avg <= 3.9) : status = 'Средний'; break;
			case (avg >= 2.0 && avg <= 2.9) : status = 'Низкий'; break;
			case (avg <= 1.9) : status = 'Очень низкий'; break;
		}
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#points').append(avg.toFixed(1) + ' балл(ов)');
	$('#status').append(status);
	$('#group').append(group);
	$('#fac').append(fac);
});