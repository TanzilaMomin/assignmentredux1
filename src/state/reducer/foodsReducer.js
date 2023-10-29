export const foodsReducer = (state = {selectedfoods : "Foods"}, action)=>{
    switch(action.type){
        case "SELECTED_FOODS":
            return{
                ...state,
                selectedfoods : action.payload
            }
         return state;
    }
    return state;
}