import React from "react";
import { useState } from 'react';
import "../scss/components/header.scss"

export function header(setTab) {
    return <div className="header">
        <button onClick={()=> setTab('about')}>
            about
        </button>
        <button onClick={()=> setTab('projects')}>
            projects
        </button>
        <button onClick={()=> setTab('contact')}>
            contact
        </button>
    </div>;
}
