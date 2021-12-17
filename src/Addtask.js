import TextField from '@material-ui/core/TextField';
import {
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { KeyboardArrowRight } from '@material-ui/icons';
import { FormLabel, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const useStyles = makeStyles({
  field: {
    display: 'block',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  radiogroup: {
    marginRight: 500,
  },
  buttonstyle: {
    color: 'rgb(252, 252, 252)',
    backgroundColor: 'rgb(255, 151, 65)',
    borderRadius: 5,
    marginTop: 30,
  },
  radioButton: {
    color: "default"
  },
  container:{
      marginRight: 'auto',
      marginLeft: 'auto'
  }
});
const Addtask = () => {
  const classes = useStyles();
  const history = useHistory();
  const [task, setTask] = useState('');
  const [taskError, setTaskError] = useState(false);
  const [status, setStatus] = useState('urgent');
  const submitHandler = (e) => {
    e.preventDefault();
    setTaskError(false);
    if (task === '') {
      setTaskError(true);
    }
    if (task) {
      fetch('http://localhost:8000/mylist', {
        method: 'Post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ task, status }),
      }).then(() => history.push('/'));
    }
  };

  return (
    <Container className={classes.container}>
      <nav className="navbar">
        <Typography variant="h3" className="typography">
          Todo List
        </Typography>
        <div className="links">
          <a href="/">Home</a>
          <a style={{ backgroundColor: '#ccc' }} href="/Addtask">
            Add Task
          </a>
        </div>
      </nav>
      <form
        onSubmit={submitHandler}
        style={{
          backgroundColor: 'rgb(252, 252, 252)',
          maxWidth: 600,
          display: 'block',
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 20,
          border: '1px solid rgb(255, 151, 65)',
          borderRadius: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <FormLabel>Tasks</FormLabel>
          <TextField
            onChange={(e) => setTask(e.target.value)}
            className={classes.field}
            label="Task"
            variant="outlined"
            color="primary"
            required
            fullWidth
            error={taskError}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            className={classes.radiogroup}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <FormControlLabel
              value="urgent"
              control={<Radio color='default' />}
              label="urgent"
            />
            <FormControlLabel
              value="normal"
              control={<Radio color='default' />}
              label="normal"
            />
            <FormControlLabel
              value="unimportant"
              control={<Radio color='default' />}
              label="unimportant"
            />
          </RadioGroup>
        </FormControl>
        <Button
          className={classes.buttonstyle}
          endIcon={<KeyboardArrowRight />}
          type="submit"
        >
          Submit
        </Button>
      </form>
      </Container>
  );
};

export default Addtask;
