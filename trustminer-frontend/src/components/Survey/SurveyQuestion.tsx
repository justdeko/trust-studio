import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Grid, IconButton, TextField, Typography} from "@material-ui/core";
import {saveTime, startTimer, surveyTexts, updateSurveyData} from "../../util/survey_util";
import {Check, ExitToApp} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";
import {QUESTION_3, QUESTION_4, QUESTION_5, SURVEY_DATA} from "../../util/constants";

interface QuestionProps {
    index: number,
    correctAnswer: number,
    setCompletedCount: Dispatch<SetStateAction<number>>,
    answeredCount: number
}

export default function SurveyQuestion(props: QuestionProps) {
    const {index, correctAnswer, setCompletedCount, answeredCount} = props
    const [answerCorrect, setAnswerCorrect] = useState(false)
    const [answerSubmitted, setAnswerSubmitted] = useState(getInitialAnswerState())
    const [answer, setAnswer] = useState<number | undefined>()

    function submitAnswer() {
        setAnswerSubmitted(prevState => prevState + 1)
        setAnswerCorrect(answer === correctAnswer)
        if (correctAnswer === answer) {
            setCompletedCount(prevState => prevState + 1)
            if (index === 2) {
                updateSurveyData({["question3_solved"]: true})
                saveTime(QUESTION_3)
                startTimer(QUESTION_4)
            } else if (index === 3) {
                updateSurveyData({["question4_solved"]: true})
                saveTime(QUESTION_4)
                startTimer(QUESTION_5)
            }
        }
    }

    function getInitialAnswerState(): number {
        let surveyString = localStorage.getItem(SURVEY_DATA)
        if (surveyString) {
            let surveyObject = JSON.parse(surveyString)
            if (index === 2) {
                return surveyObject["question3_attempts"] || false
            } else {
                return surveyObject["question4_attempts"] || false
            }
        } else return 0
    }

    useEffect(() => {
        if (index === 2) {
            updateSurveyData({["question3_attempts"]: answerSubmitted})
        } else {
            updateSurveyData({["question4_attempts"]: answerSubmitted})
        }
    }, [answerSubmitted])

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