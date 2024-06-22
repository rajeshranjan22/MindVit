import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import ProgressTracker from './src/Components/ProgressTracker'
import ActionPlanCreator from './src/Components/ActionPlanCreator'
import PsychoeducationVideo from './src/Components/EducationalVideo'

export default function App() {
  const TabNav = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#0163d2",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 1,
            fontWeight: 500,
          }
        }}
      >
        <TabNav.Screen name="Home" component={ActionPlanCreator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home" size={28} color={focused ? "#0163d2" : "gray"} />
            )
          }}
        />

        <TabNav.Screen name="Progress" component={ProgressTracker}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="progress-one" size={28} color={focused ? "#0163d2" : "gray"} />
            )
          }}
        />
        <TabNav.Screen name="Video" component={PsychoeducationVideo}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="video" size={28} color={focused ? "#0163d2" : "gray"} />
            )
          }}
        />

      </TabNav.Navigator>

    </NavigationContainer>
  )
}