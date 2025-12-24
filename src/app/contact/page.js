"use client";

import DecryptedText from "../../components/DecryptedText";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">

      {/* Dialog box centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto max-w-xl w-full mx-4 p-6 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">

    

          {/* Your DecryptedText Examples */}
          <div className="mt-5 space-y-3">
           

            {/* Example 3 */}
            <DecryptedText
              text="Dev is currently debugging the universe — please try again later."
              revealDirection="start"
              sequential={true}
              speed={100}
              animateOn="view"
              className="text-gray-900 dark:text-white"
              encryptedClassName="text-gray-500"
            />

          </div>
        </div>
      </div>

    </div>
  );
}
