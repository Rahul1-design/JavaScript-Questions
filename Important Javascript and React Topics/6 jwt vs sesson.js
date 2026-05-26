//// ** When users log into a website, the backend needs a way to remember who the user is for future requests.

// ** There are mainly 2 common ways:
// ** Session-based authentication
// **JWT-based authentication

// 1. What is Session Authentication?

// Imagine this:

// You go to a hotel.

// You give your identity card.
// Hotel checks you.
// Hotel gives you a room card with a room number.
// Hotel stores your information in their database.

// Now every time you come:

// You only show the room card.
// Hotel checks their database and knows who you are.

// This is exactly how sessions work.

// How Session Works Step-by-Step
// Step 1: User logs in

// Frontend sends:

// POST /login

// {
//   email: "rahul@gmail.com",
//   password: "123456"
// }
// Step 2: Backend verifies user

// Backend checks database.

// If correct:

// if (passwordCorrect) {
// create session
// }
// Step 3: Backend creates Session ID

// Example:

// abc123xyz

// Backend stores this in server memory/database:

// sessions = {
//    "abc123xyz": {
//       userId: 5,
//       name: "Rahul"
//    }
// }
// Step 4: Backend sends Session ID to browser

// Usually stored in a cookie.

// Set-Cookie: sessionId=abc123xyz

// Browser automatically stores it.

// Step 5: User makes another request

// Browser automatically sends:

// Cookie: sessionId=abc123xyz

// Backend checks:

// sessions["abc123xyz"]

// If exists → user authenticated.

// Important Thing
// Session data is stored on SERVER

// The browser only stores:

// sessionId

// Actual user data stays on backend.

// Session Authentication Diagram
// Browser
//    |
//    | Login
//    v
// Backend Server
//    |
//    | Create Session
//    v
// Session Store / Database

// Browser stores:
// sessionId only
// Advantages of Session
// Very secure

// Because:

// Real data is on server
// User cannot modify it
// Easy to invalidate

// You can destroy session instantly:

// delete sessions[sessionId]

// User logged out immediately.

// Disadvantages of Session
// Server must store sessions

// If millions of users:

// Millions of sessions

// Need:

// Redis
// Database
// Memory
// Harder in distributed systems

// If multiple backend servers:

// Server 1
// Server 2
// Server 3

// All must share sessions.

// This becomes complicated.
// What is JWT?

// JWT = JSON Web Token

// JSON Web Token

// JWT is different.

// Instead of storing login data on server,
// the server stores it INSIDE a token.

// JWT Analogy

// Imagine airport boarding pass.

// Instead of airport checking database every second:

// The ticket itself already contains:

// Your name
// Flight
// Seat number

// Airport only verifies:

// Is ticket genuine?

// Same idea with JWT.

// JWT Structure

// JWT looks like this:

// xxxxx.yyyyy.zzzzz

// 3 parts:

// HEADER.PAYLOAD.SIGNATURE
// Example JWT
// eyJhbGciOi...

// Looks encrypted but actually mostly encoded.

// JWT Parts
// 1. Header

// Contains:

// {
//   "alg": "HS256",
//   "typ": "JWT"
// }

// Meaning:

// algorithm used
// token type
// 2. Payload

// Contains user data:

// {
//   "id": 5,
//   "name": "Rahul",
//   "role": "admin"
// }

// This is called "claims".

// 3. Signature

// Backend creates signature using secret key.

// Example:

// HMACSHA256(
//    header + payload + secret
// )

// This prevents modification.

// If hacker changes payload:

// signature becomes invalid
// JWT Flow
// Step 1: User logs in
// POST /login
// Step 2: Backend verifies user

// If correct:

// const token = jwt.sign(
//    { id: 5 },
//    SECRET_KEY
// )
// Step 3: Backend sends JWT
// {
//    "token": "eyJhbGc..."
// }
// Step 4: Frontend stores token

// Usually:

// localStorage
// cookie
// Step 5: Frontend sends token every request
// Authorization: Bearer eyJhbGc...
// Step 6: Backend verifies token
// jwt.verify(token, SECRET_KEY)

// If valid:

// user authenticated
// IMPORTANT DIFFERENCE
// Session

// Server stores data.

// Server -> stores user login state
// JWT

// Client stores data.

// Browser stores token

// Server usually does NOT store login state.

// This is called:

// Stateless Authentication
