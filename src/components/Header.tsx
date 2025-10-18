import { Brain } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'skills', label: 'Skills' },
    { id: 'practice', label: 'Practice' },
  ];

  const handleMinimize = async () => {
    try {
      await invoke('plugin:window|minimize');
    } catch (error) {
      console.error('Failed to minimize window:', error);
    }
  };

  const handleClose = async () => {
    try {
      // Hide window to tray instead of closing
      await invoke('plugin:window|hide');
    } catch (error) {
      console.error('Failed to hide window:', error);
    }
  };

  return (
    <header 
      className="bg-black shadow-sm border-b border-gray-900 px-6 py-4"
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-white" />
          <h1 className="text-lg font-bold text-white">Retention</h1>
        </div>
        
        <nav className="flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
              style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Window Controls */}
        <div className="flex items-center space-x-2" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
          <button
            onClick={handleMinimize}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="2" y="5.5" width="8" height="1" />
            </svg>
          </button>
          
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 rounded transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
