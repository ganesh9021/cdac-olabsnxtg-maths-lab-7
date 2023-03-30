import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Launchpage from "./components/MajorComponents/Launchpage";
import Letusverify from "./components/MajorComponents/Letusverify";
import StartPage from "./components/StartPage";
import Tool1 from './components/Tool1'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLangStore } from "./store/Store";
import Language from "./Language";
import Res1WithNo from "./components/Res1WithNo";
import Tool2 from "./components/Tool2";
import DragnDrop2 from "./components/DragnDrop2";
import Res2 from "./components/Res2";
import Res2WithNo from "./components/Res2WithNo";
import Tool3 from "./components/Tool3";
import Res3 from "./components/Res3";
import Res3WithNo from "./components/Res3WithNo";
import Tool4 from "./components/Tool4";
import Res4 from "./components/Res4";
import Res4WithNo from "./components/Res4WithNo";
import Tool5 from "./components/Tool5";
import Res5 from "./components/Res5";
import Res5WithNo from "./components/Res5WithNo";
import Tool6 from "./components/Tool6";
import Res6 from "./components/Res6";
import Res6WithNo from "./components/Res6WithNo";
import Result from './components/Result';
import AItheory1 from './components/Theory/AItheory1';
import Help from "./components/MajorComponents/Help";
import Play from './components/quiz/Play'


const App = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const { firstStore } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    if (id == "en") {
      alert("in app en : ", id);
      i18n.changeLanguage("en");
      dispatch(setLangStore("en"));
    }
    if (id == "hn") {
      alert("in app hn : ", id);
      i18n.changeLanguage("hn");
      dispatch(setLangStore("hn"));
    }
  }, []);
  return (
    <Routes>
      <Route path="/lang=:id" element={<App />} />
      <Route path="/" element={<Launchpage />} />
      <Route path="/letusverify" element={<Letusverify />} />
      <Route path="/letusverify/startpage" element={<StartPage />} />
      <Route path="/letusverify/startpage/tool1" element={<Tool1 />} />
      <Route path="/letusverify/startpage/tool1/res1withno" element={<Res1WithNo />} />
      <Route path="/letusverify/startpage/tool2" element={<Tool2 />} />
      <Route path="/letusverify/startpage/tool2/dragndrop2" element={<DragnDrop2 />} />
      <Route path="/letusverify/startpage/tool2/dragndrop2/res2" element={<Res2 />} />
      <Route path="/letusverify/startpage/tool2/dragndrop2/res2/res2withno" element={<Res2WithNo />} />
      <Route path="/letusverify/startpage/tool3" element={<Tool3 />} />
      <Route path="/letusverify/startpage/tool3/res3" element={<Res3 />} />
      <Route path="/letusverify/startpage/tool3/res3/res3withno" element={<Res3WithNo />} />
      <Route path="/letusverify/startpage/tool4" element={<Tool4 />} />
      <Route path="/letusverify/startpage/tool4/res4" element={<Res4 />} />
      <Route path="/letusverify/startpage/tool4/res4/res4withno" element={<Res4WithNo />} />
      <Route path="/letusverify/startpage/tool5" element={<Tool5 />} />
      <Route path="/letusverify/startpage/tool5/res5" element={<Res5 />} />
      <Route path="/letusverify/startpage/tool5/res5/res5withno" element={<Res5WithNo />} />
      <Route path="/letusverify/startpage/tool6" element={<Tool6 />} />
      <Route path="/letusverify/startpage/tool6/res6" element={<Res6 />} />
      <Route path="/letusverify/startpage/tool6/res6/res6withno" element={<Res6WithNo />} />
      <Route path="/letusverify/startpage/result" element={<Result />} />
      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />
      <Route path="/letusverify/help" element={<Help />} />
      <Route path="/letusverify/quiz" element={<Play lang={firstStore.lang}/>} />
    </Routes>
  );
};

export default App;
