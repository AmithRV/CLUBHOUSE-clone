import React from 'react';
import {useState} from 'react';
import style from '../../style/roomDetail.module.css';
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai';
import  {BsGrid3X3Gap, BsMicFill, BsMicMuteFill} from 'react-icons/bs';

export default function NewRoom(props)
{   
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemVisible,setItemsVisible] = useState(true)

    const card = props.cardDetail;

    return(
        <div className={style.top}>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className={"d-flex align-item-center"}>
                        <a href="#" onClick={ ()=> {props.setSheetVisible(false)}}>
                            <img src="/Images/back-arrow-0.png" alt="back-arrow-0.png" className={style.arrow_icon}/>
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div >
                        <AiOutlineFile />
                        <img src='/Images/profile_image2.jpg' alt="profile_image.jpg" className={style.profile_img}/>
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap"
                    style={{padding:'0.5em 1em'}}>
                        {
                            card.members.map( (item)=>(
                                <div className={style.memberContainer}>
                                    {micMuteVisible?(<div className={style.audio_icon}>
                                        <BsMicMuteFill/>
                                        </div>
                                    ):("")}

                                    <img src='/Images/profile_image2.jpg' alt='/Images/profile_image2.jpg'/>
                                    <p>
                                        <span>*</span>
                                        {item.first_name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={style.footer}> 
                        <button onClick={ ()=>{props.setSheetVisible(false)} }>
                            <img src="/Images/hand-peace.png"/>
                            Leave Quietly
                        </button>

                        <div>
                            <button>
                                <AiOutlinePlus/>
                            </button>

                            <button>
                                <img src="/Images/stopHandicon.png" className={style.stopHandicon} />
                            </button>

                            <button onClick={ ()=> setMicMuteVisible(!micMuteVisible)}>
                                {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}
