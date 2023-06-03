import NoteContext from "./NotesContext";

const noteState = (props) => {
const state = "sarva"
    return (
        <NoteContext.Provider value={{ state }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState;