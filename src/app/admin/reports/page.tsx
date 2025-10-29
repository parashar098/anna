
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar as CalendarIcon, FileText } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import React from "react";
import { useToast } from "@/hooks/use-toast";
import GradientText from "@/components/ui/gradient-text";

export default function ReportsPage() {
    const [dateRange, setDateRange] = React.useState<Date | undefined>();
    const { toast } = useToast();

    const handleGenerateReport = () => {
        toast({
            title: "Report Generated",
            description: "Your report is being downloaded.",
        });
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              <GradientText>Generate Reports</GradientText>
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle>Generate a New Report</CardTitle>
                        <CardDescription>Select the criteria for the report you want to generate.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Report Type</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a report type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="donations">Donation Summary</SelectItem>
                                    <SelectItem value="volunteers">Volunteer Activity</SelectItem>
                                    <SelectItem value="ngos">NGO Performance</SelectItem>
                                    <SelectItem value="impact">Impact Report</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Date Range</label>
                             <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !dateRange && "text-muted-foreground"
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {dateRange ? format(dateRange, "PPP") : <span>Pick a date range</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={dateRange}
                                    onSelect={setDateRange}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium">Format</label>
                            <Select defaultValue="pdf">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select file format" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pdf">PDF</SelectItem>
                                    <SelectItem value="csv">CSV</SelectItem>
                                    <SelectItem value="xlsx">XLSX</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full" onClick={handleGenerateReport}>
                            <Download className="mr-2 h-4 w-4" />
                            Generate & Download
                        </Button>
                    </CardContent>
                </Card>

                <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle>Previously Generated</CardTitle>
                        <CardDescription>Download reports you've generated in the past.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {['Q1_Donation_Summary.pdf', 'May_Volunteer_Activity.csv', '2023_Impact_Report.pdf'].map(report => (
                            <div key={report} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-muted-foreground" />
                                    <span className="font-medium">{report}</span>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <Download className="h-5 w-5" />
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
