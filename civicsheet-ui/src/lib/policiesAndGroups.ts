import type { AlignmentData } from '../types/alignment';

// Policy categories and their associated concerns
export const POLICY_CATEGORIES = {
  economic: 'Economic Policy',
  social: 'Social Justice',
  environmental: 'Environmental Protection',
  infrastructure: 'Infrastructure',
  healthcare: 'Healthcare',
  education: 'Education',
  criminalJustice: 'Criminal Justice',
  immigration: 'Immigration',
  foreignPolicy: 'Foreign Policy',
  technology: 'Technology & Privacy',
  labor: 'Labor Rights',
  housing: 'Housing & Urban Development'
} as const;

// Individual policies and concerns that users can select
export const POLICIES_AND_CONCERNS = [
  // Economic Policy
  {
    id: 'minimum-wage-increase',
    name: 'Increase Minimum Wage',
    description: 'Raise the federal minimum wage to $15/hour or higher',
    category: 'economic' as const,
    type: 'policy' as const
  },
  {
    id: 'tax-corporate-reduction',
    name: 'Reduce Corporate Taxes',
    description: 'Lower corporate tax rates to stimulate business growth',
    category: 'economic' as const,
    type: 'policy' as const
  },
  {
    id: 'universal-basic-income',
    name: 'Universal Basic Income',
    description: 'Government provides regular cash payments to all citizens',
    category: 'economic' as const,
    type: 'policy' as const
  },
  {
    id: 'trade-protectionism',
    name: 'Trade Protectionism',
    description: 'Implement tariffs and restrictions on foreign imports',
    category: 'economic' as const,
    type: 'policy' as const
  },

  // Social Justice
  {
    id: 'marriage-equality',
    name: 'Marriage Equality',
    description: 'Legal recognition of same-sex marriage nationwide',
    category: 'social' as const,
    type: 'policy' as const
  },
  {
    id: 'abortion-rights',
    name: 'Abortion Rights',
    description: 'Protect and expand access to abortion services',
    category: 'social' as const,
    type: 'policy' as const
  },
  {
    id: 'racial-justice-reform',
    name: 'Racial Justice Reform',
    description: 'Address systemic racism through policy changes',
    category: 'social' as const,
    type: 'policy' as const
  },
  {
    id: 'voting-rights-expansion',
    name: 'Voting Rights Expansion',
    description: 'Make voting easier and more accessible for all citizens',
    category: 'social' as const,
    type: 'policy' as const
  },
  {
    id: 'gender-equality',
    name: 'Gender Equality',
    description: 'Policies promoting equal rights and opportunities for all genders',
    category: 'social' as const,
    type: 'policy' as const
  },

  // Environmental Protection
  {
    id: 'climate-change-action',
    name: 'Climate Change Action',
    description: 'Strong federal action to combat climate change',
    category: 'environmental' as const,
    type: 'policy' as const
  },
  {
    id: 'renewable-energy-transition',
    name: 'Renewable Energy Transition',
    description: 'Accelerate shift to solar, wind, and other renewable sources',
    category: 'environmental' as const,
    type: 'policy' as const
  },
  {
    id: 'environmental-regulations',
    name: 'Strengthen Environmental Regulations',
    description: 'Tougher EPA regulations on pollution and emissions',
    category: 'environmental' as const,
    type: 'policy' as const
  },
  {
    id: 'public-lands-protection',
    name: 'Public Lands Protection',
    description: 'Protect national parks and public lands from development',
    category: 'environmental' as const,
    type: 'policy' as const
  },

  // Healthcare
  {
    id: 'medicare-for-all',
    name: 'Medicare for All',
    description: 'Single-payer universal healthcare system',
    category: 'healthcare' as const,
    type: 'policy' as const
  },
  {
    id: 'mental-health-funding',
    name: 'Mental Health Funding',
    description: 'Increase funding for mental health services and research',
    category: 'healthcare' as const,
    type: 'policy' as const
  },
  {
    id: 'drug-price-controls',
    name: 'Drug Price Controls',
    description: 'Government regulation of prescription drug prices',
    category: 'healthcare' as const,
    type: 'policy' as const
  },
  {
    id: 'reproductive-health',
    name: 'Reproductive Health Access',
    description: 'Ensure access to contraception and reproductive healthcare',
    category: 'healthcare' as const,
    type: 'policy' as const
  },

  // Education
  {
    id: 'student-debt-cancellation',
    name: 'Student Debt Cancellation',
    description: 'Forgive federal student loan debt',
    category: 'education' as const,
    type: 'policy' as const
  },
  {
    id: 'free-college-tuition',
    name: 'Free College Tuition',
    description: 'Make public college tuition-free',
    category: 'education' as const,
    type: 'policy' as const
  },
  {
    id: 'teacher-pay-increase',
    name: 'Increase Teacher Pay',
    description: 'Raise teacher salaries and improve working conditions',
    category: 'education' as const,
    type: 'policy' as const
  },
  {
    id: 'school-funding-equity',
    name: 'School Funding Equity',
    description: 'Ensure equal funding for schools regardless of location',
    category: 'education' as const,
    type: 'policy' as const
  },

  // Criminal Justice
  {
    id: 'criminal-justice-reform',
    name: 'Criminal Justice Reform',
    description: 'Reduce mass incarceration and reform sentencing laws',
    category: 'criminalJustice' as const,
    type: 'policy' as const
  },
  {
    id: 'police-reform',
    name: 'Police Reform',
    description: 'Reform police practices and accountability measures',
    category: 'criminalJustice' as const,
    type: 'policy' as const
  },
  {
    id: 'prison-reform',
    name: 'Prison Reform',
    description: 'Improve prison conditions and rehabilitation programs',
    category: 'criminalJustice' as const,
    type: 'policy' as const
  },
  {
    id: 'drug-law-reform',
    name: 'Drug Law Reform',
    description: 'Decriminalize certain drugs and focus on treatment over punishment',
    category: 'criminalJustice' as const,
    type: 'policy' as const
  },

  // Immigration
  {
    id: 'immigration-reform',
    name: 'Comprehensive Immigration Reform',
    description: 'Path to citizenship for undocumented immigrants',
    category: 'immigration' as const,
    type: 'policy' as const
  },
  {
    id: 'border-security',
    name: 'Border Security',
    description: 'Strengthen border security and immigration enforcement',
    category: 'immigration' as const,
    type: 'policy' as const
  },
  {
    id: 'refugee-protection',
    name: 'Refugee Protection',
    description: 'Protect refugees and asylum seekers',
    category: 'immigration' as const,
    type: 'policy' as const
  },

  // Technology & Privacy
  {
    id: 'data-privacy',
    name: 'Data Privacy Protection',
    description: 'Strong federal laws protecting personal data privacy',
    category: 'technology' as const,
    type: 'policy' as const
  },
  {
    id: 'net-neutrality',
    name: 'Net Neutrality',
    description: 'Prevent internet service providers from blocking or throttling content',
    category: 'technology' as const,
    type: 'policy' as const
  },
  {
    id: 'ai-regulation',
    name: 'AI Regulation',
    description: 'Government oversight of artificial intelligence development',
    category: 'technology' as const,
    type: 'policy' as const
  },

  // Labor Rights
  {
    id: 'union-rights',
    name: 'Union Rights Protection',
    description: 'Strengthen workers\' right to unionize and bargain collectively',
    category: 'labor' as const,
    type: 'policy' as const
  },
  {
    id: 'paid-family-leave',
    name: 'Paid Family Leave',
    description: 'Government-mandated paid family and medical leave',
    category: 'labor' as const,
    type: 'policy' as const
  },
  {
    id: 'workplace-safety',
    name: 'Workplace Safety Standards',
    description: 'Strengthen OSHA regulations and workplace safety enforcement',
    category: 'labor' as const,
    type: 'policy' as const
  },

  // Housing & Urban Development
  {
    id: 'affordable-housing',
    name: 'Affordable Housing Programs',
    description: 'Federal programs to increase affordable housing supply',
    category: 'housing' as const,
    type: 'policy' as const
  },
  {
    id: 'homelessness-prevention',
    name: 'Homelessness Prevention',
    description: 'Programs to prevent and address homelessness',
    category: 'housing' as const,
    type: 'policy' as const
  },
  {
    id: 'rent-control',
    name: 'Rent Control Policies',
    description: 'Allow local governments to implement rent control',
    category: 'housing' as const,
    type: 'policy' as const
  }
];

