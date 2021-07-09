import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatDate, formatTime } from "../../services";

const TimelineCard = ({activity}) => {
  const {
    created_at: createdAt,
    dynamic_data: dynamicData,
    occurred_at: occuredAt,
    type,
  } = activity;
  const [ activityTitle, setActivityTitle ] = useState('')
  const [ activitySubtitle, setActivitySubtitle ] = useState('')
  useEffect(() => {
    switch(type) {
      case "added_to_cadence":
        // code block
        break;
      case "voicemail":
        // code block
        setActivityTitle(`Voicemail Received at ${formatTime(occuredAt, false)}`)
        setActivityTitle(`to ${dynamicData.user_name}`)
        break;
      case "sent_email":
        // code block
        break;
      case "success":
        // code block
        break;
      case "call":
        // code block
        break;
      case "email_reply":
        // code block
        break;
      default:
        // code block
    }
  }, [])

  return(
    <div>
      <p>{activityTitle}</p>
      <p>{activitySubtitle}</p>
      <p>{formatDate(createdAt)}</p>
      <p>{formatTime(createdAt)}</p>
    </div>
  )
};

export default TimelineCard;
