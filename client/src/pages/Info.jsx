import React from "react";

import Video from "../components/layout/Video";
import Mask from "../components/layout/Mask";
import Container from "../components/layout/Container";

function Info() {
  return (
    <>
      <Video />
      <Mask>
        <Container></Container>
      </Mask>
    </>
  );
}

export default Info;
