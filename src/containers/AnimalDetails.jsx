import React, {Component} from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {
    
    render(){
        console.log('from details');
        if(!this.props.selectedAnimal){
        return (
            <div>
                ...
            </div>
            );
        }
        return(
            <div> 
                Name: {this.props.selectedAnimal.name} <br/>
                Species: {this.props.selectedAnimal.species} <br/> 
                Gender: {this.props.selectedAnimal.gender} <br/>
                Age: {this.props.selectedAnimal.age} <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
    selectedAnimal : state.selectedAnimal
    }
}

export default connect(mapStateToProps) (AnimalDetails);