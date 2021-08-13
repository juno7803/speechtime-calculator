import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { cpmState } from "../../store";
import { colors } from "../../lib/constants/colors";

function ScrollBar() {
  const [cpm, setCpm] = useRecoilState(cpmState);

  return (
    <Styled.Root>
      <Styled.CpmContainer>
        <div>speed (Characters Per Minute)</div>
        <div>{cpm} cpm</div>
      </Styled.CpmContainer>
      <Styled.ScrollContainer>
        <input
          type="range"
          min="310"
          max="550"
          defaultValue="430"
          step="10"
          className="slider"
          id="myRange"
          list="tickmarks"
          onChange={(e) => setCpm(Number(e.target?.value))}
        />
      </Styled.ScrollContainer>
    </Styled.Root>
  );
}

export default ScrollBar;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 62px;
    border: 1px solid ${colors.gray_light};
    border-radius: 10px;
    overflow: hidden;
  `,
  CpmContainer: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 48px;
    font-size: 14px;
    div {
      line-height: 48px;
    }
    div:nth-of-type(2) {
      color: ${colors.main_yellow};
      font-weight: bold;
    }
  `,
  ScrollContainer: styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.gray_light};
    padding: 0 20px;
    height: 52px;

    input {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      /* opacity: 0.7; Set transparency (for mouse-over effects on hover) */
      outline: none; /* Remove outline */
      /* height: 25px; Specified height */
      background: ${colors.sub_navy}; /* Grey background */
      width: 100%; /* Full-width */
      height: 2px;

      /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        /* height: 25px; */
        border-radius: 50%;
        background: ${colors.main_yellow}; /* Green background */
        cursor: pointer; /* Cursor on hover */
        width: 20px; /* Set a specific slider handle width */
        height: 20px; /* Slider handle height */
      }

      &::-moz-range-thumb {
        /* height: 25px; */
        border-radius: 50%;
        background: #4caf50; /* Green background */
        cursor: pointer; /* Cursor on hover */
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
      }
    }
  `,
};