// Groups and organizations with their policy positions
export const GROUPS_AND_ORGANIZATIONS = [
  // Professional Groups
  {
    id: 'national-education-association',
    name: 'National Education Association (NEA)',
    description: 'Largest labor union representing public school teachers',
    category: 'education-professional' as const,
    type: 'professional-group' as const,
    positions: {
      'teacher-pay-increase': 'support',
      'school-funding-equity': 'support',
      'student-debt-cancellation': 'support',
      'free-college-tuition': 'support'
    }
  },
  {
    id: 'american-nurses-association',
    name: 'American Nurses Association',
    description: 'Professional organization representing registered nurses',
    category: 'healthcare-professional' as const,
    type: 'professional-group' as const,
    positions: {
      'medicare-for-all': 'support',
      'mental-health-funding': 'support',
      'workplace-safety': 'support',
      'paid-family-leave': 'support'
    }
  },
  {
    id: 'fraternal-order-police',
    name: 'Fraternal Order of Police',
    description: 'National labor organization representing law enforcement officers',
    category: 'law-enforcement' as const,
    type: 'professional-group' as const,
    positions: {
      'border-security': 'support',
      'criminal-justice-reform': 'oppose',
      'police-reform': 'oppose',
      'drug-law-reform': 'oppose'
    }
  },

  // Advocacy Groups
  {
    id: 'planned-parenthood',
    name: 'Planned Parenthood',
    description: 'Reproductive health and rights organization',
    category: 'reproductive-health' as const,
    type: 'advocacy-group' as const,
    positions: {
      'abortion-rights': 'support',
      'reproductive-health': 'support',
      'gender-equality': 'support',
      'medicare-for-all': 'support'
    }
  },
  {
    id: 'nra',
    name: 'National Rifle Association (NRA)',
    description: 'Gun rights advocacy organization',
    category: 'gun-rights' as const,
    type: 'advocacy-group' as const,
    positions: {
      'criminal-justice-reform': 'oppose',
      'drug-law-reform': 'oppose'
    }
  },
  {
    id: 'sierra-club',
    name: 'Sierra Club',
    description: 'Environmental advocacy and conservation organization',
    category: 'environmental' as const,
    type: 'advocacy-group' as const,
    positions: {
      'climate-change-action': 'support',
      'renewable-energy-transition': 'support',
      'environmental-regulations': 'support',
      'public-lands-protection': 'support'
    }
  },
  {
    id: 'chamber-of-commerce',
    name: 'U.S. Chamber of Commerce',
    description: 'Business advocacy organization',
    category: 'business' as const,
    type: 'advocacy-group' as const,
    positions: {
      'tax-corporate-reduction': 'support',
      'trade-protectionism': 'oppose',
      'environmental-regulations': 'oppose',
      'union-rights': 'oppose'
    }
  },

  // Identity Groups
  {
    id: 'human-rights-campaign',
    name: 'Human Rights Campaign (HRC)',
    description: 'LGBTQ+ rights advocacy organization',
    category: 'lgbtq-rights' as const,
    type: 'identity-group' as const,
    positions: {
      'marriage-equality': 'support',
      'gender-equality': 'support',
      'voting-rights-expansion': 'support',
      'racial-justice-reform': 'support'
    }
  },
  {
    id: 'naacp',
    name: 'NAACP',
    description: 'Civil rights organization focused on racial equality',
    category: 'racial-justice' as const,
    type: 'identity-group' as const,
    positions: {
      'racial-justice-reform': 'support',
      'voting-rights-expansion': 'support',
      'criminal-justice-reform': 'support',
      'police-reform': 'support'
    }
  },
  {
    id: 'aarp',
    name: 'AARP',
    description: 'Organization advocating for people aged 50 and older',
    category: 'senior-citizens' as const,
    type: 'identity-group' as const,
    positions: {
      'medicare-for-all': 'support',
      'social-security-expansion': 'support',
      'drug-price-controls': 'support',
      'climate-change-action': 'support'
    }
  },

  // Religious Groups
  {
    id: 'southern-baptist-convention',
    name: 'Southern Baptist Convention',
    description: 'Largest Protestant denomination in the United States',
    category: 'religious-conservative' as const,
    type: 'religious-group' as const,
    positions: {
      'abortion-rights': 'oppose',
      'marriage-equality': 'oppose',
      'gender-equality': 'mixed'
    }
  },

  // Industry Groups
  {
    id: 'american-petroleum-institute',
    name: 'American Petroleum Institute',
    description: 'Trade association for the oil and natural gas industry',
    category: 'energy-industry' as const,
    type: 'industry-group' as const,
    positions: {
      'climate-change-action': 'oppose',
      'renewable-energy-transition': 'oppose',
      'environmental-regulations': 'oppose'
    }
  },
  {
    id: 'technology-industry',
    name: 'Tech Industry Coalition',
    description: 'Technology companies and workers',
    category: 'technology-industry' as const,
    type: 'industry-group' as const,
    positions: {
      'data-privacy': 'support',
      'net-neutrality': 'support',
      'ai-regulation': 'mixed',
      'immigration-reform': 'support'
    }
  }
];

