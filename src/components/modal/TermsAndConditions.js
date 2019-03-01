import React, {PureComponent} from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    ScrollView,
    Alert
} from 'react-native';
import {Colors} from "../../utils/Colors";
import {Functions} from "../../utils/Functions";
import GradientButton from './../common/GradientButton'
import Icons from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";


class TermsAndConditions extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                transparent={true}
                onRequestClose={() => {this.props.onPress()}}
                animationType='slide'>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPressOut={() => {this.props.onPress(false)}}
                >
                    <View
                        style = {styles.scrollStyle}
                    >
                        <TouchableWithoutFeedback>
                            <View style = {{flex:1}}>
                                <View style = {styles.contentWrap}>
                                    {this.renderUI()}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>

            </Modal>
        );
    }

    renderUI(){
        return (
            <View style = {styles.UIContainer}>
                <TouchableOpacity
                    onPress = {() => {this.props.onPress()}}
                    style = {styles.cancelIconContainer}>
                    <Icons  name={'md-close'} size={40} color={Colors.gray} />
                </TouchableOpacity>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleStyle}>Terms And Condition</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.paraTextStyle}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Text>

                        <Text style={styles.paraTextStyle}>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Text>

                        <Text style={styles.paraTextStyle}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>

                        <Text style={styles.paraTextStyle}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Text>

                        <Text style={styles.paraTextStyle}>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Text>

                        <Text style={styles.paraTextStyle}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                    </TouchableOpacity>
                </ScrollView>

                <GradientButton
                    title={"Agree"}
                    fontSize={18}
                    marginTop={10}
                    height = {Functions.getHeight(5)}
                    onPress={()=>{this.props.onAgree()}}/>
            </View>
        );
    }

}

export default connect(
    appState => ({
    }),
    dispatch => ({
    }),
)(TermsAndConditions);

const styles = StyleSheet.create({
    container:{
      flex : 1,
    },
    scrollStyle:{
        flex: 1,
        marginTop: 80,
        marginBottom: 40,
        marginStart: 20,
        marginEnd: 20,
    },
    contentWrap: {
        flex: 1,
        borderRadius: 15,
        backgroundColor:'rgb(255,255,255)',
    },
    titleContainer:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    titleStyle:{
        color: Colors.black,
        alignSelf: 'center',
        fontSize: 16
    },
    cancelIconContainer:{
        position: 'absolute',
        right: 0,
        marginTop: 20,
        marginEnd: 20
    },
    paraTextStyle:{
        marginHorizontal: 5,
    },
    UIContainer:{
        flex:1,
        padding: 20,
    }
});