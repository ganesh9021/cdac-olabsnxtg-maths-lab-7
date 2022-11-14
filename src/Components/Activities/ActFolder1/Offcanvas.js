import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tooltip, {  tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const Offcanvas = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="offStyle"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <div className="" style={{ height: "100%" }}>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Theory!" placement="left" arrow>
                    <Link to="">
                      <img
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={"/img/theory.png"}
                        alt="Logo"
                      />
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Lets Test!" placement="left" arrow>
                    <Link to="/activity7/letusverify/mcq">
                      <img
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={"/img/mcq.png"}
                        alt="Logo"
                      />
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Lets Play!" placement="left" arrow>
                    <Link to="/activity7/letusverify/game">
                      <img
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={"/img/game.png"}
                        alt="Logo"
                      />
                    </Link>
                  </LightTooltip>
                </div>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Help!" placement="left" arrow>
                    <Link to="/activity7/letusverify/help">
                      <img
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={"/img/help.png"}
                        alt="Logo"
                      />
                    </Link>
                  </LightTooltip>
                </div>
                </div>
                </Navbar.Offcanvas>
            </Container>
          
          </Navbar>
          
        ))} 
        
      </>
    );
  };
  export default Offcanvas;
                