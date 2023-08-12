/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
      <video autoplay muted loop id="myVideo">
        <source src={require("../../assets/video/video2.mp4")} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <div
          className="page-header-image"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            />
            <h1 className="h1-seo">Claudia Vergara</h1>
            <h3>Atención Psicologica</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
