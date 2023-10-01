# PNC Financials - Cryptocurrency Exchange

![PNC Financials Logo](https://www.pnc.com/content/experience-fragments/pnc-com/en/navigation/pnc-navigation---main-menu/master/_jcr_content/root/container/image.coreimg.svg/1657336133655/pnc-logo-rev.svg)

PNC Financials is a web-based cryptocurrency exchange platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to trade various cryptocurrencies, manage their portfolios, and stay updated with real-time market data.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user registration and login system.
- **Cryptocurrency Trading:** Buy and sell cryptocurrencies with real-time market data.
- **Portfolio Management:** Track and manage your cryptocurrency portfolio.
- **Real-Time Market Data:** Stay updated with live cryptocurrency market prices.
- **User Dashboard:** A personalized dashboard for each user.
- **Transaction History:** View your transaction history and portfolio performance.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **MongoDB:** You'll need a MongoDB database to store user data, transactions, and other application data. You can set up a free MongoDB Atlas cluster or use a local MongoDB instance.

### Installation

1. Clone the repository:

       git clone https://github.com/your-username/pnc-financials.git


2. Navigate to the project directory:

        cd pnc-financials

3. Install server dependencies:

        npm install

4. Navigate to the client directory and install client dependencies

        cd client
        npm install

5. Create a .env file in the project root directory and configure your environment variables, including your MongoDB URI, API keys (if necessary), and other sensitive information.

6. Start the development server:
         npm run dev

Your application should now be running. You can access it at http://localhost:3000.


## Usage
- **User Registration:** Sign up for an account on PNC Financials using a valid email address.

- **User Login:** Log in to your account securely.

- **Cryptocurrency Trading:** Buy and sell cryptocurrencies using the trading platform.

- **Portfolio Management:** Monitor and manage your cryptocurrency holdings.

- **Real-Time Market Data:** View real-time cryptocurrency prices and market trends.

- **User Dashboard:** Access your personalized dashboard for an overview of your account.

### Technologies Used
- **Frontend:** React, Redux, HTML5, CSS3, Tailwind
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **APIs:** Integration with cryptocurrency market data APIs (e.g., CoinGecko, CoinMarketCap)
- **Deployment:** Heroku, Netlify or Firebase

### Contributing
**Contributions are welcome!** If you'd like to contribute to PNC Financials, please follow these steps:

### Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork.
- Create a pull request to the main repository's develop branch.

### License
This project is licensed under the **MIT License** - see the LICENSE file for details.


