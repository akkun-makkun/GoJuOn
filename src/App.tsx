/** @jsxImportSource @emotion/react */

import { useState, createContext } from "react";
import { BottomView } from "./View/BottomView";
import { MainView } from "./View/MainView";
import { TopView } from "./View/TopView";

type GlobalContextType = {
  mojitype: number;
  setMojitype: (m: number) => void;
  kanatype: number;
  setKanatype: (k: number) => void;
  inputtext: string;
  setInputtext: (t: string) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  mojitype: 0,
  setMojitype: () => {},
  kanatype: 0,
  setKanatype: () => {},
  inputtext: "",
  setInputtext: () => {},
});

function App() {
  const [mojitype, setMojitype] = useState<number>(1);
  const [kanatype, setKanatype] = useState<number>(1);
  const [inputtext, setInputtext] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        mojitype: mojitype,
        setMojitype: setMojitype,
        kanatype: kanatype,
        setKanatype: setKanatype,
        inputtext: inputtext,
        setInputtext: setInputtext,
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>ごじゅーおんweb</h1>

        <div className="bg-dark p-3">
          <TopView />
          <MainView />
          <BottomView />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
