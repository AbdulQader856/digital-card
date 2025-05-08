import Image from "next/image";

export default function EnviornmentalSection() {
  return (
    <section className="bg-[#F3FBFC] px-4 sm:px-6 lg:px-20 py-10 rounded">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden max-w-7xl mx-auto">
        
        {/* Track Section */}
        <div className="md:w-1/3 p-6 space-y-4 bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Track</h2>
          <p className="text-gray-600">
            Track the power of your digital visiting card with comprehensive analytics.
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <Image
              src="/images/graph.png"
              width={350}
              height={200}
              alt="digibcard Graph"
              className="rounded w-full max-w-[300px] sm:max-w-[350px]"
            />
          </div>
        </div>

        {/* Impact Section */}
        <div className="md:w-2/3 p-6 bg-green-50">
          <h2 className="text-2xl font-bold text-gray-800">Impact</h2>
          <p className="text-gray-700 mb-6">
            Environmental impact of not printing 1,000 business cards (approx.) by 10 users of digital visiting cards created online with Digibcard. Every digibcard card shared has helped save:
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Tree */}
            <div className="flex items-center">
              <Image
                src="/images/icons/tree.png"
                width={48}
                height={48}
                alt="Tree Icon"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">1</h2>
                <p className="text-sm text-gray-600">Tree</p>
              </div>
            </div>

            {/* Waste */}
            <div className="flex items-center">
              <Image
                src="/images/icons/trash.png"
                width={48}
                height={48}
                alt="Trash Icon"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">150</h2>
                <p className="text-sm text-gray-600">Reduce Waste in KG</p>
              </div>
            </div>

            {/* Water */}
            <div className="flex items-center">
              <Image
                src="/images/icons/water.png"
                width={48}
                height={48}
                alt="Water Icon"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">1,000</h2>
                <p className="text-sm text-gray-600">Liters Of Water</p>
              </div>
            </div>

            {/* CO2 */}
            <div className="flex items-center">
              <Image
                src="/images/icons/Carbon.png"
                width={48}
                height={48}
                alt="Carbon Icon"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">10.6</h2>
                <p className="text-sm text-gray-600">CO2 emission in KG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
