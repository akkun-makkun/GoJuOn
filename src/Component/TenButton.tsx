/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import React, { useContext } from "react";
import { GlobalContext } from "../App";

type Props = {
  moji: string;
};

export const TenButton = ({ moji }: Props) => {
  const cssBtn = css`
    cursor: pointer;
    user-select: none;
    float: left;
    border-color: black;
    border-style: solid;
    border-width: 3px;
    font-family: "BIZ UDPMincho", serif;
    font-size: 30px;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    color: #212529;
    color: black;
    background-color: rgb(255, 194, 69);
    margin: 3px 0px 3px 0px;
    width: 80px;
    height: 80px;
    line-height: 80px;

    &:hover {
      border-color: red;
    }
    &:active {
      opacity: 0.6;
    }
  `;

  const cssLeft = css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  `;
  const cssRight = css`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: ;
  `;

  const cssSpan = css`
    position: relative;
    z-index: 3;
  `;

  const { inputtext, setInputtext } = useContext(GlobalContext);

  const myCss = () => {
    if (moji === "、") {
      return [cssBtn, cssLeft];
    } else if (moji === "？") {
      return [cssBtn, cssRight];
    } else {
      return [cssBtn];
    }
  };

  return (
    <button
      css={myCss}
      onClick={() => {
        setInputtext(inputtext + moji);
      }}
    >
      <span css={[cssSpan]}>{moji}</span>
    </button>
  );
};
