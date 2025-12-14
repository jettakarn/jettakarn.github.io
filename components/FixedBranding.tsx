const FixedBranding = () => {
  return (
    <div 
      className="fixed top-0 left-0 z-50 p-6 sm:p-8" 
    >
      <div className="flex flex-col space-y-[-0.25rem]">
        
        <div className="w-16 h-1 bg-yellow-400 mb-2">
            <div className="h-full bg-gradient-to-r from-white to-yellow-400"></div>
        </div>
        
        <p className="text-xl sm:text-2xl font-normal tracking-wide">
          Jettakarn
        </p>

        <p className="text-3xl sm:text-4xl font-bold tracking-wider">
          Khamwai
        </p>
      </div>
    </div>
  );
};

export default FixedBranding;