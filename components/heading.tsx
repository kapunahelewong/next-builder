import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

export const Heading = (props) => (
  <h1 style={{ color: props.color }}>{props.title}</h1>
);
// Register heading component with Builder.io
Builder.registerComponent(
  // dynamic() is a Next.js feature that loads components asynchronously 
  dynamic(() => import("./heading").then((module) => module.Heading), {
    // Render component server-side.
    ssr: true
  }),
  {
    name: "Heading",
    // Define component inputs
    inputs: [
      {
        name: "title",
        type: "text",
        defaultValue: "I am a heading!",
      },
      {
        name: "color",
        type: "color",
        defaultValue: "black",
      },
    ],
  }
);
