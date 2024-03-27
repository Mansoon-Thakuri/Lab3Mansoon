import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

var initialState = [
	{ id: 1, title: "Transaction 1", amount: "150.0", address: "1073 Florence St, London, ON"},
	{ id: 2, title: "Transaction 2", amount: "100.0", address: "Masonville, London, ON"},
	{ id: 3, title: "Transaction 3", amount: "250.0", address: "Adeilaide St, Toronto, ON"},
	{ id: 4, title: "Transaction 4", amount: "190.0", address: "Chauthe, Pokhara, Nepal"},
	{ id: 5, title: "Transaction 5", amount: "300.0", address: "Airopt, Kathamndu, Nepal"},
	{ id: 6, title: "Transaction 6", amount: "80.0", address: "1001 Fanshawe College Blvd, London, ON"},
	{ id: 7, title: "Transaction 7", amount: "200.0", address: "689 Griffith St, London, ON N6K 2S5"}
]

export const transactionSlice = createSlice({
	name: 'transaction',
	initialState: initialState,
	reducers: {

	},
})

export const selectTotalAmount = (state) => state.transaction.reduce((total, { amount }) => total + parseFloat(amount), 0);
export const selectTotalTransactions = (state) => state.transaction.length;

export const selectHighestSpending = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((max, current) => {
			return parseFloat(current.amount) > parseFloat(max.amount) ? current : max;
		});
	}
);

export const selectLeastAmountTransaction = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((min, current) => {
			return parseFloat(current.amount) < parseFloat(min.amount) ? current : min;
		});
	}
);


export default transactionSlice.reducer