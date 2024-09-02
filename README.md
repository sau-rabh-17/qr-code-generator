# QR Code Generator

This project is a simple QR code generator web application built using Node.js, Express, and the `qrcode` package. The application allows users to input text or URLs, and it generates a corresponding QR code that can be viewed and downloaded.

## Features

- Generate QR codes from text or URLs.
- View the generated QR code on the web page.
- Option to generate another QR code.
- Responsive design with simple UI.
- Automatic server restart during development using `nodemon`.

## Prerequisites

To run this application, you need to have Node.js and npm installed on your machine.

## Installation

1. Clone the repository to your local machine:
    git clone https://github.com/sau-rabh-17/qr-code-generator.git
   
3. Navigate to the project directory:
    cd qr-code-generator
   
5. Install the required dependencies:
    npm install

## Usage

### Running the Application

1. Start the application with `nodemon`:
   npx nodemon index.js
   
   The server will start on `http://localhost:4000`.

3. Open your web browser and go to `http://localhost:4000` to access the QR code generator.

4. Enter the text or URL you want to convert into a QR code and click `Submit`.

5. The generated QR code will be displayed on a new page. You can generate another QR code by clicking the "Click here" button.

## Project Structure

- `index.js`: The main application file that sets up the Express server and handles routes.
- `views/`: Directory containing the EJS templates for rendering HTML pages.
  - `index.ejs`: The main page where users input text or URLs.
  - `generate.ejs`: The page where the generated QR code is displayed.
- `public/`: Directory containing static files like CSS.
  - `style/`: Contains the CSS files for styling the pages.
    - `style.css`: CSS file for styling the main page where users input text or URLs.
    - `generate.css`: CSS file for styling the page where the generated QR code is displayed.
- `package.json`: Contains the project dependencies and scripts.
- `package-lock.json`: Ensures consistency across different environments

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `body-parser`: Middleware to parse incoming request bodies.
- `qrcode`: A QR code generator library in JavaScript.
- `ejs`: Embedded JavaScript templating for rendering HTML pages.
- `nodemon`: A utility that monitors for any changes in your source and automatically restarts the server.
- - `node`: JavaScript runtime environment.
