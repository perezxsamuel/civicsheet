import React, { useState } from 'react';
import { Filter, Users, ChevronDown, ChevronUp, Target } from 'lucide-react';
import type { AlignmentData, DemographicFilter, GroupAlignment } from '../types/alignment';
import { calculateMatchPercentage } from '../lib/matchPercentage';

interface ComparisonSidebarProps {
  userAlignment: AlignmentData;
  candidateAlignment: AlignmentData;
  candidateName: string;
  currentGroupAlignment?: GroupAlignment;
  onGroupFilterChange: (filter: DemographicFilter) => void;
  userSelectedPolicies?: string[];
  candidatePolicyPositions?: Record<string, 'support' | 'oppose' | 'neutral'>;
  className?: string;
}

export const ComparisonSidebar: React.FC<ComparisonSidebarProps> = ({
  userAlignment,
  candidateAlignment,
  candidateName,
  currentGroupAlignment,
  onGroupFilterChange,
  userSelectedPolicies = [],
  candidatePolicyPositions = {},
  className = ''
}) => {
  const [expandedSections, setExpandedSections] = useState({
    match: true,
    filters: true
  });

  const matchPercentage = userSelectedPolicies.length > 0
    ? calculateMatchPercentage(userSelectedPolicies, candidatePolicyPositions)
    : 0;

  // Sample demographic filters - in a real app, these would come from an API
  const demographicFilters: DemographicFilter[] = [
    { category: 'age', value: '18-29', label: 'Age: 18-29' },
    { category: 'age', value: '30-45', label: 'Age: 30-45' },
    { category: 'age', value: '46-65', label: 'Age: 46-65' },
    { category: 'age', value: '65+', label: 'Age: 65+' },
    { category: 'location', value: 'california', label: 'Location: California' },
    { category: 'location', value: 'manteca', label: 'Location: Manteca' },
    { category: 'location', value: 'san-francisco', label: 'Location: San Francisco' },
    { category: 'occupation', value: 'registered-nurses', label: 'Occupation: Registered Nurses' },
    { category: 'occupation', value: 'teachers', label: 'Occupation: Teachers' },
    { category: 'occupation', value: 'engineers', label: 'Occupation: Engineers' },
    { category: 'party', value: 'democrat', label: 'Party: Democrat' },
    { category: 'party', value: 'republican', label: 'Party: Republican' },
    { category: 'party', value: 'independent', label: 'Party: Independent' }
  ];

  const [selectedFilters, setSelectedFilters] = useState<DemographicFilter[]>([]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterToggle = (filter: DemographicFilter) => {
    const isSelected = selectedFilters.some(f => f.category === filter.category && f.value === filter.value);

    let newFilters: DemographicFilter[];
    if (isSelected) {
      newFilters = selectedFilters.filter(f => !(f.category === filter.category && f.value === filter.value));
    } else {
      // For simplicity, allow only one filter per category
      newFilters = [
        ...selectedFilters.filter(f => f.category !== filter.category),
        filter
      ];
    }

    setSelectedFilters(newFilters);

    // Apply the most recently selected filter
    if (newFilters.length > 0) {
      onGroupFilterChange(newFilters[newFilters.length - 1]);
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (percentage >= 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getMatchLabel = (percentage: number) => {
    if (percentage >= 80) return 'Excellent Match';
    if (percentage >= 60) return 'Good Match';
    if (percentage >= 40) return 'Fair Match';
    return 'Poor Match';
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 ${className}`}>
      {/* Match Percentage Section */}
      <div className="p-6 border-b border-slate-100">
        <button
          onClick={() => toggleSection('match')}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2">
            <Target className="text-blue-600" size={20} />
            <h3 className="text-lg font-bold text-slate-900">Match Analysis</h3>
          </div>
          {expandedSections.match ? (
            <ChevronUp size={16} className="text-slate-400" />
          ) : (
            <ChevronDown size={16} className="text-slate-400" />
          )}
        </button>

        {expandedSections.match && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border-2 ${getMatchColor(matchPercentage)}`}>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">{matchPercentage}%</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  {getMatchLabel(matchPercentage)}
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              <p className="font-medium mb-2">How it's calculated:</p>
              <p className="text-xs leading-relaxed">
                Match percentage is based on the mathematical distance between your alignment
                scores and {candidateName}'s positions across all 5 policy areas.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Group Filter Section */}
      <div className="p-6">
        <button
          onClick={() => toggleSection('filters')}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2">
            <Filter className="text-blue-600" size={20} />
            <h3 className="text-lg font-bold text-slate-900">Group Comparison</h3>
          </div>
          {expandedSections.filters ? (
            <ChevronUp size={16} className="text-slate-400" />
          ) : (
            <ChevronDown size={16} className="text-slate-400" />
          )}
        </button>

        {expandedSections.filters && (
          <div className="space-y-4">
            {currentGroupAlignment && (
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={14} className="text-slate-600" />
                  <span className="text-sm font-bold text-slate-900">
                    {currentGroupAlignment.groupName}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {currentGroupAlignment.demographic}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {['age', 'location', 'occupation', 'party'].map(category => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className="space-y-1">
                    {demographicFilters
                      .filter(filter => filter.category === category)
                      .map(filter => {
                        const isSelected = selectedFilters.some(
                          f => f.category === filter.category && f.value === filter.value
                        );
                        return (
                          <button
                            key={`${filter.category}-${filter.value}`}
                            onClick={() => handleFilterToggle(filter)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                              isSelected
                                ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                            }`}
                          >
                            {filter.label}
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                Select filters to compare {candidateName} against different demographic groups.
                Only one filter per category can be active at a time.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};