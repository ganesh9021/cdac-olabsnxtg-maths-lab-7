import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Launchpage from "./Components/MajorComponents/Launchpage";
import Letusverify from "./Components/MajorComponents/Letusverify";
import StartPage from "./Components/StartPage";
import Tool1 from "./Components/Tool1";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLangStore } from "./store/Store";
import Res1WithNo from "./Components/Res1WithNo";
import Tool2 from "./Components/Tool2";
import DragnDrop2 from "./Components/DragnDrop2";
import Res2 from "./Components/Res2";
import Res2WithNo from "./Components/Res2WithNo";
import Tool3 from "./Components/Tool3";
import Res3 from "./Components/Res3";
import Res3WithNo from "./Components/Res3WithNo";
import Tool4 from "./Components/Tool4";
import Res4 from "./Components/Res4";
import Res4WithNo from "./Components/Res4WithNo";
import Tool5 from "./Components/Tool5";
import Res5 from "./Components/Res5";
import Res5WithNo from "./Components/Res5WithNo";
import Tool6 from "./Components/Tool6";
import Res6 from "./Components/Res6";
import Res6WithNo from "./Components/Res6WithNo";
import Result from "./Components/Result";
import AItheory1 from "./Components/Theory/AItheory1";
import Help from "./Components/MajorComponents/Help";
import Play from "./Components/quiz/Play";
import Language from "./Language";

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
      <Route
        path="/letusverify/startpage/tool1/res1withno"
        element={<Res1WithNo />}
      />
      <Route path="/letusverify/startpage/tool2" element={<Tool2 />} />
      <Route
        path="/letusverify/startpage/tool2/dragndrop2"
        element={<DragnDrop2 />}
      />
      <Route
        path="/letusverify/startpage/tool2/dragndrop2/res2"
        element={<Res2 />}
      />
      <Route
        path="/letusverify/startpage/tool2/dragndrop2/res2/res2withno"
        element={<Res2WithNo />}
      />
      <Route path="/letusverify/startpage/tool3" element={<Tool3 />} />
      <Route path="/letusverify/startpage/tool3/res3" element={<Res3 />} />
      <Route
        path="/letusverify/startpage/tool3/res3/res3withno"
        element={<Res3WithNo />}
      />
      <Route path="/letusverify/startpage/tool4" element={<Tool4 />} />
      <Route path="/letusverify/startpage/tool4/res4" element={<Res4 />} />
      <Route
        path="/letusverify/startpage/tool4/res4/res4withno"
        element={<Res4WithNo />}
      />
      <Route path="/letusverify/startpage/tool5" element={<Tool5 />} />
      <Route path="/letusverify/startpage/tool5/res5" element={<Res5 />} />
      <Route
        path="/letusverify/startpage/tool5/res5/res5withno"
        element={<Res5WithNo />}
      />
      <Route path="/letusverify/startpage/tool6" element={<Tool6 />} />
      <Route path="/letusverify/startpage/tool6/res6" element={<Res6 />} />
      <Route
        path="/letusverify/startpage/tool6/res6/res6withno"
        element={<Res6WithNo />}
      />
      <Route path="/letusverify/startpage/result" element={<Result />} />
      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />
      <Route path="/letusverify/help" element={<Help />} />
      <Route
        path="/letusverify/quiz"
        element={<Play lang={firstStore.lang} />}
      />
    </Routes>
  );
};

export default App;
