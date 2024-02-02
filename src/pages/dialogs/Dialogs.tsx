import React from "react";
import classes from "./dialogs.module.css";
export const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			{/* <div className={classes.usersArea}>
				<div className={classes.searchWrapper}>
					<input className={classes.search} type="text" />
					<button className={classes.submit}></button>
				</div>
			</div> */}
			<div className={classes.chatArea}>chat</div>
		</div>
	);
};
