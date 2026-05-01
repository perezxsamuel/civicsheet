import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Database,
  Shield,
  ExternalLink,
  FileText,
  Users,
  Globe,
  CheckCircle
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="text-slate-600 group-hover:text-slate-900 transition-colors" size={20} />
            <span className="font-medium text-slate-900">Back to Dashboard</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">About CivicSheet</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transparent, data-driven political analysis to help citizens make informed decisions
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              CivicSheet is committed to providing transparent, unbiased political analysis that empowers
              citizens to make informed voting decisions. We believe that access to clear, factual
              information about political alignment is essential for a healthy democracy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Transparency</h3>
                <p className="text-sm text-slate-600">
                  All data sources and methodologies are clearly documented and accessible
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Neutrality</h3>
                <p className="text-sm text-slate-600">
                  We maintain strict political neutrality and avoid any partisan bias
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Accessibility</h3>
                <p className="text-sm text-slate-600">
                  Free, easy-to-use tools that anyone can access without registration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Data Sources</h2>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">LegiScan API</h3>
                  <p className="text-slate-700 mb-3">
                    Legislative tracking and bill analysis data is sourced from LegiScan, a comprehensive
                    database of state and federal legislation. LegiScan provides real-time updates on
                    legislative activity across all 50 states.
                  </p>
                  <a
                    href="https://legiscan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit LegiScan <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <Users className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Public Campaign Finance Records</h3>
                  <p className="text-slate-700 mb-3">
                    Campaign contribution and lobbying data comes from publicly available financial
                    disclosure records. This includes Federal Election Commission (FEC) filings,
                    state campaign finance databases, and lobbying disclosure forms.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.fec.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      FEC Website <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Globe className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Demographic and Survey Data</h3>
                  <p className="text-slate-700 mb-3">
                    Population demographics and political preference data is aggregated from
                    reputable sources including the U.S. Census Bureau, Pew Research Center,
                    and academic studies. All data is anonymized and aggregated to protect privacy.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.census.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Census Bureau <ExternalLink size={16} />
                    </a>
                    <a
                      href="https://www.pewresearch.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Pew Research <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Licensing */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Licensing & Attribution</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Creative Commons Attribution 4.0 International</h3>
              <p className="text-slate-700 mb-4">
                CivicSheet's data analysis and visualization tools are available under the
                Creative Commons Attribution 4.0 International (CC BY 4.0) license. This means you are free to:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
                <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
                <li><strong>Adapt</strong> — remix, transform, and build upon the material for any purpose, even commercially</li>
                <li><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made</li>
              </ul>
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View Full License <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">Data Source Licensing</h3>
              <p className="text-amber-800">
                While CivicSheet's analysis tools are open source, the underlying legislative and
                campaign finance data is subject to the licensing terms of our data providers.
                LegiScan data is provided under their standard API terms, and campaign finance
                data follows public record guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions or Feedback?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We're committed to transparency and welcome your questions about our methodology,
            data sources, or suggestions for improvement. CivicSheet is an open-source project
            and we encourage community contributions.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/civicsheet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View on GitHub
            </a>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};