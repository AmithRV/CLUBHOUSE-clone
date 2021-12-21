import React from "react";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

export default function BottomSheet(props)
{
    return(
        <SwipeableBottomSheet 
            open={props.sheetVisible}
            onChange={ ()=>
                {
                    props.setSheetVisible(!props.sheetVisible)
                    props.setItemsVisible(true)
                } 
        }
        fullScreen = {props.sheetTitle === 'room details' ? true : false}
    >
        {
            props.sheetTitle === 'new room'
            ?(
                <NewRoom 
                    cardDetail ={props.cardDetail}
                    setSheetVisible={ (item)=>{
                        props.setSheetVisible(item);
                        props.setItemsVisible(true);
                    }}
                />
            )
            :props.sheetTitle === 'start room' 
            ?(
                <StartRoom 
                    setSheetCreateRoom ={props.setSheetCreateRoom}
                    setSheetVisible={ (item)=>{
                        props.setSheetVisible(item);
                        props.setItemsVisible(true);
                    }}
                />
            )
            :('')
        }

    </SwipeableBottomSheet>
    );
}