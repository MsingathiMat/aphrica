import { Text, View } from "react-native";
import React from "react";

const CircularIcon = ({
  BackgroundColor,
  Icon,
  Notification,
}: {
  BackgroundColor: string;
  Icon: React.ReactNode;
  Notification?: boolean;
}) => {
  return (
    <View
      style={{
        backgroundColor: BackgroundColor,
        width: 30,
        height: 30,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {

Notification?
<View
        style={{
          backgroundColor: "red",
          width: 8,
          height: 8,
          borderRadius: 22,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: -2,
          right: 2,
        }}
      ></View>
:null


      }

      {Icon}
    </View>
  );
};

export default CircularIcon;

// SOLID
