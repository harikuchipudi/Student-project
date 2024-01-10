import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Image, Text, Animated, TouchableOpacity } from "react-native";
import { Path, Svg } from "react-native-svg";
import CustomButton from "./ButtonTemplates";



const xoffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;
const Screen = (props) => {
    return(
        <View style={styles.scrollpage}>
            <Animated.View style={[styles.screen, transitionAniamtion]}>
                <Image source={require("../assets/landingpage1.png")} style={styles.Image}/>
                <Text>{props.text}</Text>
                {
                    props.index===2 && ( <CustomButton title="sign up" onSubmit={"RegisterScreen"} style={styles.button}></CustomButton>)
                }
            </Animated.View>
        </View>
    );
};

const transitionAniamtion = index => {
    return {
        transform: [
            {perspective: 800},
            {
                scale: xoffset.interpolate({
                    inputRange: [
                        (index-1)*SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: [0.25, 1, 0.25]
                })
            },
            {
                rotateX: xoffset.interpolate({
                    inputRange: [
                        (index-1)*SCREEN_WIDTH,
                        index*SCREEN_WIDTH,
                        (index+1)*SCREEN_WIDTH
                    ],
                    outputRange: ["45deg", "0deg", "45deg"]
                })
            },
            {
                rotateY: xoffset.interpolate({
                    inputRange: [
                        (index-1)*SCREEN_WIDTH,
                        index*SCREEN_WIDTH,
                        (index+1)*SCREEN_WIDTH
                    ],
                    outputRange: ["-45deg","0deg","45deg"]
                })
            }
        ]
    };
};

export default class LandingScreen extends Component {

    render(){
        return(
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: {x:xoffset}}}],
                    {useNativeDriver: true}
                )}
                horizontal
                pagingEnabled
                style={styles.ScrollView}>
                
                <Screen text="Screen 1" path="../assets/landingpage1.png"  index={0} />
                <Screen text="Screen 2" path="../assets/landingpage1.png" index={1}/>
                <Screen text="Screen 3" path="../assets/landingpage1.png" index={2}/>


            </Animated.ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    imgContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        height: 400,
        width: 300,
    },
    scrollpage: {
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "white"
    },
    text: {
        fontSize: 45,
        fontweight: "bold"
    },
    ScrollView: {
        flexDirection: "row",
        backgroundColor: "#357093" 
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: "balck",
    }
});

    

    // constructor(props){
    //     super(props);

    //     this.slide1 = new Animated.Value(0*Dimensions.get('window').width);
    //     this.slide2 = new Animated.Value(Dimensions.get('window').width);
    //     this.slide3 = new Animated.Value(2*Dimensions.get('window').width);
    // }

    // componentDidMount() {
    //     const {width} = Dimensions.get('window');
    //     Animated.sequence([
    //         Animated.timing(this.slide1, {
    //             toValue: -2*width,
    //             duration: 1000,
    //             useNativeDriver: true,
    //         }),

    //         Animated.delay(500),
  
    //         Animated.timing(this.slide2, {
    //             toValue: -width,
    //             duration: 1000,
    //             useNativeDriver: true,
    //         }),

    //         Animated.delay(500),

    //         Animated.timing(this.slide3, {
    //             toValue: 0,
    //             duration: 1000,
    //             useNativeDriver: true,
    //         }),

    //         Animated.delay(500),

    //     ]).start();
    // }

    // render() {

    //     const animatedStyles1 = {
    //         transform: [{ translateX: this.slide1 }]
            
    //     };

    //     const animatedStyles2 = { 
    //         transform: [{ translateX: this.slide2 }]
    //     };

    //     const animatedStyles3 = { 
    //         transform: [{ translateX: this.slide3 }]
    //     };

    //     return (
    //         <View style={styles.container}>
    //             <Animated.View style={[styles.imgContainer, animatedStyles1]}>
    //                 <Image source={require("../assets/landingpage1.png")} style={styles.Image}/>
    //                 <Text>Explore Events</Text>
    //             </Animated.View>
    //             <Animated.View style={[styles.imgContainer, animatedStyles2]}>
    //                 <Image source={require("../assets/landingpage1.png")} style={styles.Image}/>
    //                 <Text>Explore events 2</Text>
    //             </Animated.View>
    //             <Animated.View style={[styles.imgContainer, animatedStyles3]}>
    //                 <Image source={require("../assets/landingpage1.png")} style={styles.Image}/>
    //                 <Text>Explore events 3</Text>
    //             </Animated.View>
    //         </View>
    //     );
    // }

