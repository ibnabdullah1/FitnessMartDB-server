# Fitness Equipment E-commerce Platform

## Overview

This is the server-side application for a comprehensive e-commerce website dedicated to fitness equipment and accessories. The backend is built using Node.js, Express, and MongoDB, providing robust product management capabilities, user authentication, and optional Stripe payment integration.

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- TypeScript
- Stripe (Optional)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Stripe Account (Optional, for payment processing)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ibnabdullah1/FitnessMartDB-server.git

   cd FitnessMartDB-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```env
   NODE_ENV=development
   PORT=1000
   DATABASE_URL=
   ```

4. **Build and start the server:**
   ```bash
   npm run build
   npm start
   ```

### Development

To run the server in development mode with hot-reloading:

```bash
npm run start:dev
```

## API Endpoints

### Product Routes

- **DELETE** `/api/products/:id` - Delete a product
- **POST** `/api/products` - Create a new product
- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get product by ID
- **PUT** `/api/products/:id` - Update a product
- **POST** `/api/products/update-stock` - Update product stock from order

### Payment Routes

- **POST** `/api/payments/create-payment-intent` - Create a payment intent with Stripe

## Middleware

- **auth.middleware.ts** - Protect routes that require authentication
- **error.middleware.ts** - Handle errors globally

## Scripts

```json
"scripts": {
  "build": "tsc",
  "start:prod": "node ./dist/server.js",
  "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "lint": "npx eslint src --ignore-pattern .ts",
  "lint:fix": "npx eslint src --fix",
  "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
  "prettier:fix": "npx prettier --write src",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## Optional Features

- **Stripe Integration**: For processing payments. Ensure you have your Stripe secret key in the `.env` file.
- **TypeScript**: Optional integration with TypeScript for a modular codebase structure.

## Running Tests

To run tests, use the following command:

```bash
npm test
```

## Deployment

1. Ensure all environment variables are set correctly.
2. Use a service like Heroku, AWS, or any other cloud provider to deploy the server.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [arfathossen541@gmail.com](mailto:arfathossen541@gmail.com).

---

Happy coding!

```

Feel free to customize the contact information, license details, and any other specific instructions as per your project requirements.
```
