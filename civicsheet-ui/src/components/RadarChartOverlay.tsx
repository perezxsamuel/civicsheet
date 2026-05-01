import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend
} from 'recharts';
import type { AlignmentData, GroupAlignment } from '../types/alignment';

interface RadarChartOverlayProps {
  userAlignment: AlignmentData;
  candidateAlignment?: AlignmentData;
  groupAlignment?: GroupAlignment;
  candidateName?: string;
  className?: string;
}

export const RadarChartOverlay: React.FC<RadarChartOverlayProps> = ({
  userAlignment,
  candidateAlignment,
  groupAlignment,
  candidateName,
  className = ''
}) => {
  // Transform alignment data to chart format
  const transformData = (alignment: AlignmentData, name: string) => [
    { axis: 'Economic Policy', value: alignment.economicPolicy, name },
    { axis: 'Social Justice', value: alignment.socialJustice, name },
    { axis: 'Environmental Regulation', value: alignment.environmentalRegulation, name },
    { axis: 'Infrastructure', value: alignment.infrastructure, name },
    { axis: 'Healthcare', value: alignment.healthcare, name }
  ];

  // Prepare data for the chart
  const chartData = [
    ...transformData(userAlignment, 'Your Alignment'),
    ...(candidateAlignment ? transformData(candidateAlignment, candidateName || 'Candidate') : []),
    ...(groupAlignment ? transformData(groupAlignment, groupAlignment.groupName) : [])
  ];

  // Group data by axis for the chart
  const axes = ['Economic Policy', 'Social Justice', 'Environmental Regulation', 'Infrastructure', 'Healthcare'];
  const groupedData = axes.map(axis => {
    const dataPoint: Record<string, string | number> = { axis };
    chartData.forEach(item => {
      if (item.axis === axis) {
        dataPoint[item.name] = item.value;
      }
    });
    return dataPoint;
  });

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-200 ${className}`}>
      <h3 className="text-lg font-bold text-slate-900 mb-4">Alignment Comparison</h3>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={groupedData}>
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis
              dataKey="axis"
              tick={{ fontSize: 12, fill: '#64748b' }}
              className="font-medium"
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fontSize: 10, fill: '#94a3b8' }}
              tickCount={6}
            />

            {/* User alignment - solid blue line */}
            <Radar
              name="Your Alignment"
              dataKey="Your Alignment"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={0.1}
              strokeWidth={2}
            />

            {/* Candidate alignment - dashed orange line */}
            {candidateAlignment && (
              <Radar
                name={candidateName || 'Candidate'}
                dataKey={candidateName || 'Candidate'}
                stroke="#ea580c"
                fill="#ea580c"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            )}

            {/* Group alignment - dotted green line */}
            {groupAlignment && (
              <Radar
                name={groupAlignment.groupName}
                dataKey={groupAlignment.groupName}
                stroke="#059669"
                fill="#059669"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="2 2"
              />
            )}

            <Legend
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '14px'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-sm text-slate-600">
        <p className="font-medium">How to read this chart:</p>
        <ul className="mt-2 space-y-1 text-xs">
          <li>• <span className="text-blue-600 font-medium">Blue solid line</span>: Your personal alignment</li>
          {candidateAlignment && (
            <li>• <span className="text-orange-600 font-medium">Orange dashed line</span>: {candidateName || 'Candidate'} alignment</li>
          )}
          {groupAlignment && (
            <li>• <span className="text-green-600 font-medium">Green dotted line</span>: {groupAlignment.groupName} average</li>
          )}
        </ul>
      </div>
    </div>
  );
};