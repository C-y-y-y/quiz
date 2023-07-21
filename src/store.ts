import { createStore } from 'redux';
import data from '../src/quizConfig.json';

interface State {
    stage: number
    gameStatus: string
}
const initialState = {
    stage: data.quizQuestions.length - 1,
    gameStatus: 'START',
}

const reducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                stage: data.quizQuestions.length - 1,
                gameStatus: 'IN_PROGRESS',
            }
        case 'END_GAME':
            return {
                ...state,
                gameStatus: 'END',
            }
        case 'NEXT_STAGE':
            return {
                ...state,
                stage: state.stage - 1
            }

        default:
            return state;
    }
}

const saveToSessionStorage = (state: State) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem("reduxState", serializedState);
    } catch (err) {
        console.error("Error saving state to sessionStorage:", err);
    }
};

const loadFromSessionStorage = () => {
    try {
        const serializedState = sessionStorage.getItem("reduxState");
        return serializedState ? JSON.parse(serializedState) : initialState;
    } catch (err) {
        console.error("Error loading state from sessionStorage:", err);
        return initialState;
    }
};

const persistedState = loadFromSessionStorage();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    const currentState = store.getState();
    saveToSessionStorage(currentState);
});

export default store