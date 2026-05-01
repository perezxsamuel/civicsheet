// Type definitions for political alignment platform

export interface AlignmentData {
  economicPolicy: number; // 0-100 scale
  socialJustice: number; // 0-100 scale
  environmentalRegulation: number; // 0-100 scale
  infrastructure: number; // 0-100 scale
  healthcare: number; // 0-100 scale
}

export interface Candidate {
  id: string;
  name: string;
  party: 'Democrat' | 'Republican' | 'Independent' | 'Other';
  state: string;
  district?: string;
  alignment: AlignmentData;
  matchPercentage?: number;
  topLobbyists: string[];
  keyPositions: string[];
  policyPositions: Record<string, 'support' | 'oppose' | 'neutral'>;
  recentVotes: Array<{
    bill: string;
    position: 'Yes' | 'No' | 'Absent';
    alignment: number; // 0-100 match with user
  }>;
}

export type UserAlignment = AlignmentData;

export interface GroupAlignment extends AlignmentData {
  groupName: string;
  demographic: string;
  memberCount?: number;
  policyPositions: Record<string, 'support' | 'oppose' | 'neutral'>;
}

export interface DemographicFilter {
  category: string;
  value: string;
  label: string;
}

export interface UserPreferences {
  selectedPolicies: string[];
  selectedGroups: string[];
  alignment: UserAlignment;
  lastUpdated: string;
}

export interface Policy {
  id: string;
  name: string;
  description: string;
  category: 'economic' | 'social' | 'environmental' | 'infrastructure' | 'healthcare' | 'education' | 'criminalJustice' | 'immigration' | 'foreignPolicy' | 'technology' | 'labor' | 'housing';
  type: 'policy' | 'concern';
}

export interface Group {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'professional-group' | 'advocacy-group' | 'identity-group' | 'religious-group' | 'industry-group' | 'demographic';
  positions: Record<string, 'support' | 'oppose' | 'neutral'>;
}