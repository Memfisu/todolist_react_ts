export interface IData {
    participant: string;
    email: string;
}

export interface IAction {
    type: string;
    payload: IData;
}

export interface IState {
    dataSetter: IData[];
}