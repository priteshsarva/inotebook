import React from 'react'

const CardNotes = (props) => {
    return (
        <>
            <div className="card text-center card-glass d-flex " style={{ height: "inherit", width: "inherit"}}>
                <div className="card-header card-header-glass">
                    <h5 className="card-title text-light">Special title treatment{props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text text-light">{props.notes}With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </>
    )
}

export default CardNotes
