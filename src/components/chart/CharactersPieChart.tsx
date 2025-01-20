"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { PieChartData } from "@/interfaces/chart-data/ChartData"

interface Props {
  chartData: PieChartData[],
  property: string
}

const chartConfig = {} satisfies ChartConfig  

export function CharactersPieChart({chartData, property}: Props) {

const totalCharacters = React.useMemo(() => {
  return chartData.reduce((acc, curr) => acc + curr.count, 0)
}, [])

  return (
    <Card className="flex flex-col p-10">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">{`Pie Chart Analysis by ${property}`}</CardTitle>
        <CardDescription className="text-xl" >Rick and Morty API Characters</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="text-lg bg-background/95 border rounded-lg shadow-lg"/>}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey={`${property}`}
              innerRadius={80}
              strokeWidth={6}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCharacters}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-xl"
                        >
                          Characters
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
