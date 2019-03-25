import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

import styles from './RecipeCard.styles';

export const RecipeCard = (props) => {
    const {title, image} = props;
    return (
        <View style={styles.wrapper} {...props} >
            <View style={styles.content}>
                <ImageBackground source={{uri:image}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    image: PropTypes.string
};

export default RecipeCard;