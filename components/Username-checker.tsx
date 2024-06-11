import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function UsernameChecker({ toggleModal, session, setUsername }) {
  const [inputUsername, setInputUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const isValidUsername = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(inputUsername);
  const isMinimumLength = inputUsername.length >= 4;
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputUsername) {
        fetchUsername();
      }
    }, 1000);

    return () => clearTimeout(debounce);
  }, [inputUsername]);

  async function fetchUsername() {
    if (!isValidUsername || !isMinimumLength || !inputUsername) {
      setAvailability("not_allowed");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/username",
        { username: inputUsername }
      );
      if (response.status === 200) {
        setAvailability("available");
      } else {
        setAvailability("taken");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setAvailability("error");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isValidUsername || !isMinimumLength) {
      setAvailability("not_allowed");
      return;
    }

    if (availability === "available") {
      setSubmitting(true);
      try {
        const updateResponse = await axios.put(
          "http://localhost:3000/api/user/username",
          { username: inputUsername, email: session.user.email }
        );
        if (updateResponse.status === 200) {
          // alert("Username updated successfully!");
          toast.success(" username is set to " + inputUsername);
          setUsername(inputUsername);

          toggleModal();
        } else {
          alert("Failed to update username.");
        }
      } catch (error) {
        console.error("Failed to update username:", error);
        alert("An error occurred while updating the username.");
      } finally {
        setSubmitting(false);
        closeModal();
      }
    }
  }

  const closeModal = () => {
    setInputUsername("");
    setAvailability("");
    toggleModal();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg dark:bg-gray-900 mx-4">
          <div
            className="text-right text-lg cursor-pointer"
            onClick={closeModal}
          >
            X
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Choose your username</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Enter a username to get the URL for your website.
              </p>
            </div>
            {loading && (
              <p className="text-blue-500">Checking availability...</p>
            )}
            {availability === "taken" && (
              <div className="flex items-center justify-center space-x-2 text-red-500">
                <p>Username is already taken. Please try another.</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            {availability === "available" && (
              <p className="text-green-500 text-center">
                Username is available!
              </p>
            )}
            {availability === "not_allowed" && (
              <p className="text-orange-500 text-sm text-center">
                Please ensure it contains only letters, minimum length of 4
                characters, and no special characters.{" "}
              </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className={`block w-full rounded-md border px-3 py-2 placeholder-gray-500 ${
                    availability === "taken"
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  onChange={(e) => setInputUsername(e.target.value)}
                  id="username"
                  placeholder="Enter a username"
                  type="text"
                  value={inputUsername}
                />
              </div>

              <button
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
                type="submit"
                disabled={loading || submitting || availability !== "available"}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
