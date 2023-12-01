export const reducer = (state, action) =>{

    switch(action.type){
        case 'GET_DENTIST':
            return {
                ...state, list: action.payload
            }
        case 'ADD_FAVS':
            return {
                ...state, favs: [...state.favs, action.payload] // incompleto
            }
        case 'CHANGE_THEME':
            return {
               ...state, theme: '' // incompleto
            }
        default:
            return state
    }
}