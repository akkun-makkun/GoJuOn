/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  SeionButton,
  DakuonButton,
  YouonButton,
  DakuonYouonButton,
  HiraganaButton,
  KatakanaButton,
} from "../Component/MojiChangeButton";

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
          <SeionButton />
          <DakuonButton />
          <YouonButton />
          <DakuonYouonButton />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <HiraganaButton />
          <KatakanaButton />
        </div>
      </div>
    </>
  );
};
