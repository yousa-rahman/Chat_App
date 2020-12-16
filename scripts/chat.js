class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message){
        const now = new Date();
        const chat = {
            message,
            chatroom: this.room,
            username: this.username,
            creadted_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    }
}

const chatroom = new Chatroom('gaming', 'Yousuf');

chatroom.addChat('Hello evryone').then
(() => console.log('Chat added'))
.catch((err) => console.log(err));