import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useState } from "react";
export default function Markdown({ reference }) {
  const [value, setValue] = useState("**Write some text!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        ref={reference}
      />
      {/* <MDEditor.Markdown rehypePlugins={[[rehypeSanitize]]} source={value} /> */}
    </div>
  );
}
