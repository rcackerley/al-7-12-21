import React, { useEffect } from "react";
import styled from "styled-components";
import { getColor } from "../../theme/theme";

import { default as BadgeIcon } from "../../shared/Icons/Badge";
import { default as PaperPlaneIcon } from "../../shared/Icons/PaperPlane";
import { default as PhoneIcon } from "../../shared/Icons/Phone";
import { default as ReplyIcon } from "../../shared/Icons/Reply";
import { default as RocketIcon } from "../../shared/Icons/Rocket";
import { default as VoicemailIcon } from "../../shared/Icons/Voicemail";

const Circle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColor("blue")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  color: ${getColor("white")};
  cursor: pointer;
`;

const CircleIcon = ({ type }) => {
  let icon;
  let backgroundColor;
  let iconColor;

  // if(type === "added_to_cadence"){icon = (<RocketIcon />)}
  // if(type === "call"){icon = (<PhoneIcon />)}
  // if(type === "email_reply"){icon = (<ReplyIcon />)}
  // if(type === "sent_email"){icon = (<PaperPlaneIcon />)}
  // if(type === "success"){icon = (<BadgeIcon />)}
  // if(type === "voicemail"){icon = (<VoicemailIcon />)}

  switch(type) {
    case "added_to_cadence":
     icon = (<RocketIcon />);
    break;

    case "call":
     icon = (<PhoneIcon />);
    break;

    case "email_reply":
     icon = (<ReplyIcon />);
    break;

    case "sent_email":
     icon = (<PaperPlaneIcon />);
    break;

    case "success":
     icon = (<BadgeIcon />);
    break;

    case "voicemail":
     icon = (<VoicemailIcon />);
    break;

    default:
      icon = (<RocketIcon />);
  }

  return (
    <Circle>
      { icon }
    </Circle>
  )
}

export default CircleIcon;
