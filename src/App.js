import React, { useEffect, useState } from "react";
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
import Res1WithNoCopy from "./Components/Res1WithNoCopy";
import Res2WithNoCopy from "./Components/Res2WithNoCopy";
import Res3WithNoCopy from "./Components/Res3WithNoCopy";
import Res4WithNoCopy from "./Components/Res4WithNoCopy";
import Res5WithNoCopy from "./Components/Res5WithNoCopy";
import Res6WithNoCopy from "./Components/Res6WithNoCopy";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "./config/dbconfig.js";
import { browserName, browserVersion } from "react-device-detect";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Procedure_main from "./Procedure/Procedure_main.js";

const App = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const { firstStore } = useSelector((state) => state);
  let dispatch = useDispatch();
  const [ip, setIP] = useState("");
  const sid = uuid();

  useEffect(() => {
    localStorage.setItem("sessionid", sid);
  }, []);

  useEffect(() => {
    // to call get data function which return ip address
    getData();
  }, [ip]);

  const getData = async () => {
    const res = await axios.get("https://ipapi.co/json/");
    //console.log(res.data);
    setIP(res.data.ip);
    localStorage.setItem("clientip", ip);
  };

  const { sendJsonMessage, readyState } = useWebSocket(logconfig.logurl, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onError: () => {
      console.log("WebSocket connection Error");
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
  });

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

  useEffect(() => {
    ReactGA.initialize("G-ZLKNSX7SDM", {
      gaOptions: {
        gtag: true,
      },
    });
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
      <Route
        path="/letusverify/startpage/tool1/res1withnocopy"
        element={<Res1WithNoCopy />}
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
      <Route
        path="/letusverify/startpage/tool2/dragndrop2/res2/res2withnocopy"
        element={<Res2WithNoCopy />}
      />
      <Route path="/letusverify/startpage/tool3" element={<Tool3 />} />
      <Route path="/letusverify/startpage/tool3/res3" element={<Res3 />} />
      <Route
        path="/letusverify/startpage/tool3/res3/res3withno"
        element={<Res3WithNo />}
      />
      <Route
        path="/letusverify/startpage/tool3/res3/res3withnocopy"
        element={<Res3WithNoCopy />}
      />
      <Route path="/letusverify/startpage/tool4" element={<Tool4 />} />
      <Route path="/letusverify/startpage/tool4/res4" element={<Res4 />} />
      <Route
        path="/letusverify/startpage/tool4/res4/res4withno"
        element={<Res4WithNo />}
      />
      <Route
        path="/letusverify/startpage/tool4/res4/res4withnocopy"
        element={<Res4WithNoCopy />}
      />
      <Route path="/letusverify/startpage/tool5" element={<Tool5 />} />
      <Route path="/letusverify/startpage/tool5/res5" element={<Res5 />} />
      <Route
        path="/letusverify/startpage/tool5/res5/res5withno"
        element={<Res5WithNo />}
      />
      <Route
        path="/letusverify/startpage/tool5/res5/res5withnocopy"
        element={<Res5WithNoCopy />}
      />
      <Route path="/letusverify/startpage/tool6" element={<Tool6 />} />
      <Route path="/letusverify/startpage/tool6/res6" element={<Res6 />} />
      <Route
        path="/letusverify/startpage/tool6/res6/res6withno"
        element={<Res6WithNo />}
      />
      <Route
        path="/letusverify/startpage/tool6/res6/res6withnocopy"
        element={<Res6WithNoCopy />}
      />
      <Route path="/letusverify/startpage/result" element={<Result />} />
      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />
      <Route path="/letusverify/help" element={<Help />} />
      <Route
        path="/letusverify/quiz"
        element={<Play lang={firstStore.lang} />}
      />
      <Route path="/letusverify/procedure" element={<Procedure_main />} />
    </Routes>
  );
};

export default App;
