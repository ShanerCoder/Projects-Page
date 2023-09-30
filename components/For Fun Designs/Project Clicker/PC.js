import { useState } from "react";

function ProjectClicker() {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Clicks: {clicks}</h1>
        <button
          style={{
            width: "90%",
            height: "800px",
          }}
          onClick={() => setClicks(clicks + 1)}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default ProjectClicker;
