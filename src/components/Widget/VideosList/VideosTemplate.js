import React from 'react';
import styles from './VideosList.css';
import { Link } from 'react-router-dom';
import CardInfo from '../cardinfo/cardinfo';



const VideosTemplate = (props)=>{
    return props.data.map( (item,i)=>(
        <Link to={`/videos/${item}`} key={i}
        >
        <div className={styles.videoListItem_wrapper}>
                <div className={styles.left} style = {{
                    background: `url(/images/videos/${item.image})`,
                }} >
                <div></div>
                </div>
                <div className={styles.right}>
                    <h2>{item.title}</h2>
                </div>
        </div>
        </Link>
     ) )
}

export default VideosTemplate;