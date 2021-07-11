import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getColor } from "../../theme/theme";
import { formatDate, formatTime } from "../../services";

import CircleIcon from "../CircleIcon/CircleIcon";
import SocialCount from "../SocialCount/SocialCount";

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  `;

const CardContent = styled.div`
  border: 1px solid ${getColor("greyLightest")};
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  margin: 8px;
  justify-content: space-between;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-weight: 400;
`;

const DateTimeWrapper = styled.div`
  text-align: right;
  color: ${getColor("grey")}
  font-weight: 600;
  `;

const DateTimeTitle = styled.h5`
  margin-bottom: 7px;
  color: ${getColor("grey")}
`;

const DateTimeSubtitle = styled.h5`
  margin-bottom: 7px;
  color: ${getColor("grey")}
`;

const ActivitySubtitle = styled.h5`
  color: ${getColor("grey")}
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
        setActivityTitle(`Something went wrong`)
        setActivitySubtitle(``)
    }
  }, [])

  return(
    <CardWrapper>
      <IconWrapper>
        <CircleIcon type={type} />
      </IconWrapper>
      <CardContent>
        <div>

          <CardTitle>{activityTitle}</CardTitle>
          <SubtitleWrapper>
            <ActivitySubtitle>
              {activitySubtitle}
            </ActivitySubtitle>
            {dynamicData.counts && <SocialCount count={dynamicData.counts} />}
          </SubtitleWrapper>
        </div>
        <DateTimeWrapper>
          <DateTimeTitle>{formatDate(createdAt)}</DateTimeTitle>
          <DateTimeSubtitle>{formatTime(createdAt)}</DateTimeSubtitle>
        </DateTimeWrapper>
      </CardContent>
    </CardWrapper>
  )
};

export default TimelineCard;
