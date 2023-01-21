/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Gyou = ({ children }: Props) => {
  const myCss = css`
    display: inline-flex;
    flex-direction: column;
    background-color: rgb(${0.84 * 255}, ${1 * 255}, ${1 * 255});
    padding: 5px;
    border-radius: 10px;
    margin: 5px;
  `;

  return <p css={myCss}>{children}</p>;
};
