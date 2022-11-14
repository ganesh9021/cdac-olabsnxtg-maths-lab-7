import Activity from "./Components/Activity";
import { Route, Routes } from "react-router-dom";
import Activity2 from "./Components/Activities/ActFolder2/Activity2";
import Error from "./Components/Error";
import LetsVerify from "./Components/Activities/ActFolder1/LetsVerify";
import Act1startpage from "./Components/Activities/ActFolder1/Act1startpage";
import Theory from "./Components/Activities/ActFolder1/Theory";
import Mcq from "./Components/Activities/ActFolder1/Mcq";
import Game from "./Components/Activities/ActFolder1/Game";
import Help from "./Components/Activities/ActFolder1/Help";

import ApproachSelect1 from "./Components/Activities/ActFolder1/ApproachSelect1";

import Combine_Result from "./Components/Activities/ActFolder1/Combine_Result";
import DragnDrop_2 from "./Components/Activities/ActFolder1/DragnDrop_2";
import Res_2 from "./Components/Activities/ActFolder1/Res_2";
import Res_3 from "./Components/Activities/ActFolder1/Res_3";
import Res_4 from "./Components/Activities/ActFolder1/Res_4";
import Res_5 from "./Components/Activities/ActFolder1/Res_5";
import Res_6 from "./Components/Activities/ActFolder1/Res_6";
import LHS_RHS from "./Components/Activities/ActFolder1/LHS_RHS";
import Tool_1 from "./Components/Activities/ActFolder1/Tool_1";
import Tool_2 from "./Components/Activities/ActFolder1/Tool_2";
import Tool_3 from "./Components/Activities/ActFolder1/Tool_3";
import Tool_4 from "./Components/Activities/ActFolder1/Tool_4";
import Tool_5 from "./Components/Activities/ActFolder1/Tool_5.js";
import Tool_6 from "./Components/Activities/ActFolder1/Tool_6";
import Activity7 from "./Components/Activities/ActFolder1/Activity7";
import Theory1 from "./Components/Activities/ActFolder1/Theory1";
import Res2WithNumbers from "./Components/Activities/ActFolder1/Res2WithNumbers";
import Res4WithNumbers from "./Components/Activities/ActFolder1/Res4WithNumbers";
import Res5_WithNumbers from "./Components/Activities/ActFolder1/Res5_WithNumbers";
import Res3_WithNumbers from "./Components/Activities/ActFolder1/Res3_WithNumbers";
import Res6_WithNumbers from "./Components/Activities/ActFolder1/Res6_WithNumbers";
import Result from "./Components/Activities/ActFolder1/Result";
import Res_3_copy from "./Components/Activities/ActFolder1/Res_3_copy";
import Res_6_Copy from "./Components/Activities/ActFolder1/Res_6_Copy";
import Res1_WithNumbers from "./Components/Activities/ActFolder1/Res1_WithNumbers";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Activity7 />} />

      <Route path="/activity7" element={<Activity7 />} />
      <Route path="/activity7/letusverify" element={<LetsVerify />} />
      
      <Route
        path="/activity7/letusverify/act1startpage"
        element={<Act1startpage />}
      >
        {/* <Route path="inputvalues" element={<Inputvalues />} /> */}
        {/* <Route path="approach" element={<ApproachSelect1 />} /> */}
        <Route path="lhs_rhs" element={<LHS_RHS />} />
        {/* <Route path="twosqare" element={<Twosquares />} /> */}
        {/* <Route path="onerectangle" element={<Onerectangle />} /> */}
        <Route path="lhs_rhs/tool_1" element={<Tool_1 />} />
        <Route path="tool_2" element={<Tool_2 />} />
        <Route path="tool_3" element={<Tool_3 />} />
        <Route path="lhs_rhs/tool_4" element={<Tool_4 />} />
        <Route path="tool_5" element={<Tool_5 />} />
        <Route path="tool_6" element={<Tool_6 />} />
        {/* <Route path="tool_1/dragndrop_1" element={<DragnDrop_1 />} />*/}
        <Route path="tool_2/dragndrop_2" element={<DragnDrop_2 />} />
        {/* <Route path="lhs_rhs/tool_3/dragndrop_3" element={<DragnDrop_3 />} />
        <Route path="lhs_rhs/tool_4/dragndrop_4" element={<DragnDrop_4 />} />
        <Route path="lhs_rhs/tool_5/dragndrop_5" element={<DragnDrop_5 />} />
        <Route path="lhs_rhs/tool_6/dragndrop_6" element={<DragnDrop_6 />} />  */}
        <Route path="lhs_rhs/tool_1/res1_withno" element={<Res1_WithNumbers/>}></Route>
        <Route path="lhs_rhs/tool_2/dragndrop_2/res_2" element={<Res_2/>}></Route>
        <Route path="lhs_rhs/tool_2/dragndrop_2/res_2/res2_withno" element={<Res2WithNumbers/>}></Route>
        <Route path="lhs_rhs/tool_3/res_3" element={<Res_3/>}></Route>
        <Route path="lhs_rhs/tool_3/res_3/res3_withno" element={<Res3_WithNumbers/>}></Route>
        <Route path="lhs_rhs/tool_4/res_4" element={<Res_4/>}></Route>
        <Route path="lhs_rhs/tool_4/res_4/res4_withno" element={<Res4WithNumbers/>}></Route>
        <Route path="lhs_rhs/tool_5/res_5" element={<Res_5/>}></Route>
        <Route path="lhs_rhs/tool_5/res_5/res5_withno" element={<Res5_WithNumbers/>}></Route>
        <Route path="lhs_rhs/tool_6/res_6" element={<Res_6/>}></Route>
        <Route path="lhs_rhs/tool_6/res_6/res6_withno" element={<Res6_WithNumbers/>}></Route>
        {/* <Route path="lhs_rhs/combine_result" element={<Combine_Result/>}></Route> */}
        {/* <Route path="lhs_rhs/result" element={<Result/>}></Route> */}
        <Route path="lhs_rhs/result" element={<Result/>}></Route>
        <Route path="res_3_copy" element={<Res_3_copy/>}></Route>
        <Route path="res_6_copy" element={<Res_6_Copy/>}></Route>
      </Route>

      <Route path="/activity7/letusverify/theory" element={<Theory />} />
      <Route path="/activity7/letusverify/theory/theory1" element={<Theory1 />} />
      <Route path="/activity7/letusverify/mcq" element={<Mcq />} />
      <Route path="/activity7/letusverify/game" element={<Game />} />
      <Route path="/activity7/letusverify/help" element={<Help />} />
      

      <Route path="/activity2" element={<Activity2 />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
