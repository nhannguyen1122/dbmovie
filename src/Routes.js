import React from "react";
import HomeContainer from "./redux/container/HomeContainer";
import NotFound from "./component/404notfound/404";
import MovieDetailsContainer from "./redux/container/MovieDetailsContainer";

import AuthenticationContainer from "./redux/container/AuthenticationContainer";
import TopRatedMovieContainer from "./redux/container/TopRatedMovieContainer";
import FlistContainer from "./redux/container/FlistContainer";
import ModalContainer from "./redux/container/ModalContainer";
export const Routes=[
{
    path:"/homepage",
    exact:true,
    component:()=><><HomeContainer /><ModalContainer/></>
},
{
    path:"/authentication",
    exact:true,
    component:()=><><AuthenticationContainer/></>
}
,
{
    path:"/details/:id",
    exact:true,
    component:({match})=><><MovieDetailsContainer match={match}/><ModalContainer/></>
}
,
{
    path:"/topratemovie",
    exact:true,
    component:()=><><TopRatedMovieContainer/><ModalContainer/></>
}
,
{
    path:'/flist/:username',
    exact:true,
    component:()=><><FlistContainer/><ModalContainer/></>
},
{
    path: "/*",
    exact:true,
    component:()=><NotFound/>
}

]