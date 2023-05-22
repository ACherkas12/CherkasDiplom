import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  ScrollView,
  Input
} from 'native-base';

import CourseList from '../screens/CourseList';

const Home = ({ navigation }) => {
	return (
	  <ImageBackground
		source={require('../assets/images/smoke.png')}
		style={{ width: '100%', height: '100%' }}
	  >
		<ScrollView>
		  <View
			style={{
			  width: '100%',
			  alignItems: 'flex-end',
			  paddingHorizontal: 20,
			}}
		  >
			<View
			  style={{
				paddingHorizontal: 10,
				paddingVertical: 12,
				borderRadius: 10,
				marginTop: 30,
				backgroundColor: '#7FFF00',
			  }}
			>
			  <Image
				source={require('../assets/images/hum.png')}
				style={{ height: 15, width: 20 }}
			  />
			</View>
		  </View>
		  <Text
			style={{
			  paddingHorizontal: 20,
			  fontSize: 35,
			  paddingTop: 40,
			  fontFamily: 'Bold',
			  color: '#FFF',
			}}
		  >
			Welcome back, Alena
		  </Text>
  
		  <View
			style={{
			  display: 'flex',
			  flexDirection: 'row',
			  alignItems: 'center',
			  padding: 10,
			  marginTop: 20,
			}}
		  >
			<Input width={300} backgroundColor='#000000' variant="rounded" placeholder="Search for a new knowledge!" />
		  </View>
		  <View
			style={{
			  flexDirection: 'row',
			  justifyContent: 'center',
			  backgroundColor: '#595656',
			  marginTop: 15,
			  marginHorizontal: 20,
			  borderRadius: 20,
			  paddingVertical: 30,
			  paddingLeft: 30,
			  opacity: 0.65,
			}}
		  >
			<View>
			  <Text
				style={{
				  flexDirection: 'row',
				  justifyContent: 'center',
				  alignSelf: 'center',
				  color: '#FFFFFF',
				  fontSize: 20,
				  fontFamily: 'Bold',
				  width: 500,
				  paddingRight: 100,
				  opacity: 1,
				}}
			  >
				Start learning new technologies
			  </Text>
			  <TouchableOpacity
				onPress={() => navigation.navigate('Cources')}
				style={{
				  flexDirection: 'row',
				  backgroundColor: '#fcf2ff',
				  alignItems: 'center',
				  marginTop: 20,
				  width: 150,
				  paddingVertical: 10,
				  borderRadius: 14,
				  paddingHorizontal: 10,
				}}
			  >
				<Text
				  style={{
					color: '#000000',
					fontFamily: 'Bold',
					fontSize: 12,
				  }}
				>
				  Categories
				</Text>
				<Image
				  source={require('../assets/images/strelka.png')}
				  style={{ marginLeft: 20, width: 15, height: 15 }}
				/>
			  </TouchableOpacity>
			</View>
			<Image
                            source={require('../assets/images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
                   <Text style={{
                       color:"#FFFFFF",
                       fontFamily:"Bold",
                       fontSize:20,
                       paddingHorizontal:20,
                       marginTop:20,
                       marginBottom:10
                   }}>Courses in progress</Text>

                   <CourseList
                        onPress={() => navigation.navigate("Xd")}
                        img={require('../assets/images/js3.png')}
                        title="Introduction to Java Script"
                        bg="#fcf2ff"
                   />
                    <CourseList
                        img={require('../assets/images/html2.png')}
                        title="HTML basics"
                        bg="#c4ff8a"
                   />
                    <CourseList
                        img={require('../assets/images/css.png')}
                        title="Cascading Style Sheets basics"
                        bg="#d9cedd"
                   />
               </ScrollView>
           </ImageBackground>
        )
    }

	export default Home;
