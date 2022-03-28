import { loadnotes, onNewNote } from './socket.js';
import { onHandleSubmit, renderNotes, appendNote } from './ui.js';

onNewNote(appendNote);
loadnotes(renderNotes);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit',onHandleSubmit)