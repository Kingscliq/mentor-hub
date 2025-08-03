
const LoadingBar = () => {
  return (
    <div className={`relative top-0 left-0 w-full h-[3px] z-50 transition-opacity duration-300 opacity-100 `}>
      <div className="h-full bg-[#edf0ed] horizontal-effect"></div>
    </div>
  );
};

export default LoadingBar