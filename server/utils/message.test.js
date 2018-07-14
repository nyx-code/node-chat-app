const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

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

var locationMessage = {
    from: 'Admin',
    lat: 123,
    lng: 321
};

describe('generateLocationMessage', () => {
  it('should generate correct location object', ()=>{

        var url = `https://www.google.com/maps?q=${locationMessage.lat},${locationMessage.lng}`;
        var output = generateLocationMessage(locationMessage.from,locationMessage.lat,locationMessage.lng);

        expect(output.from).toBe(locationMessage.from);
        expect(output.url).toBe(url);
        expect(typeof output.createdAt).toBe('number');

  });
})
