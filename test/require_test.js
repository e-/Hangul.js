requirejs.config({
  paths: {
    Hangul: '../hangul.min'
  }
});

requirejs(['Hangul'], function(Hangul){
  QUnit.test('Compatibility test with require.js', function(assert){
    assert.ok(Hangul);
    assert.notOk(window.Hangul);
  });
});
