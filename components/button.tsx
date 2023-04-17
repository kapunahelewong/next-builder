import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

export const Button = (props) => (
  <button
    style={{
      padding: 40,
      backgroundColor: "green",
      color: "white",
      width: 200,
    }}
  >
    {props.myButton.toUpperCase()}
  </button>
);

Builder.registerComponent(
  dynamic(() => import("./button").then((module) => module.Button), {
    ssr: true,
  }),
  {
    name: "Custom Button",
    inputs: [
      {
        name: "myButton",
        type: "text",
        defaultValue: "I am a button!",
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);
