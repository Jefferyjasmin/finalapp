const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiBaseUrl: "https://3000-e4d0fe23-793c-4bec-96ad-382f1171d5ec.ws-us02.gitpod.io/",
			id: "",
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

			update: async (userName, email, income) => {
				const store = getStore();
				let url = store.apiBaseUrl + "user";
				try {
					let response = await fetch(url, {
						method: "POST",
						body: JSON.stringify({
							userName: userName,
							email: email,
							income: income
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						let user = await response.json();
						setStore({
							income: parseInt(user.income),
							email: user.email,
							userName: user.user_name,
							id: user.id
						});
						return true;
					}
				} catch (error) {
					console.log(`this is the error: ${typeof error} ${error.message}`);
				}
				return false;
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
