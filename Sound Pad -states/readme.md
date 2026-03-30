# Sound Pad - States

A React-based interactive sound pad application that demonstrates state management with clickable colored pads.

## Features

- **8 Interactive Pads**: Colorful circular pads arranged in a 4x2 grid
- **Toggle Functionality**: Click any pad to toggle it on/off
- **Visual Feedback**: Active pads are fully visible, inactive pads are dimmed
- **State Management**: Uses React hooks to manage pad states

## How It Works

Each pad has:
- A unique color (from the `pads.js` data file)
- An on/off state that determines its opacity
- Click functionality to toggle between active and inactive states

The application uses:
- React's `useState` hook for state management
- A toggle function that updates the state of individual pads
- CSS classes to control visual appearance based on state

## Technologies Used

- **React 18**: For building the user interface
- **Vite**: For fast development and building
- **CSS**: For styling and visual effects

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal)

## Project Structure

- `App.jsx` - Main application component with state management
- `Pad.jsx` - Individual pad component
- `pads.js` - Data file containing pad colors and initial states
- `styles.css` - CSS styling for the pads and layout
- `index.html` - Main HTML file
- `index.jsx` - React entry point

## Recent Updates

- Fixed pad color visibility issue by adding CSS for active state styling
- Active pads now show at full opacity (1.0) while inactive pads remain dimmed (0.1)
