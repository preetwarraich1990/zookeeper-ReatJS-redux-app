import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectAnAnimal } from '../actions/index';
import { bindActionCreators } from 'redux';

class AnimalList extends Component{

    renderAnimalList() {
        let counter = 0;
        return this.props.animals.map((animal)=>{
            counter = counter +1;
            return (
                <li
                onClick= {()=> {this.props.selectAni(animal)}}
                key = {counter}
                className="list-group-item"
                ><p>Species: {animal.name}</p></li>
            )
        })
    }
    render(){ 
        return (
            <ul>
                {this.renderAnimalList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //console.log('animallist',state)
    return {
         animals: state.animals
    }
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectAni: selectAnAnimal
    }, dispatch)
}

//export default AnimalList;
export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);