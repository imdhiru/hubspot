import React, { useState } from "react";
import "./styles.css";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function App() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false
  });
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "20px", fontWeight: 700 }}>
        Made with Love SKY
      </div>
      <a href="https://bloginstall.com" rel="dofollow">
        Bloginstall.com
      </a>
      wiron66901@ahhtee.com
      <br />
      <button onClick={() => setState({ isPaneOpen: true })}>
        Click me to open right pane!
      </button>
      <div style={{ marginTop: "32px" }}>
        <button onClick={() => setState({ isPaneOpenLeft: true })}>
          Click me to open left pane with 20% width!
        </button>
      </div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
        <img src="img.png" />
      </SlidingPane>
      <SlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="200px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div>And I am pane content on left.</div>
      </SlidingPane>
    </div>
  );
}
