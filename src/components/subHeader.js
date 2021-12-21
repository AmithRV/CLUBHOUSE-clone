import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import style from "../style/explore.module.css";

export default function SubHeader(props)
{
    return(
        <div className={style.head}>
            <Link to="/home">
                <img src="/Images/back-arrow-0.png"/>
            </Link>
            <h3>{props.pageTitle}</h3>
        </div>
    );
}
