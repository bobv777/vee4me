import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testNavigation, validateLinks } from '../utils/navigationTest';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export const NavigationTest: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<any[]>([]);
  const [testing, setTesting] = useState(false);
  const [linkValidation, setLinkValidation] = useState<any[]>([]);

  useEffect(() => {
    const runTests = async () => {
      setTesting(true);
      try {
        const navResults = await testNavigation(navigate);
        setResults(navResults);
        const linkResults = validateLinks();
        setLinkValidation(linkResults);
      } catch (error) {
        console.error('Navigation test failed:', error);
      } finally {
        setTesting(false);
      }
    };

    runTests();
  }, [navigate]);

  if (testing) {
    return (
      <div className="fixed bottom-4 right-4 p-4 rounded-lg bg-black/90 border border-white/10 text-white">
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          Testing navigation...
        </div>
      </div>
    );
  }

  const failedRoutes = results.filter(r => !r.success);
  const invalidLinks = linkValidation.filter(l => !l.valid);

  if (failedRoutes.length === 0 && invalidLinks.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-lg bg-black/90 border border-white/10 text-white max-w-md">
      {failedRoutes.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-400" />
            <span>Failed Routes:</span>
          </div>
          <ul className="space-y-1 text-sm">
            {failedRoutes.map(route => (
              <li key={route.route} className="text-red-400">
                {route.route}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {invalidLinks.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-400" />
            <span>Invalid Links:</span>
          </div>
          <ul className="space-y-1 text-sm">
            {invalidLinks.map((link, i) => (
              <li key={i} className="text-red-400">
                {link.text} ({link.href})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};