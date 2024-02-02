import mail from "./icons/mail.svg";
import notification from "./icons/notification.svg";
import people from "./icons/people.svg";
import shopping from "./icons/shopping.svg";
import sun from "./icons/sun.svg";
import women from "../../images/women.jpg";
import React from "react";
import classes from "./header.module.css";

export const Component = () => {
	return (
		<header className={`header ${classes.header}`}>
			<div className={classes.functional}>
				<div className={classes.navbar}>
					<div className={classes.navItem}>HOME</div>
					<div className={classes.navItem}>COMUNITY</div>
					<div className={classes.navItem}>PAGES</div>
					<div className={classes.navItem}>BLOG</div>
					<div className={classes.navItem}>SHOP</div>
					<div className={classes.navItem}>COURSES</div>
				</div>
				<div className={classes.control}>
					<input placeholder="Search Here" type="text" className={classes.input} />
					<button className={classes.controlItem}>
						<img className={classes.controlItemIco} src={sun} alt="" />
					</button>
					<button className={classes.controlItem}>
						<img className={classes.controlItemIco} src={people} alt="" />
					</button>
					<button className={classes.controlItem}>
						<img className={classes.controlItemIco} src={mail} alt="" />
					</button>
					<button className={classes.controlItem}>
						<img className={classes.controlItemIco} src={notification} alt="" />
					</button>
					<button className={classes.controlItem}>
						<img className={classes.controlItemIco} src={shopping} alt="" />
					</button>
					<div className={classes.avatar}>
						<img className={classes.avatar} src={women} alt="" />
					</div>
				</div>
			</div>
		</header>
	);
};

export const Header = React.memo(Component);
