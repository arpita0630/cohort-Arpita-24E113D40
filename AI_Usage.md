AI Usage Declaration
Student Name: Arpita Registration No: 24E113D40 Project: User Management System — Full Stack Web Application

During the development of this project, I used AI as a learning and assistance tool to better understand concepts, debug issues, and implement features. At no point did I blindly copy AI-generated code without understanding it. All code was reviewed, tested, and modified by me before being included in the final submission. The following is a detailed account of every area where AI assistance was taken:
1.Connecting the Frontend with the Backend
One of the core challenges of this project was establishing communication between the React frontend (running on port 5173) and the Express backend (running on port 8000). I used AI to understand how a Vite proxy works and why it is needed. AI explained that without a proxy, the browser blocks cross-origin requests due to CORS policy. I learned that by configuring vite.config.js to forward all /api requests to http://localhost:8000, the frontend could communicate with the backend seamlessly. AI also helped me understand the role of the CORS middleware on the backend and why express.json() is necessary to parse incoming request bodies. After understanding the concept, I implemented the proxy configuration myself and tested it by submitting the registration form and verifying the data appeared in the database.
2. Structuring Backend Responses
AI helped me understand how to structure consistent and meaningful JSON responses from the Express backend. I learned the importance of sending a proper response object containing status, message, and data fields so that the frontend can easily interpret the result. For example, when fetching all users, the backend returns result.rows as an array, and AI clarified why result.rows is used instead of result directly — because the pg library wraps query results inside a rows property. This understanding helped me write cleaner and more predictable API responses across all routes.

3. Understanding and Implementing the Bonus Task
The bonus task required implementing Login Redirection (redirecting the user to /profile after a successful login) and a Welcome Page (displayed on the root route). AI helped me understand the concept of conditional rendering in React — using a page state variable to switch between different views (welcome, register, login, profile) within a single component, without needing React Router. AI explained the logic flow clearly: the user lands on the Welcome page, navigates to Login, and upon successful authentication, the page state is set to "profile", which renders the Profile page. I understood this concept and implemented it myself inside form.jsx.

4. Building the form.jsx Component
AI provided guidance on how to integrate the bonus task into the existing form.jsx component. Since the assignment required everything to be in a single component, AI suggested using separate handler functions — handleRegister, handleLogin, and handleLogout — each responsible for their own API call and page transition. AI also guided me on how to use Axios to send HTTP POST requests from the frontend to the backend, and how to handle success and error responses using async/await with try/catch. I reviewed each function carefully, understood what each line was doing, and made modifications wherever needed to match my project's specific requirements.

5. Debugging Backend Issues
Throughout development, I encountered several errors such as MODULE_NOT_FOUND for the pg library, TypeError: Cannot read properties of undefined (reading 'registration_number') in the DELETE route, and a broken PATCH route with nested try-catch blocks. AI helped me understand the root cause of each error clearly and explained what fix was needed and why. For example, AI explained that req.user is only available when authentication middleware is set up, and since this project does not use JWT or sessions, I should use req.body instead. I applied each fix after understanding it fully.

Declaration
All code present in the final submission was written, reviewed, tested, and understood by me. AI was used purely as a learning companion — similar to how one would use documentation or a senior developer for guidance. This declaration is provided in the interest of full transparency and academic integrity.



