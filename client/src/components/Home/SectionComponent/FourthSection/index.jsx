import { Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

const provinces = [
  "कोशी",
  "मधेस",
  "वाग्मती",
  "गण्डकी",
  "लुम्बिनी",
  "कर्णाली",
  "सुदुरपश्चिम",
];

const Button = ({ children, onClick, variant = "outline" }) => {
  const styles =
    variant === "default"
      ? "bg-gray-600 text-white"
      : "border border-black text-black";
  return (
    <button
      onClick={onClick}
      className={`${styles} py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

const FourthSection = () => {
  const [selectedProvince, setSelectedProvince] = useState(provinces[6]);

  return (
    <div className="px-8">
      <hr />

      {/* Province Selection */}
      <div className="mb-6 mt-3">
        <h2 className="text-2xl font-semibold">Select Province</h2>
        <div className="flex gap-2 mt-2 overflow-auto">
          {provinces.map((province) => (
            <Button
              key={province}
              variant={selectedProvince === province ? "default" : "outline"}
              onClick={() => setSelectedProvince(province)}
            >
              {province}
            </Button>
          ))}
        </div>
      </div>
      <div className=" mx-auto p-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          {/* News Header */}
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedProvince}को विषेस समाचार
          </h1>

          {/* Cover Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pIaqzXTjfUyzBQPc6y7WgPV5pWmsgadKMA&s"
            className="w-full rounded-xl my-4 shadow-lg"
            alt="img"
          />

          {/* News Content */}
          <div className="text-gray-700 leading-7 space-y-4 ">
            <p>
              In a stunning turn of events, authorities have confirmed a major
              breakthrough in the ongoing investigation regarding...
            </p>
            <p>
              According to officials, the situation is rapidly evolving, with
              new developments expected soon. Stay tuned for more updates.
            </p>
          </div>
        </div>

        <div className="pl-5">
          {/* Related News */}
          <h2 className="text-2xl font-semibold mt-8">
           {selectedProvince}बाट सम्बन्धित समाचार
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[1, 2, 3,4,5,6].map((news) => (
              <Card key={news} className="cursor-pointer">
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Another Major Story in {selectedProvince}
                  </h3>
                  <p className="text-gray-500 text-sm">Feb 4, 2025</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
