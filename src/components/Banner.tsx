import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import data from "../quizConfig.json";

export const StartBanner: React.FC = () => {
    const dispatch = useDispatch()
    const gameStatus = useSelector((state: {gameStatus: string}) => state?.gameStatus)

    const [allowAnimation, setAllowAnimation] = useState(gameStatus === 'START')
    const startGame = () => {
        dispatch({type: 'START_GAME'})
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout

        timeout = setTimeout(() => {
            setAllowAnimation(gameStatus === 'START')
        }, 1100)

        return () => clearTimeout(timeout)
    }, [gameStatus])


    return (
        <div className={classNames({
            'banner start': true,
            'loading': gameStatus === 'IN_PROGRESS' && allowAnimation,
            'hide': !allowAnimation,
        })}>
            <div className='banner_content remove-scrollbar'>
                <img src="" alt="hand"/>
                <div className='banner_info'    >
                    <p>Who wants to be a millionaire?</p>

                    <div
                        className='button'
                        onClick={startGame}
                    >
                        Start
                    </div>
                </div>
            </div>
        </div>
    )
}


export const EndBanner: React.FC = () => {
    const dispatch = useDispatch()

    const gameStatus = useSelector((state: {gameStatus: string}) => state?.gameStatus)
    const stage = useSelector((state: {stage: number}) => state?.stage)
    const [allowAnimation, setAllowAnimation] = useState(gameStatus !== 'END')

    useEffect(() => {
        let timeout: NodeJS.Timeout

        timeout = setTimeout(() => {
            setAllowAnimation(gameStatus !== 'END')
        }, 1100)

        return () => clearTimeout(timeout)
    }, [gameStatus])

    const questions = data.quizQuestions
    const quizIndex = questions.length - (stage === 0 ? 1 : 2) - stage

    return (
        <div className={classNames({
            'banner end': true,
            'reverse_loading': gameStatus === 'END' && allowAnimation,
            'hide': gameStatus !== 'END',
        })}>
            <div className='banner_content remove-scrollbar'>
                <img src="/hand.svg" alt="hand"/>
                <div className='banner_info'>
                    <span>Total score:</span>
                    <p>{questions[quizIndex]?.reward || '$0'} earned</p>

                    <div
                        className='button'
                        onClick={() => dispatch({type: 'START_GAME'})}
                    >
                        Try again
                    </div>
                </div>
            </div>
        </div>
    )
}
