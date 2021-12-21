import React from "react";
import style from "../style/PhoneConformation.module.css";
import { Link } from "react-router-dom";

export default function codeConfirm()
{
    return(
        <div className={style.PhoneConfirContainer}>
            <Link exact to='/get_username' className={style.backBtn}>
                <img src="/Images/back-arrow-0.png" alt="arrow-img"/>
            </Link>
            <div className="text-center">
                <h1 style={{width:'100%',maxWidth:"200px",marginBottom:'1em'}}>Enter the code we just texted you</h1>

                <input type='text' style={{width:"100%",border:"none",textAlign:"center",outline:"none"}}/>
                <p className='mt-2'>Didn't receive it? <span>Tap to resend.</span></p>
            </div>

            <Link exact to="/allow_notification" className="primaryBtn d-flex align-items-center">Next

            </Link>
        </div>
    );
}