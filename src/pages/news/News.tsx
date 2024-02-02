import first from "./icons/1.png";
import second from "./icons/2.jpg";
import third from "./icons/3.jpg";
import fourth from "./icons/4.jpg";
import fivth from "./icons/5.jpg";
import sixth from "./icons/6.png";

import first1 from "./images/1.webp";
import second2 from "./images/2.webp";
import third3 from "./images/3.webp";
import fourth4 from "./images/4.webp";
import fivth5 from "./images/5.webp";
import sixth6 from "./images/6.webp";

import React from "react";
import classes from "./news.module.css";

export const News = () => {
	const storiesRef = React.useRef<null | HTMLDivElement>(null);
	const onWeelHandler = (event: React.WheelEvent<HTMLDivElement>) => {
		if (storiesRef.current) {
			let modifier = null;
			if (event.nativeEvent.deltaMode === event.nativeEvent.DOM_DELTA_PIXEL) {
				modifier = 1;
			} else if (event.deltaMode === event.nativeEvent.DOM_DELTA_LINE) {
				modifier = parseInt(getComputedStyle(storiesRef.current).lineHeight);
			} else if (event.nativeEvent.deltaMode === event.nativeEvent.DOM_DELTA_PAGE) {
				modifier = storiesRef.current["clientHeight"];
			}
			if (event.deltaY !== 0) {
				if (modifier) {
					storiesRef.current["scrollLeft"] += modifier * event.nativeEvent["deltaY"];
				}
			}
		}
	};

	return (
		<div className={classes.news}>
			<div ref={storiesRef} className={classes.stories} onWheel={onWeelHandler}>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={first1} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={first} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Felix Deo</div>
				</div>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={second2} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={second} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Freya Davies</div>
				</div>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={third3} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={third} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Robert Fox</div>
				</div>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={fourth4} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={fourth} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Leslie Alexander</div>
				</div>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={fivth5} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={fivth} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Aaron Jones</div>
				</div>
				<div className={classes.story}>
					<div className={classes.storyWrap}>
						<img className={classes.mainImg} src={sixth6} alt="" />
						<div className={classes.ico}>
							<img className={classes.icoImg} src={sixth} alt="" />
						</div>
					</div>
					<div className={classes.storyDescr}>Jerry Willioms</div>
				</div>
			</div>
			<div className={classes.posts}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque commodi eaque
				possimus repellat enim eos, dolores officiis inventore placeat. Quibusdam omnis
				dignissimos similique iste magnam harum voluptatibus dolores voluptates!
			</div>
			<div className={classes.rightBar}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, cupiditate nulla qui
				perspiciatis consequatur illo tempora labore fugit libero optio, officia ipsa debitis
				laboriosam animi quisquam voluptate facilis neque fugiat?
			</div>
		</div>
	);
};
