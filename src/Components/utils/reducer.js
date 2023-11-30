export const reducer = (state, action) =>{

    switch(action.type){
        case 'GET_DENTIST':
            return {
                ...state, list: action.payload
            }
        case 'GET_FAVS':
            return {
                ...state, favs: []
            }
        default:
            return state
    }
}