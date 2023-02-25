import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: []
        // }
    },
    reducers: { //Only sync tasks
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            //Since we are using redux toolkit, it's not necesary destructuring 
            //We can work with mutant code
            state.notes.push( action.payload );
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.isSaving = false;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => { //O con el payload en vez de state.active?
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if (note.id === state.active.id) {
                    note = state.active
                }
                return note;
            })

            state.messageSaved = `${ state.active.title}, actualizada correctamente`;
            //Aquí no se debe disparar el sweetalert
        },
        setPhotosToActiveNote: (state, action) =>{
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id != action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;