import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class InputTextField extends PureComponent {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.inputTitle}>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.isSecure}
          style={styles.input}
        ></TextInput>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#d8d8d8" }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    color: "#abb4bd",
    fontSize: 14,
  },
  input: {
    paddingVertical: 12,
    color: "#1d2029",
    fontSize: 14,
    fontFamily: "Avenir Next",
  },
});
