import React, { Fragment, useState } from "react";
import {
  UserMediaError,
  useUserMediaFromContext
} from "@vardius/react-user-media";
import Video from "components/Video";
import UserMediaActions from "components/UserMediaActions";
import Room from "components/Room";
import RoomForm from "components/RoomForm";

function App() {
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState(null);
  const { stream, error } = useUserMediaFromContext();
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    event.preventDefault();
    setIsActive(current => !current);
  };

  const handleJoin = values => {
    // setRoom(values.room);
    // setUsername(values.username);
  };

  return (
    <div className="container-fluid">
      {room && username ? (
        <div></div>
        // <Room name={room} username={username} stream={stream} />
      ) : (
        <Fragment>
          {error && (
            <div className="row justify-content-center mt-2">
              <UserMediaError error={error} />
            </div>
          )}
          <div className="row justify-content-center mt-2">
            <RoomForm onJoin={handleJoin} />
          </div>
          <div className="row justify-content-center mt-2">
            <UserMediaActions stream={stream} />
          </div>
           (
            <div>
              <form className="form-row text-center justify-content-center">
                <div className="form-group justify-content-center col-md-2">
                  <button type="submit" className="btn btn-primary" onClick={handleClick}>
                    {isActive ? 'De-anonymize' : 'Anonymize'}
                  </button>
                </div>    
              </form> 
              <div className="row justify-content-center mt-2 video">
                <div id="hide" className={isActive ? 'show-overlay' : ''}></div>
                <span class="dot" className={isActive ? 'show-dot' : ''}></span>
                <span class="gradient" className={isActive ? 'show-overlay' : ''}></span>
                <Video stream={stream} autoPlay muted />
              </div>
            </div>
          )
        </Fragment>
      )}
    </div>
  );
}

export default App;
