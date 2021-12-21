import React from "react";
import { Link } from "react-router-dom";
import style from'../style/header.module.css';

export default function Header()
{
    return(
            <div className={style.Header}>
                <Link exact to='/explore'>
                    <img src="Images/search.png" alt="search"/>
                </Link>
                <div className={style.nav_items}>
                    <Link className={style.invite} exact to='/home'>
                        <img src="Images/invite.png"/>
                    </Link>

                    <Link className={style.calender} exact to='/home'>
                        <img src="Images/calender.png"/>
                    </Link>

                    <Link className={style.notification} exact to='/home'>
                        <img src="Images/notification.png"/>
                    </Link>

                    <Link className={style.profile_icon} exact to='/profile'>
                        <img src="Images/images.jpg"/>
                    </Link> 
                </div>               
            </div>
        );

}