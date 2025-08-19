import { useRef } from "react";

export default function ScrollExample() {
  const containerRef = useRef(null);

  const handleScrollToEnd = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <div className="p-4">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="h-60 overflow-y-auto border rounded-md p-2"
      >
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="p-2 border-b">
            Item {i + 1}
          </div>
        ))}
      </div>

      {/* Button to scroll to bottom */}
      <button
        onClick={handleScrollToEnd}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        Scroll to End
      </button>
    </div>
  );
}
