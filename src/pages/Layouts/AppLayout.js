import React from "react";
import { Children } from "react";

export default function AppLayout({children})
{
    return (<div className="app_layout">{children}</div>);
}
