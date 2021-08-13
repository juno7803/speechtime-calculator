import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { modeState } from "../../store";
import { colors } from "../../lib/constants/colors";
import { css } from "@emotion/react";

function Options() {
  const [language, setLanguage] = useState<String>("KOR");
  const [mode, setMode] = useRecoilState(modeState);

  return (
    <Styled.Root mode={mode}>
      <button onClick={() => setMode("Basic")}>Basic Mode</button>
      <button onClick={() => setMode("Advanced")}>Advanced Mode</button>
      <button>Language: {language}</button>
      {/* dropdown은 따로 컴포넌트 분리할까? */}
    </Styled.Root>
  );
}

export default Options;

const Styled = {
  Root: styled.section<{ mode: String }>`
    display: flex;
    margin-bottom: 8px;
    width: 100%;
    button {
      margin-right: 8px;
      outline: 0;
      border: 0;
      border-radius: 10px;
      background-color: white;
      cursor: pointer;
      width: 17.5%;
      height: 54px;
      text-align: center;
      line-height: 54px;
      color: ${colors.sub_navy};
    }

    button:nth-of-type(1) {
      /* background-color: ${({ mode }) =>
        mode === "Basic" ? colors.main_yellow : "white"}; */

      ${({ mode }) =>
        mode === "Basic"
          ? css`
              background-color: ${colors.main_yellow};
              font-weight: bold;
            `
          : css`
              background-color: white;
              font-weight: normal;
            `}
    }

    button:nth-of-type(2) {
      /* background-color: ${({ mode }) =>
        mode === "Basic" ? "white" : colors.main_yellow}; */
      ${({ mode }) =>
        mode === "Basic"
          ? css`
              background-color: white;
              font-weight: normal;
            `
          : css`
              background-color: ${colors.main_yellow};
              font-weight: bold;
            `}
    }
    button:nth-of-type(3) {
      flex: 1;
      margin: 0;
      padding-right: 24px;
      text-align: right;
      color: ${colors.gray_dark};
    }
  `,
};