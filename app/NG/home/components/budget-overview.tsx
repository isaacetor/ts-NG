'use client'

import Image from 'next/image'

export default function BudgetOverview() {
  const budgetItems = [
    { name: 'Food', amount: '₦39,900', change: '-8%', icon: '🍔', color: 'bg-purple-100' },
    { name: 'Rent', amount: '₦250,000', change: '0%', icon: '🏠', color: 'bg-purple-100' },
    { name: 'Transport', amount: '₦75,000', change: '+12%', icon: '🚗', color: 'bg-teal-100' },
    { name: 'Subscriptions', amount: '₦35,000', change: '+5%', icon: '📦', color: 'bg-yellow-100' },
    { name: 'Transfers', amount: '₦520,100', change: '-3%', icon: '↔️', color: 'bg-teal-100' },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-sm h-80 md:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content%201%20image-sZgr6oEQ49hGcOj4mGGkUOWj4Jyeed.png"
                alt="Budget Overview Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Not Just Another Finance App</h2>
              <p className="text-lg text-gray-700 mb-6">Nigeria has apps for:</p>
            </div>

            <ul className="space-y-4">
              <li className="text-xl text-gray-800">
                <span className="font-bold">•</span> Saving
              </li>
              <li className="text-xl text-gray-800">
                <span className="font-bold">•</span> Loans
              </li>
              <li className="text-xl text-gray-800">
                <span className="font-bold">•</span> Payments
              </li>
            </ul>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-black">₦920,000</h3>
                <span className="text-gray-500 text-sm">total</span>
              </div>

              <div className="space-y-4">
                {budgetItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-gray-800">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{item.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                          style={{ width: `${(parseInt(item.amount.replace(/[^0-9]/g, '')) / 920000) * 100}%` }}
                        />
                      </div>
                      <span className={`text-sm font-semibold ${item.change.includes('+') ? 'text-red-500' : 'text-green-500'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-800">
              But none help you build complete financial stability. <br />
              <span className="font-bold">TrybeSave changes that.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
