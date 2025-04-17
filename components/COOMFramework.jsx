import React from 'react';

const COOMFramework = () => {
  return (
    <div className="relative w-full h-full bg-soket-blue p-6 flex flex-col">

      {/* Framework Title */}
      <div className="bg-white rounded-lg p-4 mb-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-soket-blue"></div>
            <h1 className="text-sm font-semibold text-blue-600 m-0">The COOM Framework</h1>
          </div>
          <a href="https://github.com/soketlabs/coom" className="text-blue-600 text-xs font-light hover:underline">
            KNOW MORE →
          </a>
        </div>
      </div>

      {/* Framework Diagram */}
      <div className="flex-1 grid grid-cols-2 gap-4 z-10">
        <div className="relative bg-blue-500/50 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
          <span className="text-white text-xs font-light">open source</span>
        </div>
        <div className="relative bg-blue-500/50 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
          <span className="text-white text-xs font-light">scalable</span>
        </div>
        <div className="relative bg-blue-500/50 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
          <span className="text-white text-xs font-light">optimisations</span>
        </div>
        <div className="relative bg-blue-500/50 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
          <span className="text-white text-xs font-light">language models</span>
        </div>
      </div>
    </div>
  );
};

export default COOMFramework; 