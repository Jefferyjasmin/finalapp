const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			mStatement: [],
			income: 0,
			expenses: [{ property: "car payment", value: 196 }, { property: "payment Rent", value: 1000 }]
		},
		actions: {
			sum: () => {
				const store = getStore();

				const { expenses } = store;
				let count = 0;
				for (let x in expenses) {
					count += expenses[x].value;
				}

				return count;
			},

			weeklyStatement: () => {
				const store = getStore();

				let weekly = 0;
				for (let i = 0; i <= 26; i++) {
					weekly += store.income;
				}
				return weekly;
			},

			monthlyStatement: () => {
				const store = getStore();

				let monthly = 0;
				for (let i = 0; i <= 12; i++) {
					monthly += store.income * 2;
					// store.mStatement.push(monthly);
				}
				// setStore({ mStatement: store.mStatement });
				return monthly;
			},

			annualStatement: () => {
				const store = getStore();
			},

			setIncome: num => {
				setStore({ income: num });
			},

			addExpense: array => {
				console.log(array);
				let store = getStore();
				console.log(store);

				let newArray = store.expenses.concat(array);
				console.log(newArray);
				setStore({ expenses: newArray });
			},
			deleteItem: index => {
				console.log("delete");
			}
		}
	};
};

export default getState;
