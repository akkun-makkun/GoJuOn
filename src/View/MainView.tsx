/** @jsxImportSource @emotion/react */
import { MojiButton } from "../Component/MojiButton";
import { Gyou } from "../Component/Gyou";
import { css } from "@emotion/react";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { TypeMoji, DictHiraganaSeion } from "../Others/DictHiraganaSeion";
import { DictHiraganaDakuon } from "../Others/DictHiraganaDakuon";
import { DictHiraganaYouon } from "../Others/DictHiraganaYouon";
import { DictHiraganaDakuonYouon } from "../Others/DictHiraganaDakuonYouon";
import { DictKatakanaSeion } from "../Others/DictKatakanaSeion";
import { DictKatakanaDakuon } from "../Others/DictKatakanaDakuon";
import { DictKatakanaYouon } from "../Others/DictKatakanaYouon";
import { DictKatakanaDakuonYouon } from "../Others/DictKatakanaDakuonYouon";

export const MainView = () => {
  // const calcWidth = () => {
  // var w = (window.innerHeight - 200) / 5;
  // if (w < 40) {
  //   w = 40;
  // } else if (w > 80) {
  //   w = 80;
  // }
  //   return w;
  // };
  // const [width, setWidth] = useState(100);

  // window.onresize = () => {
  //   setWidth(calcWidth);
  // };

  const gyou = [];
  for (let index = 0; index < 10; index++) {
    gyou.push(`g${index}`);
  }

  const { mojitype } = useContext(GlobalContext);
  const { kanatype } = useContext(GlobalContext);

  const isReverse: boolean = true;

  const setGyou = (i: number) => {
    var dict: TypeMoji[][] = [];
    switch (kanatype) {
      case 1:
        switch (mojitype) {
          case 1:
            dict = DictHiraganaSeion;
            break;
          case 2:
            dict = DictHiraganaDakuon;
            break;
          case 3:
            dict = DictHiraganaYouon;
            break;
          case 4:
            dict = DictHiraganaDakuonYouon;
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (mojitype) {
          case 1:
            dict = DictKatakanaSeion;
            break;
          case 2:
            dict = DictKatakanaDakuon;
            break;
          case 3:
            dict = DictKatakanaYouon;
            break;
          case 4:
            dict = DictKatakanaDakuonYouon;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    return dict[i].map((m) => (
      <MojiButton key={m.id} w={100} moji={m.moji} isYouon={m.isYouon} />
    ));
  };

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
      `}
    >
      {gyou.map((g, i) => (
        <Gyou key={g}>{setGyou(isReverse ? 9 - i : i)}</Gyou>
      ))}
    </div>
  );
};
