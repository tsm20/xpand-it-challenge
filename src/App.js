
import List from "./components/List"
import Title from './components/Title';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import vars from "./styles/vars";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    height: "50px",
    background: vars.darkBlue,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.appBar} />
      <Container maxWidth="md" disableGutters>
        <Title />
        <List />
      </Container>
    </div>
  );
}

export default App;
