import type { AlignmentData, GroupAlignment, Candidate } from '../types/alignment';

// Mock user alignment data
export const mockUserAlignment: AlignmentData = {
  economicPolicy: 75,
  socialJustice: 85,
  environmentalRegulation: 90,
  infrastructure: 70,
  healthcare: 95
};

// Mock candidate alignment data
export const mockCandidates: Candidate[] = [
  {
    id: 'candidate-1',
    name: 'Alex Johnson',
    party: 'Democrat',
    state: 'CA',
    district: 'District 12',
    alignment: {
      economicPolicy: 80,
      socialJustice: 75,
      environmentalRegulation: 85,
      infrastructure: 65,
      healthcare: 90
    },
    topLobbyists: ['California Teachers Association', 'Sierra Club', 'SEIU Healthcare Workers'],
    keyPositions: ['Universal Healthcare', 'Green New Deal', 'Student Debt Cancellation'],
    policyPositions: {
      'climate-change-action': 'support',
      'medicare-for-all': 'support',
      'racial-justice-reform': 'support',
      'student-debt-cancellation': 'support',
      'criminal-justice-reform': 'support',
      'abortion-rights': 'support',
      'marriage-equality': 'support',
      'renewable-energy-transition': 'support',
      'teacher-pay-increase': 'support',
      'minimum-wage-increase': 'support',
      'tax-corporate-reduction': 'oppose',
      'trade-protectionism': 'oppose',
      'border-security': 'neutral'
    },
    recentVotes: [
      { bill: 'Healthcare Reform Act', position: 'Yes', alignment: 95 },
      { bill: 'Infrastructure Bill', position: 'Yes', alignment: 78 },
      { bill: 'Tax Cut Package', position: 'No', alignment: 25 }
    ]
  },
  {
    id: 'candidate-2',
    name: 'Maria Rodriguez',
    party: 'Democrat',
    state: 'CA',
    district: 'District 8',
    alignment: {
      economicPolicy: 70,
      socialJustice: 95,
      environmentalRegulation: 95,
      infrastructure: 75,
      healthcare: 85
    },
    topLobbyists: ['Environmental Defense Fund', 'Planned Parenthood', 'AFL-CIO'],
    keyPositions: ['Climate Action Now', 'Reproductive Rights', 'Immigration Reform'],
    policyPositions: {
      'climate-change-action': 'support',
      'medicare-for-all': 'support',
      'racial-justice-reform': 'support',
      'abortion-rights': 'support',
      'marriage-equality': 'support',
      'renewable-energy-transition': 'support',
      'immigration-reform': 'support',
      'refugee-protection': 'support',
      'criminal-justice-reform': 'support',
      'minimum-wage-increase': 'support',
      'union-rights': 'support',
      'paid-family-leave': 'support',
      'border-security': 'oppose'
    },
    recentVotes: [
      { bill: 'Climate Protection Act', position: 'Yes', alignment: 98 },
      { bill: 'Voting Rights Bill', position: 'Yes', alignment: 92 },
      { bill: 'Border Security Act', position: 'No', alignment: 45 }
    ]
  },
  {
    id: 'candidate-3',
    name: 'David Chen',
    party: 'Republican',
    state: 'CA',
    district: 'District 45',
    alignment: {
      economicPolicy: 85,
      socialJustice: 60,
      environmentalRegulation: 70,
      infrastructure: 90,
      healthcare: 75
    },
    topLobbyists: ['California Chamber of Commerce', 'National Federation of Independent Business', 'Associated Builders & Contractors'],
    keyPositions: ['Tax Reform', 'Border Security', 'School Choice'],
    policyPositions: {
      'tax-corporate-reduction': 'support',
      'border-security': 'support',
      'trade-protectionism': 'support',
      'criminal-justice-reform': 'oppose',
      'abortion-rights': 'oppose',
      'marriage-equality': 'oppose',
      'climate-change-action': 'oppose',
      'renewable-energy-transition': 'oppose',
      'environmental-regulations': 'oppose',
      'minimum-wage-increase': 'neutral',
      'union-rights': 'oppose',
      'school-choice': 'support'
    },
    recentVotes: [
      { bill: 'Tax Reform Act', position: 'Yes', alignment: 88 },
      { bill: 'Infrastructure Investment', position: 'Yes', alignment: 85 },
      { bill: 'Healthcare Expansion', position: 'No', alignment: 35 }
    ]
  },
  {
    id: 'candidate-4',
    name: 'Sarah Williams',
    party: 'Independent',
    state: 'CA',
    district: 'At-Large',
    alignment: {
      economicPolicy: 60,
      socialJustice: 80,
      environmentalRegulation: 88,
      infrastructure: 85,
      healthcare: 80
    },
    topLobbyists: ['Common Cause', 'League of Conservation Voters', 'Small Business Majority'],
    keyPositions: ['Campaign Finance Reform', 'Bipartisan Solutions', 'Technology Innovation'],
    policyPositions: {
      'climate-change-action': 'support',
      'racial-justice-reform': 'support',
      'criminal-justice-reform': 'support',
      'data-privacy': 'support',
      'net-neutrality': 'support',
      'campaign-finance-reform': 'support',
      'environmental-regulations': 'support',
      'renewable-energy-transition': 'support',
      'abortion-rights': 'support',
      'marriage-equality': 'support',
      'tax-corporate-reduction': 'neutral',
      'minimum-wage-increase': 'neutral'
    },
    recentVotes: [
      { bill: 'Ethics Reform Bill', position: 'Yes', alignment: 90 },
      { bill: 'Innovation Act', position: 'Yes', alignment: 82 },
      { bill: 'Partisan Redistricting', position: 'Yes', alignment: 75 }
    ]
  }
];

