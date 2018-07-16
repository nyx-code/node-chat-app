const expect = require('expect');

var {isRealString} = require('./validate');

describe('isRealString', () => {
  it('should reject non-string values', ()=>{
    var output = isRealString(100);
    expect(output).toBe(false);
  });

  it('should reject string with spaces', ()=>{
    var output = isRealString('    ');
    expect(output).toBe(false);
  });

  it('should allow string with non-spaces',()=>{
    var output = isRealString('name');
    expect(output).toBe(true);
  });
});
