// import React, { useState } from "react";

// const Booking = () => {
//   const [roomType, setRoomType] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ roomType, checkIn, checkOut });
//     alert("Booking Confirmed!");
//   };

//   return (
//     <div>
//       <h2>Book a Room</h2>
//       <form onSubmit={handleSubmit}>
//         <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
//           <option value="">Select Room Type</option>
//           <option value="single">Single Room</option>
//           <option value="double">Double Room</option>
//         </select>
//         <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
//         <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default Booking;











// import React, { useState } from "react";
// const Booking = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [roomType, setRoomType] = useState("single");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleBooking = (e) => {
//     e.preventDefault();

//     if (!name || !email || !date) {
//       setErrorMessage("All fields are required!");
//       return;
//     }

//     setErrorMessage("");
//     alert(`Booking confirmed for ${name} on ${date}`);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Book Your Stay</h2>
//       <form onSubmit={handleBooking}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//         <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
//           <option value="single">Single Room</option>
//           <option value="double">Double Room</option>
//           <option value="suite">Suite</option>
//         </select>
//         <button type="submit">Confirm Booking</button>
//       </form>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// };

// export default Booking;
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const history = useHistory();
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log(" Booking Component Loaded!");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(" Checking authentication... Token found:", token);
    if (!token) {
      alert("You must log in to book a room!");
      history.replace("/login");
    }
  }, [history]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!guestName || !phone || !checkInDate || !checkOutDate) {
      setErrorMessage(" All fields are required!");
      return;
    }

    try {
      await axios.post("https://resortbooking-backend.onrender.com/api/bookings", {
        guestName,
        phone,
        checkInDate,
        checkOutDate,
      });

      alert(`Booking confirmed for ${guestName} from ${checkInDate} to ${checkOutDate}`);
      history.push("/home");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || " Booking failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Book Your Stay</h2>
        <form onSubmit={handleBooking} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>CONFIRM BOOKING</button>
        </form>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
};

// 🎨 *Matching Styles (Similar to Login Page)*
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, rgb(253, 252, 250), rgb(252, 251, 249))",
    fontFamily: "Poppins, sans-serif",
  },
  authBox: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
    color: "black",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.09)",
    color: "black",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#BFA98D", // Matching your theme
    color: "black",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#45a049",
  },
  error: {
    color: "#ff4d4d",
    marginTop: "10px",
  },
};

export default Booking;
