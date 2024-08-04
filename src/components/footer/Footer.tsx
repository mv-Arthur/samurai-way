import React from "react";
import classes from "./footer.module.css";
import { Logo } from "../logo/Logo";
import appStore from "./images/app-store.png";
import playstore from "./images/playstore.png";
import { FooterFillingType } from "../../data/footer";

type PropsType = {
     filling: FooterFillingType;
};

export const Footer: React.FC<PropsType> = React.memo(({ filling }) => {
     return (
          <div className={classes.footer}>
               <div className={classes.upBar}>
                    <div className={classes.column}>
                         <Logo size="medium" style={{ marginBottom: "56px" }} />
                         <div className={classes.description}>Download app from</div>
                         <div className={classes.imgWrapper}>
                              <img src={appStore} alt="App Store" />
                              <img src={playstore} alt="Google Play" />
                         </div>
                    </div>
                    {filling.columns.map((column) => (
                         <div className={classes.column} key={column.id}>
                              <div className={classes.columnHeader}>{column.header}</div>
                              {column.children.map((child) => (
                                   <div className={classes.row} key={child.id}>
                                        {child.word}
                                   </div>
                              ))}
                         </div>
                    ))}
               </div>
               <div className={classes.copyright}>
                    <span>{filling.text}</span>
               </div>
          </div>
     );
});
