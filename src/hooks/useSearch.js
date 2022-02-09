import { useState } from 'react'

export const useSearch = (initialState='') => {
    
    const [state, setState] = useState(initialState);

    const inputChange = (input) => {
        setState(input);
    }
    
    const reset = () => {
        setState(initialState);
    }

    return {state, inputChange, reset};
}
