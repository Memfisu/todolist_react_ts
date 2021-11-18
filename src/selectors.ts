import { IData, IState } from './interfaces';

export const dataSelector = (state: IState): IData[] => state.dataSetter;