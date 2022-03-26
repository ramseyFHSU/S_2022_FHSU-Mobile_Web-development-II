import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../components/shared/config/styles";
import CustomText from "../components/CustomText";
import AppScreen from "./shared/AppScreen";
import Picker from "./Picker";

export default function TaskPicker({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
  const [modelVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            color={defaultStyles.colors.secondary}
            size={20}
            style={styles.icons}
          />
          <View style={styles.text}>
            <CustomText>
              {selectedItem ? selectedItem.label : placeholder}
            </CustomText>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            color={defaultStyles.colors.secondary}
            size={20}
            style={styles.icons}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <AppScreen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <Picker
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    borderRadius: 15,
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
  },
  icons: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});
