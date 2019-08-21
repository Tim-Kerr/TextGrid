import { IAction } from "../actions/IAction";
import { ADD_TEXT, CLEAR_TEXT } from "../actions/TextActions";

export interface IAppState {
    text: string[];
}

const initialState: IAppState = {
    text: []
};

const textReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_TEXT:
            const textArray = [...state.text];
            textArray.push(action.payload);
            return Object.assign({}, state, { text: textArray });
        case CLEAR_TEXT:
            return Object.assign({}, state, { text: [] });;
        default:
            return state;
    }
}

export default textReducer;