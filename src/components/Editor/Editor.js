import React from 'react';
import styles from './Editor.css'
import { EditorContent } from './EditorContent'

const getValue = (e) => {
    const title = document.getElementById('title')
    console.log(title.innerText)
}

export const Editor = ({
    
}) => (
    <div className={`${styles["editor"]} row`}>
        <div className="col-md-8">
            <div
               className={`${styles["title-space"]} no-focus`}
               contentEditable={true}
               id="title"
               placeholder="Title here..."
               onKeyDown={(e) => getValue(e)} >Title here...
            </div>
            <div 
                className={`${styles["content-space"]} no-focus`}
                contentEditable={true}
                id="content"
                placeholder="Review here..." >Review here...
            </div>
        </div>
        <div className="col-md-4">

        </div>
    </div>
)

export default Editor