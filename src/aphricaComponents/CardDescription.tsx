import { Text } from "react-native";
import React from "react";


const CardDescription = ({ Description }: { Description: string }) => {
  return (
    <Text
      style={{
        color: "white",
        fontSize: 11,
        width: 140,
        marginTop: 10,
      }}
    >
      {Description}
    </Text>
  );
};

export default CardDescription