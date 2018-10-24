import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { images } from '../../assets';
import { Tag } from './index'
import * as theme from '../utils/Theme';

const SiimpleCard = ({ title, subtitle, onPress, tags }) => (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.tagsView}>
            {
                tags.map((tag, index) => (
                    <Tag key={index + ''} text={tag} small={true}
                        color={index == 1 ? theme.colors.pink : theme.colors.blue} />
                ))
            }
        </View>
    </TouchableOpacity>

);

export default SiimpleCard;

SiimpleCard.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    tags: PropTypes.array
}

// Default values for props
SiimpleCard.defaultProps = {
    title: '',
    subtitle: '',
    onPress: () => { },
    tags: []
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
    tagsView: {
        margin: '10rem',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',
    },
    textContainer: {
        margin: '10rem',
        flex: 1
    },
    title: {
        fontWeight: '900',
        margin: '5rem',
        fontSize: theme.fontSize.xSmall
    },
    subtitle: {
        fontSize: theme.fontSize.xxSmall,
        margin: '5rem',
        color: theme.colors.darkGray
    }
});