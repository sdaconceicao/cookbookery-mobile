import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {RecipeApi} from 'cookbookery-shared';
import styles from './Recipes.styles';

export class Recipes extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        RecipeApi.getList()
            .then(response=>{
                this.setState({loading: false, recipes: response.data.recipes});
            }).catch(error=>{
                console.error("ERROR in retrieving recipes", error);
            });
    }

    render() {
        const {recipes, loading} = this.state;
        return (
            <View style={styles.container}>
                {loading && <Text>Loading</Text>}
                {!loading && recipes && recipes.map(recipe=>(
                    <Text>{recipe.title}</Text>
                ))}
            </View>
        );
    }
}

export default Recipes;