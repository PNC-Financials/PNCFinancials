# PNC Financials React App - Containers

Welcome to the "containers" folder of the PNC Financials React App! This folder contains a collection of container components that play a crucial role in managing the application's state and logic. Containers are responsible for connecting the presentation components (found in the "components" folder) to the data and business logic of the application.

## About Containers

Containers in a React application serve as intermediaries between the presentation layer and the data layer. They encapsulate the logic required to fetch and manipulate data, manage state, and pass necessary information to the presentation components.

In the PNC Financials React App, containers are organized in this folder to maintain a clean and structured codebase. Each container is designed to handle a specific feature or functionality of the application, making it easier to manage and scale the codebase as the project evolves.

## Container List

Here is a list of containers included in this folder:

1. **AccountDetailsContainer.js**: This container manages the details of a user's account. It fetches account-specific data and passes it to the corresponding presentation components.

2. **TransactionHistoryContainer.js**: Responsible for fetching and displaying a user's transaction history. It connects to the API and processes transaction data before passing it to the presentation components.

3. **BudgetPlannerContainer.js**: Manages the budget planning functionality of the app. It handles user input, updates the budget state, and communicates with the API to save and retrieve budget data.

4. **DashboardContainer.js**: Orchestrates the main dashboard view of the application. It coordinates data retrieval and state management for various dashboard components.

5. **UserProfileContainer.js**: Handles user profile information, such as name, email, and settings. It provides a way for users to update their profiles and manages the associated logic.

## Usage

Each container is designed to be imported and used within the relevant presentation component. To use a container, simply import it into the presentation component file and integrate it as needed.

```javascript
import AccountDetailsContainer from '../containers/AccountDetailsContainer';

// Inside the component's render method
<React.Fragment>
  {/* Other JSX */}
  <AccountDetailsContainer />
  {/* Other JSX */}
</React.Fragment>
```

## Contribution

If you are a developer working on this project, please follow the established coding conventions and folder structure. Ensure that your container components are well-documented and adhere to best practices.

## Issues and Support

If you encounter any issues or have questions related to the containers in this folder, please don't hesitate to reach out to the development team for assistance. You can also check the main project repository for any open issues or documentation related to containers.

Thank you for your contribution to the PNC Financials React App!