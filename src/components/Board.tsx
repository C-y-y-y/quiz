import React, {useState} from "react";
import {Reward} from "./Reward";
import classNames from "classnames";
import data from '../quizConfig.json';
import {useSelector} from "react-redux";
import {Select} from "./Select";

export const Board: React.FC = () => {
    const [burger, setBurger] = useState(false)

    const stage = useSelector((state: {stage: number}) => state?.stage)
    const currentStage = data.quizQuestions[stage]
    const rewards = data?.quizQuestions?.reduce((acc: string[], question: {reward: string}) => [question.reward, ...acc], [])

    return (
        <div className={classNames({
            'board': true,
            'active': burger
        })}>
            <div className='board_stage remove-scrollbar'>
                <div className="board_question">
                    {currentStage?.question}
                </div>

                <Select currentStage={currentStage}/>
            </div>

            <div className='board_score remove-scrollbar'>
                <div className='board_score_wrap'>
                    {rewards?.map((reward, idx) =>
                        <Reward amount={reward} index={idx} key={idx}/>
                    )}
                </div>
            </div>

            <div
                className='board_burger'
                onClick={() => setBurger(prevState => !prevState)}
            >
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    )
}