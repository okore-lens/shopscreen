import { View, Text, FlatList, ScrollView, TextInput } from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/shopScreen";
import CategoriesCard from "../components/CategoriesCard";
import { Ionicons } from "@expo/vector-icons";

const ShopScreen = () => {
	const products = [1, 2, 3, 4, 5, 6];
	return (
		<View style={styles.container}>
			{/* top section */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<TextInput placeholder="Search in here" style={styles.textInput} />
				<Ionicons name="md-add-circle-sharp" size={32} color="#025c02" />
			</View>
			{/* Categories */}
			<Text style={{ ...styles.boldText, marginVertical: 10, fontSize: 18 }}>
				Categories
			</Text>
			<ScrollView horizontal>
				{products.map((_, idx) => (
					<CategoriesCard key={idx} />
				))}
			</ScrollView>
			{/* Products */}
			<Text style={{ ...styles.boldText, marginVertical: 10, fontSize: 18 }}>
				Products
			</Text>
			<FlatList
				data={products}
				keyExtractor={(item) => item}
				renderItem={(item) => <ProductCard />}
				numColumns={2}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				style={{ marginBottom: 10 }}
			/>
		</View>
	);
};

export default ShopScreen;
