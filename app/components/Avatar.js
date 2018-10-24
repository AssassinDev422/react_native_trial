import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { images } from '../../assets';
import * as theme from '../utils/Theme';

const Avatar = ({ src, size }) => (
    <Image
        source={src}
        style={[getStyle(size).container]}
    />
);

export default Avatar;

Avatar.propTypes = {
    src: PropTypes.number,
    onPress: PropTypes.func,
    size: PropTypes.number,
    styles: PropTypes.object,
}

// Default values for props
Avatar.defaultProps = {
    src: images.avatar,
    size: 80,
    onPress: () => { },
}
// Custom Size Avatar
let getStyle = function (size) {
    return EStyleSheet.create({
        container: {
            borderWidth: '3rem',
            borderColor: theme.colors.gray,
            width: size + 'rem',
            height: size + 'rem',
            borderRadius: size / 2 + 'rem',
        }
    });
}