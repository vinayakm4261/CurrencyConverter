import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';
import { connectAlert } from '../components/Alert';
import { now } from 'moment';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };
    handleThemePress = () => {
        this.props.navigation.navigate('Themes', { title: 'Themes' });
    };
    handleLinkPress = () => {
        Linking.openURL("http://fixer.io").catch(() => this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now.."));
    };
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemePress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator/>
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleLinkPress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator/>
            </ScrollView>
        );
    };
};

export default connectAlert(Options);