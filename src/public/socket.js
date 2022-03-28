const socket = io();

export const loadnotes = () => {
    socket.on('loadnotes', (data) => {
        console.log(data);
    })
}

export const saveNote = (title, description) => {
    socket.emit('newNote', {
        title,
        description
    });
}