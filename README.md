# CyberNews - Cybersecurity News Aggregator Dashboard

A comprehensive cybersecurity news aggregator dashboard that helps security professionals stay updated on the latest threats, vulnerabilities, and industry developments.

## Features

- Integration with multiple cybersecurity news sources (CISA, US-CERT, NIST, BleepingComputer, CSO Online, Krebs on Security)
- Clean, minimal interface focused on readability
- Chronological news feed with filtering and search capabilities
- User authentication and personalized preferences
- Basic categorization and tagging system

## Tech Stack

- Backend: Python with Django
- Frontend: React with TypeScript
- Database: PostgreSQL
- RSS Feed Processing: feedparser

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- PostgreSQL 13+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CyberNews.git
cd CyberNews
```

2. Set up Python virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Install Node.js dependencies:
```bash
cd frontend
npm install
```

5. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

6. Run database migrations:
```bash
python manage.py migrate
```

7. Start the development servers:
```bash
# Terminal 1 - Backend
python manage.py runserver

# Terminal 2 - Frontend
cd frontend
npm start
```

## Project Structure

```
CyberNews/
├── backend/             # Django backend
│   ├── core/           # Core Django settings
│   ├── news/           # News app
│   ├── users/          # User management
│   └── api/            # API endpoints
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── public/
├── requirements.txt    # Python dependencies
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 