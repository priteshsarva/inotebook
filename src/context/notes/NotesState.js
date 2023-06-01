import NoteContext from "./NotesContext";

const noteState = (props) => {

    return (
        <NoteContext.Provider value={{ state:"state", update:"update" }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState;