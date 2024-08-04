import React from "react";
import classes from "./logo.module.css";
import logo from "../header/icons/logo.svg";

type PropsType = {
     size: "large" | "medium";
     style?: React.CSSProperties;
};

type ClassNamesType = {
     image: null | string;
     name: null | string;
};

export const Logo: React.FC<PropsType> = React.memo(({ size, style }) => {
     const classNames: ClassNamesType = {
          image: null,
          name: null,
     };

     switch (size) {
          case "large": {
               classNames.image = classes.imageLarge;
               classNames.name = classes.nameLarge;
               break;
          }

          case "medium": {
               classNames.image = classes.imageMedium;
               classNames.name = classes.nameMedium;
          }
     }

     return (
          <div className={classes.logoWrapper} style={style}>
               <img className={classNames.image} src={logo} alt="logo" />
               <h2 className={classNames.name}>SocialV</h2>
          </div>
     );
});