// Demographic groups with their typical policy preferences
export const DEMOGRAPHIC_GROUPS = [
  {
    id: 'millennials',
    name: 'Millennials (1981-1996)',
    description: 'Generation with high student debt and progressive leanings',
    category: 'age-group' as const,
    type: 'demographic' as const,
    positions: {
      'student-debt-cancellation': 'support',
      'climate-change-action': 'support',
      'medicare-for-all': 'support',
      'marriage-equality': 'support',
      'criminal-justice-reform': 'support'
    }
  },
  {
    id: 'gen-z',
    name: 'Generation Z (1997-2012)',
    description: 'Digital native generation focused on social justice and climate',
    category: 'age-group' as const,
    type: 'demographic' as const,
    positions: {
      'climate-change-action': 'support',
      'racial-justice-reform': 'support',
      'gender-equality': 'support',
      'student-debt-cancellation': 'support',
      'mental-health-funding': 'support'
    }
  },
  {
    id: 'baby-boomers',
    name: 'Baby Boomers (1946-1964)',
    description: 'Older generation with established careers and conservative leanings',
    category: 'age-group' as const,
    type: 'demographic' as const,
    positions: {
      'social-security-expansion': 'support',
      'medicare-for-all': 'mixed',
      'border-security': 'support',
      'tax-corporate-reduction': 'mixed'
    }
  },
  {
    id: 'urban-residents',
    name: 'Urban Residents',
    description: 'City dwellers concerned with transportation and social issues',
    category: 'geographic' as const,
    type: 'demographic' as const,
    positions: {
      'public-transit-funding': 'support',
      'affordable-housing': 'support',
      'environmental-regulations': 'support',
      'climate-change-action': 'support'
    }
  },
  {
    id: 'rural-residents',
    name: 'Rural Residents',
    description: 'Rural community members focused on agriculture and traditional values',
    category: 'geographic' as const,
    type: 'demographic' as const,
    positions: {
      'agricultural-subsidies': 'support',
      'border-security': 'support',
      'environmental-regulations': 'mixed',
      'trade-protectionism': 'support'
    }
  },
  {
    id: 'evangelical-christians',
    name: 'Evangelical Christians',
    description: 'Religious conservatives with traditional family values',
    category: 'religious' as const,
    type: 'demographic' as const,
    positions: {
      'abortion-rights': 'oppose',
      'marriage-equality': 'oppose',
      'school-choice': 'support',
      'border-security': 'support'
    }
  }
];

