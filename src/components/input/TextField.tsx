import React from "react";
import classes from "./textField.module.css";
import searchIco from "./icons/search.svg";
import { Button } from "../button/Button";
type PropsType = {
     placeholder: string;
     variant: "large" | "medium";
};

export const TextField: React.FC<PropsType> = React.memo(({ placeholder, variant }) => {
     return (
          <div className={classes.wrapper}>
               {variant === "large" && (
                    <Button>
                         <img src={searchIco} alt="search" />
                    </Button>
               )}

               <input placeholder={placeholder} type="text" className={classes.input} />
          </div>
     );
});
