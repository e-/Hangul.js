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

### Hangul.disassemble

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

다른 홑난자로 이루어진 겹낱자는 분리됩니다.

```js
Hangul.disassemble('ㄳ'); // ['ㄱ','ㅅ']

Hangul.disassemble('ㅚ'); // ['ㅗ','ㅣ']
```

### Hangul.assemble

한글 문자들의 배열을 인자로 받아 한글 자음/모음을 조립한 문자열을 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.

```js
Hangul.assemble(['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']); // '가나다'

Hangul.assemble(['a','b','ㄱ','ㅏ','c']); // 'ab가c'

Hangul.assemble(['a','b','@','!','2','3','X','.']); // 'ab@123X.'
```


