import React, { useState, useEffect } from "react";
import Video from "../components/layout/Video";
import Mask from "../components/layout/Mask";
import StreamsContent from "../components/streams/StreamsContent";

function Streams() {
  return (
    <>
      <Video />
      <Mask>
        <StreamsContent />
      </Mask>
    </>
  );
}

export default Streams;
