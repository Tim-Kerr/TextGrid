import { IAction } from "./IAction";

export const ADD_TEXT = 'ADD_TEXT';
export const CLEAR_TEXT = 'CLEAR_TEXT';

export const addText = (text: string): IAction => ({
    type: ADD_TEXT,
    payload: text
});

export const clearText = (): IAction => ({
    type: CLEAR_TEXT
});