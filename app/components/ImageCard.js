import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { images } from '../../assets';
import * as theme from '../utils/Theme';

const ImageCard = ({ src, title, subtitle, onPress }) => (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <View style={styles.imageContainer}>
            <Image
                source={{uri: src}}
                style={styles.image}
            />
        </View>
        <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>

);

export default ImageCard;

ImageCard.propTypes = {
    src: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

// Default values for props
ImageCard.defaultProps = {
    src: '',
    title: '',
    subtitle: '',
    onPress: () => { },
}

const styles = EStyleSheet.create({
    container: {
        margin: '10rem',
        width: '130rem',
        aspectRatio: 1,
        backgroundColor: theme.colors.white,
        elevation: 4,
        borderRadius: '6rem',
        shadowColor: theme.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: '4rem',
        shadowOpacity: 0.9
    },
    imageContainer: {
        width: '130rem',
        aspectRatio: 2,
        overflow: 'hidden',
        borderTopLeftRadius: '8rem',
        borderTopRightRadius: '8rem'
    },
    image:{
        width: '130rem',
        aspectRatio: 2,
        resizeMode: 'cover'
    },
    textContainer: {
        margin: '10rem'
    },
    title: {
        fontWeight: '900',
        margin: '3rem',
        fontSize: theme.fontSize.xSmall
    },
    subtitle: {
        fontSize: theme.fontSize.xxSmall,
        margin: '3rem',
        color: theme.colors.darkGray
    }
});