import React from "react";
import Split from "react-split";
import Editor from "./components/editor";
import Preview from "./components/preview";

export default function App() {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Split
        className="flex"
        sizes={[40, 60]}
        minSize={450}
        gutterSize={4}
        snapOffset={30}
      >
        <div className="h-screen overflow-auto bg-red-400">
          <Editor />
        </div>
        <div className="h-screen overflow-auto">
          <Preview />
        </div>
      </Split>
    </div>
  );
}
