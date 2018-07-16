[{
    id: '213456fdvd',
    name: 'nyx',
    room: 'room name'
}]

class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room){
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if(user.length !== 0)
        {
            this.users = this.users.filter((user)=>{
                return user.id !== id;
            });
        }
        return user;
        
    }

    getUser(id) {
        var user = this.users.filter((user)=>{
            return user.id === id;
        });

        return user;
    }

    getUserList(room){
        var users = this.users.filter((user)=>{
            return user.room === room;
        });

        var usersNames = users.map((user)=>{
            return user.name;
        });

        return usersNames;
    }
}

module.exports = {Users};