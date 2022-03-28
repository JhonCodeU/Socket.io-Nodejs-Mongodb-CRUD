import Note from './Models/Note';

export default (io) => {
    io.on('connection', (socket) => {

        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('loadnotes', notes);
        }
        emitNotes();
        console.log('New user connected', socket.id);

        socket.on('newNote', async (data) => {
            const note = new Note(data);
            await note.save();
            emitNotes();
        });
    })
}