"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(e);const n=({content:t})=>{const[a,n]=e.useState(!1),r=()=>{n(!a)};return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",null,l.default.createElement("button",{onClick:r},"Open modal")),a&&l.default.createElement("div",{className:"modal"},l.default.createElement("div",{onClick:r,className:"modalOverlay"}),l.default.createElement("div",{className:"modalContent"},l.default.createElement("p",null,t),l.default.createElement("button",{onClick:r,className:"modalClose"},l.default.createElement("span",{className:"material-icons"},"close")))))};n.propTypes={content:a(t).default.string},exports.Modal=n;