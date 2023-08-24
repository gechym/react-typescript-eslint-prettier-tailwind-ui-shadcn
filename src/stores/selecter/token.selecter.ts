import { RootState } from 'stores/stores';

const tokenSelector = (state : RootState) => state.token;

export default tokenSelector;
