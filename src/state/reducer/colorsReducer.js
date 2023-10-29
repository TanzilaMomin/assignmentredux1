export const colorsReducer = (state= {colors : ""}, action) =>{
    switch(action.type){
        case "COLORS" :
            return{
                ...state,
                colors : action.payload
            }
            return state;
    }
    return state ;
}