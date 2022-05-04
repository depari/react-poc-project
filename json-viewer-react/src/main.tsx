import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import SpatialNavigation from "spatial-navigation-ts";
// import SpatialNavigation from "./spatial_navigation.js";
import SpatialNavigation from "./spatial_navigation";

declare global {
  interface Window {
    runStartupTasks: Function;
  }
}

(function () {
  console.log("Setup SpatialNaviation");
  // Initialize
  SpatialNavigation.init();
  console.log("SpatialNavigation.init();");
  // Define navigable elements (anchors and elements with "focusable" class).
  SpatialNavigation.add("main", {
    selector: "a, .focusable, button, input[type='checkbox']",
  });
  console.log("SpatialNavigation.add");
  SpatialNavigation.set({
    distanceMode: true,
    rememberSource: false,
  });

  // Make the *currently existing* navigable elements focusable.
  SpatialNavigation.makeFocusable();
  console.log("SpatialNavigation.makeFocusable");
  // Focus the first navigable element.
  SpatialNavigation.focus();
  console.log("SpatialNavigation.focus");
})();

window.runStartupTasks = () => {
  console.log("runStartupTasks  !!!!");
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded  !!!!");

  ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>

    <App />
    // </React.StrictMode>
  );

  console.log("after reder!!!");
});

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
