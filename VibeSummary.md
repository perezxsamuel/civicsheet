# CivicSheet Vibe & Coding Summary

## Project Vision
CivicSheet is a transparent, politically neutral platform that helps citizens understand how political candidates and leaders align with specific policies, concerns, and group interests. No login required—all preferences are stored in session storage.

## Key Design Principles

### Neutrality First
- **No party bias**: Content presented without partisan framing
- **Data-driven**: All alignment metrics based on objective voting records and policy positions
- **Transparent sourcing**: Every data point traces back to public records
- **No profiling**: Users are NOT profiled or registered; only their session selections matter

### User-Centric Interaction
- **Checkboxes, not sliders**: Users select topics/concerns they care about (not alignment scores)
- **Show, don't ask**: Platform reveals candidate/group positions; users discover alignment
- **Session-based**: Preferences stored locally; no accounts needed
- **Lightweight**: Fast, responsive interface focused on clarity

### Data Architecture
- **Policies & Concerns**: Discrete items (e.g., "Medicare for All", "Police Reform")
- **Candidates**: Have positions on policies (Pro/Against/Neutral) + voting records
- **Interest Groups**: Defined alignments across policies (e.g., Teachers, LGBTQ+, Police unions)
- **Groups as Lenses**: Groups show how different constituencies align with candidates

## UI/UX Vibe

### Visual Language
- **Clean & Minimal**: Maximum data-to-ink ratio
- **Tailwind CSS**: Utility-first, consistent spacing and colors
- **Icons (Lucide)**: Clear, simple iconography
- **Charts (Recharts)**: Radar charts for multi-dimensional alignment

### Layout Patterns
- **Navigation**: Top bar with Configure, About, Sponsors
- **Main Dashboard**: 
  - Selected candidates/topics/groups displayed prominently
  - Radar chart showing alignment across policies
  - Candidate leaderboard ranked by match
  - Voting record and lobbyist information
- **Configuration**: Policy selector, group selector
- **Responsive**: Desktop-first, mobile-friendly

### Color System
- **Blue**: Primary action, user selections, Democrat affiliation
- **Red**: Republican affiliation
- **Purple**: Independent affiliation
- **Green**: Success, alignment indicators
- **Amber**: Warnings, contributor/lobbyist info
- **Slate**: Neutrality, background, text

## Data Model (Current)

### UserPreferences
```typescript
{
  selectedPolicies: string[];      // e.g., ["medicare-for-all", "police-reform"]
  selectedCandidates: string[];    // e.g., ["candidate-1", "candidate-2"]
  selectedGroups: string[];        // e.g., ["teachers", "lgbtq"]
  lastUpdated: string;
}
```

### Policy/Concern
```typescript
{
  id: string;
  name: string;
  description: string;
  category: 'healthcare' | 'justice' | 'environment' | 'economy' | 'education' | 'defense';
}
```

### Candidate
```typescript
{
  id: string;
  name: string;
  party: 'Democrat' | 'Republican' | 'Independent' | 'Other';
  state: string;
  district?: string;
  policyPositions: { [policyId]: 'Pro' | 'Against' | 'Neutral' };
  votingRecord: Vote[];
  topLobbyists: string[];
  keyPositions: string[];
}
```

### InterestGroup
```typescript
{
  id: string;
  name: string;
  description: string;
  policyPositions: { [policyId]: number }; // 0-100 alignment
  memberCount?: number;
}
```

## Component Structure

### Pages
- **Dashboard**: Main view with candidates, policies, groups, charts
- **Configuration**: Policy/candidate/group selector
- **About**: Data sources, licensing, methodology
- **Sponsors**: Sponsorship policy and current partners

### Key Components
- **RadarChartOverlay**: Multi-dataset chart (candidate, group, aggregates)
- **ComparisonSidebar**: Match percentage, group selector
- **PolicySelector**: Checkbox list of policies
- **CandidateSelector**: Grid/list of candidate cards
- **GroupSelector**: Group cards with descriptions

## Terminology
- **Policy**: Specific legislative position (e.g., "Universal Healthcare", "Abortion Access")
- **Concern**: Broader issue area (e.g., "Healthcare", "Reproductive Rights")
- **Interest Group**: Constituency with shared policy interests (e.g., "Teachers", "LGBTQ+")
- **Alignment**: % match between user selections and candidate/group positions
- **Position**: Candidate's stance on a specific policy (Pro/Against/Neutral)

## Backend Integration (Future)
- Supabase for data persistence
- Real voting records from LegiScan API
- Campaign finance data from FEC
- Interest group alignment data from academic sources
- Admin panel for data updates

## Development Notes
- Built with Vite for fast HMR
- React 19 + TypeScript for type safety
- React Router for navigation
- Tailwind CSS for styling
- No external state management (useContext if needed later)
