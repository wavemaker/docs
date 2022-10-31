import React, { useEffect } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Feedback({ resource }) {
    if (!ExecutionEnvironment.canUseDOM) {
        return null
    }
    const { siteConfig } = useDocusaurusContext();

    useEffect(() => {
        window.HappyReact.init()
    }, [])
    console.log(siteConfig.themeConfig.happyreact.token)
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Was this page helpful?</h3>
            <div
                className={styles.widget}
                data-hr-token={siteConfig.themeConfig.happyreact.token}
                data-hr-resource={resource}
            />
        </div>
    )
}