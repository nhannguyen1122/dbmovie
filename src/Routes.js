import React from "react";
import HomeContainer from "./redux/container/HomeContainer";
import NotFound from "./component/404notfound/404";
import MovieDetailsContainer from "./redux/container/MovieDetailsContainer";

import AuthenticationContainer from "./redux/container/AuthenticationContainer";
import TopRatedMovieContainer from "./redux/container/TopRatedMovieContainer";
export const Routes=[
{
    path:"/homepage",
    exact:true,
    component:()=><HomeContainer />
},
{
    path:"/authentication",
    exact:true,
    component:()=><AuthenticationContainer/>
}
,
{
    path:"/details/:id",
    exact:true,
    component:()=><MovieDetailsContainer />
}
,
{
    path:"/topratemovie",
    exact:true,
    component:()=><TopRatedMovieContainer/>
}
,
{
    path: "*",
    exact:true,
    component:()=><NotFound/>
}

]