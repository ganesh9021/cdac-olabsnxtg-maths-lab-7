
import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import ApproachSelect1 from "./ActFolder1/ApproachSelect1";
import workbench1 from "../../Img/workbench.png";
import tools1 from "../../Img/tools1.png";

export const UserContext = createContext(null);

const ActivityMiddleComp = () => {
  const [flag, setFlag] = useState(false);
  const [len, setLen] = useState();
  const [bre, setBre] = useState();

  const [toolvisible, setToolvisible] = useState("visible");



  return (
    <div className="" style={{ height: "100%" }}>
      <img
        className="mt-5 ms-4"
        style={{
          width: "8%",
          height: "6%",
          position: "absolute",
        }}
        src={workbench1}
        alt="Logo"
      />
      <div
        className="col-11 bg-light d-flex "
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="d-flex align-items-end"
          style={{ height: "100%", width: "7%" }}
        >
          <button
          className="bg-light"
            onClick={() => {
              //setFlag(!flag);
            }}
            style={{visibility: `${toolvisible}`, border :"none",borderBottomLeftRadius: "20px",marginBottom:"5%"}}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth:"4.0vw"
              }}
              src={tools1}
              alt="Logo"
            />
          </button>
        </div>

        <div
          className=""
          id="shapesdiv"
          style={{ height: "100%", width: "93%" }}
        >
          {/* //middle component rendering area */}
          <UserContext.Provider value={{ flag, setFlag }}>
            {flag ? (
              <ApproachSelect1 />
            ) : (
              <Outlet
                context={{
                  len,
                  setLen,
                  bre,
                  setBre,
                  setToolvisible,
                }}
              />
            )}
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ActivityMiddleComp;


// import React, { createContext, useState } from "react";
// import { Outlet } from "react-router-dom";
// import ApproachSelect1 from "./ActFolder1/ApproachSelect1";


// export const UserContext = createContext(null);

// const ActivityMiddleComp = () => {
//   const [flag, setFlag] = useState(false);

//   return (
//     <div
//       className="justify-content-center align-items-center "
//       style={{ height: "100%" }}
//     >
//       <img
//         className="mt-5 ms-4"
//         style={{
//           width: "8%",
//           height: "6%",
//           position: "absolute",
//         }}
//         src={"/img/workbench.png"}
//         alt="Logo"
//       />
//       <div
//         className="col-11 bg-light d-flex align-items-end flex-column"
//         style={{
//           height: "95%",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
//           display: "block",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <div
//           className=" container-fluid "
//           id="shapesdiv"
//           style={{ height: "70%" }}
//         >
//           {/* middle component rendering area */}
//           <UserContext.Provider value={{ flag, setFlag }}>
//             {flag ? <ApproachSelect1 /> : <Outlet />}
//           </UserContext.Provider>
//         </div>

//         <div className="container-fluid  d-flex " style={{ height: "30%" }}>
//           <div
//             className="col-2  d-flex align-items-end"
//             style={{ textDecoration: "none" }}
//           >
//             <button
//               className="bg-light d-flex justify-content-end "
//               onClick={() => {
//                 setFlag(!flag);
//               }}
//               style={{ height: "100px", width: "100px", border: "none" }}
//             >
//               <img
//                 className=""
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   height: "100px",
//                   width: "100px",
//                 }}
//                 src={"/img/tools.png"}
//                 alt="Logo"
//               />
//             </button>
//           </div>

//           <div className=" col-8 d-flex">
//             <div className="col-4 d-flex align-items-center justify-content-center">
//               <img
//                 className="mt-5"
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   maxHeight: "50%",
//                   height: "85px",
//                 }}
//                 src={"/img/back.png"}
//                 alt="Logo"
//               />
//             </div>
//             <div className="col-4 d-flex align-items-center justify-content-center">
//               {/* <div
//                 className="btn btn-outline-primary shadow fs-3 fw-bold mt-5 border d-flex justify-content-center align-items-center"
//                 style={{
//                   height: "50px",
//                   width: "200px",
//                   borderRadius: "50px",
//                   background: "",
//                 }}
//               >
//                 Start
//               </div> */}
//             </div>
//             <div className="col-4 d-flex align-items-center justify-content-center">
//               <img
//                 className="mt-5"
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   maxHeight: "50%",
//                   height: "85px",
//                 }}
//                 src={"/img/next.png"}
//                 alt="Logo"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityMiddleComp;
