import React from "react";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPaperclip, BsPlus, BsUpload } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";

export default function Profile()
{
    return(
            <>
                <div className={style.ProfileContainer}>
                    <div className={exploreStyle.header}>
                        <div className={style.head} text-right mb-0>
                            <Link to='/home'>
                                <img src='Images/back-arrow-0.png' alt="back-arrow" className={exploreStyle.arrow_icon}/>
                            </Link>
                            <div className={style.actionBtn}>
                                <BsAt/>
                                <BsUpload/>
                                <AiOutlineSetting/>
                            </div>
                        </div>
                    </div>
                    <img src="Images/profile_image1.jpg" alt="profile image" className={style.profile_image}/>
                    <h4>Rafeh Qazi</h4>
                    <p>@cleverqas</p>
                    <div className={style.follow}>
                        <p>
                            <span>0</span> followers
                        </p>
                        <p>
                            <span>51</span> following
                        </p>
                    </div>
                    <button>Add a bio</button>
                    <div className='mb-4'>
                         <button className='mb-0'>
                            <AiOutlineTwitter/> Add Twitter
                         </button>

                         <button className='mb-0'>
                            <AiOutlineInstagram/> Add Twitter
                         </button>
                    </div>

                    <div className={style.nominated}>
                        <img src="Images/profile_image1.jpg" alt="profile image"/>
                        <div>
                            <p>Joined 14-Jul-2022</p>
                            <p>Nominated by <span>Anton Alarcon</span></p>
                        </div>
                    </div>
                    <p>Member of</p>
                    <button className={style.addMemberBtn}>
                        <BsPlus/>
                    </button>
                </div>
            </>
        );
}