/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { GlobalContext } from "../App";

type Props = {
  w: number;
  moji: string;
  isYouon: boolean;
};

export const MojiButton = ({ w, moji, isYouon }: Props) => {
  const cssBtn = css`
    font-family: "BIZ UDPMincho", serif;
    font-size: ${w - 30}px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    color: #212529;
    color: black;
    background-color: rgb(255, 194, 69);
    border-radius: 15px;
    border-color: black;
    border-style: solid;
    border-width: 3px;
    margin: 3px;
    width: ${w}px;
    height: ${w}px;
    line-height: ${w}px;

    &:hover {
      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.4);
    }
    &:active {
      opacity: 0.6;
      transform: translateY(3px);
      box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.4);
    }
  `;

  const cssBtnYouon = css`
    font-size: ${w - 45}px;
    letter-spacing: -0.1em;
  `;

  // const cssBgcenterout = css`
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     top: 0px;
  //     left: 0px;
  //     z-index: 1;
  //     background: white;
  //     width: 100%;
  //     height: 100%;
  //     border-radius: 12px;
  //     transition: transform 1s linear;
  //     transform: scale(0, 0);
  //     transform-origin: center;
  //   }
  //   &:hover::before {
  //     transform: scale(1, 1);
  //     transition-delay: 0.5s;
  //   }
  // `;

  const cssSpan = css`
    position: relative;
    z-index: 3;
  `;

  const { inputtext, setInputtext } = useContext(GlobalContext);

  return (
    <button
      css={isYouon ? [cssBtn, cssBtnYouon] : [cssBtn]}
      onClick={() => {
        setInputtext(inputtext + moji);
      }}
    >
      <span css={[cssSpan]}>{moji}</span>
    </button>
  );
};
