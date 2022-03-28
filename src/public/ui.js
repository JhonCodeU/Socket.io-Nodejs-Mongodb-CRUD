import { saveNote, deleteNote, getNoteById, updateNote } from "./socket.js";

const notesList = document.querySelector("#notes");
const title = document.querySelector("#title");
const description = document.querySelector("#Description");

let saveId = "";

const noteUI = note => {
    const div = document.createElement("div");
    div.innerHTML = `<div>
        <h2>${note.title}</h2>
        <div>
            <button class="delete" data-id="${note._id}">Delete</button>
            <button class="update" data-id="${note._id}">Update</button>
        </div>
        <p>${note.description}</p>
    </div>`;

    const btnDelete = div.querySelector(".delete");
    btnDelete.addEventListener("click", (e) => {
        deleteNote(e.target.dataset.id);
    })

    const btnUpdate = div.querySelector(".update");
    btnUpdate.addEventListener("click", (e) => {
        getNoteById(e.target.dataset.id);
    })

    return div;
}

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach(note => appendNote(note));
};

export const fillForm = (note) => {
    title.value = note.title;
    description.value = note.description;
    saveId = note._id;
}

export const onHandleSubmit = (e) => {
    e.preventDefault();
    
    if (saveId) {
        updateNote(saveId, title.value, description.value);
    }
    else {
        saveNote(title.value, description.value);
    }
    saveId = "";
    title.value = "";
    description.value = "";
};

export const appendNote = (note) => {
    notesList.appendChild(noteUI(note));
}