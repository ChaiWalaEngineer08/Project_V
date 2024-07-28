"use client";
import { Chart, registerables } from 'chart.js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Label from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Separator from "./ui/separator";
import Switch from "./ui/switch";
import {
  ChevronDown,
  FileCode2,
  Flag,
  Info,
  Table2,
  TriangleAlert,
} from "lucide-react";
import DataChart from "./DataChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table";
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);
// Data for the chart
const labels = [
  "Q1 2022",
  "Q1 2023",
  "Q2 2022",
  "Q2 2023",
  "Q3 2022",
  "Q3 2023",
  "Q4 2022",
  "Q4 2023",
  "Q1 2024",
  "Q2 2024",
  "Q3 2024",
  "Q4 2024",
  "Q1 2025",
  "Q2 2025",
  "Q3 2025",
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
];
const solidLine1Data = [
  750000,
  550000,
  580000,
  540000,
  440000,
  720000,
  700000,
  600000,
];
const solidLine2Data = [
  , , , , 720000, 690000, 630000, 650000, 580000
];
const solidLine3Data = [
  530000, 550000, 570000, 590000, 610000, 630000, 650000, 670000, 690000
];
const dashedLine1Data = [
  , , , , , , , , , 640000, 640000, 550000, 520000, 590000, 610000, 630000, 590000, 570000
];
const dashedLine2Data = [
  , , , , , , , , , , , 550000, 500000, 590000
];
const dashedLine3Data = [
  , , , , , , , , 400000, 420000, 450000, 420000, 430000, 440000, 460000, 440000, 570000, 590000
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "AI FORECAST",
      data: solidLine1Data,
      borderColor: "rgba(0, 255, 0, 1)",
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
    },
    {
      label: "FINAL FORECAST",
      data: solidLine2Data,
      borderColor: "rgba(255, 255, 0, 1)",  
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
    },
    {
      label: "CONSUMPTION",
      data: solidLine3Data,
      borderColor: "rgba(75, 192, 192, 1)", 
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
    },
    {
      label: "Ai Forecast",
      data: dashedLine1Data,
      borderColor: "rgba(0, 255, 0, 1)",
      borderWidth: 1,
      borderDash: [5, 5], // Define a dashed line
      fill: false,
      pointRadius: 0,
    },
    {
      label: "Final Forecast",
      data: dashedLine2Data,
      borderColor: "rgba(255, 255, 0, 1)", 
      borderWidth: 1,
      borderDash: [5, 5], 
      fill: false,
      pointRadius: 0,
    },
    {
      label: "Previous Quarter Final Forecast",
      data: dashedLine3Data,
      borderColor: "rgba(75, 192, 192, 1)", 
      background: "rgba(75, 192, 192, 1)", 
      borderWidth: 1,
      borderDash: [5, 5], 
      fill: false,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  showLines: true,
  axis: {
    color: "#fff",
  },
  layout: {
    padding: {
      top: 100, // Adjust the top padding to move the chart content down
      bottom: 110, // Adjust the bottom padding as needed
  }},
  scales: {
    x: {
      id: "x-axis",
      display: true,
      color: "#fff",
      grid: {
        display: true,
        lineWidth: 2,
        tickColor: "#fff",
        drawOnChartArea: true,
      },
      ticks: {
        padding: 10,
        minRotation: 0,
        maxRotation: 0,
      },
      border: {
        color: '#00BFFF', 
        width: 2, 
      },
    },
    y: {
      beginAtZero: true,
      max: 900000,
      display: true,
      grid: {
        display: true,
        lineWidth: 1,
        tickColor: "#fff",
        drawOnChartArea: true,
      },
      ticks: {stepSize: 1000, // Interval between ticks (adjust as needed)
        maxTicksLimit: 10,

        callback: function (value) {
          return value / 1000;
        },
        padding: 5,
      },
      border: {
        color: '#00BFFF', // Light green color for the y-axis line
        width: 2, // Width of the y-axis line
      },
      title: {
        display: true,
        padding: 15,
        text: "CONSUMPTION, (FT: IN THOUSANDS)",
      },
    },
  },
  plugins: {
    annotation: {
      annotations: [
        ...labels.map((label, index) => ({
          type: 'line',
          borderColor: '#00BFFF', // Sparkle blue light color
          borderWidth: 1, // Solid line width
          scaleID: 'x',
          value: index, // Using index for vertical lines
          borderDash: [], // Solid line
          label: {
            display: false
          },
        })),
        {
          type: 'line',
          borderColor: '#FFFFFF', // Color of the dashed line
          borderWidth: 2, // Width of the dashed line
          borderDash: [10, 5], // Dashed line pattern
          scaleID: 'x',
          value: 8.5, // Position between Q1 2024 (index 8) and Q2 2024 (index 9)
          label: {
            display: false
          },
        }
      ],
    },
  },
};

