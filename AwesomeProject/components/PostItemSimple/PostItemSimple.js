import React from "react";
import { View, Image, Text } from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

import {
  postImage,
  postLabel,
  locationLabel,
  commentsInner,
  metaWrapper,
  commentsLabel,
  postItem,
} from "./PostItemSimple.styles";

const PostItemSimple = ({ data, navigation }) => {
  const { title, image, location, comments } = data;
  const locationInfo = `${location?.region || "невідомо"}, ${
    location?.country || "невідомо"
  }`;
  console.log(data);
 
  return (
    <View style={postItem}>
      <Image source={image} style={postImage} />
      <Text style={postLabel}>{title}</Text>
      <View style={metaWrapper}>
        <View style={commentsInner}>
            <FontAwesome name="comment-o" size={18} color="#BDBDBD" />
            <Text style={commentsLabel}>{comments}</Text>
        </View> 
          <Ionicons name="location-outline" size={18} color="#BDBDBD" />
          <Text style={locationLabel}>{locationInfo}</Text>
      </View>
    </View>
  );
};

export default PostItemSimple;