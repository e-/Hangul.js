/**
 * Hangul.js
 * https://github.com/e-/Hangul.js
 *
 * Copyright 2016, Jaemin Jo
 * under the MIT license.
 */

(function(){
  'use strict';
  var CHO = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
        'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ',
        'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ',
        'ㅍ', 'ㅎ'
      ],  
      JUNG = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ',
        'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'],
        ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ','ㅓ'], ['ㅜ','ㅔ'], ['ㅜ','ㅣ'],
        'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'
      ],  
      JONG = [
        '', 'ㄱ', 'ㄲ', ['ㄱ','ㅅ'], 'ㄴ', ['ㄴ','ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ',
        ['ㄹ', 'ㄱ'], ['ㄹ','ㅁ'], ['ㄹ','ㅂ'], ['ㄹ','ㅅ'], ['ㄹ','ㅌ'], ['ㄹ','ㅍ'], ['ㄹ','ㅎ'], 'ㅁ',
        'ㅂ', ['ㅂ','ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' 
      ],  
      HANGUL_OFFSET = 0xAC00,
      CONSONANTS = [  
        'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ',
        'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 
        'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 
        'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' 
      ],
      COMPLETE_CHO = [ 
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
        'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ',
        'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'    
      ],
      COMPLETE_JUNG = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ',
        'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
        'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ',
        'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
      ],
      COMPLETE_JONG = [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ',
        'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ',
        'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' 
      ],
      COMPLEX_CONSONANTS = [
        ['ㄱ','ㅅ','ㄳ'],
        ['ㄴ','ㅈ','ㄵ'],
        ['ㄴ','ㅎ','ㄶ'],
        ['ㄹ','ㄱ','ㄺ'], 
        ['ㄹ','ㅁ','ㄻ'], 
        ['ㄹ','ㅂ','ㄼ'],
        ['ㄹ','ㅅ','ㄽ'], 
        ['ㄹ','ㅌ','ㄾ'], 
        ['ㄹ','ㅍ','ㄿ'], 
        ['ㄹ','ㅎ','ㅀ'], 
        ['ㅂ','ㅅ','ㅄ']
      ],
      COMPLEX_VOWELS = [
        ['ㅗ','ㅏ','ㅘ'], 
        ['ㅗ','ㅐ','ㅙ'],
        ['ㅗ','ㅣ','ㅚ'], 
        ['ㅜ','ㅓ','ㅝ'], 
        ['ㅜ','ㅔ','ㅞ'], 
        ['ㅜ','ㅣ','ㅟ'],
        ['ㅡ','ㅣ','ㅢ']
      ],
      CONSONANTS_HASH,
      CHO_HASH,
      JUNG_HASH,
      JONG_HASH,
      COMPLEX_CONSONANTS_HASH,
      COMPLEX_VOWELS_HASH
    ;

  function _makeHash(array){
    var length = array.length,
        hash = {0 : 0}
      ;
    for (var i = 0; i < length; i++) {
      if(array[i])
        hash[array[i].charCodeAt(0)] = i;
    }
    return hash;
  }

  CONSONANTS_HASH = _makeHash(CONSONANTS);
  CHO_HASH = _makeHash(COMPLETE_CHO);
  JUNG_HASH = _makeHash(COMPLETE_JUNG);
  JONG_HASH = _makeHash(COMPLETE_JONG);

  function _makeComplexHash(array){
    var length = array.length,
        hash = {},
        code1,
        code2
      ;
    for (var i = 0; i < length; i++) {
      code1 = array[i][0].charCodeAt(0);
      code2 = array[i][1].charCodeAt(0);
      if (typeof hash[code1] === 'undefined') {
        hash[code1] = {};
      }
      hash[code1][code2] = array[i][2].charCodeAt(0);
    }
    return hash;
  }

  COMPLEX_CONSONANTS_HASH = _makeComplexHash(COMPLEX_CONSONANTS);
  COMPLEX_VOWELS_HASH = _makeComplexHash(COMPLEX_VOWELS);

  function _isConsonant(c) {
    return CONSONANTS_HASH[c];
  }

  function _isCho(c){
    return typeof CHO_HASH[c] !== 'undefined';
  }

  function _isJung(c){
    return typeof JUNG_HASH[c] !== 'undefined';
  }

  function _isJong(c){
    return typeof JONG_HASH[c] !== 'undefined';
  }
  
  function _isHangul(c /* code number */){
    return 0xAC00 <= c && c <= 0xd7a3;
  }

  function _isJungJoinable(a,b){
    return (COMPLEX_VOWELS_HASH[a] && COMPLEX_VOWELS_HASH[a][b]) ? COMPLEX_VOWELS_HASH[a][b] : false;
  }

  function _isJongJoinable(a,b){
    return COMPLEX_CONSONANTS_HASH[a] && COMPLEX_CONSONANTS_HASH[a][b] ? COMPLEX_CONSONANTS_HASH[a][b] : false;
  }

  var disassemble = function(string, grouped){
    if (typeof string === 'object') {
      string = string.join('');
    }

    var result = [],
        length = string.length,
        cho,
        jung,
        jong,
        code,
        r
      ;

    for (var i = 0; i < length; i++) {
      var temp = [];

      code = string.charCodeAt(i);
      if (_isHangul(code)) { // 완성된 한글이면
        code -= HANGUL_OFFSET;
        jong = code % 28;
        jung = (code - jong) / 28 % 21;
        cho = parseInt((code - jong) / 28 / 21);
        temp.push(CHO[cho]);
        if (typeof JUNG[jung] === 'object') {
          temp = temp.concat(JUNG[jung]);
        } else {
          temp.push(JUNG[jung]);
        }
        if (jong > 0) {
          if(typeof JONG[jong] === 'object') {
            temp = temp.concat(JONG[jong]);
          } else {
            temp.push(JONG[jong]);
          }
        }
      } else if (_isConsonant(code)) { //자음이면
        if (_isCho(code)) {
          r = CHO[CHO_HASH[code]];
        } else {
          r = JONG[JONG_HASH[code]];
        }
        if (typeof r === 'string') {
          temp.push(r);
        } else {
          temp = temp.concat(r);
        }
      } else if (_isJung(code)) {
        r = JUNG[JUNG_HASH[code]];
        if (typeof r === 'string') {
          temp.push(r);
        } else { 
          temp = temp.concat(r);
        }
      } else {
        temp.push(string.charAt(i));
      }
      
      if(grouped) result.push(temp);
      else result = result.concat(temp);
    }

    return result;
  };
  
  var assemble = function(array){
    if (typeof array === 'string') {
      array = disassemble(array);
    }

    var result = [],
        length = array.length,
        code ,
        stage = 0,
        complete_index = -1, //완성된 곳의 인덱스
        previous_code
      ;

    function _makeHangul(index){ // complete_index + 1부터 index까지를 greedy하게 한글로 만든다.
      var code,
          cho,
          jung1,
          jung2,
          jong1 = 0,
          jong2,
          hangul = ''
        ;
      if (complete_index + 1 > index) {
        return;
      }
      for (var step = 1; ; step++) {
        if (step === 1) {
          cho = array[complete_index + step].charCodeAt(0);
          if (_isJung(cho)) { // 첫번째 것이 모음이면 1) ㅏ같은 경우이거나 2) ㅙ같은 경우이다
            if (complete_index + step + 1 <= index && _isJung(jung1 = array[complete_index + step + 1].charCodeAt(0))) { //다음것이 있고 모음이면 
              result.push(String.fromCharCode(_isJungJoinable(cho, jung1)));
              complete_index = index;
              return;
            } else {
              result.push(array[complete_index + step]);
              complete_index = index;
              return;
            }
          } else if (!_isCho(cho)) {
            result.push(array[complete_index + step]);
            complete_index = index;
            return;
          }
          hangul = array[complete_index + step];
        } else if (step === 2) {
          jung1 = array[complete_index + step].charCodeAt(0);
          if (_isCho(jung1)) { //두번째 또 자음이 오면 ㄳ 에서 ㅅ같은 경우이다
            cho = _isJongJoinable(cho, jung1);
            hangul = String.fromCharCode(cho);
            result.push(hangul);
            complete_index = index;
            return;
          } else {
            hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + HANGUL_OFFSET);
          }
        } else if (step === 3) {
          jung2 = array[complete_index + step].charCodeAt(0);
          if (_isJungJoinable(jung1, jung2)) {
            jung1 = _isJungJoinable(jung1, jung2);
          } else {
            jong1 = jung2;
          }
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        } else if (step === 4) {
          jong2 = array[complete_index + step].charCodeAt(0);
          if (_isJongJoinable(jong1, jong2)) {
            jong1 = _isJongJoinable(jong1, jong2);
          } else {
            jong1 = jong2;
          }
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        } else if (step === 5) {
          jong2 = array[complete_index + step].charCodeAt(0);
          jong1 = _isJongJoinable(jong1, jong2);
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        }
        
        if (complete_index + step >= index) {
          result.push(hangul);
          complete_index = index;
          return;
        }
      }
    }
  
    for (var i = 0 ; i < length ; i++) {
      code = array[i].charCodeAt(0);
      if (!_isCho(code) && !_isJung(code) && !_isJong(code)){ //초, 중, 종성 다 아니면
        _makeHangul(i-1); 
        _makeHangul(i);
        stage = 0;
        continue;
      }
      //console.log(stage, array[i]);
      if (stage === 0) { // 초성이 올 차례
        if (_isCho(code)) { // 초성이 오면 아무 문제 없다.
          stage = 1; 
        } else if (_isJung(code)) { 
          // 중성이오면 ㅐ 또는 ㅘ 인것이다. 바로 구분을 못한다. 따라서 특수한 stage인 stage4로 이동
          stage = 4;
        }
      } else if (stage == 1) { //중성이 올 차례
        if (_isJung(code)) { //중성이 오면 문제없음 진행.
          stage = 2;
        } else { //아니고 자음이오면 ㄻ같은 경우가 있고 ㄹㅋ같은 경우가 있다.
          if (_isJongJoinable(previous_code, code)) { 
            // 합쳐질 수 있다면 ㄻ 같은 경우인데 이 뒤에 모음이 와서 ㄹ마 가 될수도 있고 초성이 올 수도 있다. 따라서 섣불리 완성할 수 없다. 이땐 stage5로 간다.
            stage = 5;
          } else { //합쳐질 수 없다면 앞 글자 완성 후 여전히 중성이 올 차례 
            _makeHangul(i-1); 
          }
        }
      } else if (stage == 2) { //종성이 올 차례 
        if (_isJong(code)) { //종성이 오면 다음엔 자음 또는 모음이 온다. 
          stage = 3;
        } else if (_isJung(code)) { //그런데 중성이 오면 앞의 모음과 합칠 수 있는지 본다.
          if (_isJungJoinable(previous_code, code)) { //합칠 수 있으면 여전히 종성이 올 차례고 그대로 진행
          } else { // 합칠 수 없다면 오타가 생긴 경우 
            _makeHangul(i-1);
            stage = 4;
          }
        } else { // 받침이 안되는 자음이 오면 ㄸ 같은 이전까지 완성하고 다시시작
          _makeHangul(i-1);
          stage = 1;
        }
      } else if (stage == 3) { // 종성이 하나 온 상태.
        if (_isJong(code)) { // 또 종성이면 합칠수 있는지 본다.
          if (_isJongJoinable(previous_code, code)) { //합칠 수 있으면 계속 진행. 왜냐하면 이번에 온 자음이 다음 글자의 초성이 될 수도 있기 때문
          } else { //없으면 한글자 완성
            _makeHangul(i-1);
            stage = 1; // 이 종성이 초성이 되고 중성부터 시작
          }
        } else if (_isCho(code)) { // 초성이면 한글자 완성.
          _makeHangul(i-1);
          stage = 1; //이 글자가 초성이되므로 중성부터 시작
        } else if (_isJung(code)) { // 중성이면 이전 종성은 이 중성과 합쳐지고 앞 글자는 받침이 없다.
          _makeHangul(i-2);
          stage = 2;
        }
      } else if (stage == 4) { // 중성이 하나 온 상태
        if (_isJung(code)) { //중성이 온 경우
          if(_isJungJoinable(previous_code, code)) { //이전 중성과 합쳐질 수 있는 경우
            _makeHangul(i);
            stage = 0;
          } else { //중성이 왔지만 못합치는 경우. ㅒㅗ 같은
            _makeHangul(i-1);
          }
        } else { // 아니면 자음이 온 경우.
          _makeHangul(i-1);
          stage = 1;
        }
      } else if (stage == 5) { // 초성이 연속해서 두개 온 상태 ㄺ
        if (_isJung(code)) { //이번에 중성이면 ㄹ가 
          _makeHangul(i-2);
          stage = 2;
        } else { 
          _makeHangul(i-1);
          stage = 1;
        }
      }
      previous_code = code;
    }
    _makeHangul(i-1);
    return result.join(''); 
  };

  var search = function(a, b){
    var ad = disassemble(a).join(''),
        bd = disassemble(b).join('')
        ;

    return ad.indexOf(bd);
  };
 
  var rangeSearch = function(haystack, needle){
    var hex = disassemble(haystack).join(''), 
        nex = disassemble(needle).join(''),
        grouped = disassemble(haystack, true),
        re = new RegExp(nex, 'gi'),
        indices = [],
        result;

    while((result = re.exec(hex))) {
      indices.push(result.index);
    }
  
    function findStart(index) {
      for(var i = 0, length = 0; i < grouped.length; ++i) {
        length += grouped[i].length;
        if(index < length) return i;
      }
    }
    
    function findEnd(index) {
      for(var i = 0, length = 0; i < grouped.length; ++i) {
        length += grouped[i].length;
        if(index + nex.length <= length) return i;
      }
    }

    return indices.map(function(i) {
      return [findStart(i), findEnd(i)];
    });
  };

  function Searcher(string) {
    this.string = string;
    this.disassembled = disassemble(string).join('');
  }

  Searcher.prototype.search = function(string) { 
    return disassemble(string).join('').indexOf(this.disassembled);
  };

  var endsWithConsonant = function (string) {
    if (typeof string === 'object') {
      string = string.join('');
    }

    var code = string.charCodeAt(string.length - 1);

    if (_isHangul(code)) { // 완성된 한글이면
      code -= HANGUL_OFFSET;
      var jong = code % 28;
      if (jong > 0) {
        return true;
      }
    } else if ((typeof _isConsonant(code)) !== 'undefined') { //자음이면
      return true;
    }
    return false;
  };

  var hangul = {
    disassemble: disassemble,
    d: disassemble, // alias for disassemble
    assemble: assemble,
    a: assemble, // alias for assemble
    search: search,
    rangeSearch: rangeSearch,
    Searcher: Searcher,
    endsWithConsonant: endsWithConsonant,
    isHangul: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return _isHangul(c);
    },
    isComplete: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return _isHangul(c);
    },
    isConsonant: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return (typeof _isConsonant(c)) !== 'undefined';
    },
    isVowel: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return _isJung(c);
    },
    isCho: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return _isCho(c);

    },
    isJong: function(c){
      if (typeof c === 'string')
        c = c.charCodeAt(0);
      return _isJong(c);
    }
  };

  if (typeof define == 'function' && define.amd) {
    define(function(){
      return hangul;
    });
  } else if (typeof module !== 'undefined') {
    module.exports = hangul;
  } else {
    window.Hangul = hangul;
  }
})();

