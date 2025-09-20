import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function VideoRoom() {
  let { roomID } = useParams();
  let navigate = useNavigate();

  const myMeeting = async (element) => {
    const appID = 1718942764;
    const serverSecret = "cb4a69efe74723a69841aa4178ecdd41";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Ashish"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `http://localhost:5173/room/${roomID}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }

  return (
    <div>
     
      <div ref={myMeeting} style={{ width: "100%", height: "100vh" }} />
    </div>
  )
}

export default VideoRoom
