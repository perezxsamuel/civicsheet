import type { AlignmentData } from '../types/alignment';

/**
 * Calculate the match percentage between user selected policies and candidate/group policy positions
 * Returns a percentage based on how many of the user's selected policies the candidate/group supports
 */
export function calculateMatchPercentage(
  userSelectedPolicies: string[],
  entityPolicyPositions: Record<string, 'support' | 'oppose' | 'neutral'>
): number {
  if (userSelectedPolicies.length === 0) {
    return 0;
  }

  let matchingPolicies = 0;
  let totalPolicies = userSelectedPolicies.length;

  for (const policyId of userSelectedPolicies) {
    const position = entityPolicyPositions[policyId];
    if (position === 'support') {
      matchingPolicies += 1;
    } else if (position === 'oppose') {
      // If the entity opposes a policy the user selected, this counts against the match
      matchingPolicies -= 0.5;
    }
    // Neutral positions don't affect the score
  }

  // Ensure the score doesn't go below 0
  matchingPolicies = Math.max(0, matchingPolicies);

  // Convert to percentage
  const matchPercentage = (matchingPolicies / totalPolicies) * 100;

  return Math.round(Math.max(0, Math.min(100, matchPercentage)));
}

/**
 * Calculate match percentage for multiple candidates
 */
export function calculateMatchesForCandidates(
  userSelectedPolicies: string[],
  candidates: { id: string; policyPositions: Record<string, 'support' | 'oppose' | 'neutral'> }[]
): { id: string; policyPositions: Record<string, 'support' | 'oppose' | 'neutral'>; matchPercentage: number }[] {
  return candidates.map(candidate => ({
    ...candidate,
    matchPercentage: calculateMatchPercentage(userSelectedPolicies, candidate.policyPositions)
  }));
}

/**
 * Calculate match percentage for multiple groups
 */
export function calculateMatchesForGroups(
  userSelectedPolicies: string[],
  groups: { id: string; policyPositions: Record<string, 'support' | 'oppose' | 'neutral'> }[]
): { id: string; policyPositions: Record<string, 'support' | 'oppose' | 'neutral'>; matchPercentage: number }[] {
  return groups.map(group => ({
    ...group,
    matchPercentage: calculateMatchPercentage(userSelectedPolicies, group.policyPositions)
  }));
}

/**
 * Legacy function for backward compatibility - converts alignment scores to policy-based matching
 * This will be deprecated once the UI is fully updated
 */
export function calculateMatchPercentageLegacy(userAlignment: AlignmentData, candidateAlignment: AlignmentData): number {
  const axes: (keyof AlignmentData)[] = [
    'economicPolicy',
    'socialJustice',
    'environmentalRegulation',
    'infrastructure',
    'healthcare'
  ];

  // Calculate Euclidean distance
  let squaredSum = 0;
  for (const axis of axes) {
    const diff = userAlignment[axis] - candidateAlignment[axis];
    squaredSum += diff * diff;
  }

  const distance = Math.sqrt(squaredSum);
  const maxPossibleDistance = Math.sqrt(5 * (100 * 100)); // Max distance in 5D space with 0-100 range

  // Convert distance to percentage (inverse relationship)
  const matchPercentage = Math.max(0, Math.min(100, 100 - (distance / maxPossibleDistance) * 100));

  return Math.round(matchPercentage);
}