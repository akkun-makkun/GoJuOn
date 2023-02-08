/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  SeionButton,
  DakuonButton,
  YouonButton,
  DakuonYouonButton,
  HiraganaButton,
  KatakanaButton,
  HenkanButton,
} from "../Component/MojiChangeButton";
import { TenButton } from "../Component/TenButton";

export const BottomView = () => {
  const cssContainer = css`
    margin-top: 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  `;

  return (
    <>
      <div css={[cssContainer]}>
        <div>
          <HenkanButton />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <SeionButton />
          <DakuonButton />
          <YouonButton />
          <DakuonYouonButton />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <HiraganaButton />
          <KatakanaButton />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TenButton moji="、" />
          <TenButton moji="。" />
          <TenButton moji="！" />
          <TenButton moji="？" />
        </div>
      </div>
    </>
  );
};
