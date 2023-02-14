import React from "react";

export default function Article({title, date="January 1, 1970", preview, minutes}){
    let mins = 0;
    let emoji = "";

    if(minutes <= 30){
        mins = Math.ceil(minutes/5)*5
        for (let i = 0; i < mins; i+=5) {
            emoji +="☕";
        }
    }else {
        mins = Math.ceil(minutes/10)*10
        for (let i = 0; i < mins; i+=10) {
            emoji +="🍱";
        }
    }
    console.log(mins)
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}.
                {emoji}
                {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}