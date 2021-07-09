import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatDate, formatTime } from "../../services";

import CircleIcon from "../CircleIcon/CircleIcon";
import SocialCount from "../SocialCount/SocialCount";

const CardWrapper = styled.div`
  border: 1px solid black;
`;

const TimelineCard = ({ activity, userName }) => {
  const {
    created_at: createdAt,
    dynamic_data: dynamicData,
    occurred_at: occuredAt,
    static_data = {},
    type,
  } = activity;

  const [ activityTitle, setActivityTitle ] = useState('');
  const [ activitySubtitle, setActivitySubtitle ] = useState('');
  console.log('activity', activity)
  useEffect(() => {
    switch(type) {
      case "added_to_cadence":
        setActivityTitle(`${dynamicData.cadence_name}`)
        setActivitySubtitle(`${userName} to ${dynamicData.user_name}`)
        break;

      case "call":
        setActivityTitle(`${static_data.sentiment}`)
        setActivitySubtitle(`${dynamicData.user_name} with ${dynamicData.phone_number}`)
        break;

      case "email_reply":
        setActivityTitle(`RE: ${static_data.in_reply_to_subject}`)
        setActivitySubtitle(`${dynamicData.user_name} | `)
        break;

      case "sent_email":
        setActivityTitle(`${static_data.subject}`)
        setActivitySubtitle(`${dynamicData.user_name} | `)
        break;

      case "success":
        setActivityTitle(`Marked as success`)
        setActivitySubtitle(`${dynamicData.user_name}`)
        break;

      case "voicemail":
        setActivityTitle(`Voicemail Received at ${formatTime(occuredAt, false)}`)
        setActivitySubtitle(`${userName} to ${dynamicData.user_name}`)
        break;
      default:
        // code block
    }
  }, [])

  return(
    <CardWrapper>
      <CircleIcon type={type} />
      <p>{activityTitle}</p>
      <p>
        {activitySubtitle}
        <span>
          {dynamicData.counts && <SocialCount count={dynamicData.counts} />}
        </span>
      </p>
      <p>{formatDate(createdAt)}</p>
      <p>{formatTime(createdAt)}</p>
    </CardWrapper>
  )
};

export default TimelineCard;
