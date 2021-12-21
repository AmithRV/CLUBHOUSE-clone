import React from "react";
import style from "../style/Welcome.module.css"
import {Link} from "react-router-dom";

export default function Welcome()
{
    return(<div className={style.WelcomeContainer}>
                <h1>Welcome!</h1>
                <div className={style.WelcomeInfo}>
                    <p>
                        We are working hard to get clubhouse ready for everyone! While we wrap 
                        up the finishing touches, we're addig people gradually to make sure 
                        nothing breaks. 
                        <br/><br/>
                        Anyone can join with an invitation from an existing user or reserver your 
                        username and we'll text you if you have a friend on the app who can 
                        let you in. We are so grateful you're here and can't wait to have you 
                        join!
                        <br/><br/>                 
                        Paul, Rohan & the Clubhouse team
                    </p>
                </div>

                <div className={style.actionBtn}>
                    <Link exact 
                            to='/invite' 
                            className='primaryBtn d-flex align-items-center mb-3'>
                    Get your username{''}            
                    </Link>
                    <br/>
                    <Link>Have an invite text? Sign in</Link>
                </div>
            </div>
        );
}