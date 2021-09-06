import { Box, makeStyles } from '@material-ui/core'


//Components
import Header from './components/Header';
import Infoheader from './components/infoheader';

const useStyle = makeStyles({
  constainer: {
    marginTop: 110,
    width:'59%',
    margin:'0 auto'
  }

})

function App() {

  const classes = useStyle();
  return (
    <Box>
      <Header />
      <Box className = {classes.constainer}>
        <Infoheader />
      </Box>
    </Box>
  );
}

export default App;
