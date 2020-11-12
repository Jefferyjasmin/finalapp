const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName: "",
			email: "",
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

			update: (userName, email, income) => {
				const store = getStore();
				setStore({ income: parseInt(income), email: email, userName: userName });
			},

			annualStatemen: () => {
				const store = getStore();
			},

			setIncome: num => {
				setStore({ income: num });
			},

			addExpense: array => {
				let store = getStore();

				let newArray = store.expenses.concat(array);

				setStore({ expenses: newArray });
			},
			deleteItem: index => {}
		}
	};
};

export default getState;
