import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreatePostsScreen = ({ navigation }) => {
  const [postName, setPostName] = useState("");
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const postNameHandler = (text) => setPostName(text.trim());

  const onSubmitHandler = async () => {
    const newPost = {
      id: 2888,
      title: postName,
      image: photo,
      comments: 0,
      likes: 0,
    };
    console.log(newPost);
    navigation.navigate("DefaultPostScreen", {
      newPost,
    });
    Keyboard.dismiss();
  };


  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          <View
            style={{
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View>
                <View style={styles.takenPhotoContainer}>
                  <Image
                    style={{ height: 240, width: "100%" }}
                  />
                  <TouchableOpacity
                    style={styles.newPhotoButton}
                  >
                    <Ionicons name="camera-reverse" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              <View style={styles.formBox}>
                <TouchableOpacity>
                  <Text style={styles.loadLabel}>Завантажте фото</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    value={postName}
                    onChangeText={postNameHandler}
                    placeholder="Назва..."
                    placeholderTextColor="#BDBDBD"
                    style={styles.input}
                    onFocus={() => {
                      setIsKeyboardShow(true);
                    }}
                  />
                  <View>
                    <Ionicons
                      style={styles.locationIcon}
                      name="location-outline"
                      size={22}
                      color="#BDBDBD"
                    />
                    <TextInput
                      placeholder="Місцевість..."
                      placeholderTextColor="#BDBDBD"
                      style={[styles.input, styles.addPlace]}
                      onFocus={() => {
                        setIsKeyboardShow(true);
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    title={"Опублікувати"}
                    onPress={onSubmitHandler}
                    accessibilityLabel="Опублікувати"
                    activeOpacity={0.8}
                    style={[
                      styles.submitButton,
                    ]}
                  >
                    <Text
                      style={[
                        styles.submitBtnText,
                      ]}
                    >
                      Опублікувати
                    </Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },

  backBtn: {
    position: "absolute",
    top: 55,
    left: 16,
  },
  takenPhotoContainer: {
    justifyContent: "center",
     alignItems: "center",
     marginHorizontal: 16,
    marginTop: 32,
   },
  cameraIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  loadLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
    marginBottom: 32,
  },
  formBox: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    fontWeight: "400",
    height: 48,
    padding: 16,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  location: {
    position: "absolute",
    left: 0,
    bottom: 15,
  },
  addPlace: {
    paddingLeft: 28,
  },
  locationIcon: {
    position: "absolute",
    top: 10,
    left: 4,
  },

  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#F6F6F6",
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
  },
  
  submitBtnText: { fontFamily: "Roboto" },
  deleteWrapp: {
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  newPhotoButton: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});