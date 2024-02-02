import women from "../../images/women.jpg";
import newsfeed from "./icons/news.svg";
import members from "./icons/members.svg";
import groups from "./icons/group.svg";
import badges from "./icons/badges.svg";
import message from "./icons/message.svg";
import shop from "./icons/bag.svg";
import courses from "./icons/education.svg";
import levels from "./icons/level.svg";
import allForum from "./icons/progres.svg";
import forumSingle from "./icons/message.svg";
import topicSingle from "./icons/topic.svg";
import memberShip from "./icons/membership.svg";
import lock from "./icons/lock.svg";
import bell from "./icons/bell.svg";
import gear from "./icons/gear.svg";
import logo from "../header/icons/logo.svg";
import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
	return (
		<div className={`sidebar ${classes.sideBar}`}>
			<div className={classes.logoWrapper}>
				<img className={classes.image} src={logo} alt="" />
				<h2 className={classes.name}>SocialV</h2>
			</div>
			<div className={classes.scrolled}>
				<div className={classes.authUser}>
					<img src={women} alt="" className={classes.avatar} />
					<NavLink to="/profile" className={classes.authData}>
						<div className={classes.name}>Marvin McKinney</div>
						<span className={classes.tag}>@marvin</span>
					</NavLink>
				</div>

				<nav className={classes.navBar}>
					<div className={classes.navGroup}>
						<div className={classes.navGroupName}>MENU</div>
						<div className={classes.navItemWrapper}>
							<NavLink
								activeClassName={classes.active}
								to="/news"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={newsfeed} alt="" />
								<div className={classes.navItemText}>NewsFeed</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/members"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={members} alt="" />
								<div className={classes.navItemText}>Members</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/groups"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={groups} alt="" />
								<div className={classes.navItemText}>Groups</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/badges"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={badges} alt="" />
								<div className={classes.navItemText}>Badges</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/dialogs"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={message} alt="" />
								<div className={classes.navItemText}>Message</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/shop"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={shop} alt="" />
								<div className={classes.navItemText}>Shop</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/courses"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={courses} alt="" />
								<div className={classes.navItemText}>Courses</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/levels"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={levels} alt="" />
								<div className={classes.navItemText}>Levels</div>
							</NavLink>
						</div>
					</div>
					<div className={classes.navGroup}>
						<div className={classes.navGroupName}>FORUM</div>
						<div className={classes.navItemWrapper}>
							<NavLink
								activeClassName={classes.active}
								to="/allforums"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={allForum} alt="" />
								<div className={classes.navItemText}>All Forums</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/forumsingle"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={forumSingle} alt="" />
								<div className={classes.navItemText}>Forum Single</div>
							</NavLink>
							<NavLink
								activeClassName={classes.active}
								to="/topicSingle"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={topicSingle} alt="" />
								<div className={classes.navItemText}>Topic Single</div>
							</NavLink>
						</div>
					</div>
					<div className={classes.navGroup}>
						<div className={classes.navGroupName}>OTHERS</div>
						<div className={classes.navItemWrapper}>
							<NavLink
								activeClassName={classes.active}
								to="/membership"
								className={classes.navItem}
							>
								<img className={classes.navItemIco} src={memberShip} alt="" />
								<div className={classes.navItemText}>Membership</div>
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
			<div className={classes.bottomTools}>
				<button className={classes.toolItem}>
					<img className={classes.toolItemImg} src={lock} alt="" />
				</button>
				<button className={classes.toolItem}>
					<img className={classes.toolItemImg} src={bell} alt="" />
				</button>
				<button className={classes.toolItem}>
					<img className={classes.toolItemImg} src={gear} alt="" />
				</button>
				<button className={classes.toolItem}>
					<img className={classes.toolItemImg} src={groups} alt="" />
				</button>
			</div>
		</div>
	);
};
