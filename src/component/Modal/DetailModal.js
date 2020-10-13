import { Drawer, makeStyles } from '@material-ui/core';
import { YouTube } from '@material-ui/icons';
import React from 'react';
import { boolean } from 'yup';

const movie={
    popularity: 38.074,
    vote_count: 16078,
    video: false,
    poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    id: 122,
    adult: false,
    backdrop_path: "/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg",
    original_language: "en",
    original_title: "The Lord of the Rings: The Return of the King",
    genre_ids: [
    28,
    12,
    14
    ],
    title: "The Lord of the Rings: The Return of the King",
    vote_average: 8.5,
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    release_date: "2003-12-01"
    }

    const useStyles = makeStyles(theme=>({
        root:{
            margin:'10px',
            width: '45vh'
        }
    }))
const DetailsModal=props=>{
    const{DrawerModalOpenState,closeDetailDrawer}=props;
    console.log(DrawerModalOpenState)
    const classes=useStyles();
    const handleClose = () => {
        closeDetailDrawer();
    }
    return <>
    <Drawer  open={DrawerModalOpenState} anchor='right' onClose={handleClose}>
    
     <div className={classes.root}>
         <button>x</button>
        <h1>{movie.title}</h1>
        <div><span>Release:</span>{movie.release_date}</div>
        <div><span>Poppularity:</span>{movie.popularity}</div>
        <div><span>Vote count:</span>{movie.vote_count}</div>
        <div><span>Poppularity:</span>{movie.popularity}</div>
        <div><span>18+:</span>{movie.adult}</div>
        <div><span>language:</span>{movie.original_language}</div>
        <div><span>vote_avg:</span>{movie.vote_average}</div>

        <img alt='img' style={{width:'100%',height:'45vh'}}src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
        <div>Overview:{movie.overview}</div>
        <div>trailer</div>
        {/* <YouTube videoId={} opts={opts} onReady={_onReady} /> */}
     </div>
    </Drawer>
    </>
}

export default DetailsModal;