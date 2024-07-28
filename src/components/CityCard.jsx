// CityCard.jsx
"use client";

import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card } from "./ui/card";
import { Suspense } from "react";
import { LineChart } from "./LineWidget";
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
} from "./ui/tooltip";
import { useNavigate } from "react-router-dom";

const CityCard = ({ city, absolute_value, relative_value }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="p-2 min-w-[260px] bg-transparent gradient_border text-white border-2 rounded-lg"
      onClick={() => {
        navigate("/forecast");
      }}
    >
      <h1 className="mb-4">{city}</h1>
      <div className="mb-4">
        <p className="text-xs mb-1">Forecast</p>
        <div className="flex items-center justify-between">
          <p className="text-lg">{absolute_value}M</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="h-[40px] w-[80px]">
                    <LineChart />
                  </div>
                </Suspense>
              </TooltipTrigger>
              <TooltipContent>This is a Forecast Graph</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ArrowUp size={16} className="text-green-400" />
        </div>
      </div>
      <div>
        <p className="text-xs mb-1">Forecast</p>
        <div className="flex items-center justify-between">
          <p className="text-lg">{relative_value}%</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="h-[40px] w-[80px]">
                    <LineChart />
                  </div>
                </Suspense>
              </TooltipTrigger>
              <TooltipContent>This is a Forecast Graph</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ArrowDown size={16} className="text-red-400" />
        </div>
      </div>
    </Card>
  );
};

export default CityCard;
