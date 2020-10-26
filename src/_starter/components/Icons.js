import React from "react";
import styled from "styled-components";
import { default as AccountIcon } from "../shared/Icons/Account";
import { default as ActivitiesEmptyImage } from "../shared/Icons/ActivitiesEmptyIcon";
import { default as BadgeIcon } from "../shared/Icons/Badge";
import { default as BarChartIcon } from "../shared/Icons/BarChart";
import { default as BellIcon } from "../shared/Icons/Bell";
import { default as BoltIcon } from "../shared/Icons/Bolt";
import { default as BubbleEllipsisIcon } from "../shared/Icons/BubbleEllipsis";
import { default as CalendarIcon } from "../shared/Icons/Calendar";
import { default as CheckIcon } from "../shared/Icons/Check";
import { default as ChevronSmDownIcon } from "../shared/Icons/ChevronSmDown";
import { default as ClickIcon } from "../shared/Icons/Click";
import { default as CloudIcon } from "../shared/Icons/Cloud";
import { default as CrosshairIcon } from "../shared/Icons/Crosshair";
import { default as CustomFieldsIcon } from "../shared/Icons/CustomFields";
import { default as EllipsisHorizontalIcon } from "../shared/Icons/EllipsisHorizontal";
import { default as EnvelopeIcon } from "../shared/Icons/Envelope";
import { default as EyeIcon } from "../shared/Icons/Eye";
import { default as FlameIcon } from "../shared/Icons/Flame";
import { default as HelpIcon } from "../shared/Icons/Help";
import { default as HomeIcon } from "../shared/Icons/Home";
import { default as KeypadIcon } from "../shared/Icons/Keypad";
import { default as LinkIcon } from "../shared/Icons/Link";
import { default as LinkedInIcon } from "../shared/Icons/LinkedIn";
import { default as LiveFeedIcon } from "../shared/Icons/LiveFeed";
import { default as MapMarkerIcon } from "../shared/Icons/MapMarker";
import { default as MenuIcon } from "../shared/Icons/Menu";
import { default as NotesIcon } from "../shared/Icons/Notes";
import { default as OpenNewIcon } from "../shared/Icons/OpenNew";
import { default as OppsIcon } from "../shared/Icons/Opps";
import { default as OwlerLogoIcon } from "../shared/Icons/OwlerLogo";
import { default as PaperPlaneIcon } from "../shared/Icons/PaperPlane";
import { default as PencilIcon } from "../shared/Icons/Pencil";
import { default as PersonIcon } from "../shared/Icons/Person";
import { default as PhoneIcon } from "../shared/Icons/Phone";
import { default as PlusIcon } from "../shared/Icons/Plus";
import { default as QuoteLeftIcon } from "../shared/Icons/QuoteLeft";
import { default as ReplyIcon } from "../shared/Icons/Reply";
import { default as RocketIcon } from "../shared/Icons/Rocket";
import { default as SalesloftLogoWhiteIcon } from "../shared/Icons/SalesloftLogoWhite";
import { default as SearchIcon } from "../shared/Icons/Search";
import { default as StarOutlinedIcon } from "../shared/Icons/StarOutlined";
import { default as SwitchesIcon } from "../shared/Icons/Switches";
import { default as TemplatesIcon } from "../shared/Icons/Templates";
import { default as TwitterIcon } from "../shared/Icons/Twitter";
import { default as VoicemailIcon } from "../shared/Icons/Voicemail";

