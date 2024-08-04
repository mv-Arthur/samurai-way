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

import bird1 from "./images/bird1.webp";
import bird2 from "./images/bird2.webp";
import bird3 from "./images/bird3.webp";
import bird4 from "./images/bird4.webp";

import avatar from "./images/avatar.jpg";
import women from "../../images/women.jpg";
import love from "./icons/love.png";
import like from "./icons/like.png";
import wow from "./icons/wow.png";

import comment from "./icons/comment.svg";
import share from "./icons/share.svg";

import dots from "./icons/dots.svg";

import logo from "./icons/logo-white.svg";

import documents from "./icons/documents.svg";
import pictures from "./icons/pictures.svg";
import audios from "./icons/audios.svg";
import videos from "./icons/videos.svg";
import send from "./icons/send.svg";

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
                    <div className={classes.form}>
                         <div className={classes.formWrapperControl}>
                              <img className={classes.formAvatar} src={women} alt="" />
                              <div className={classes.formItem}>
                                   <img src={pictures} alt="" />
                                   Photos
                              </div>
                              <div className={classes.formItem}>
                                   <img src={audios} alt="" />
                                   Audios
                              </div>
                              <div className={classes.formItem}>
                                   <img src={videos} alt="" />
                                   Videos
                              </div>
                              <div className={classes.formItem}>
                                   <img src={documents} alt="" />
                                   Documents
                              </div>
                         </div>
                         <form>
                              <textarea
                                   placeholder="What's on your mind Marvin?"
                                   style={{ width: "100%" }}
                              />
                              <button>
                                   <span>POST</span>
                                   <img src={send} alt="" />
                              </button>
                         </form>
                    </div>
                    <div className={classes.post}>
                         <div className={classes.autor}>
                              <div className={classes.autorWrapper}>
                                   <img className={classes.avatar} src={avatar} alt="" />
                                   <div className={classes.autorDescription}>
                                        <div className={classes.autorNameLine}>
                                             <div className={classes.autorName}> Aaron Jones</div>
                                             <div className={classes.autorStatus}>
                                                  posted an update
                                             </div>
                                        </div>
                                        <div className={classes.time}>7 month ago</div>
                                   </div>
                              </div>
                              <button className={classes.otherBtn}>
                                   <img src={dots} alt="" />
                              </button>
                         </div>
                         <div className={classes.content}>
                              <span className={classes.contentDescription}>
                                   The bird is the word
                              </span>
                              <div className={classes.contentImages}>
                                   <img src={bird1} alt="" />
                                   <img src={bird2} alt="" />
                                   <img src={bird3} alt="" />
                                   <img src={bird4} alt="" />
                              </div>
                         </div>
                         <div className={classes.actions}>
                              <div className={classes.reactions}>
                                   <div className={classes.reactionsIco}>
                                        <img src={like} alt="" />
                                        <img
                                             src={wow}
                                             alt=""
                                             style={{ transform: "translate(-10px)", zIndex: "1" }}
                                        />
                                        <img
                                             src={love}
                                             alt=""
                                             style={{ transform: "translate(-20px)", zIndex: "2" }}
                                        />
                                   </div>
                                   <div className={classes.reactionsDescription}>
                                        Reacted by <strong>Marvin McKinney</strong> And 2{" "}
                                        <strong>Others</strong>
                                   </div>
                              </div>
                              <div className={classes.control}>
                                   <div className={classes.controllItemWrapper}>
                                        <div className={classes.controlItem}>
                                             <img src={like} alt="" />
                                             <span>Like</span>
                                        </div>
                                        <div className={classes.controlItem}>
                                             <img src={comment} alt="" />
                                             <span>Comment</span>
                                        </div>
                                   </div>
                                   <div className={classes.share}>
                                        <img src={share} alt="" />
                                        <span className={classes.shareText}>Share</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className={classes.rightBar}>
                    <div className={classes.activeUsers}>
                         <div className={classes.fLine}>Active User</div>
                         <div className={classes.nLine}>There are no recently active members</div>
                    </div>
                    <div className={classes.latestActive}>
                         <div className={classes.latestHeader}>Latest Activities</div>
                         <div className={classes.latestWrapper}>
                              <div className={classes.latestItem}>
                                   <img src={second} alt="" />
                                   <div className={classes.latestItemWrapper}>
                                        <div className={classes.latestName}>Jenny Wilson</div>
                                        <div className={classes.latestTime}>3 months ago</div>
                                   </div>
                                   <div className={classes.latestStatus}>posted an update</div>
                              </div>
                              <div className={classes.latestItem}>
                                   <img src={third} alt="" />
                                   <div className={classes.latestItemWrapper}>
                                        <div className={classes.latestName}>Robert Fox</div>
                                        <div className={classes.latestTime}>8 months ago</div>
                                   </div>
                                   <div className={classes.latestStatus}>posted an update</div>
                              </div>
                              <div className={classes.latestItem}>
                                   <img src={fourth} alt="" />
                                   <div className={classes.latestItemWrapper}>
                                        <div className={classes.latestName}>Freya Davies</div>
                                        <div className={classes.latestTime}>8 months ago</div>
                                   </div>
                                   <div className={classes.latestStatus}>posted an update</div>
                              </div>
                              <div className={classes.latestItem}>
                                   <img src={first} alt="" />
                                   <div className={classes.latestItemWrapper}>
                                        <div className={classes.latestName}>Felix Deo</div>
                                        <div className={classes.latestTime}>3 months ago</div>
                                   </div>
                                   <div className={classes.latestStatus}>posted an update</div>
                              </div>
                              <div className={classes.latestItem}>
                                   <img src={fivth} alt="" />
                                   <div className={classes.latestItemWrapper}>
                                        <div className={classes.latestName}>Aaron Jones</div>
                                        <div className={classes.latestTime}>4 months ago</div>
                                   </div>
                                   <div className={classes.latestStatus}>posted an update</div>
                              </div>
                         </div>
                    </div>
                    <div className={classes.social}>
                         <img src={logo} alt="" />
                         <div className={classes.socialDescr}>
                              Feel free to reach us anytime. we are
                              <br /> avaliable 24 hours
                         </div>
                         <button className={classes.socialButton}>CONTACT US</button>
                    </div>
               </div>
          </div>
     );
};
