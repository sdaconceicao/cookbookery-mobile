import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {FormattedMessage} from 'react-intl';

import {RecipeApi} from 'cookbookery-shared';

import RecipeCard from "Components/RecipeCard";
import styles from './Recipes.styles';

export class Recipes extends Component {

    state = {
        loading: true
    };

    static navigationOptions = ({ screenProps }) => ({
        title: screenProps.intl.formatMessage({ id: 'recipes.title' }),
    });

    componentDidMount(){
        RecipeApi.getList()
            .then(response=>{
                this.setState({
                    recipes: response.data.recipes,
                });
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
                    ? <FlatList
                        data={recipes}
                        style={styles.list}
                        renderItem={recipe => <RecipeCard {...recipe.item}/>}
                        keyExtractor={item => item.id}
                        />
                    : <Text style={styles.none}><FormattedMessage id="recipes.none"/></Text>}
            </View>
        );
    }
}

export default Recipes;