// Convert policy selections to alignment scores for compatibility
export function calculateAlignmentFromSelections(selectedPolicies: string[]): AlignmentData {
  const alignment: AlignmentData = {
    economicPolicy: 50,
    socialJustice: 50,
    environmentalRegulation: 50,
    infrastructure: 50,
    healthcare: 50
  };

  // Count policies by category - match the AlignmentData fields
  const categoryCounts: Record<string, number> = {
    economic: 0,
    social: 0,
    environmental: 0,
    infrastructure: 0,
    healthcare: 0,
    education: 0,
    criminalJustice: 0,
    immigration: 0,
    technology: 0,
    labor: 0
  };

  selectedPolicies.forEach(policyId => {
    const policy = POLICIES_AND_CONCERNS.find(p => p.id === policyId);
    if (policy && policy.category in categoryCounts) {
      categoryCounts[policy.category]++;
    }
  });

  // Convert to percentage scores (assuming progressive positions)
  const totalSelected = selectedPolicies.length;
  if (totalSelected > 0) {
    alignment.economicPolicy = (categoryCounts.economic / totalSelected) * 100;
    alignment.socialJustice = (categoryCounts.social / totalSelected) * 100;
    alignment.environmentalRegulation = (categoryCounts.environmental / totalSelected) * 100;
    alignment.infrastructure = (categoryCounts.infrastructure / totalSelected) * 100;
    alignment.healthcare = (categoryCounts.healthcare / totalSelected) * 100;
  }

  return alignment;
}