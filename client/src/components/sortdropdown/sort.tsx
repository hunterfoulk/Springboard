import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 70,
            height: 50,
            fontSize: "10px",
            padding: "0px",


        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            padding: "0px",
            // backgroundColor: "green",
            height: 20,
            fontSize: "14px"
        },
    }),
);

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (

        <FormControl className={classes.formControl}>
            <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
            >
                <option value="">New</option>
                <option value={10}>Top</option>
                <option value={20}>Old</option>
            </NativeSelect>
            <FormHelperText>Sort by</FormHelperText>
        </FormControl>
    )
}