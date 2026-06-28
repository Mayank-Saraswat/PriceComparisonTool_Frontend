import React, { useState, useEffect } from "react";
import axios from "axios";
import ToolUses from "./Components/ToolUses";

function Index() {
  const [product, setProduct] = useState("");
  const [prices, setPrices] = useState({});
  const [minPrice, setMinPrice] = useState(Infinity);
  const [flipkartImageUrl, setFlipkartImageUrl] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Load search history from local storage when component mounts
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  // Helper function to clean and validate price strings
  const cleanPrice = (priceString) => {
    if (!priceString || typeof priceString !== "string") return NaN;
    try {
      const cleaned = parseFloat(
        priceString.replace("₹", "").replace(/,/g, "").trim(),
      );
      return isNaN(cleaned) || cleaned < 0 ? NaN : cleaned;
    } catch {
      return NaN;
    }
  };

  const fetchPrices = async () => {
    try {
      if (!product || product.trim() === "") {
        alert("Please enter a valid product name");
        return;
      }
      const API = import.meta.env.VITE_API_URL;

      const response = await axios.get(`${API}/prices?product=${product}`);

      // Clean prices from API response
      const amazonPrice = cleanPrice(response.data.Amazon);
      const flipkartPrice = cleanPrice(response.data.Flipkart);

      // Check if at least one price is available
      if (isNaN(amazonPrice) && isNaN(flipkartPrice)) {
        alert("Product not found. Please try a different product name.");
        return;
      }

      const cleanedPrices = {
        Amazon: amazonPrice,
        Flipkart: flipkartPrice,
      };

      // Calculate min price from valid prices only
      const validPrices = Object.values(cleanedPrices).filter((p) => !isNaN(p));
      const calculatedMinPrice =
        validPrices.length > 0 ? Math.min(...validPrices) : Infinity;

      setPrices(cleanedPrices);
      setMinPrice(calculatedMinPrice);
      setFlipkartImageUrl(response.data.Flipkart_Image_URL || "");

      // Store the search result in local storage
      const newEntry = {
        product,
        prices: cleanedPrices,
      };
      const updatedHistory = [newEntry, ...searchHistory];

      // Check if search history exceeds 40 records
      if (updatedHistory.length > 40) {
        updatedHistory.pop();
      }

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);
    } catch (error) {
      console.error("Error fetching prices:", error);
      alert("Error fetching prices. Please try again later.");
    }
  };

  const getBestPrice = () => {
    const { Amazon, Flipkart } = prices;
    let bestPricePlatform = "";

    // Handle cases where one or both prices are unavailable
    if (isNaN(Amazon) && isNaN(Flipkart)) {
      bestPricePlatform = "both unavailable";
    } else if (isNaN(Amazon)) {
      bestPricePlatform = "Flipkart";
    } else if (isNaN(Flipkart)) {
      bestPricePlatform = "Amazon";
    } else if (minPrice === Amazon && minPrice === Flipkart) {
      bestPricePlatform = "both Amazon and Flipkart";
    } else if (minPrice === Amazon) {
      bestPricePlatform = "Amazon";
    } else if (minPrice === Flipkart) {
      bestPricePlatform = "Flipkart";
    }
    return { bestPricePlatform };
  };

  const { bestPricePlatform } = getBestPrice();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    fetchPrices(); // Call fetchPrices function when form is submitted
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedHistory = isExpanded
    ? searchHistory
    : searchHistory.slice(0, 10);

  return (
    <>
      <h2 className="m-3 text-center text-5xl font-semibold text-sky-500">
        Price Comparison Tool
      </h2>
      <h2 className="p-2 mx-auto text-white text-center text-lg md:w-1/2 font-semibold">
        Track your competition in real-time, compare prices and make better
        pricing decisions. The main purpose of this price comparison tool is to
        help you monitor competitors’ prices in order to adjust your pricing
        strategy accordingly.
      </h2>
      <div className="m-5 p-10 rounded text-center bg-white shadow-2xl md:w-[60%] mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Enter product name"
            className="p-1 mr-2 mb-2 w-full h-12 md:w-2/3 border-2 border-green-600"
          />
          <button
            type="submit"
            className="py-1 px-10 h-12 bg-green-600 rounded text-white text-lg font-semibold hover:bg-green-700"
          >
            Get Prices
          </button>
        </form>

        {minPrice !== Infinity && (
          <div>
            <div className="mt-5">
              <h2>Prices comparison result (in rupees)</h2>
              <ul className="text-xl">
                <li>
                  Amazon:{" "}
                  {isNaN(prices.Amazon) ? "Not available" : `₹${prices.Amazon}`}
                </li>
                <li>
                  Flipkart:{" "}
                  {isNaN(prices.Flipkart)
                    ? "Not available"
                    : `₹${prices.Flipkart}`}
                </li>
              </ul>
            </div>

            <div className="mt-2 p-3 text-2xl text-rose-600 w-full md:w-1/2 mx-auto shadow-xl rounded-lg">
              {bestPricePlatform === "both unavailable" ? (
                <span>
                  Both prices are unavailable. Please try searching for a
                  different product.
                </span>
              ) : bestPricePlatform === "both Amazon and Flipkart" ? (
                <span>
                  Best price after comparison is the same on both Amazon and
                  Flipkart: ₹{minPrice}. <br />
                  Please consider checking other factors before making a
                  decision. Thanks for using our tool.
                </span>
              ) : (
                <span>
                  Best price after comparison: ₹{minPrice}. <br />
                  So, We recommend {bestPricePlatform} for your purchase. Thanks
                  for using our tool.
                </span>
              )}
            </div>
            {flipkartImageUrl && (
              <div>
                <img
                  src={flipkartImageUrl}
                  alt="Flipkart Product"
                  className="mt-4 mx-auto"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <ToolUses />

      {/* Display search history */}
      <div className="pt-3 pb-8">
        <h1 className="p-3 text-white text-3xl font-semibold text-center">
          Search History
        </h1>
        <div className="flex flex-wrap text-center justify-center">
          {searchHistory.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <table className="bg-white table-auto mx-auto border-collapse border border-green-800 w-2/3">
                <thead>
                  <tr>
                    <th className="border border-green-600 px-4 py-2">
                      Product
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Amazon Price
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Flipkart Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedHistory.map((entry, index) => (
                    <tr key={index}>
                      <td className="border border-green-600 px-4 py-2">
                        {entry.product}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        {isNaN(entry.prices.Amazon)
                          ? "Not available"
                          : `₹${entry.prices.Amazon}`}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        {isNaN(entry.prices.Flipkart)
                          ? "Not available"
                          : `₹${entry.prices.Flipkart}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {searchHistory.length > 10 && (
                <button
                  onClick={toggleExpand}
                  className="mt-4 py-2 px-6 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-green-600 text-white px-5 py-1 rounded">
              No search history available
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
