import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./dropdown.scss"
import { GoPlus } from 'react-icons/go';
import useFetch from "../../hooks/useFetch"
import CategoryActions from "../../actions/actions"
import { Link, useHistory } from "react-router-dom";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setState: React.Dispatch<React.SetStateAction<string>>,
  state: string


}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const Dropdown: React.FC<Props> = ({ setOpen, setState, state }) => {
  const classes = useStyles();
  const history = useHistory();



  const onStateChange = async (event: React.ChangeEvent<{ value: string }>) => {


    switch (event.target.value) {
      case '0':
        console.log('all was chosen');
        break;
      case '2':
        console.log('tech was chosen');

        let technology = 'Technology'
        setState(technology)
        console.log("VALUE", event.target.value)

        history.push({
          pathname: `/t/${technology}`,
          state: { category: event.target.value, header: technology, dropdownState: technology },

        });
        break;

      case '1':
        console.log('fitness was chosen');

        let fitness = 'Fitness'
        setState(fitness)

        console.log("VALUE", event.target.value)
        history.push({
          pathname: `/t/${fitness}`,
          state: { category: event.target.value, header: fitness, dropdownState: fitness },

        });
        break;

      case '3':
        console.log('sci was chosen');
        break;

      case '6':
        console.log('finance was chosen');
        break;

      case '4':
        console.log('travel was chosen');
        break;

      case '5':
        console.log('books was chosen');
        break;

      case '7':
        console.log('politics was chosen');
        break;

      default:
        break;
    }


  }

  return (
    <div className="dropdown-container">
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state}
          onChange={onStateChange}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option label="All" value="0">All</option>
          <option label="Technology" value="2">Technology</option>
          <option label="Fitness" value="1">Fitness</option>
          <option label="Science" value="3">Science</option>
          <option label="Finance" value="6">Finance</option>
          <option label="Travel" value="4">Travel</option>
          <option label="Books" value="5">Books</option>
          <option label="Politics" value="7">Politics</option>
        </NativeSelect>
        <FormHelperText>Change Category</FormHelperText>
      </FormControl>
      <button className="new-thread-button" onClick={() => setOpen(true)}>
        <GoPlus style={{ position: "relative", right: "4px" }} /> New Thread
    </button>
    </div>
  );
}
export default Dropdown