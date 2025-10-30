import React from "react";
import {Star, TrendingUp, Award } from 'lucide-react';
import { useAddContext } from "../Context/ContextProvider";
import { AnimatedNumber } from "../Animate/AnimatedNumber";
export const StatsBanner = () => {
  const { isDark } = useAddContext();
  const stats = [
    { icon: TrendingUp, label: 'Products', value: 12, suffix: '+' },
    { icon: Award, label: 'Reviews', value: 2500, suffix: '+' },
    { icon: Star, label: 'Rating', value: 4.8, suffix: '/5' },
  ];

  return (
    <div className={`${
      isDark ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
    } rounded-xl p-6 mb-8 shadow-xl`}>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <stat.icon className="w-8 h-8 text-white mx-auto mb-2 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
            <div className="text-2xl font-bold text-white">
              <AnimatedNumber value={stat.value} />{stat.suffix}
            </div>
            <div className="text-sm text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
