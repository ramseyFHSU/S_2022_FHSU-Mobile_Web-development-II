import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../shared/config/styles";
import CustomText from "./CustomText";
import Screen from "./Screen";
import Picker from "./Picker";

export default function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
  ...otherProps
}) {
  const [modelVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.secondary}
              style={styles.icon}
            />
          )}
          <View style={styles.text}>
            <CustomText>
              {selectedItem ? selectedItem.label : placeholder}
            </CustomText>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.secondary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <Picker
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  // console.log(() => item);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});
