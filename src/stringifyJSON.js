// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    console.log('num test')
    return obj.toString();
  }
  if (obj === null) {
    console.log('test')
    return '' + null;
  }
  if (typeof obj === 'function' || obj === undefined) {
    return '';
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0 ) {
      return '[]'
    }
    return '[' + obj.map(function(x) {
      return stringifyJSON(x)
    })  + ']'
  }
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var ans = ''
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        return '{}';
      }
      ans += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
    }
    return '{' + ans.slice(0, ans.length - 1) + '}'
  }

  
  

  
  
  
};

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];

// unstringifiableValues = [
//   {f
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];