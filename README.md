# Atlys: A Mini Frontend App with Auth Flow

Atlys is a compact frontend application demonstrating a robust authentication flow. Built with modern web technologies and design principles, it showcases a modular, extensible, and maintainable approach to React application development.

## Key Features

### 1. Atomic Design Architecture

The project is structured following atomic design principles, breaking down the UI into reusable components:

- **Atoms**: Button, Text, Input, Label
- **Molecules**: Card, Modal
- **Organisms**: Form, Login, NewPost, Post, Register
- **Pages**: LoginPage, HomePage, SignupPage

This hierarchical structure enhances reusability and maintains a clear separation of concerns.

### 2. Modular and Extensible Design

- Parent components own the logic while child components are primarily responsible for rendering UI.
- This separation facilitates easier maintenance and a clear flow of data through the application.

### 3. Custom useForm Hook

- A reusable, modular, and extensible `useForm` hook allows for efficient form management across different components.
- This hook reduces code duplication and provides a consistent approach to form handling throughout the application.

### 4. Modern Tech Stack

- **Vite**: For fast and efficient development and building
- **React**: UI library for building user interfaces
- **TypeScript**: For adding static typing to JavaScript, enhancing code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
  - Custom color palette extensions in Tailwind config for brand-specific styling

## Getting Started

To get the project up and running on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/chiranjeev-thapliyal/atlys.git
   ```

2. Navigate to the project directory:
   ```
   cd atlys
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── pages/
├── hooks/
├── contexts/
├── services/
├── utils/
└── App.tsx
```

- `components/`: Houses all UI components, organized by atomic design principles
- `hooks/`: Contains custom React hooks, including the `useForm` hook
- `contexts/`: Stores React context providers, such as for authentication
- `services/`: Includes API service functions and other external service integrations
- `utils/`: Utility functions and helper methods

## Additional Features

- **Responsive Design**: The application is fully responsive, providing a seamless experience across various device sizes.
- **Error Handling**: Robust error handling and user feedback mechanisms are implemented throughout the auth flow.
- **Performance Optimization**: Utilizes React's built-in performance features and Vite's optimizations for a fast, efficient application.
- **Accessibility**: Basic accessibility features are implemented, ensuring the app is usable by a wide range of users.

## Live Demo

Experience the live application: [Atlys on Vercel](https://atlys-eta.vercel.app/)

## Repository

Explore the source code: [GitHub Repository](https://github.com/chiranjeev-thapliyal/atlys)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
