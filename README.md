# Integration Testing Project


This project is a simple API with an addition endpoint. It includes integration testing using Vitest, Supertest, and Prisma with PostgreSQL.

### Features
- Adds two numbers and returns the result.
- Validates input using Zod.
- Stores the request and result in the database.
- Runs integration tests using Docker and CI/CD.

### Setup & Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the database and run integration tests:
   ```sh
   npm run test:integration
   ```


### Testing

- Integration tests are handled by the script `scripts/run-integration.sh` using Docker.


### CI/CD
- GitHub Actions runs tests on each pull request.
- Uses Docker to set up the test environment.

