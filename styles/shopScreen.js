import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 20,
		backgroundColor: "#eeeeee",
		paddingTop: 10,
	},
	productCard: {
		backgroundColor: "#ffffff",
		width: "48%",
		borderRadius: 10,
		overflow: "hidden",
	},
	productImage: {
		width: "100%",
		height: 150,
	},
	textWrapper: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingHorizontal: 6,
		paddingVertical: 2,
	},
	icon: {
		position: "absolute",
		right: 10,
		top: 5,
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 13,
	},
	labelText: {
		fontWeight: "bold",
		fontSize: 12,
		color: "#555555",
	},
	textInput: {
		backgroundColor: "#ffffff",
		padding: 8,
		paddingHorizontal: 10,
		borderRadius: 8,
		flex: 1,
		marginRight: 5,
	},
});

export default styles;
