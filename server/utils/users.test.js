const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'UserOne',
            room: 'Node Course'
        },{
            id: '2',
            name: 'UserTwo',
            room: 'React Course'
        },{
            id: '3',
            name: 'UserThree',
            room: 'Node Course'
        }];
    });

  it('should add new user',()=>{
    var users = new Users();
    var user = {
        id: 123,
        name: 'NYX',
        room: 'MyRoom'
    };

    var newUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove user', ()=>{
        var user = users.removeUser('1');

        expect(user[0].id).toBe('1');
        expect(users.users.length).toBe(2);
  });

  it('should not remove user', ()=>{
      var user = users.removeUser('4');
      expect(user[0]).toBe(undefined);
      expect(users.users.length).toBe(3);
  });

  it('should find user',()=>{
      var user = users.getUser('1');

      expect(user.length).toBe(1);
      expect(user).toEqual([{id: '1', name: 'UserOne', room:'Node Course'}]);
  });

  it('should not find user',()=>{
    var user = users.getUser('4');

    expect(user.length).toBe(0);
    expect(user).toEqual([]);
});

  it('should return users with room Node Course', ()=>{
     var namesOfUsers = users.getUserList('Node Course');
     expect(namesOfUsers).toEqual(['UserOne', 'UserThree']);
  });

  it('should return users with room React Course', ()=>{
    var namesOfUsers = users.getUserList('React Course');
    expect(namesOfUsers).toEqual(['UserTwo']);
  });

})
