import e,{useState as t}from"react";import l from"prop-types";const n=({content:l})=>{const[n,a]=t(!1),m=()=>{a(!n)};return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("button",{onClick:m},"Open modal")),n&&e.createElement("div",{className:"modal"},e.createElement("div",{onClick:m,className:"modalOverlay"}),e.createElement("div",{className:"modalContent"},e.createElement("p",null,l),e.createElement("button",{onClick:m,className:"modalClose"},e.createElement("span",{className:"material-icons"},"close")))))};n.propTypes={content:l.string};export{n as Modal};
