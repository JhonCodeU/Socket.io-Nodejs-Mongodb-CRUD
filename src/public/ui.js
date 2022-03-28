import { saveNote, deleteNote } from "./socket.js";

const notesList = document.querySelector("#notes");

const noteUI = note => {
    const div = document.createElement("div");
    div.innerHTML = `<div>
        <h2>${note.title}</h2>
        <div>
            <button class="delete" data-id="${note._id}">Delete</button>
            <button class="update">Update</button>
        </div>
        <p>${note.description}</p>
    </div>`;

    const btnDelete = div.querySelector(".delete");
    btnDelete.addEventListener("click", (e) => {
        deleteNote(e.target.dataset.id);
    })
    return div;
}

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach(note => appendNote(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["Description"].value);
};

export const appendNote = (note) => {
    notesList.appendChild(noteUI(note));
}