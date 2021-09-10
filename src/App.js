import { Box, makeStyles } from '@material-ui/core'


//Components
import Header from './components/Header';
import Infoheader from './components/infoheader';
import Articles from './components/Articals';

const useStyle = makeStyles(theme => ({
  constainer: {
    marginTop: 110,
    width:'59%',
    margin:'0 auto',
    [theme.breakpoints.down('md')] : {
      width:'75%',
      
    },
    [theme.breakpoints.down('sm')] : {
      width:'85%',
      
    }
  }

}))

function App() {

  const classes = useStyle();
  return (
    <Box>
      <Header />
      <Box className = {classes.constainer}>
        <Infoheader />
        <Articles/>
      </Box>
    </Box>
  );
}

export default App;
