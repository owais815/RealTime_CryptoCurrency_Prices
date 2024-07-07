// import React, { useState, useEffect } from "react";

// const Crypto = () => {
//   const [tickers, setTickers] = useState([]);

//   const fetchCryptoData = async () => {
//     const url = "https://coingecko.p.rapidapi.com/exchanges/binance";
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "80f943785emsha73fabc6d710757p1063ffjsn2d2148dbfc64",
//         "x-rapidapi-host": "coingecko.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       if (result.tickers) {
//         setTickers(result.tickers);
//       } else {
//         setTickers([]); // Handle the case where 'tickers' is not present in the response
//       }
//     } catch (error) {
//       console.error(error);
//       setTickers([]); // Set an empty array on error to avoid undefined issues
//     }
//   };

//   useEffect(() => {
//     fetchCryptoData();
//   }, []);

//   return (
//     <div className="w-full h-auto px-8 flex-center bg-crypto-bg">
//       <div className="text-center ">
//         <h1 className="text-4xl text-left pt-8 text-white font-bold">Crypto Coins Prices</h1>
//         <p className="text-white text-left py-2 pb-8 font-bold">Real-time Cryptocurrency prices by Market Cap</p>
//       </div>
//       <button
//         onClick={fetchCryptoData}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//       >
//         Fetch Latest Data
//       </button>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 text-2xl border-b text-right text-white py-2">#</th>
//             <th className="px-4 text-2xl border-b text-left text-white py-2">Name</th>
//             <th className="px-4 text-2xl border-b text-right text-white py-2">Price</th>
//             <th className="px-4 text-2xl border-b text-center text-white py-2">Volume</th>
//             <th className="px-4 text-2xl border-b  text-white py-2">Trust Score</th>
//             <th className="px-4 text-2xl border-b text-left text-white py-2">Market Cap</th>
//             <th className="px-4 text-2xl border-b text-left text-white py-2">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tickers.length > 0 ? (
//             tickers.map((ticker, index) => (
//               <tr className="hover:bg-gray-800 text-sm" key={index}>
//                 <td className="px-4 text-blue-500 my-2 text-right py-8">{index + 1}</td>
//                 <td className="px-4 text-white my-2 py-8">{ticker.base}</td>
//                 <td className="px-4 text-white my-2 text-right py-8">{"$ " + ticker.last}</td>
//                 <td className="px-4 text-white my-2  text-center py-8">{ticker.volume}</td>
//                 <td className="px-4  text-green-400 text-center my-2 py-8">{ticker.trust_score}</td>
//                 <td className="px-4 text-white my-2 py-8">{ticker.converted_volume?.usd + " USD" || "N/A"}</td>
//                 <td className="px-4 text-white my-2 py-8">{ticker.timestamp}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className=" px-4 py-8 text-white text-center">
//                 Loading...Please thora Wait Ki jeay Data Raasty Main ha
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Crypto;

import React, { useState, useEffect, useCallback } from "react";

const Crypto = () => {
  const [tickers, setTickers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    const url = "https://coingecko.p.rapidapi.com/exchanges/binance";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "80f943785emsha73fabc6d710757p1063ffjsn2d2148dbfc64",
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
      },
    };

    setLoading(true);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.tickers) {
        setTickers(result.tickers);
      } else {
        setTickers([]); // Handle the case where 'tickers' is not present in the response
      }
    } catch (error) {
      console.error(error);
      setTickers([]); // Set an empty array on error to avoid undefined issues
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  // Using useCallback to memoize the function to avoid unnecessary re-renders
  const handleFetchClick = useCallback(() => {
    console.log("Button clicked, fetching data...");
    fetchCryptoData();
  }, []);

  return (
    <div className="w-full h-auto min-h-screen px-4 sm:px-8 flex-center bg-crypto-bg">
      <div className="text-center ">
        <h1 className="text-2xl sm:text-4xl text-left pt-4 sm:pt-8 text-white font-bold">
          Crypto Coins Prices
        </h1>
        <p className="text-sm sm:text-base text-white text-left py-2 pb-4 sm:pb-8 font-bold">
          Real-time Cryptocurrency prices by Market Cap
        </p>
      </div>
      <button
        onClick={handleFetchClick}
        className="mb-4 px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Latest Data
      </button>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-right text-white py-1 sm:py-2">
              #
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-left text-white py-1 sm:py-2">
              Name
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-right text-white py-1 sm:py-2">
              Price
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-center text-white py-1 sm:py-2">
              Volume
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-left text-white py-1 sm:py-2">
              Trust Score
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-left text-white py-1 sm:py-2">
              Market Cap
            </th>
            <th className="px-2 sm:px-4 text-lg sm:text-2xl border-b text-left text-white py-1 sm:py-2">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="7"
                className="px-2 sm:px-4 py-2 sm:py-4 text-white text-center"
              >
                Loading...Please wait while the data is being fetched.
              </td>
            </tr>
          ) : tickers.length > 0 ? (
            tickers.map((ticker, index) => (
              <tr className="hover:bg-gray-800 text-xs sm:text-sm" key={index}>
                <td className="px-2 sm:px-4 text-blue-500 my-1 sm:my-2 text-right py-2 sm:py-4">
                  {index + 1}
                </td>
                <td className="px-2 sm:px-4 text-white my-1 sm:my-2 py-2 sm:py-4">
                  {ticker.base}
                </td>
                <td className="px-2 sm:px-4 text-white my-1 sm:my-2 text-right py-2 sm:py-4">
                  {"$ " + ticker.last}
                </td>
                <td className="px-2 sm:px-4 text-white my-1 sm:my-2 text-center py-2 sm:py-4">
                  {ticker.volume}
                </td>
                <td className="px-2 sm:px-4 text-green-400 text-center my-1 sm:my-2 py-2 sm:py-4">
                  {ticker.trust_score}
                </td>
                <td className="px-2 sm:px-4 text-white my-1 sm:my-2 py-2 sm:py-4">
                  {ticker.converted_volume?.usd + " USD" || "N/A"}
                </td>
                <td className="px-2 sm:px-4 text-white my-1 sm:my-2 py-2 sm:py-4">
                  {ticker.timestamp}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="px-2 sm:px-4 py-2 sm:py-4 text-white text-center"
              >
                No data available. please press it again after few seconds.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
