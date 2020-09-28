import { red } from "@material-ui/core/colors";

export const styles=(thems)=>({
    Icon1:{
        width:'50px',
        height:'50px',
        color:'red'
    },
    SignIn:{
        border:'none',
        color:'red',
        width:'50px',
        height:'50px',
        marginLeft: '90%',
        fontSize:'70px',
        border:'1px solid black',
       
        borderRadius:'50%',
        "&:hover":{
            backgroundColor:'white'
        }
    }
})