import React, { useEffect, useState } from "react";

export function EmailSignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 5000);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 1000,
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          {" "}
          <div
            style={{
              textAlign: "right",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                fontSize: "20px",
                textAlign: "right",
                backgroundColor: "inherit",
                border: "0",
                marginLeft: "10px",
              }}
              onClick={closeModal}
            >
              &#10005;
            </div>
          </div>
          <h2>Sign Up for Updates!</h2>
          <p>Enter your email address to receive updates from us:</p>
          <input tabIndex="-1" type="email" placeholder="Enter your email" />
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
  );
}