const IconsWrapper = styled.section`
  width: 90%;
  padding: 40px 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;

  .icon {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

function Icons() {
  return (
    <IconsWrapper>
      <IconContainer>
        <VoicemailIcon className="VoicemailIcon icon" />
        <div> VoicemailIcon</div>
      </IconContainer>
      <IconContainer>
        <AccountIcon className="AccountIcon icon" />
        <div> AccountIcon</div>
      </IconContainer>
      <IconContainer>
        <ActivitiesEmptyImage className="ActivitiesEmptyImage icon" />
        <div> ActivitiesEmptyImage</div>
      </IconContainer>
      <IconContainer>
        <BadgeIcon className="BadgeIcon icon" />
        <div> BadgeIcon</div>
      </IconContainer>
      <IconContainer>
        <BarChartIcon className="BarChartIcon icon" />
        <div> BarChartIcon</div>
      </IconContainer>
      <IconContainer>
        <BellIcon className="BellIcon icon" />
        <div> BellIcon</div>
      </IconContainer>
      <IconContainer>
        <BoltIcon className="BoltIcon icon" />
        <div> BoltIcon</div>
      </IconContainer>
      <IconContainer>
        <BubbleEllipsisIcon className="BubbleEllipsisIcon icon" />
        <div> BubbleEllipsisIcon</div>
      </IconContainer>
      <IconContainer>
        <CalendarIcon className="CalendarIcon icon" />
        <div> CalendarIcon</div>
      </IconContainer>
      <IconContainer>
        <CheckIcon className="CheckIcon icon" />
        <div> CheckIcon</div>
      </IconContainer>
      <IconContainer>
        <ChevronSmDownIcon className="ChevronSmDownIcon icon" />
        <div> ChevronSmDownIcon</div>
      </IconContainer>
      <IconContainer>
        <ClickIcon className="ClickIcon icon" />
        <div> ClickIcon</div>
      </IconContainer>
      <IconContainer>
        <CloudIcon className="CloudIcon icon" />
        <div> CloudIcon</div>
      </IconContainer>
      <IconContainer>
        <CrosshairIcon className="CrosshairIcon icon" />
        <div> CrosshairIcon</div>
      </IconContainer>
      <IconContainer>
        <CustomFieldsIcon className="CustomFieldsIcon icon" />
        <div> CustomFieldsIcon</div>
      </IconContainer>
      <IconContainer>
        <EllipsisHorizontalIcon className="EllipsisHorizontalIcon icon" />
        <div> EllipsisHorizontalIcon</div>
      </IconContainer>
      <IconContainer>
        <EnvelopeIcon className="EnvelopeIcon icon" />
        <div> EnvelopeIcon</div>
      </IconContainer>
      <IconContainer>
        <EyeIcon className="EyeIcon icon" />
        <div> EyeIcon</div>
      </IconContainer>
      <IconContainer>
        <FlameIcon className="FlameIcon icon" />
        <div> FlameIcon</div>
      </IconContainer>
      <IconContainer>
        <HelpIcon className="HelpIcon icon" />
        <div> HelpIcon</div>
      </IconContainer>
      <IconContainer>
        <HomeIcon className="HomeIcon icon" />
        <div> HomeIcon</div>
      </IconContainer>
      <IconContainer>
        <KeypadIcon className="KeypadIcon icon" />
        <div> KeypadIcon</div>
      </IconContainer>
      <IconContainer>
        <LinkIcon className="LinkIcon icon" />
        <div> LinkIcon</div>
      </IconContainer>
      <IconContainer>
        <LinkedInIcon className="LinkedInIcon icon" />
        <div> LinkedInIcon</div>
      </IconContainer>
      <IconContainer>
        <LiveFeedIcon className="LiveFeedIcon icon" />
        <div> LiveFeedIcon</div>
      </IconContainer>
      <IconContainer>
        <MapMarkerIcon className="MapMarkerIcon icon" />
        <div> MapMarkerIcon</div>
      </IconContainer>
      <IconContainer>
        <MenuIcon className="MenuIcon icon" />
        <div> MenuIcon</div>
      </IconContainer>
      <IconContainer>
        <NotesIcon className="NotesIcon icon" />
        <div> NotesIcon</div>
      </IconContainer>
      <IconContainer>
        <OpenNewIcon className="OpenNewIcon icon" />
        <div> OpenNewIcon</div>
      </IconContainer>
      <IconContainer>
        <OppsIcon className="OppsIcon icon" />
        <div> OppsIcon</div>
      </IconContainer>
      <IconContainer>
        <OwlerLogoIcon className="OwlerLogoIcon icon" />
        <div> OwlerLogoIcon</div>
      </IconContainer>
      <IconContainer>
        <PaperPlaneIcon className="PaperPlaneIcon icon" />
        <div> PaperPlaneIcon</div>
      </IconContainer>
      <IconContainer>
        <PencilIcon className="PencilIcon icon" />
        <div> PencilIcon</div>
      </IconContainer>
      <IconContainer>
        <PersonIcon className="PersonIcon icon" />
        <div> PersonIcon</div>
      </IconContainer>
      <IconContainer>
        <PhoneIcon className="PhoneIcon icon" />
        <div> PhoneIcon</div>
      </IconContainer>
      <IconContainer>
        <PlusIcon className="PlusIcon icon" />
        <div> PlusIcon</div>
      </IconContainer>
      <IconContainer>
        <QuoteLeftIcon className="QuoteLeftIcon icon" />
        <div> QuoteLeftIcon</div>
      </IconContainer>
      <IconContainer>
        <ReplyIcon className="ReplyIcon icon" />
        <div> ReplyIcon</div>
      </IconContainer>
      <IconContainer>
        <RocketIcon className="RocketIcon icon" />
        <div> RocketIcon</div>
      </IconContainer>
      <IconContainer>
        <SalesloftLogoWhiteIcon className="SalesloftLogoWhiteIcon icon" />
        <div> SalesloftLogoWhiteIcon</div>
      </IconContainer>
      <IconContainer>
        <SearchIcon className="SearchIcon icon" />
        <div> SearchIcon</div>
      </IconContainer>
      <IconContainer>
        <StarOutlinedIcon className="StarOutlinedIcon icon" />
        <div> StarOutlinedIcon</div>
      </IconContainer>
      <IconContainer>
        <SwitchesIcon className="SwitchesIcon icon" />
        <div> SwitchesIcon</div>
      </IconContainer>
      <IconContainer>
        <TemplatesIcon className="TemplatesIcon icon" />
        <div> TemplatesIcon</div>
      </IconContainer>
      <IconContainer>
        <TwitterIcon className="TwitterIcon icon" />
        <div> TwitterIcon</div>
      </IconContainer>
      <IconContainer>
        <VoicemailIcon className="VoicemailIcon icon" />
        <div> VoicemailIcon</div>
      </IconContainer>
    </IconsWrapper>
  );
}

export default Icons;
