import React from 'react'

const ArticleHeadr = () => {
  return (
      <>
          <div className="bg-white   p-6 rounded-lg shadow-md max-w-2xl mx-auto border border-gray-300">
              <p className="font-montserrat leading-6 text-blue-600 text-xl">
                  <span className="font-semibold">Unlock a Premium Portfolio</span> for just{" "}
                  <span className="font-bold text-orange-600 text-2xl">₹5000</span> and receive{" "}
                  <span className="font-medium">two complimentary cards</span> — an added value of{" "}
                  <span className="text-green-700 text-xl">₹2000</span> at no extra cost!
              </p>
          </div>
      </>
  );
}

export default ArticleHeadr