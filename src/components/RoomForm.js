import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function RoomForm({ onJoin, ...props }) {
  const roomInput = useRef(null);
  // const userNameInput = useRef(null);

  // useEffect(() => {
  //   if (roomInput.current) {
  //     roomInput.current.focus();
  //   }
  // }, []);

  const handleFormSubmit = event => {
    // event.preventDefault();
    const el = document.getElementById('hide');
    console.log({ el });

    // const room = roomInput.current.value;
    // const username = userNameInput.current.value;
    // if (room.length === 0 && username.length === 0) {
    //   return;
    // }

    // onJoin({ room, username });

    // roomInput.current.value = "";
    // userNameInput.current.value = "";
  };

  return (
<div></div>
  );
}

RoomForm.propTypes = {
  onJoin: ''
};

export default RoomForm;
