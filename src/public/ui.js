import { saveNote } from "./socket.js";

const notesList = document.querySelector("#notes");

const noteUI = note => {
    const div = document.createElement("div");
    div.innerHTML = `<div>
        <h2>${note.title}</h2>
        <div>
            <button class="delete">Delete</button>
            <button class="update">Update</button>
        </div>
        <p>${note.description}</p>
    </div>`;
    return div;
}

export const renderNotes = (notes) => {
  console.log(notes);
  notes.forEach(note => appendNote(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["Description"].value);
};

export const appendNote = (note) => {
    notesList.appendChild(noteUI(note));
}