export const PanelTwo = () => {
  return (
    <div className="bg-[#0A1015] grow">
      <div className="bg-[#12262F] flex items-center gap-4 text-white">
        <div className="flex items-center gap-4 p-2 ml-8">
          <TriangleAlert className="text-[#F6AE4D] ml-4" />
          <span className="font-medium text-lg">Sample Stack</span>
        </div>
        <Separator orientation="vertical" className="h-5 w-[1px] bg-white/30" />
        <div className="text-xs flex items-end gap-6">
          <p>
            Stack id: <span className="text-sm">099837465721</span>
          </p>
          <Table2 className="text-[#5DE8CF] cursor-pointer" size={14} />
        </div>
        <div className="bg-[#193D4E] rounded-md m-2 flex">
          <div className="flex flex-col justify-start p-2 w-[180px]">
            <p className="font-extralight uppercase text-xs">Forecast</p>
            <p>89%</p>
          </div>
          <div className="flex flex-col justify-start p-2 w-[180px]">
            <p className="font-extralight uppercase text-xs">Forecast</p>
            <p>89%</p>
          </div>
        </div>
        <Flag className="cursor-pointer text-white/20" />
      </div>
      <div className="text-white bg-[#12262f] mt-2 flex items-center p-4">
        <div className="flex items-center gap-4">
          <FileCode2 />
          <p className="font-thin text-sm">SPECIAL REQUIREMENTS</p>
        </div>
        <div className="flex items-center space-x-2 ">
          <Switch id="include" className="scale-75" />
          <Label htmlFor="include">Include</Label>
        </div>
        <Separator
          orientation="vertical"
          className="h-5 w-[1px] ml-4 bg-white/30"
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-6">
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              Menu item 1
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Menu item 2
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Menu item 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-white mt-2 flex items-center p-2">
        <p className="text-sm">Forecast Horizon</p>
        <Select>
          <SelectTrigger className="w-[180px] bg-transparent ml-4">
            <SelectValue
              placeholder="Latest Issue"
              defaultValue={"latest-issue"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest-issue" defaultChecked={true}>
              Latest Issue
            </SelectItem>
            <SelectItem value="old-to-new">Old to new</SelectItem>
            <SelectItem value="new-to-old">New to Old</SelectItem>
          </SelectContent>
        </Select>
        <Info className="mx-4 text-[#61F4D8]" size={16} />
        <Separator
          orientation="vertical"
          className="h-6 w-[1px] bg-white/30 mx-2"
        />
        <div className="flex items-center space-x-2 ">
          <Switch id="confidence-interval" className="scale-75" />
          <Label htmlFor="confidence-interval" className="text-xs">
            SHOW CONFIDENCE INTERVAL
          </Label>
        </div>
      </div>
      <div  className="flex-grow flex flex-col">
      <div className="flex-grow-0" style={{ height: "73vh" , marginTop: "-110px" }}> 
      <DataChart
        labels={labels}
        solidLine1Data={solidLine1Data}
        solidLine2Data={solidLine2Data}
        solidLine3Data={solidLine3Data}
        dashedLine1Data={dashedLine1Data}
        dashedLine2Data={dashedLine2Data}
        dashedLine3Data={dashedLine3Data}
        data={data}
        options={{ ...options}}
        style={{ height: "100%", width: "100%" }} // Reduced height
      />
      </div>
      
      <div className="flex-grow-0 " style={{ height: "19vh", overflow: "hidden",marginTop: "-109px" }}>
      <Table className >
        <TableHeader></TableHeader>
        <TableBody>
          <TableRow className="bg-transparent text-white">
            <TableCell>Data 1</TableCell>
            <TableCell></TableCell>
            {dashedLine1Data.map((data, idx) => (
              <TableCell key={idx} className="px-2">
                {data || ""}
              </TableCell>
            ))}
          </TableRow>
          <TableRow className="bg-transparent text-white">
            <TableCell>Data 2</TableCell>
            <TableCell></TableCell>
            {dashedLine2Data.map((data, idx) => (
              <TableCell key={idx} className="px-2">
                {data || ""}
              </TableCell>
            ))}
          </TableRow>
          <TableRow className="bg-transparent text-white">
            <TableCell>Data 3</TableCell>
            <TableCell></TableCell>
            {dashedLine3Data.map((data, idx) => (
              <TableCell key={idx} className="px-2">
                {data || ""}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </div>
    // </div>
  );
};
