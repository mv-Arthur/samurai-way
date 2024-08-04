import React from "react";
import classes from "./button.module.css";

type PropsType = {
     children: React.ReactNode;
};

export const Button: React.FC<PropsType> = ({ children }) => {
     return <button className={classes.button}>{children}</button>;
};
