
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import MapView from "@/components/map-view";
import GradientText from "@/components/ui/gradient-text";

const monthlyDonations = [
  { month: 'Jan', donations: 4000, volunteers: 240 },
  { month: 'Feb', donations: 3000, volunteers: 221 },
  { month: 'Mar', donations: 2000, volunteers: 229 },
  { month: 'Apr', donations: 2780, volunteers: 200 },
  { month: 'May', donations: 1890, volunteers: 218 },
  { month: 'Jun', donations: 2390, volunteers: 250 },
];

const foodTypeData = [
  { name: 'Prepared Meals', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Groceries', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Bakery', value: 300, fill: 'hsl(var(--chart-3))' },
  { name: 'Canned Goods', value: 200, fill: 'hsl(var(--chart-4))' },
];

const impactData = [
    { name: 'Meals Served', value: 1200000, unit: 'meals' },
    { name: 'CO2 Saved', value: 450, unit: 'tonnes' },
    { name: 'Water Saved', value: 800, unit: 'kL' },
];

const chartConfig = {
  donations: { label: "Donations (kg)" },
  volunteers: { label: "Active Volunteers" },
};

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              <GradientText>Analytics Dashboard</GradientText>
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {impactData.map(item => (
                    <Card key={item.name}>
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{item.value.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{item.unit}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
                <Card className="lg:col-span-3 rounded-2xl">
                    <CardHeader>
                        <CardTitle>Platform Growth</CardTitle>
                        <CardDescription>Monthly donations and volunteer activity.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyDonations}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" tickLine={false} axisLine={false} tickMargin={8} />
                                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" tickLine={false} axisLine={false} tickMargin={8} />
                                    <Tooltip content={<ChartTooltipContent indicator="dot" />} />
                                    <Legend />
                                    <Line yAxisId="left" type="monotone" dataKey="donations" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                                    <Line yAxisId="right" type="monotone" dataKey="volunteers" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 rounded-2xl">
                    <CardHeader>
                        <CardTitle>Donation by Food Type</CardTitle>
                        <CardDescription>Distribution of different food categories.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <ChartContainer config={{}} className="h-80 w-full">
                           <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Tooltip content={<ChartTooltipContent />} />
                                    <Pie data={foodTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={({cy, midAngle, innerRadius, outerRadius, percent, index}) => {
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cy + radius * Math.cos(-midAngle * (Math.PI / 180));
                                        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                        return (
                                            <text x={x} y={y} fill="white" textAnchor={x > cy ? 'start' : 'end'} dominantBaseline="central">
                                            {`${(percent * 100).toFixed(0)}%`}
                                            </text>
                                        );
                                    }}>
                                        {foodTypeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                     <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

             <Card className="rounded-2xl">
                <CardHeader>
                    <CardTitle>Donation Hotspots</CardTitle>
                    <CardDescription>Live map of donation activities across the city.</CardDescription>
                </CardHeader>
                <CardContent className="aspect-video h-auto p-0 overflow-hidden">
                    <MapView />
                </CardContent>
            </Card>
        </div>
    );
}
