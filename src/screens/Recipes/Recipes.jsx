import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';

import {RecipeApi} from 'cookbookery-shared';
import styles from './Recipes.styles';

export class Recipes extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        RecipeApi.getList()
            .then(response=>{
                this.setState({recipes: response.data.recipes});
            }).catch(error=>{
                console.error("ERROR in retrieving recipes", error);
            }).finally(()=>{
                this.setState({loading: false});
            });
    }

    render() {
        const {recipes, loading} = this.state;
        return (
            <View style={styles.container}>
                {loading && <Text>Loading</Text>}
                {!loading && recipes && recipes.length > 0
                    ? recipes.map(recipe=>(
                        <View>
                            <Text>{recipe.title}</Text>
                        </View>
                    ))
                    : <Text style={styles.none}><FormattedMessage id="recipes.none"/></Text>}
            </View>
        );
    }
}

export default Recipes;