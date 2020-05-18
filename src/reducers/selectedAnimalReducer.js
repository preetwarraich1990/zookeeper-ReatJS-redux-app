export default function (state=null, action){
    //console.log(action);
    switch(action.type){
        case 'animal_clicked':
        return action.payload
    }
    return state;
}