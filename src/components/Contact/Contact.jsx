import { Button, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
// import { useAlert } from "react-alert";
// import { contactUs } from "../../actions/user";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const {
//     loading,
//     message: alertMessage,
//     error,
//   } = useSelector((state) => state.update);

//   const contactFormHandler = (e) => {
//     e.preventDefault();
//     dispatch(contactUs(name, email, message));
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch({ type: "CLEAR_ERRORS" });
//     }
//     if (alertMessage) {
//       alert.success(alertMessage);
//       dispatch({ type: "CLEAR_MESSAGE" });
//     }
//   }, [alert, error, alertMessage, dispatch]);

//   return (
//     <div className="contact">
//       <div className="contactRightBar"></div>

//       <div className="contactContainer">
//         <form className="contactContainerForm" onSubmit={contactFormHandler}>
//           <Typography variant="h4">Contact Us</Typography>

//           <input
//             type="text"
//             placeholder="Name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <textarea
//             placeholder="Message"
//             required
//             cols="30"
//             rows="10"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//           <Button variant="contained" type="submit" disabled={loading}>
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='contactRightBar'></div>

    <div className='contactContainer'>
      <form className='contactContainerForm' method='POST' action='https://getform.io/f/8ec29ea6-dc25-4135-a8c5-ff34f006f336'>
      <Typography variant="h4">Contact Us</Typography>

        <input
          className='contactInput'
          type='text'
          placeholder='Name'
          name='name'
          required
        />
        <input
          className='contactInput'
          type='email'
          placeholder='Email'
          name='email'
          required
        />

        <textarea
          className='contactInput'
          name='message'
          rows='10'
          placeholder='Message'
          required
        ></textarea>
        <Button className='contactButton' type='submit'>
          Let's Collaborate
        </Button>
      </form>
    </div>
  </div>
  )
}

export default Contact