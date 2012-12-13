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
		deepEqual(
			Hangul.disassemble('ㄳ'),
			['ㄱ','ㅅ'],
			"Hangul.disassemble('ㄳ')"
		);
		deepEqual(
			Hangul.disassemble('ㅙ'),
			['ㅗ','ㅐ'],
			"Hangul.disassemble('ㅙ')"
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
		deepEqual(
			Hangul.assemble(['ㄱ','ㅅ']),
			'ㄳ',
			"Hangul.assemble(['ㄱ','ㅅ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅗ','ㅐ']),
			'ㅙ',
			"Hangul.assemble(['ㅗ','ㅐ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅈ','ㅅ','ㅏ']),
			'ㅈ사',
			"Hangul.assemble(['ㅈ','ㅅ','ㅏ'])"
		);
		deepEqual(
			Hangul.assemble(['ㄱ','ㅅ','ㄱ','ㅅ']),
			'ㄳㄳ',
			"Hangul.assemble(['ㄱ','ㅅ','ㄱ','ㅅ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅗ','ㅐ','ㅗ','ㅐ']),
			'ㅙㅙ',
			"Hangul.assemble(['ㅗ','ㅐ','ㅗ','ㅐ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅈ','ㅗ','ㅗ','ㅐ']),
			'조ㅙ',
			"Hangul.assemble(['ㅈ','ㅗ','ㅗ','ㅐ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅣ','ㅗ','ㅐ']),
			'ㅣㅙ',
			"Hangul.assemble(['ㅣ','ㅗ','ㅐ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅃ','ㅉ','ㅏ','ㄸ']),
			'ㅃ짜ㄸ',
			"Hangul.assemble(['ㅃ','ㅉ','ㅏ','ㄸ'])"
		);
		deepEqual(
			Hangul.assemble(['ㅒ','ㅗ','ㅒ']),
			'ㅒㅗㅒ',
			"Hangul.assemble(['ㅒ','ㅗ','ㅒ'])"
		);
	});

	test ('Hangul.search Tests', function(){
		equal(
			Hangul.search('도우미', '도움'),
			0,
			"Hangul.search('도우미', '도움')"
		);
		equal(
			Hangul.search('달걀', '닭'),
			0,
			"Hangul.search('달걀', '닭')"
		);
		equal(
			Hangul.search('도우미', 'ㅜㅁ'),
			3,
			"Hangul.search('도우미', 'ㅜㅁ')"
		);
		equal(
			Hangul.search('달맞이', 'ㄹ마'),
			2,
			"Hangul.search('달맞이', 'ㄹ마')"
		);
		equal(
			Hangul.search('달맞이', 'ㅁㅈ'),
			-1,
			"Hangul.search('달맞이', 'ㅁㅈ')"
		);
	}) ;

	test ('Hangul.Searcher Tests', function(){
		var searcher = new Hangul.Searcher('닭');

		equal(
			searcher.search('달걀'),
			0,
			"searcher.search('달걀')"
		);
		equal(
			searcher.search('달구지'),
			0,
			"searcher.search('달구지')"
		);
		equal(
			searcher.search('닮은'),
			-1,
			"searcher.search('닮은')"
		);
	}) ;
	
	
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


