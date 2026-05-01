import React from 'react';
import { X, Filter, CheckCircle2 } from 'lucide-react';
import type { Candidate } from '../types/alignment';
import { mockGroupAlignments } from '../lib/mockData';

interface SelectedFiltersProps {
  selectedPolicies: string[];
  selectedCandidates: Candidate[];
  selectedGroups: string[];
  onRemovePolicy?: (policyId: string) => void;
  onRemoveCandidate?: (candidateId: string) => void;
  onRemoveGroup?: (groupId: string) => void;
}

export const SelectedFilters: React.FC<SelectedFiltersProps> = ({
  selectedPolicies,
  selectedCandidates,
  selectedGroups,
  onRemovePolicy = () => {},
  onRemoveCandidate = () => {},
  onRemoveGroup = () => {}
}) => {
  const policyMap: Record<string, string> = {
    'medicare-for-all': 'Medicare for All',
    'climate-action': 'Climate Action',
    'abortion-access': 'Abortion Access',
    'police-reform': 'Police Reform',
    'student-debt': 'Student Debt Cancellation',
    'minimum-wage': 'Minimum Wage Increase',
    'gun-control': 'Gun Control',
    'immigration': 'Immigration Reform',
    'lgbtq-rights': 'LGBTQ+ Rights',
    'renewable-energy': 'Renewable Energy',
    'infrastructure': 'Infrastructure',
    'tax-wealthy': 'Tax the Wealthy'
  };

  const getPolicyName = (policyId: string) => {
    return policyMap[policyId] || policyId;
  };

  const getGroupName = (groupId: string) => {
    return mockGroupAlignments[groupId]?.groupName || groupId;
  };

  const getPartyColor = (party: string) => {
    switch (party) {
      case 'Democrat': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Republican': return 'text-red-600 bg-red-50 border-red-200';
      case 'Independent': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="text-blue-600" size={20} />
        <h2 className="text-lg font-bold text-slate-900">Current Selections</h2>
      </div>

      <div className="space-y-6">
        {/* Selected Candidates */}
        {selectedCandidates.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
              Candidates ({selectedCandidates.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCandidates.map(candidate => (
                <div
                  key={candidate.id}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getPartyColor(
                    candidate.party
                  )}`}
                >
                  <CheckCircle2 size={14} />
                  <span className="text-sm font-medium">{candidate.name}</span>
                  <button
                    onClick={() => onRemoveCandidate(candidate.id)}
                    className="ml-1 hover:opacity-70"
                    title="Remove candidate"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Policies */}
        {selectedPolicies.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
              Policies & Concerns ({selectedPolicies.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedPolicies.map(policyId => (
                <div
                  key={policyId}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
                >
                  <CheckCircle2 size={14} className="text-green-600" />
                  <span className="text-sm font-medium">{getPolicyName(policyId)}</span>
                  <button
                    onClick={() => onRemovePolicy(policyId)}
                    className="ml-1 hover:opacity-70"
                    title="Remove policy"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Groups */}
        {selectedGroups.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
              Interest Groups ({selectedGroups.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedGroups.map(groupId => (
                <div
                  key={groupId}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
                >
                  <CheckCircle2 size={14} className="text-amber-600" />
                  <span className="text-sm font-medium">{getGroupName(groupId)}</span>
                  <button
                    onClick={() => onRemoveGroup(groupId)}
                    className="ml-1 hover:opacity-70"
                    title="Remove group"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCandidates.length === 0 &&
          selectedPolicies.length === 0 &&
          selectedGroups.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm">
                No selections yet.{' '}
                <a href="/configure" className="text-blue-600 hover:underline">
                  Configure your preferences
                </a>{' '}
                to get started.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};