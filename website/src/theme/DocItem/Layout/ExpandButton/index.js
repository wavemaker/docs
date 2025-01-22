import React from'react';
import './styles.css';
export default function ExpandButton ({toggeleShowDesktopTOC,showDesktopTOC }) {
    return (
        <div onClick={toggeleShowDesktopTOC} className={`showDesktopTOCButton ${showDesktopTOC?'showDesktopTOCButtonCollapse':'showDesktopTOCButtonExpand'}`}>
            <svg width="20" height="20" aria-hidden="true" style={{transform: 'scale(0.75)'}}><g fill="var(--ifm-color-primary)"><path d="M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"></path><path d="M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"></path></g></svg>
        </div>
    )
}