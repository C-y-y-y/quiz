import {Option} from "./Option";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export interface Stage {
    correctAnswer: string
    options: string[]
    question: string
    reward: string
}

export const Select = ({currentStage}: {currentStage: Stage}) => {
    const dispatch = useDispatch()
    const stage = useSelector((state: {stage: number}) => state?.stage)
    const [answer, setAnswer] = useState({
        selected: '',
        status: ''
    })

    const handleAnswer = (letter: string) => {
        if (answer.selected) return
        setAnswer({...answer, selected: letter})
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (answer.selected) {
            timeout = setTimeout(() => {
                setAnswer({
                    ...answer,
                    status: answer.selected === currentStage?.correctAnswer ? 'correct' : 'wrong'
                })
            }, 1000)
        }

        return () => clearTimeout(timeout)
    }, [answer.selected])

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (answer.status) {
            timeout = setTimeout(() => {
                if (answer.status === 'wrong' || (answer.status === 'correct' && stage === 0)) {
                    dispatch({type: 'END_GAME'})
                }
                if (answer.status === 'correct' && stage > 0) {
                    dispatch({type: 'NEXT_STAGE'})
                }
                setAnswer({selected: '', status: ''})
            }, 1000)
        }

        return () => clearTimeout(timeout)
    }, [answer.status])

    return (
        <div className='board_select'>
            {currentStage?.options?.map((text, idx) =>
                <Option
                    text={text}
                    index={idx}
                    answer={answer}
                    handleAnswer={handleAnswer}
                    key={idx}
                />
            )}
        </div>
    )
}