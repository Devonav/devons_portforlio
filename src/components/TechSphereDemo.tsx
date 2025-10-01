import React, { useState } from 'react';
import TechStack from './techStack';
import TechStackWrapper from './techStackWrapper';

const TechSphereDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'svg' | 'images'>('svg');

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">3D Tech Stack Sphere</h1>
        <p className="text-gray-600 mb-6">
          Interactive 3D sphere layouts for displaying tech stack logos.
          Move your mouse around the sphere to control rotation!
        </p>

        {/* Demo selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveDemo('svg')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeDemo === 'svg'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            SVG Icons Sphere
          </button>
          <button
            onClick={() => setActiveDemo('images')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeDemo === 'images'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Image Icons Sphere
          </button>
        </div>
      </div>

      {/* Demo content */}
      <div className="bg-gray-50 rounded-2xl p-8 min-h-[500px] flex items-center justify-center">
        {activeDemo === 'svg' ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">SVG Icons Sphere</h2>
            <p className="text-gray-600 mb-8">Built-in SVG icons with custom colors</p>
            <TechStack variant="sphere" size="large" />
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Image Icons Sphere</h2>
            <p className="text-gray-600 mb-8">External image files with category tooltips</p>
            <TechStackWrapper layout="sphere" showLabels={true} />
          </div>
        )}
      </div>

      {/* Usage instructions */}
      <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">How to Use</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">TechStack Component (SVG):</h4>
            <div className="bg-gray-100 rounded p-3 text-sm font-mono">
              {'<TechStack variant="sphere" size="medium" />'}
            </div>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• <code>variant</code>: "sphere" | "orbit" | "grid" | "spiral" | "wave"</li>
              <li>• <code>size</code>: "small" | "medium" | "large"</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">TechStackWrapper Component (Images):</h4>
            <div className="bg-gray-100 rounded p-3 text-sm font-mono">
              {'<TechStackWrapper layout="sphere" showLabels={true} />'}
            </div>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• <code>layout</code>: "sphere" | "grid" | "flex" | "circular"</li>
              <li>• <code>showLabels</code>: boolean</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">🖱️ Mouse Interaction</h4>
          <p className="text-gray-600 text-sm">
            Move your mouse around the sphere to control rotation speed and direction.
            Leave the area to return to auto-rotation.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">🎯 Hover Effects</h4>
          <p className="text-gray-600 text-sm">
            Hover over individual tech icons for enhanced scaling, color changes,
            and detailed tooltips with category information.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">✨ 3D Animations</h4>
          <p className="text-gray-600 text-sm">
            Smooth 3D transforms with spring physics, floating animations,
            and ambient rotation for an engaging user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSphereDemo;