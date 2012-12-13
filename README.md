# Hangul.js

Hangul.js는 한글로 이루어진 문장의 자음과 모음을 분리하는 자바스크립트 라이브러리입니다. 이 라이브러리를 이용하여 한글검색, 초성검색 등을 할 수 있습니다. 

## 설치

웹 페이지에 Hangul.js 파일을 삽입합니다.
```html
<script src="Hangul.js" type="text/javascript"></script>
```

## 사용법

### Hangul Namespace

Hangul.js 스크립트를 실행하면 전역 네임스페이스에 Hangul이라는 객체가 노출됩니다.

### Hangul.disassemble ( String ) => Array

문자열을 인자로 받아 문자열에 있는 한글을 자음/모음으로 분리하여 배열로 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.

```js
Hangul.disassemble('가나다'); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']

Hangul.disassemble('ab가c'); // ['a','b','ㄱ','ㅏ','c']

Hangul.disassemble('ab@!23X.'); // ['a','b','@','!','2','3','X','.']
```

같은 홑낱자로 이루어진 겹낱자는 분리되지 않습니다.

```js
Hangul.disassemble('ㄲ'); // ['ㄲ']
```

다른 홑낱자로 이루어진 겹낱자는 분리됩니다.

```js
Hangul.disassemble('ㄳ'); // ['ㄱ','ㅅ']

Hangul.disassemble('ㅚ'); // ['ㅗ','ㅣ']
```

두벌식 키보드로 주어진 문자열을 입력할 때 누르는 키들의 배열이라고 생각하면 쉽습니다.

### Hangul.assemble ( Array ) => String

한글 자음/모음들의 배열을 인자로 받아 조립한 문자열을 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.

```js
Hangul.assemble(['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']); // '가나다'

Hangul.assemble(['a','b','ㄱ','ㅏ','c']); // 'ab가c'

Hangul.assemble(['a','b','@','!','2','3','X','.']); // 'ab@123X.'
```

이 경우에도 두벌식 키보드에서 주어진 키들을 누를 때 만들어지는 문자열을 돌려준다고 생각하면 쉽습니다.

```js
Hangul.assemble(['ㅗ','ㅐ']); // 'ㅙ'

Hangul.assemble(['ㄹ','ㅂ','ㅅ']); // 'ㄼㅅ'
```

`Hangul.disassemble` 함수와 역함수 관계가 아닙니다. 

```js
Hangul.assemble(Hangul.disassemble('옽ㅏ')); // '오타' ('옽ㅏ' 가 아님)
```

### Hangul.search ( String a, String b ) => Number

a문자열이 b문자열을 포함하는지 검사합니다. 이때 'a문자열이 b문자열을 포함한다'는 '두벌식 키보드 기준으로 a문자열을 입력할 때 누르는 키들의 배열이 b문자열을 입력할 때 누르는 키들의 배열을 포함한다'로 정의합니다. 반환값이 0보다 크거나 같다면 포함합니다.

```js
Hangul.search('달걀','닭'); // 0

Hangul.search('달걀','알'); // -1
```

`indexOf`함수와 다릅니다.

```js
var a = '도우미'
  , b = '도움';
  
a.indexOf(b); // -1

Hangul.search(a, b); // 0
```

사실 구현은 간단하게 되어있습니다.

```js
var search = function(a, b){
  var ad = disassemble(a).join('')
    , bd = disassemble(b).join('');
    
    return ad.indexOf(bd);
  };
}
```

실제 사용할 때에는 하나의 단어를 여러개의 문자열과 비교하므로 `Hangul.Searcher`를 사용하는게 편합니다.

```js
var searcher = new Hangul.Searcher('닭');

searcher.search('달걀'); // 0
searcher.search('달구지'); // 0
searcher.search('달무리'); // -1
```
