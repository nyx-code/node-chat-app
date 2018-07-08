const expect = require('expect');

var {generateMessage} = require('./message');

var message = {
    from : "Admin",
    text : "Welcome to chat app"
};

describe('generateMessage', () => {
    it('should generate correct message object', ()=>{

        var output = generateMessage(message.from, message.text);

        expect(output.from).toBe(message.from);
        expect(output.text).toBe(message.text);
        expect(typeof output.createdAt).toBe('number');

    });
});
