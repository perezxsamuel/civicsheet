# CivicSheet

A transparent, politically neutral platform that helps citizens understand how political candidates and leaders align with specific policies, concerns, and interest groups.

**No login. No profiling. No politics. Just data.**

## Features

- **Policy-Based Alignment**: Select policies and concerns you care about
- **Candidate Comparison**: See how candidates align with your selections
- **Interest Group Insights**: Compare against teachers, nurses, LGBTQ+ communities, and more
- **Voting Records**: Detailed voting history for each candidate
- **Transparent Data**: All data sourced from LegiScan API and public campaign finance records
- **Session Storage**: Your selections stored locally—no accounts required

## Project Structure

```
civic-sheet/
├── civicsheet-ui/        # React + TypeScript + Vite frontend application
├── VibeSummary.md        # Vibe, design, and coding documentation
├── README.md             # This file
└── LICENSE               # CC BY 4.0 International
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation & Development

```powershell
# Navigate to the UI directory
cd civicsheet-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the URL shown in the console (typically `http://localhost:5173`).

### Available Scripts

```powershell
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Check code quality
npm run preview   # Preview production build
```

## Architecture

- **Frontend**: React 19 + TypeScript with Vite
- **Styling**: Tailwind CSS for rapid UI development
- **Visualization**: Recharts for interactive radar charts
- **State**: Session storage (local to each browser session)
- **Routing**: React Router v6

## Data Model

### Pages

- **Dashboard**: Main view showing candidate alignments with selected policies and groups
- **Configuration**: Select policies, candidates, and interest groups to compare
- **About**: Data sources, methodology, and CC BY 4.0 licensing
- **Sponsors**: Sponsorship policy and partner information

### Core Concepts

- **Policies**: Specific legislative positions users select (e.g., "Medicare for All")
- **Candidates**: Political figures with policy positions and voting records
- **Interest Groups**: Communities with shared policy alignments (Teachers, LGBTQ+, etc.)
- **Alignment**: Match percentage between selections and candidate/group positions

## Design Philosophy

See [VibeSummary.md](./VibeSummary.md) for detailed documentation on:
- Design principles and visual language
- Component structure and patterns
- Data architecture and models
- Development guidelines

## License

This project is licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).

See the `LICENSE` file for details.

## Data Sources

- **Legislation**: LegiScan API
- **Campaign Finance**: Federal Election Commission (FEC)
- **Interest Groups**: Academic and research organizations
- **Voting Records**: Public legislative records
