import React from 'react';
import styles from './Editor.css'
import { EditorContent } from './EditorContent'

export const Editor = ({
    placeholder="Review here...",
}) => (
    <div className="row">
        <div className="col-md-8">
            <EditorContent 
                placeholder={placeholder} />
        </div>
        <div className="col-md-4">

        </div>
    </div>
)