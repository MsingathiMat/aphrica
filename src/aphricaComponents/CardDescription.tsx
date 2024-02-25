import { Text } from "react-native";
import React from "react";


const CardDescription = ({ Description, Color }: { Description: string,Color?:string }) => {
  return (
    <Text
      style={{
        color: Color?Color:'black',
        fontSize: 11,
        width: 160,
        marginTop: 3,
     
      }}
    >
      {Description}
    </Text>
  );
};

export default CardDescription