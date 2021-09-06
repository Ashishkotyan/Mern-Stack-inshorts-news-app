import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import  { Menu } from '@material-ui/icons';

const useStyle = makeStyles({
    header: {
        background:'#fff',
        height: 70,
        
        
    },
    menu:{
        color:'black'
    },

    logo: {
        height:55,
        margin:'auto',
        paddingRight:70
    },
})

const Header = () => {
    const classes = useStyle();

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    
    return(
        <>
        <AppBar className = {classes.header}>
            <Toolbar>
            
            <Menu  className={classes.menu} />
            <img src ={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
        </>
    )
}
 export default Header