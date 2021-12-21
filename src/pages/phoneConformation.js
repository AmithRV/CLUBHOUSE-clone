import React,{useState} from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../style/PhoneConformation.module.css";

export default function PhoneConformation()
{
    const [value,setValue] = useState();

    return(
        <div className={style.PhoneConfirContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/Images/back-arrow-0.png" className="backBbtn" alt="back-arrow"/>    
            </Link>

            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry="US" value={value} onChange={setValue} />
            <p>
                By entering your number, you're agreeing to our <span>Terms of Service and Privacy Policy. </span><br/>Thanks!
            </p>

            <Link exact to='/code_confirm' className='primaryBtn d-flex align-items-center'>Next</Link>
        </div>
    );
}
