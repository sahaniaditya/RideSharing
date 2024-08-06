import React,{useState, useEffect, Component } from "react"
import Modal from "./Modal.jsx"

const History = () => {

    const [isOpen, toggleModal] = useState(false)

    const list = [
        {
            "tripId" : "24223",
            "name" : "Aditya",
            "location" : "lucknow"
        },
        {
            "tripId" : "24223",
            "name" : "Aditya",
            "location" : "lucknow"
        }
    ]

    const handleModal = () => {
        toggleModal(true)
    }
  
    return (
        <>
        <div className="p-4">
          {list.map(( element, key) => (
            <div className="tripHistory w-[85%]  mx-auto flex flex-row  border-2 items-center justify-evenly p-2 m-2" key={key}>
                <div>TripId : {element.tripId}</div>
                <div>Date : {element.location}</div>
                <div>Driver Name : {element.name}</div>
                <div>Cab_Number : {element.location}</div>

                <div>
                    <button className="border-2 bg-blue-500 p-2 rounded-md" onClick={handleModal}>See Details</button>
                </div>
            </div>
          ))}
        </div>


        <Modal isOpen={isOpen}/>
        </>
    )
}

export default History;