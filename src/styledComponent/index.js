import styled from "styled-components";
export const Title=styled.h1`
font-Size:50px;
color:red;
user-select:none;
font-family: 'Libre Baskerville', serif;

`
export const AutoContent=styled.div`
position:relative;
height:50px;

`

export const AutoContentChild=styled.div`
position:absolute;
width:25%;
left:37.5%;
height:100%;
`
export const AutoCompleteInput=styled.input`
height: 100%;
outline: none;
width:100%;
margin:0;
line-height:40px;
font-size: 30px;
padding:0;
}

`


export const AutoContentULChild=styled.div`
display:block;
position:absolute;
top:38px;
width:25.22%;
left:37.53%;
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),

border-bottom:1px solid black;
z-index:100;
`
export const  ULContent=styled.ul`
background-color:white;

padding:0;
padding-top:1px;
width:100%;
`

export const  LIContent=styled.li`

font-size:20px;

list-style:none;
&:hover{
    background-color: #f2f2f2;
    cursor:pointer;
}
`

export const TopRatedMovie=styled.h1`
color:red;
user-select:none;

float:left;
`

export const FooterElement=styled.div`
 background-color: white;
`