import React,{ useState } from "react";
import {FcGlobe} from 'react-icons/fc';
import style from "../../style/bottomSheet.module.css"
export default function StartRoom(props)
{
    const [room,setRoom] = useState("open");
    return(
        <>
            <div className={style.Switch_Line}></div>
            <div className='text-right'>
                <button className={style.addTopicBtn}> + Add a topic </button>
            </div>
   
            <div className={style.selectRoom}>
                <button className={room==="open" ? style.active : ""}
                onClick={ ()=> setRoom('open')}>
                    <div>
                        <FcGlobe/>
                    </div>
                    Open
                </button>

                <button className={room==='social'?style.active:""}
                    onClick={ ()=> setRoom("social")}
                >
                    <div>
                        <FcGlobe/>
                    </div>
                    social
                </button>
            

                <button className={room==='closed'?style.active:""}
                    onClick={ ()=> setRoom("closed")}
                >
                    <div>
                        <FcGlobe/>
                    </div>
                    closed
                </button>
            </div>
            
            <div className={style.bottomSheetContainer}>
            <p>Start room <span>{
                    room === 'closed' 
                        ? 'for people i choose'
                        : room === 'social'
                        ? 'with people I follow' 
                        : 'open to everyone'
                    }</span> 
            </p>
            </div>

            <div className="text-center" style={{paddingBottom:'1em'}}>
                <button 
                        className={style.letGoBtn}
                        onClick={ ()=> {
                            props.setSheetCreateRoom(true);
                            props.setSheetVisible(true);
                         } }
                    > 
                    Let's go
                </button>
            </div>

        </>
        );
}

