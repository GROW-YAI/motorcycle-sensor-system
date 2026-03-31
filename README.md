# Motorcycle Sensor System

## Project Overview
This is a motorcycle sensor system website that provides real-time monitoring and tracking capabilities for motorcycle owners. The site features an intuitive interface for viewing sensor data, tracking motorcycle location, and managing system settings. The website is built with modern web technologies and includes accessibility features through the Boafo accessibility widget.

## Key Features
- Real-time sensor data visualization
- GPS tracking and location monitoring
- System status dashboard
- User authentication and management
- Mobile-responsive design
- Accessibility support via Boafo widget

## Technologies Used
- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS modules
- **Package Manager**: npm
- **Accessibility**: Boafo accessibility widget

## Boafo Accessibility Widget Integration

### How to Get Your Boafo API Key
1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Navigate to API Keys section
5. Generate a new API key

### How to Integrate the Boafo Widget
Follow the official integration guide: [https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/motorcycle-sensor-system.git
   cd motorcycle-sensor-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Open `.env` and add your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure
```
src/
├── components/     # React components
├── pages/         # Page components
├── assets/        # Static assets
└── types/         # TypeScript type definitions
```

## Security Notes
- The `.env` file is excluded from version control for security
- Never commit API keys or sensitive credentials to Git
- Use `.env.example` as a template for required environment variables