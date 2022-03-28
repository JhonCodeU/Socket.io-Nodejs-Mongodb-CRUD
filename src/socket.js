import Note from './Models/Note';

export default (io) => {
    io.on('connection', (socket) => {

        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes);
        }
        emitNotes();
        console.log('New user connected', socket.id);

        socket.on('client:newNote', async (data) => {
            const note = new Note(data);
            await note.save();
            io.emit('server:newNote', note);
        });

        socket.on('client:getNote', async (id) => {
            const note = await Note.findById(id);
            io.emit('server:selectNote', note);
        })

        socket.on('client:updateNote', async (data) => {
            const { id, title, description } = data;
            await Note.findByIdAndUpdate(id, { title, description });
            emitNotes();
        })

        socket.on('client:deleteNote', async (id) => {
            await Note.deleteOne({ _id: id });
            emitNotes();
        });
    })
}