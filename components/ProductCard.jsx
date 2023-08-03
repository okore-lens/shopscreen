import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/shopScreen";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = () => {
	return (
		<View style={styles.productCard}>
			<Image
				source={{
					uri: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
				}}
				style={styles.productImage}
			/>
			<Ionicons
				name="ios-heart-circle-outline"
				size={25}
				color="white"
				style={styles.icon}
			/>
			<View style={{ marginVertical: 8 }}>
				<View style={styles.textWrapper}>
					<Text style={styles.labelText}>Tomatoes</Text>
					<Text style={styles.labelText}>Kericho</Text>
				</View>
				<View style={styles.textWrapper}>
					<Text style={styles.boldText}>KES. 300</Text>
					<Text>Kericho</Text>
				</View>
			</View>
		</View>
	);
};

export default ProductCard;
