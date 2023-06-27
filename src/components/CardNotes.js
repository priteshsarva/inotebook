import React from 'react'

const CardNotes = (props) => {


    return (
        <>
            <div className="card text-center card-glass d-flex " style={{ height: "inherit", width: "inherit" }}>
                <div className="card-header card-header-glass">
                    <h5 className="user-select-auto card-title text-light">{
                       typeof props.title !== 'undefined'? props.title : ("Add new note")
                    }</h5>
                </div>
                <div className="card-body d-flex align-item-center justify-content-center"style={{position:"relative"}}>
                
                    {typeof props.notes !== 'undefined'?
                        <p className="user-select-auto card-text text-light">{props.notes} </p> :
                        <i className=" fa-solid fa-plus" style={{color:"white",fontSize:"5rem",alignSelf:"center"}}></i>
                    }

                </div>
            </div>
        </>
    )
}

export default CardNotes
