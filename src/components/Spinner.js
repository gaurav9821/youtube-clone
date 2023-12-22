const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[40px]">
      <div className="relative w-[32px] z-[18] pointer-events-none">
        <div>
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spinner;
