import { useState } from 'react';

const useGlobalState = () => {
    const [listState, setListState] = useState(false);
    return { listState,setListState };
};

export default useGlobalState;
