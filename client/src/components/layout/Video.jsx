import React from "react";

const styles = {
  video: {
    position: "fixed",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

function Video() {
  return (
    <video
      className="video-intro"
      style={styles.video}
      poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
      playsInline
      autoPlay
      muted
      loop
    >
      <source src="images/bc2b.mp4" type="video/mp4" />
    </video>
  );
}

export default Video;
