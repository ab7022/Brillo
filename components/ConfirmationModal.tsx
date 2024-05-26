export default function ConfirmationModal ({toggleModal})  {
    return (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg p-8 mx-4 md:mx-auto max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
            <p className="text-gray-700">Are all details correct?</p>
            <div className="flex justify-end mt-6">
              <button
                className="text-gray-500 hover:text-gray-700 mr-4"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };