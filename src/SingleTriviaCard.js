import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme)=>({
    root: {
        width: '50vw',
        margin: 'auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const SingleTriviaCard=()=>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [state,setState]=useState({
        "question": "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        "incorrect": ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
        "correct": "Et tu, Brute?"
    })
    return (
        <Card className={classes.root} style={{alignSelf:'center'}}>
            <CardContent>

                <form onSubmit={()=>{}}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">{state.question}</FormLabel>
                        {/*TODO randomize the answerChoice*/}
                        <RadioGroup aria-label="quiz" name="quiz" >
                            {
                                state.incorrect.map((incorrectAnswer)=>{
                                    return(<FormControlLabel key = {incorrectAnswer} value={incorrectAnswer} control={<Radio />} label={incorrectAnswer}/>)
                                })
                            }
                        </RadioGroup>
                        <FormHelperText>{}</FormHelperText>
                        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                            Check Answer
                        </Button>
                    </FormControl>
                </form>
            </CardContent>
        </Card>
    );
}

export default  SingleTriviaCard