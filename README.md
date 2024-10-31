# express-typescript

Mockup of a simple express server using typescript.

## Directory structure (suggested)

**PROJECT-ROOT**

- public/ (if needed)
- src/
  - types/ (custom types)
  - server.ts (entry point)
  - app.ts (express app)
  - middlewares.ts (express middlewares)
  - routers/ (express routers)
    - [entity].ts (entity router)
  - schemas/ (data validation)
    - [entity].ts (entity schema)
  - controllers/ (route handlers)
    - [entity].ts (entity controller)
  - models/ (data models)
    - [entity].ts (entity model)
  - services/ (third-party services integration)
  - lib/ (custom libraries and utilities)

## Scripts

- `node --run dev` - Start the server in development mode (watch mode is enabled).
- `node --run start` - Start the server in production mode (Make sure to set environment variables properly).

## Libraries in use

- [**express**](https://expressjs.com/en/5x/api.html) - Fast, unopinionated, minimalist web framework for Node.js.
- [**typescript**](https://www.typescriptlang.org/docs/handbook/2/functions.html) - A typed superset of JavaScript that compiles to plain JavaScript.
- [**typescript-eslint**](https://typescript-eslint.io/getting-started/) - An ESLint plugin which provides linting rules for TypeScript codebases.
  - [**eslint**](https://eslint.org/docs/latest/use/getting-started) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

### Recommended libraries

- [**cookie-parser**](https://github.com/expressjs/cookie-parser#readme) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [**jsonwebtoken**](https://github.com/auth0/node-jsonwebtoken#readme) - An implementation of JSON Web Tokens.
- [**bycrypt**](https://github.com/kelektiv/node.bcrypt.js#readme) - A library to help you hash passwords.
- [**cron**](https://github.com/kelektiv/node-cron#readme) - A simple cron-like job scheduler for Node.js.
- [**multer**](https://github.com/expressjs/multer#readme) - Middleware for handling `multipart/form-data`.
- [**helmet**](https://helmetjs.github.io/) - Helps you secure your Express apps by setting various HTTP headers.
- [**resend**](https://resend.com/docs/send-with-nodejs) - Email API for developers.
- [**zod**](https://zod.dev/) - TypeScript-first schema declaration and validation library.
- [**pg**](https://node-postgres.com/) - PostgreSQL client for Node.js.
- [**mysql2**](https://sidorares.github.io/node-mysql2/docs) - MySQL client for Node.js.
- [**qr-code**](https://github.com/soldair/node-qrcode?tab=readme-ov-file) - QR code generator.
- [**sharp**](https://sharp.pixelplumbing.com/) - High performance Node.js image processing.
- [**pdfkit**](https://pdfkit.org/) - PDF generation library.
- [**express-rate-limit**](https://express-rate-limit.mintlify.app/overview) - Basic rate-limiting middleware for Express.

#### Considerations

- Implement a jwt authentication system with 'jsonwebtoken'.
- Set 'trus proxy' - If you are behind a proxy, you need to enable this option to properly get the client's IP address.
- Only implement the libraries you need, don't overcomplicate your project.
- Only implement dependency injection if its necessary, it can make your project harder to understand.
- Use a code formatter like 'prettier' to keep your code clean and consistent. Use what you like, but be consistent.
