import { View, Text } from "react-native";
import React from "react";
import BoxImageCard from "./BoxImageCard";
import StarRating from "./StarRating";
import SocialStats from "./SocialStats";
import SectionTitle from "./SectionTitle";
import CardDescription from "./CardDescription";



const FlexibleImageCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
     
      }}
    >
      {children}
    </View>
  );
};

FlexibleImageCard.BoxImageCard = BoxImageCard;
FlexibleImageCard.SectionTitle = SectionTitle;
FlexibleImageCard.StarRating = StarRating;
FlexibleImageCard.SocialStats = SocialStats;
FlexibleImageCard.CardDescription = CardDescription;

export default FlexibleImageCard;

