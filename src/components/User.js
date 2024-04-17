import React, { useState } from "react";

const User = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Bhavya Gupta");
  const [email, setEmail] = useState("bhavya123@gmail.com");
  const [contactNo, setContactNo] = useState("9854784519");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="mx-20 my-16 p-10">
      <div className="flex m-2 p-2">
        <div>
          <img
            className="h-72"
            alt="user"
            src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          />
        </div>
        <div className="m-4 p-4">
          {editing ? (
            <div className="flex flex-col">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl font-semibold p-3 border rounded mb-4"
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-xl font-semibold p-3 border rounded mb-4"
              />
              <input
                type="text"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                className="text-xl font-semibold p-3 border rounded mb-4"
              />
            </div>
          ) : (
            <>
              <p className="text-xl font-semibold py-3">Name: {name}</p>
              <p className="text-xl font-semibold py-3">E-mail: {email}</p>
              <p className="text-xl font-semibold py-3">
                Contact no: {contactNo}
              </p>
            </>
          )}
          {editing ? (
            <button
              className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4 mr-4"
              onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button
              className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4 mr-4"
              onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
