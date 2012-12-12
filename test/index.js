$(function(){
	test ('Hangul.disassemble Tests', function(){
		deepEqual(
			Hangul.disassemble('가나다'),
			['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ'],
			'Hangul.disassemble(\'가나다\') - 기본동작'
		);
		deepEqual(
			Hangul.disassemble('비행'),
			['ㅂ','ㅣ','ㅎ','ㅐ','ㅇ'],
			'Hangul.disassemble(\'비행\') - 받침'
		);
		deepEqual(
			Hangul.disassemble('쓸다'),
			['ㅆ','ㅡ','ㄹ','ㄷ','ㅏ'],
			'Hangul.disassemble(\'쓸다\') - 초성에 쌍자음'
		);
		deepEqual(
			Hangul.disassemble('의사'),
			['ㅇ','ㅡ','ㅣ','ㅅ','ㅏ'],
			'Hangul.disassemble(\'의사\') - 중성에 복합모음'
		);
		deepEqual(
			Hangul.disassemble('짧은'),
			['ㅉ','ㅏ','ㄹ','ㅂ','ㅇ','ㅡ','ㄴ'],
			'Hangul.disassemble(\'짧은\') - 종성에 복합자음'
		);
		deepEqual(
			Hangul.disassemble('닭고기'),
			['ㄷ','ㅏ','ㄹ','ㄱ','ㄱ','ㅗ','ㄱ','ㅣ'],
			'Hangul.disassemble(\'닭고기\')'
		);
		deepEqual(
			Hangul.disassemble('옽ㅏ'),
			['ㅇ','ㅗ','ㅌ','ㅏ'],
			'Hangul.disassemble(\'옽ㅏ\')'
		);
		deepEqual(
			Hangul.disassemble('AB삵e$@%2324sdf낄캌ㅋㅋㅋㅋ'),
			['A','B','ㅅ','ㅏ','ㄹ','ㄱ','e','$','@','%','2','3','2','4','s','d','f','ㄲ','ㅣ','ㄹ','ㅋ','ㅏ','ㅋ','ㅋ','ㅋ','ㅋ','ㅋ'],
			'Hangul.disassemble(\'AB삵e$@%2324sdf낄캌ㅋㅋㅋㅋ\')'
		);
		deepEqual(
			Hangul.disassemble('뷁궬릪쯻튋'),
			['ㅂ','ㅜ','ㅔ','ㄹ','ㄱ','ㄱ','ㅜ','ㅔ','ㄹ','ㄹ','ㅡ','ㅣ','ㅍ','ㅉ','ㅡ','ㅣ','ㄹ','ㅂ','ㅌ','ㅜ','ㅣ','ㄹ','ㅂ'],
			'Hangul.disassemble(\'뷁궬릪쮧틟\')'
		);
	});

	test ('Hangul.assemble Tests', function(){
		equal(
			Hangul.assemble(['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']),
			'가나다',
			"Hangul.assemble(['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']) - 기본동작"
		);
		deepEqual(
			Hangul.assemble(['ㅂ','ㅣ','ㅎ','ㅐ','ㅇ']),
			'비행',
			"Hangul.assemble(['ㅂ','ㅣ','ㅎ','ㅐ','ㅇ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅆ','ㅡ','ㄹ','ㄷ','ㅏ']),
			'쓸다',
			"Hangul.assemble(['ㅆ','ㅡ','ㄹ','ㄷ','ㅏ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅇ','ㅡ','ㅣ','ㅅ','ㅏ']),
			'의사',
			"Hangul.assemble(['ㅇ','ㅡ','ㅣ','ㅅ','ㅏ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅉ','ㅏ','ㄹ','ㅂ','ㅇ','ㅡ','ㄴ']),
			'짧은',
			"Hangul.assemble(['ㅉ','ㅏ','ㄹ','ㅂ','ㅇ','ㅡ','ㄴ'])"
		);
		deepEqual(
			Hangul.assemble(['ㄷ','ㅏ','ㄹ','ㄱ','ㄱ','ㅗ','ㄱ','ㅣ']),
			'닭고기',
			"Hangul.assemble(['ㄷ','ㅏ','ㄹ','ㄱ','ㄱ','ㅗ','ㄱ','ㅣ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅇ','ㅗ','ㅌ','ㅏ']),
			'오타',
			"Hangul.assemble(['ㅇ','ㅗ','ㅌ','ㅏ'])"
		);
		deepEqual(
			Hangul.assemble(['A','B','ㅅ','ㅏ','ㄹ','ㄱ','e','$','@','%','2','3','2','4','s','d','f','ㄲ','ㅣ','ㄹ','ㅋ','ㅏ','ㅋ','ㅋ','ㅋ','ㅋ','ㅋ']),
			'AB삵e$@%2324sdf낄캌ㅋㅋㅋㅋ',
			"Hangul.assemble(['A','B','ㅅ','ㅏ','ㄹ','ㄱ','e','$','@','%','2','3','2','4','s','d','f','ㄲ','ㅣ','ㄹ','ㅋ','ㅏ','ㅋ','ㅋ','ㅋ','ㅋ','ㅋ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅂ','ㅜ','ㅔ','ㄹ','ㄱ','ㄱ','ㅜ','ㅔ','ㄹ','ㄹ','ㅡ','ㅣ','ㅍ','ㅉ','ㅡ','ㅣ','ㄹ','ㅂ','ㅌ','ㅜ','ㅣ','ㄹ','ㅂ']),
			'뷁궬릪쯻튋',
			"Hangul.assemble(['ㅂ','ㅜ','ㅔ','ㄹ','ㄱ','ㄱ','ㅜ','ㅔ','ㄹ','ㄹ','ㅡ','ㅣ','ㅍ','ㅉ','ㅡ','ㅣ','ㄹ','ㅂ','ㅌ','ㅜ','ㅣ','ㄹ','ㅂ'])"
		);
	});
	
	$('#test1').submit(function(){
		var str = $('#str').val(),
				result1 = Hangul.disassemble(str),
				result2 = Hangul.assemble(result1);

		$('#test1-result1').html(result1);
		$('#test1-result2').html(result2);
		if (str === result2) {
			$('#test1-summary2').html('Same!');
		} else { 
			$('#test1-summary2').html('Fail!');
		}

		return false;
	});
});


