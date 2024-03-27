import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {
  selectHighestSpending,
  selectLeastAmountTransaction,
  selectTotalAmount,
  selectTotalTransactions,
} from "../redux/transactionSlice";

export default function SummaryScreen() {
  const totalAmount = useSelector(selectTotalAmount);
  const totalTransactions = useSelector(selectTotalTransactions);
  const highestSpending = useSelector(selectHighestSpending);
  const lowestSpending = useSelector(selectLeastAmountTransaction);

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Total Amount:</Text>
        <Text style={styles.value}>{totalAmount}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Total Transactions:</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Highest Spending:</Text>
        <Text style={styles.value}>
          {highestSpending.title} - Amount: {highestSpending.amount}
        </Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Lowest Spending:</Text>
        <Text style={styles.value}>
          {lowestSpending.title} - Amount: {lowestSpending.amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  summaryItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});
