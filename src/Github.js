import "./Github.css";
import { GoMarkGithub, GoBell, GoPlusSmall, GoSmiley, GoArrowSmallDown, GoCode, GoGitPullRequest, GoBook, GoGitBranch, GoTag, GoRepoForked } from "react-icons/go";
import { AiOutlineBook, AiOutlineFork, AiOutlineStar, AiOutlineSetting } from "react-icons/ai";
import { TiPinOutline, TiEye } from "react-icons/ti";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { FiPlayCircle, FiSettings } from "react-icons/fi";
import { BiBookAlt, BiDownArrow } from "react-icons/bi";
import { HiShieldExclamation } from "react-icons/hi";
import { BsBook, BsGraphUp } from "react-icons/bs";

import taseer from "./assets/meh.jpeg";

export default function Github() {
    return (
        <div className="outer">
            <nav className="nav">
                <div className="nav-left">
                    <div className="left">
                        <a href="#" className="left-a">
                            <GoMarkGithub /> 
                        </a>
                    </div>
                    <div className="right">
                        <input className="right-input" placeholder="Search or jump to..." />
                        <span className="right-span">/</span>
                    </div>
                    <div className="right-two">
                        <ul className="nav-right-ul">
                            <li className="n-r-li">Pull requests</li>
                            <li className="n-r-li">Issues</li>
                            <li className="n-r-li">Marcket place</li>
                            <li className="n-r-li">Explore</li>
                        </ul>
                    </div>
                </div>
                
                <div className="nav-right">
                    <div className="right-one">
                        <a href="#" className="r-a">
                            <GoBell />
                        </a>
                    </div>
                    <div className="right-two">
                        <a href="#" className="r-a r-a-plus">
                            <GoPlusSmall />
                        </a>
                    </div>
                    <div className="right-three">
                        <a href="#" className="r-a">
                            <GoSmiley />
                        </a>
                    </div>
                </div>
            </nav>

            <section>
                <div className="section-one-outer-container">
                    <div className="section-one-left-container">
                        <a href="#" className="b">
                            <AiOutlineBook />
                        </a>
                        <span className="section-one-span">Taseeeer / <span className="section-one-inner-span">react-code</span></span>
                        <span className="section-one-span-public">Public</span>
                    </div>

                    <div className="section-one-right-container">
                        <ul className="section-one-right-ul">
                            <li className="section-one-right-li" >
                                <a href="#">
                                    <TiPinOutline />
                                </a>
                                <span>&nbsp;</span>
                                <span>Pin</span>
                            </li>
                            <li className="section-one-right-li" >
                                <a href="#">
                                    <TiEye />
                                </a>
                                <span>&nbsp;</span>
                                <span>Unwatch <span className="li-inner-span">1</span></span>
                            </li>
                            <li className="section-one-right-li" >
                                <a href="#">
                                    <AiOutlineFork />
                                </a>
                                <span>&nbsp;</span>
                                <span>Fork <span className="li-inner-span">0</span></span>
                            </li>
                            <li className="section-one-right-li" >
                                <a href="#">
                                    <AiOutlineStar />
                                </a>
                                <span>&nbsp;</span>
                                <span>Star <span className="li-inner-span">5</span></span>
                                <span className="li-downarrow">
                                    <GoArrowSmallDown />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="s-two">
                <div className="section-two">
                    <ul className="section-two-ul">
                        <li className="section-two-li section-two-li-code">
                            <GoCode />
                            <span>&nbsp;</span>
                            <span>Code</span>
                        </li>
                        <li className="section-two-li">
                            <VscCircleLargeOutline />
                            <span>&nbsp;</span>
                            <span>Issues</span>
                        </li>
                        <li className="section-two-li">
                            <GoGitPullRequest />
                            <span>&nbsp;</span>
                            <span>Pull requests</span>
                        </li>
                        <li className="section-two-li">
                            <FiPlayCircle />
                            <span>&nbsp;</span>
                            <span>Actions</span>
                        </li>
                        <li className="section-two-li">
                            <BiBookAlt />
                            <span>&nbsp;</span>
                            <span>Projects</span>
                        </li>
                        <li className="section-two-li">
                            <GoBook />
                            <span>&nbsp;</span>
                            <span>Wiki</span>
                        </li>
                        <li className="section-two-li">
                            <HiShieldExclamation />
                            <span>&nbsp;</span>
                            <span>Security</span>
                        </li>
                        <li className="section-two-li">
                            <BsGraphUp />
                            <span>&nbsp;</span>
                            <span>Insights</span>
                        </li>
                        <li className="section-two-li">
                            <AiOutlineSetting />
                            <span>&nbsp;</span>
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="section-three-outer-container">
                    <div className="section-three-left">
                        <div className="section-three-one">
                            <div className="s-t-left">
                                <ul className="s-t-left-ul">
                                    <li className="s-t-left-li master-li">
                                        <GoGitBranch />
                                        <span>&nbsp;</span>
                                        <span>master</span>
                                        <span>&nbsp;</span>
                                        <BiDownArrow style={{fontSize: '10px'}} />
                                    </li>
                                    <li className="s-t-left-li">
                                        <GoGitBranch />
                                        <span>&nbsp;</span>
                                        <span>1 branch</span>
                                    </li>
                                    <li className="s-t-left-li">
                                        <GoTag />
                                        <span>&nbsp;</span>
                                        <span>0 tags</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="s-t-right">
                                <ul className="s-t-right-ul">
                                    <li className="s-t-right-li">
                                        <span>Go to file</span>
                                        <span>&nbsp;</span>
                                        <BiDownArrow style={{fontSize: '10px'}} />
                                    </li>
                                    <li className="s-t-right-li">
                                        <span>Add file</span>
                                        <span>&nbsp;</span>
                                        <BiDownArrow style={{fontSize: '10px'}} />
                                    </li>
                                    <li className="s-t-right-li code-li">
                                        <span>Code</span>
                                        <span>&nbsp;</span>
                                        <BiDownArrow style={{fontSize: '10px'}} />
                                    </li>
                                </ul>
                            </div>
                            <div className="s-t-right"></div>
                        </div>
                        <div className="section-three-two">
                            <ul className="s-t-t-ul"> 
                                <li className="s-t-t-li profile-li one-li o-l">
                                    <div className="s-t-t-icon-public">
                                        <span className="s-t-t-icon">
                                            <img src={taseer} className="s-t-t-img" alt="taseer" />
                                        </span>
                                        <span className="s-t-t-public" style={{fontWeight: "500"}}>Taseeeer</span>
                                    </div>
                                    <div className="s-t-t-info" style={{marginLeft: "-12px"}}>Intialize your project with react</div>
                                    <div className="s-t-t-time">8 months ago</div>
                                </li>
                                {[0,1,3,4,5,6].map((theLi, index) => (
                                <li className={`s-t-t-li ${index === 0 ? "one-li" : ""} ${index === 5 ? "last-li" : ""}`} >
                                    <div className="s-t-t-icon-public">
                                        <span className="s-t-t-icon">icon</span>
                                        <span className="s-t-t-public">public</span>
                                    </div>
                                    <div className="s-t-t-info">Intialize your project with react</div>
                                    <div className="s-t-t-time">8 months ago</div>
                                </li>
                                ))} 
                            </ul>
                        </div>
                        <div className="section-three-three"></div>
                    </div>

                    <div className="section-three-right">
                        <div className="s-t-r-one">
                            <span>About</span>
                            <FiSettings />
                        </div>
                        <div className="s-t-r-two">
                            <span>A basic todo list in JavaScript</span>
                            <span className="s-t-r-two-inner">
                                <span>
                                    <AiOutlineStar />
                                </span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>
                                    0 stars
                                </span>
                            </span>
                            <span className="s-t-r-two-inner">
                                <span>
                                    <TiEye />
                                </span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>
                                    1 watching 
                                </span>
                            </span>
                            <span className="s-t-r-two-inner">
                                <span>
                                    <GoRepoForked />
                                </span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>
                                    0 forks 
                                </span>
                            </span>
                        </div>
                        <div className="s-t-r-three">
                            <span className="s-t-r-three-bold">Realses</span>
                            <span>No releases published</span>
                            <span className="s-t-r-three-inner">Create a new release</span>
                        </div>
                        <div className="s-t-r-four">
                            <span className="s-t-r-three-bold">Packages</span>
                            <span>No packages published</span>
                            <span className="s-t-r-three-inner">Publish your first package</span>
                        </div>
                        <div className="s-t-r-five">
                            <span className="s-t-r-three-bold">Languages</span>
                            <span className="languages-line">
                                <span className="line-one"></span>
                                <span className="line-two"></span>
                                <span className="line-three"></span>
                            </span>
                            <span className="s-t-r-three-inner">Publish your first package</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};