import { View, Text, TextInput } from "react-native";
import React from "react";

const SectionTitle = ({ Title }: { Title: string }) => {
    return (
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {Title}
      </Text>
    );
  };

  export default SectionTitle