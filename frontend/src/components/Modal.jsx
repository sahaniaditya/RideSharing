import React, { useState, useEffect } from 'react';

function Modal(props) {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  // Dummy data for demonstration
  const tripInfo = {
    driver_name: "John Doe",
    tripId: "TRIP123",
    cab_number: "CAB001",
    driver_phone: "+1234567890",
    start_location: "123 Start St",
    end_location: "456 End Ave",
    date: "2024-08-06"
  };

  // Function to open the modal
  useEffect(() => {
    setIsOpen(true)
  }, [props.isOpen])
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  return (
    <div className="p-5">
      <button onClick={openModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        View Trip Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Trip Details</h3>
              <div className="mt-2 px-7 py-3 text-left">
                <p><strong>Driver Name:</strong> {tripInfo.driver_name}</p>
                <p><strong>Trip ID:</strong> {tripInfo.tripId}</p>
                <p><strong>Cab Number:</strong> {tripInfo.cab_number}</p>
                <p><strong>Driver Phone:</strong> {tripInfo.driver_phone}</p>
                <p><strong>Start Location:</strong> {tripInfo.start_location}</p>
                <p><strong>End Location:</strong> {tripInfo.end_location}</p>
                <p><strong>Date:</strong> {tripInfo.date}</p>
              </div>
              <div className="items-center px-4 py-3">
                <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
