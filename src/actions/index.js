export function selectAnAnimal(animal) {
    return {
        type: 'animal_clicked',
        payload: animal 
    }    
}