import { View, Text, TextInput } from "react-native";
import React from "react";

const SectionTitle = ({ Title,Color }: { Title: string,Color?:string }) => {
    return (
      <Text
        style={{
          color:Color?Color: "gray",
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        {Title}
      </Text>
    );
  };

  export default SectionTitle