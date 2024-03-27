import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TransactionDetailScreen({ route, navigation }) {
    const { title, amount, address } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Amount:</Text>
                <Text style={styles.detailText}>{amount}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Address:</Text>
                <Text style={styles.detailText}>{address}</Text>
            </View>
        </View>
    );
}

TransactionDetailScreen.navigationOptions = ({ navigation }) => ({
    title: 'Transaction Detail',
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerBack}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </View>
        </TouchableOpacity>
    ),
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    detailContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    detailText: {
        fontSize: 16,
    },
    headerBack: {
        marginLeft: 10,
    },
});
