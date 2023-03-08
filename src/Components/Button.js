import React from "react";
import "./Button.css"

export default function Button(props) {
    const esOperador = value => {
        return isNaN (value) && (value !== ".") && (value !== "=");
    };
    return (
        <button className={`button ${esOperador(props.children) ? "operator" : "functions"}`.trimEnd()}
        onClick={()=>props.manejarClick(props.children)}
        >
            {props.children}
        </button>
    )
}