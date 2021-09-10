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
     Type_menu: {
        color:'black',
        marginBottom:40,
        marginLeft:5,
        fontFamily: 'Roboto sans-serif',
        fontWeight: 300,
        fontSize:20,
        color:'#44444d'
    
    }
})

const Header = () => {
    const classes = useStyle();

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    
    return(
        <>
        <AppBar className = {classes.header}>
            <Toolbar>
            
            <Menu  className={classes.menu} /> <p className={classes.Type_menu}>Menu</p>
            <img src ={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
        </>
    )
}
 export default Header
