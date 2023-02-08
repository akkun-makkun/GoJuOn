/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { GlobalContext } from "../App";
import imgPlay from "../Image/play.svg";
import imgDelete from "../Image/delete.svg";
import imgDeleteAll from "../Image/trash-can-solid.svg";
import imgCopy from "../Image/copy.svg";

const cssContainer = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const cssBtn = css`
  display: block;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border-color: black;
  border-style: solid;

  &:active {
    opacity: 0.6;
  }
`;

const cssBtnRound = css`
  width: 85px;
  height: 85px;
  border-radius: 50%;
`;

const cssBtnRect = css`
  width: 65px;
  height: 65px;
  border-radius: 20%;
  margin: 10px;
  padding: 15px;
`;

const cssImgPlay = css`
  padding: 5px;
`;

const cssImgDelete = css`
  padding-right: 2px;
`;

const cssP = css`
  width: ${window.innerWidth - 550}px;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 30px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  background: white;
  display: block;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const TopView = () => {
  const { inputtext, setInputtext } = useContext(GlobalContext);

  const speech = () => {
    const utter = new SpeechSynthesisUtterance(inputtext);
    const voice = window.speechSynthesis.getVoices()[0];
    utter.voice = voice;
    utter.rate = 0.8;
    window.speechSynthesis.speak(utter);
  };

  return (
    <div css={cssContainer}>
      <button
        css={[cssBtn, cssBtnRect]}
        onClick={() => {
          navigator.clipboard.writeText(inputtext);
        }}
      >
        <img src={imgCopy} alt={"copy"} css={[]} />
      </button>
      <button css={[cssBtn, cssBtnRound]} onClick={speech}>
        <img src={imgPlay} alt={"play"} css={[cssImgPlay]} />
      </button>
      <p css={[cssP]}>{inputtext}</p>
      <button
        css={[cssBtn, cssBtnRound]}
        onClick={() => {
          setInputtext(inputtext.slice(0, -1));
        }}
      >
        <img src={imgDelete} alt={"delete"} css={[cssImgDelete]} />
      </button>

      <button
        css={[cssBtn, cssBtnRect]}
        onClick={() => {
          setInputtext("");
        }}
      >
        <img src={imgDeleteAll} alt={"delete-all"} css={[]} />
      </button>
    </div>
  );
};
