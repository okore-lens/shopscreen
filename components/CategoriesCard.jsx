import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/shopScreen";

const CategoriesCard = () => {
	return (
		<View
			style={{
				width: 60,
				height: 50,
				marginRight: 10,
				borderWidth: 2,
				borderColor: "#00ff00",
				borderRadius: 8,
				overflow: "hidden",
			}}
		>
			<Image
				source={{
					uri: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
				}}
				style={{ width: "100%", height: "100%" }}
			/>
		</View>
	);
};

export default CategoriesCard;