// Mock group alignments
export const mockGroupAlignments: Record<string, GroupAlignment> = {
  'millennials': {
    groupName: 'Millennials',
    demographic: 'Ages 24-39',
    memberCount: 83000000,
    economicPolicy: 65,
    socialJustice: 82,
    environmentalRegulation: 88,
    infrastructure: 72,
    healthcare: 85,
    policyPositions: {
      'student-debt-cancellation': 'support',
      'climate-change-action': 'support',
      'medicare-for-all': 'support',
      'marriage-equality': 'support',
      'criminal-justice-reform': 'support',
      'minimum-wage-increase': 'support',
      'abortion-rights': 'support',
      'renewable-energy-transition': 'support'
    }
  },
  'gen-z': {
    groupName: 'Generation Z',
    demographic: 'Ages 11-26',
    memberCount: 72000000,
    economicPolicy: 62,
    socialJustice: 90,
    environmentalRegulation: 95,
    infrastructure: 68,
    healthcare: 82,
    policyPositions: {
      'climate-change-action': 'support',
      'racial-justice-reform': 'support',
      'gender-equality': 'support',
      'student-debt-cancellation': 'support',
      'mental-health-funding': 'support',
      'criminal-justice-reform': 'support',
      'abortion-rights': 'support',
      'marriage-equality': 'support'
    }
  },
  'national-education-association': {
    groupName: 'National Education Association',
    demographic: 'Teachers Union',
    memberCount: 3000000,
    economicPolicy: 68,
    socialJustice: 88,
    environmentalRegulation: 82,
    infrastructure: 75,
    healthcare: 85,
    policyPositions: {
      'teacher-pay-increase': 'support',
      'school-funding-equity': 'support',
      'student-debt-cancellation': 'support',
      'free-college-tuition': 'support',
      'union-rights': 'support',
      'paid-family-leave': 'support'
    }
  },
  'planned-parenthood': {
    groupName: 'Planned Parenthood',
    demographic: 'Reproductive Health Organization',
    memberCount: 1000000,
    economicPolicy: 65,
    socialJustice: 95,
    environmentalRegulation: 80,
    infrastructure: 70,
    healthcare: 98,
    policyPositions: {
      'abortion-rights': 'support',
      'reproductive-health': 'support',
      'gender-equality': 'support',
      'medicare-for-all': 'support',
      'racial-justice-reform': 'support',
      'voting-rights-expansion': 'support'
    }
  },
  'sierra-club': {
    groupName: 'Sierra Club',
    demographic: 'Environmental Organization',
    memberCount: 800000,
    economicPolicy: 60,
    socialJustice: 75,
    environmentalRegulation: 98,
    infrastructure: 85,
    healthcare: 70,
    policyPositions: {
      'climate-change-action': 'support',
      'renewable-energy-transition': 'support',
      'environmental-regulations': 'support',
      'public-lands-protection': 'support'
    }
  },
  'chamber-of-commerce': {
    groupName: 'U.S. Chamber of Commerce',
    demographic: 'Business Organization',
    memberCount: 300000,
    economicPolicy: 85,
    socialJustice: 65,
    environmentalRegulation: 60,
    infrastructure: 90,
    healthcare: 70,
    policyPositions: {
      'tax-corporate-reduction': 'support',
      'trade-protectionism': 'oppose',
      'environmental-regulations': 'oppose',
      'union-rights': 'oppose',
      'minimum-wage-increase': 'oppose'
    }
  },
  'fraternal-order-police': {
    groupName: 'Fraternal Order of Police',
    demographic: 'Law Enforcement Union',
    memberCount: 350000,
    economicPolicy: 75,
    socialJustice: 65,
    environmentalRegulation: 70,
    infrastructure: 80,
    healthcare: 85,
    policyPositions: {
      'border-security': 'support',
      'criminal-justice-reform': 'oppose',
      'police-reform': 'oppose',
      'drug-law-reform': 'oppose',
      'prison-reform': 'neutral'
    }
  },
  'human-rights-campaign': {
    groupName: 'Human Rights Campaign',
    demographic: 'LGBTQ+ Rights Organization',
    memberCount: 3000000,
    economicPolicy: 70,
    socialJustice: 95,
    environmentalRegulation: 80,
    infrastructure: 75,
    healthcare: 88,
    policyPositions: {
      'marriage-equality': 'support',
      'gender-equality': 'support',
      'voting-rights-expansion': 'support',
      'racial-justice-reform': 'support',
      'abortion-rights': 'support',
      'criminal-justice-reform': 'support'
    }
  }
};