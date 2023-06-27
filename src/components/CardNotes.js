import React, { useState } from 'react'



const CardNotes = (props) => {

   

    return (
        <>
            <div className="card text-center card-glass d-flex " style={{ height: "inherit", width: "inherit" }}    >
                <div className="card-header card-header-glass">
                    <h5 className="user-select-auto card-title text-light"  id={props.id} title={props.title} description={props.description} tags={props.tags}>{
                        typeof props.title !== 'undefined' ? props.title : ("Add new note")
                    }</h5>
                </div>
                <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }} >

                    {typeof props.description !== 'undefined' ?
                        <p className="user-select-auto card-text text-light multi-text-truncate" id={props.id} title={props.title} description={props.description} tags={props.tags}>{props.description} </p> :
                        <i className=" fa-solid fa-plus" style={{ color: "white", fontSize: "5rem", alignSelf: "center" }}></i>
                    }
                </div>
                <div className="px-3">
                    <div className="card-header card-header-glass">
                        <div className='d-flex justify-content-center'>
                            <p className="user-select-auto card-text text-light col text-truncate" id={props.id} title={props.title} description={props.description} tags={props.tags}>{props.tags}</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default CardNotes
