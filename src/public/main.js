import { loadnotes } from './socket.js';
import {onHandleSubmit} from './ui.js';
loadnotes();

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit',onHandleSubmit)