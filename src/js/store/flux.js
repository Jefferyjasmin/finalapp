const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiBaseUrl: "https://3000-e692a131-8447-440a-a482-cd0ff2cd3f2e.ws-us02.gitpod.io/",
			date: 0,
			goal: 0,
			birthDay: 0,
			id: "",
			userName: "",
			email: "",
			mStatement: [],
			income: 0,
			expenses: [
				{ property: "car payment", value: 196 },
				{ property: "payment Rent", value: 1000 },
				{ property: " Rent", value: 1000 }
			],
			Data: []
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
					store.Data.push(weekly);
				}
				return weekly;
			},

			monthlyStatement: () => {
				const store = getStore();

				let monthly = 0;
				for (let i = 0; i <= 12; i++) {
					monthly += store.income * 2;
					store.Data.push(monthly);
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
							income: income,
							is_active: true
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
			getDate: (date, goal) => {
				setStore({ date: date, goal: goal });
				return date, goal;
			},

			annualStatemen: () => {
				const store = getStore();
			},

			setIncome: num => {
				setStore({ income: num });
			},

			addExpense: array => {
				// let store = getStore();

				// let newArray = store.expenses.concat(array);
				// console.log(array);
				setStore({ expenses: array });
			},
			deleteItem: index => {
				const store = getStore();

				const { expenses } = store;
				expenses.splice(index, 1);
				setStore({ expenses: expenses });
				// let url = store.apiBaseUrl + "expense/" + id;
				// console.log(url);
				// try {
				// 	let response = await fetch(url, {
				// 		method: "DELETE",

				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	});
				// 	if (response.ok) {
				// 		let expenses = await response.json();
				// 		setStore({
				// 			expenses: expenses
				// 		});
				// 		return true;
				// 	}
				// } catch (error) {
				// 	console.log(`this is the error: ${typeof error} ${error.message}`);
				// }
				// return false;
			},
			testApi: () => {
				fetch(
					"https://trip-purpose-prediction2.p.rapidapi.com/travel/predictions/trip-purpose?departureDate=undefined&originLocationCode=undefined&returnDate=undefined&destinationLocationCode=undefined",
					{
						method: "GET",
						headers: {
							"x-rapidapi-key": "3a1a1304c7msh4d39eef63c535d1p13d990jsn8d99f5062119",
							"x-rapidapi-host": "trip-purpose-prediction2.p.rapidapi.com"
						}
					}
				)
					.then(response => {
						console.log(response);
					})
					.catch(err => {
						console.error(err);
					});
			}
		}
	};
};

export default getState;
