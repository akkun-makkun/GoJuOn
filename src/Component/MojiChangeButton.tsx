/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { GlobalContext } from "../App";
import seion_on from "../Image/seion_on.png";
import seion_off from "../Image/seion_off.png";
import dakuon_on from "../Image/dakuon_on.png";
import dakuon_off from "../Image/dakuon_off.png";
import youon_on from "../Image/youon_on.png";
import youon_off from "../Image/youon_off.png";
import dakuonyouon_on from "../Image/dakuonyouon_on.png";
import dakuonyouon_off from "../Image/dakuonyouon_off.png";
import { strHenkan, dictHenkan } from "../Others/DictHenkan";

const cssBase = css`
  cursor: pointer;
  user-select: none;
  float: left;
  border-color: black;
  border-style: solid;
  margin-right: 2px;
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

const cssImg = css`
  width: 80px;
  height: 80px;
  pointer-events: none;
`;

export const SeionButton = () => {
  const { mojitype, setMojitype } = useContext(GlobalContext);

  const cssBtn = () => {
    if (mojitype === 1) {
      return css`
        background-color: rgb(0, 146, 255);
      `;
    } else {
      return css`
        background-color: white;
      `;
    }
  };

  return (
    <button
      css={[cssBtn, cssBase, cssLeft]}
      onClick={() => {
        setMojitype(1);
      }}
    >
      {mojitype === 1 ? (
        <img src={seion_on} alt="seion" css={cssImg} />
      ) : (
        <img src={seion_off} alt="seion" css={cssImg} />
      )}
    </button>
  );
};

export const DakuonButton = () => {
  const { mojitype, setMojitype } = useContext(GlobalContext);

  const cssBtn = () => {
    if (mojitype === 2) {
      return css`
        background-color: rgb(0, 146, 255);
      `;
    } else {
      return css`
        background-color: white;
      `;
    }
  };

  return (
    <button
      css={[cssBtn, cssBase]}
      onClick={() => {
        setMojitype(2);
      }}
    >
      {mojitype === 2 ? (
        <img src={dakuon_on} alt="dakuon" css={cssImg} />
      ) : (
        <img src={dakuon_off} alt="dakuon" css={cssImg} />
      )}
    </button>
  );
};

export const YouonButton = () => {
  const { mojitype, setMojitype } = useContext(GlobalContext);

  const cssBtn = () => {
    if (mojitype === 3) {
      return css`
        background-color: rgb(0, 146, 255);
      `;
    } else {
      return css`
        background-color: white;
      `;
    }
  };

  return (
    <button
      css={[cssBtn, cssBase]}
      onClick={() => {
        setMojitype(3);
      }}
    >
      {mojitype === 3 ? (
        <img src={youon_on} alt="dakuon" css={cssImg} />
      ) : (
        <img src={youon_off} alt="dakuon" css={cssImg} />
      )}
    </button>
  );
};

export const DakuonYouonButton = () => {
  const { mojitype, setMojitype } = useContext(GlobalContext);

  const cssBtn = () => {
    if (mojitype === 4) {
      return css`
        background-color: rgb(0, 146, 255);
      `;
    } else {
      return css`
        background-color: white;
      `;
    }
  };

  return (
    <button
      css={[cssBtn, cssBase, cssRight]}
      onClick={() => {
        setMojitype(4);
      }}
    >
      {mojitype === 4 ? (
        <img src={dakuonyouon_on} alt="dakuon" css={cssImg} />
      ) : (
        <img src={dakuonyouon_off} alt="dakuon" css={cssImg} />
      )}
    </button>
  );
};

export const HiraganaButton = () => {
  const { kanatype, setKanatype } = useContext(GlobalContext);
  const cssBtn = () => {
    if (kanatype === 1) {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: rgb(0, 248, 146);
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
      `;
    } else {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: white;
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
      `;
    }
  };
  return (
    <button
      css={[cssBtn, cssBase, cssLeft]}
      onClick={() => {
        setKanatype(1);
      }}
    >
      <span>ひらがな</span>
    </button>
  );
};

export const KatakanaButton = () => {
  const { kanatype, setKanatype } = useContext(GlobalContext);
  const cssBtn = () => {
    if (kanatype === 2) {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: rgb(0, 248, 146);
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
      `;
    } else {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: white;
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
      `;
    }
  };
  return (
    <button
      css={[cssBtn, cssBase, cssRight]}
      onClick={() => {
        setKanatype(2);
      }}
    >
      <span>カタカナ</span>
    </button>
  );
};

export const HenkanButton = () => {
  const { inputtext, setInputtext } = useContext(GlobalContext);
  const last = inputtext.slice(-1);

  const cssBtn = () => {
    if (strHenkan.includes(last) === false || last === "") {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: white;
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
        border-radius: 15px;
      `;
    } else {
      return css`
        font-size: 20px;
        font-weight: 700;
        float: left;
        text-align: center;
        background-color: rgb(0, 248, 146);
        border-style: solid;
        width: 100px;
        height: 80x;
        line-height: 80px;
        border-radius: 15px;
      `;
    }
  };

  const setHenkan = () => {
    if (strHenkan.includes(last)) {
      const text = inputtext.slice(0, -1);
      const index = dictHenkan.findIndex((e) => e.from === last);
      setInputtext(text + dictHenkan[index].to);
    }
  };

  return (
    <button css={[cssBtn, cssBase]} onClick={setHenkan}>
      <span>変換</span>
    </button>
  );
};
