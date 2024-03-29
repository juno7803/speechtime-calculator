import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../lib/constants/colors";
import { useSpeechTime } from "../../../hooks/useSpeechTime";
import { responsiveSize } from "../../../lib/constants/size";

interface Props {
  text?: string;
}

function TimeResult({ text }: Props) {
  const [speechTime, setSpeechTime] = useState("0초");
  const speechResult = useSpeechTime(text);

  useEffect(() => {
    setSpeechTime(speechResult);
  }, [speechResult]);

  return (
    <Styled.Root>
      <div>발표 시간</div>
      <div>{speechTime}</div>
    </Styled.Root>
  );
}

export default TimeResult;

const Styled = {
  Root: styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    min-height: 64px;
    color: ${colors.sub_navy};
    font-size: 16px;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    div:nth-of-type(1) {
      margin-right: 8px;
      background-color: ${colors.main_yellow};
      width: 40%;
    }
    div:nth-of-type(2) {
      background-color: white;
      width: 60%;
    }
    @media ${responsiveSize.mobile} {
      font-size: 14px;
    }
  `,
};
