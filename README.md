# Simple Code Editor with Syntax Highlighting

This project is a simple code editor built using React that features syntax highlighting powered by Prism.js. The editor allows users to type and edit code directly in a highlighted area, providing a seamless and integrated code editing experience.

## Features

- **Syntax Highlighting**: Code syntax is highlighted in real-time using Prism.js.
- **Integrated Editing**: Users can type directly into the highlighted code area, making it appear as if they are typing directly in the syntax-highlighted code.
- **Responsive Design**: The editor adjusts to different screen sizes and provides a user-friendly interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Prism.js**: A lightweight, extensible syntax highlighter.
- **prism-react-renderer**: A React wrapper for Prism.js, providing easy integration for syntax highlighting in React applications.
- **CSS**: Custom styling for the editor and code highlighting.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/tubaraj/code-editor-react.git
    cd simple-code-editor
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the application**:

    ```bash
    npm start
    ```

    This will start the application and open it in your default web browser at `http://localhost:3000`.

## Project Structure

- `src/index.js`: The main component that contains the code editor logic and the entry point of the application.
- `src/editor.css`: Custom CSS for styling the code editor and syntax highlighting.


## Usage

1. Open the editor in your web browser.
2. Start typing code in the `textarea`. The syntax highlighting will update in real-time to reflect the changes.

## Example

Here's a sample code block you can use to test the editor:

```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
