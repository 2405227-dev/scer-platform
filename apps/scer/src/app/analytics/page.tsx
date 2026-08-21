
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, AlertTriangle, Clock, Map } from "lucide-react";

const trendData = [
  { name: "Mon", incidents: 4 },
  { name: "Tue", incidents: 3 },
  { name: "Wed", incidents: 7 },
  { name: "Thu", incidents: 2 },
  { name: "Fri", incidents: 6 },
  { name: "Sat", incidents: 12 },
  { name: "Sun", incidents: 9 },
];

const zoneData = [
  { name: "North Gate", risk: 80 },
  { name: "Block C", risk: 65 },
  { name: "Hostel Zone", risk: 45 },
  { name: "Admin", risk: 20 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-950 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Safety Intelligence</h1>
        <p className="text-neutral-500">Predictive insights and historical data analysis.</p>
      </div>

      {/* Top Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="border-l-4 border-l-red-500 shadow-sm">
          <CardContent className="p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              TOP RISK ZONE
            </div>
            <div className="text-xl font-bold">North Gate</div>
            <p className="text-xs text-neutral-500 mt-2">31% of incidents in last 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 shadow-sm">
          <CardContent className="p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold tracking-wider">
              <Clock className="w-4 h-4 text-orange-500" />
              PEAK TIME
            </div>
            <div className="text-xl font-bold">8 PM - 11 PM</div>
            <p className="text-xs text-neutral-500 mt-2">Medical incidents peak</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardContent className="p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold tracking-wider">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              RESPONSE TIME
            </div>
            <div className="text-xl font-bold">4m 12s</div>
            <p className="text-xs text-green-600 font-medium mt-2">? 14% improvement</p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500 shadow-sm">
          <CardContent className="p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold tracking-wider">
              <Map className="w-4 h-4 text-purple-500" />
              GEOFENCE VIOLATIONS
            </div>
            <div className="text-xl font-bold">12 Active</div>
            <p className="text-xs text-neutral-500 mt-2">Requires review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Incident Trends (7 Days)</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="incidents" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Risk by Zone</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={zoneData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="risk" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

