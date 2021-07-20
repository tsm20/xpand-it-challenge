import './App.css';
import List from "./components/List"
import Title from './components/Title';
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1024px",
    margin: "0 auto",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container maxWidth="md" disableGutters>
        <Title />
        <List />
      </Container>
    </div>
  );
}

export default App;
