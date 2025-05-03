"use client";
import Image from "next/image";

export default function EnviornmentalSection() {
  return (
    <section className="bg-[#F3FBFC] container px-20 pt-10 mx-auto rounded">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Left Side - Track */}
            <div className="md:w-1/3 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Track</h2>
            <p className="text-gray-600">
                Track the power of your digital visiting card with comprehensive analytics.
            </p>
            <div className="mt-4 px-10">
                <Image
                src="/images/graph.png"
                width={350}
                height={200}
                alt="digibcard Graph"
                className="rounded"
                />
            </div>
            </div>

            {/* Right Side - Impact */}
            <div className="md:w-2/3 p-6 bg-green-50">
                <h2 className="text-2xl font-bold text-gray-800">Impact</h2>
                <p className="text-gray-700 mb-6">
                    Environmental impact of not printing 1,000 business cards (Approx) by 10 Users Of digital visiting cards created online with digibcard. Every digibcard card shared has helped save:
                </p>

                <div className="grid grid-cols-1 px-40 pt-10 pb-10 sm:grid-cols-2 gap-20">
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
