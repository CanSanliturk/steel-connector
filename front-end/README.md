# Project Front-end

This project is the front-end part of a web-based user interface for drawing 3D shapes and visualizing objects based on user input parameters.

## Setup

To set up and build the front-end part of the project on a fresh Ubuntu machine, follow the steps below:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can install it by running the following command:

sudo apt install nodejs


### Installation

1. Clone the repository:

2. Navigate to the project directory:

cd front-end

3. Install the dependencies:

npm install


## Development

To start the development server and run the front-end locally, run the following command:

npm start


This will start the development server and open the application in your default web browser.

## Building for Production

To build the front-end for production, run the following command:

npm run build


This will create an optimized build of the application in the `build` directory.

## Deployment

To deploy the front-end to a web server, copy the contents of the `build` directory to your web server's document root or hosting platform.

## Customization

- **App.js**: Update this file to modify the UI and add new functionality. You can customize the layout, add more input fields, and handle user interactions.

- **App.css**: Update this file to customize the styling of the UI elements. You can modify the colors, fonts, dimensions, and other styles to match your desired design.

- **Canvas.js**: Update this file to modify the rendering of the 3D shapes or objects based on the input parameters. You can use a 3D library like Three.js to create and manipulate the objects.

## Credits

- This project was built using React.js (https://reactjs.org/) for the front-end UI development.
- The 3D rendering and interaction can be implemented using a library like Three.js (https://threejs.org/).

