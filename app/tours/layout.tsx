import React from 'react'

interface ToursLayoutProps {
    children: React.ReactNode; // Correctly define children as a prop
}

export default function ToursLayout({children}:ToursLayoutProps) {
  return (
    <div>
        <header className="py-2 w-1/2 bg-slate-500 rounded mb-4">
            <h1 className="text-3xl text-white text-center">
                Nested Layout
            </h1>
        </header>
        {children}
    </div>
  )
}
