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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const CircleIcon = ({ type }) => {
  let icon;
  let iconColor;

  switch(type) {
    case "added_to_cadence":
      iconColor = getColor("blue");
      icon = (<RocketIcon style={{color: iconColor}}/>);
    break;

    case "call":
      iconColor = getColor("teal");
      icon = (<PhoneIcon style={{color: iconColor}}/>);
    break;

    case "email_reply":
      iconColor = getColor("teal");
      icon = (<ReplyIcon style={{color: iconColor}} />);
    break;

    case "sent_email":
      iconColor = getColor("blueDarkest");
      icon = (<PaperPlaneIcon style={{color: iconColor}} />);
    break;

    case "success":
      iconColor = getColor("blueDarkest");
      icon = (<BadgeIcon style={{color: iconColor}} />);
    break;

    case "voicemail":
      iconColor = getColor("teal");
      icon = (<VoicemailIcon style={{color: iconColor}} />);
    break;

    default:
      icon = (<RocketIcon style={{color: iconColor}} />);
  }

  return (
    <Circle style={{backgroundColor: `${iconColor}10`}}>
      { icon }
    </Circle>
  )
}

export default CircleIcon;
