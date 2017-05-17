import React from 'react';
import styles from './Editor.css'
import { EditorContent } from './EditorContent'

export const Editor = ({
    
}) => (
    <div className={`${styles["editor"]} row`}>
        <div className="col-md-8">
            <div
               className={`${styles["title-space"]} no-focus`}
               contentEditable={true}
               id="title"
               placeholder="Title here..." >
            </div>
            <div 
                className={`${styles["content-space"]} no-focus`}
                contentEditable={true}
                id="content"
                placeholder="Review here..." >
            </div>
        </div>
        <div className="col-md-4">

        </div>
    </div>
)

export default Editor