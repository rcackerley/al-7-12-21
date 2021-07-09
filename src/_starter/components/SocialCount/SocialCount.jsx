import React from "react";

import { default as ClickIcon } from "../../shared/Icons/Click";
import { default as EyeIcon } from "../../shared/Icons/Eye";
import { default as ReplyIcon } from "../../shared/Icons/Reply";

const SocialCount = ({ count }) => {
  const { clicks, replies, views } = count;
  return (
    <>
      <EyeIcon /> {views}
      <ClickIcon /> {clicks}
      <ReplyIcon /> {replies}
    </>
  )
}

export default SocialCount;
