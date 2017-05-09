import React from 'react';
import styles from './Editor.css'

export const EditorContent = ({
    placeholder,
}) => (
        <div 
            className={`${styles["content-space"]} no-focus`}
            contentEditable={true}
            id="editable"
            placeholder={placeholder}>
        </div>
)