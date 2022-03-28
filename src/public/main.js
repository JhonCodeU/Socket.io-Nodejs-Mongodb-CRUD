import { loadnotes, onNewNote, onSelected } from './socket.js';
import { onHandleSubmit, renderNotes, appendNote, fillForm } from './ui.js';

onNewNote(appendNote);
loadnotes(renderNotes);
onSelected(fillForm);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit',onHandleSubmit)