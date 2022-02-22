export const increment= nr =>{   ///add a parameter, if want that action accepts any
    return {
    type: 'INCREMENT',
    payload: nr
    }
}
export const decrement=()=>{
    return {
    type: 'DECREMENT'
    }
}
