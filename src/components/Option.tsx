import React from "react";
import classNames from "classnames";

interface OptionProps {
    text: string
    index: number
    answer: {selected: string, status: string}
    handleAnswer: (letter: string) => void
}

export const Option = ({text, index, answer, handleAnswer}: OptionProps) => {
    const letter = String.fromCharCode(65 + index)

    const correct = answer.selected === letter && answer.status === 'correct'
    const wrong = answer.selected === letter && answer.status === 'wrong'

    return (
        <div className={classNames({
            'option': true,
            'active': answer.selected === letter,
            'correct': correct,
            'wrong': wrong
        })}>
            <div className='option_cell' onClick={() => handleAnswer(letter)}>
                <span className='option_letter'>{letter}</span>
                <span>{text}</span>

                <svg viewBox="0 0 390 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.0722 0.5H356.928C360.541 0.5 363.945 2.19863 366.118 5.08639L389.374 36L366.118 66.9136C363.945 69.8014 360.541 71.5 356.928 71.5H33.0722C29.4585 71.5 26.055 69.8014 23.8825 66.9136L0.625694 36L23.8825 5.08639C26.055 2.19863 29.4585 0.5 33.0722 0.5Z" fill="white" stroke="#D0D0D8"/>
                </svg>
            </div>
        </div>
    )
}