import { ADD_REMINDER } from '../constants/index';

export const addReminder = (text) => {
    return {
        type: ADD_REMINDER,
        text
    }
}