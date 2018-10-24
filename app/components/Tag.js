import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { images } from '../../assets';
import * as theme from '../utils/Theme';

const Tag = ({ text, color, small}) => (
    <View style={getStyle(color, small).container}>
        <Text style={getStyle(color, small).text}>{text}</Text>
    </View>
);

export default Tag;

Tag.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    small: PropTypes.bool,
}

// Default values for props
Tag.defaultProps = {
    text: '',
    color: theme.colors.blue,
    small: false
}
// Custom Size Tag
let getStyle = function (color, small) {
    return EStyleSheet.create({
        container: {
            margin: '3rem',
            backgroundColor: color,
            padding: '5rem',
            borderRadius: '4rem',
            
        }, text: {
            color: theme.colors.white,
            fontSize: small? theme.fontSize.xxSmall: theme.fontSize.xSmall,
        }
    });
}