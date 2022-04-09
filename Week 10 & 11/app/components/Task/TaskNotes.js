import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../shared/config/colors";

export default function TaskNotes({
  name,
  notes,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={"#lightgrey"} onPress={onPress}>
        <View style={styles.mainContainer}>
          <Image style={styles.image} source={image} />
          <Text style={styles.name}>Name: {name} </Text>
          <Text style={styles.notes}>Notes: {notes}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.third,
    padding: 25,
    paddingTop: 40,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
  },
  notes: {
    fontSize: 25,
    padding: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
});
