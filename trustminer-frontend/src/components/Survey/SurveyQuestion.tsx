import React, {Dispatch, SetStateAction, useState} from "react";
import {Grid, IconButton, TextField, Typography} from "@material-ui/core";
import {surveyTexts} from "../../util/survey_util";
import {Check, ExitToApp} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

interface QuestionProps {
    index: number,
    correctAnswer: number,
    setCompletedCount: Dispatch<SetStateAction<number>>,
    answeredCount: number
}

export default function SurveyQuestion(props: QuestionProps) {
    const {index, correctAnswer, setCompletedCount, answeredCount} = props
    const [answerCorrect, setAnswerCorrect] = useState(false)
    const [answerSubmitted, setAnswerSubmitted] = useState(0)
    const [answer, setAnswer] = useState<number | undefined>()

    function submitAnswer() {
        setAnswerSubmitted(prevState => prevState + 1)
        setAnswerCorrect(answer === correctAnswer)
        if (correctAnswer === answer) {
            setCompletedCount(prevState => prevState + 1)
        }
    }

    return <>
        <Typography style={{marginBottom: "10px"}}>
            {surveyTexts[index]}
        </Typography>
        {answerCorrect || index - answeredCount < 2 ?
            <Grid container alignItems="center" justify="space-evenly" direction="row">
                <Typography variant="button" display="block">
                    COMPLETED
                </Typography>
                <Check style={{color: green[500]}}/>
            </Grid>
            :
            <Grid container alignItems="center" justify="space-evenly" direction="row">
                <TextField
                    value={answer}
                    onChange={(event) =>
                        setAnswer(parseInt(event.target.value))}
                    error={!answerCorrect && answerSubmitted > 0}
                    id="amount"
                    label="Amount"
                    type="number"
                    style={{width: "75%"}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <IconButton onClick={submitAnswer}>
                    <ExitToApp color="primary"/>
                </IconButton>
            </Grid>
        }
    </>
}