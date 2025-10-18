import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import Skills from './pages/Skills';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'practice':
        return <Practice />;
      case 'skills':
        return <Skills />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="p-8">
        {renderContent()}
      </div>
    </div>
  );
}