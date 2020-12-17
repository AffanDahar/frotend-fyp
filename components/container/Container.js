import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";


export default function Container({children}) {
    const windowWidth = Dimensions.get("window").width;
    
  
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "white",
            
          }
    });
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
    }