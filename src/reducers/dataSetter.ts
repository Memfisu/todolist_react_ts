import { IData, IAction } from '../interfaces';

const actions = {
    SET: 'SET_DATA',
}

const setData = (data: IData): IAction => ({
    type: actions.SET,
    payload: data
});

const dataSetter = (state: IData[] = [], action: IAction) => {
    switch (action.type) {
        case actions.SET:
            return [...state, action.payload];
        default:
            return state || {};
    }
};

export { setData };
export default dataSetter;