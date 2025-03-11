xml
<project>
  <name>Sales Dashboard</name>
  <framework>next-on-pages</framework>
  <overview>
    A sales dashboard application to visualize sales data, display key metrics, and provide insights into sales performance over time and by various dimensions (e.g., product category, region).  This is for internal use by the sales team.
  </overview>
</project>

<component>
  <path>src/app/components/SalesData.ts</path>
  <description>
    Defines the shape of the data with typescript. interface SalesRecord { date: string; product: string; region: string; sales: number; } and provides mock data `const mockSalesData: SalesRecord[] = [...]` which returns sample sales records. Includes product categories of "Electronics", "Clothing", and "Home Goods" and regions "North", "South", "East", and "West". The dates should span from the beginning of the current year until the current date.
  </description>
</component>

<component>
  <path>src/app/components/TotalSales.tsx</path>
  <description>
    "use client";
    A component that displays the total sales value.

    - Purpose: To compute and display the sum of all sales.
    - Prop Interface:
      - `salesData`: An array of SalesRecord objects.
    - State Management: None
    - Mock Event Handling: None
    - Style: Tailwind CSS for styling.
    - Animation: A subtle fade-in animation using Framer Motion.
  </description>
</component>

<component>
  <path>src/app/components/SalesTrendChart.tsx</path>
  <description>
    "use client";
    A line chart component showing sales trends over time.

    - Purpose: To visualize sales data as a line chart.
    - Prop Interface:
      - `salesData`: An array of SalesRecord objects.
    - Library: recharts
    - State Management: None
    - Mock Event Handling: None
    - Style: Tailwind CSS for chart container, colors will be "red", "blue", and "green".
     - Chart should render axis labels and tooltips for each data point.
  </description>
</component>

<component>
  <path>src/app/components/RegionalSalesBreakdown.tsx</path>
  <description>
    "use client";
    A pie chart component displaying the sales breakdown by region.
    - Purpose: To visualize the distribution of sales across different regions.
    - Prop Interface:
      - `salesData`: An array of SalesRecord objects.
    - Library: recharts
    - State Management: None
    - Mock Event Handling: None
    - Style: Tailwind CSS for the container, colors will be "yellow", "purple", and "orange".
     - Chart should render labels and tooltips for each data point.
  </description>
</component>

<component>
    <path>src/app/components/ProductCategorySales.tsx</path>
    <description>
      "use client";
      A bar chart component showing sales by product category.
      - Purpose: To visualize the sales performance of each product category.
      - Prop Interface:
        - `salesData`: An array of SalesRecord objects.
      - Library: recharts
      - State Management: None
      - Mock Event Handling: None
      - Style: Tailwind CSS for styling. Chart should have a gradient color.
      - Chart should render labels and tooltips for each data point.
    </description>
  </component>

<component>
  <path>src/app/components/TimeOfDayChart.tsx</path>
  <description>
    "use client";
    A bar chart component displaying sales by time of day. Since this is mock data, assume all sales happen between 9AM and 5PM.

    - Purpose: To visualize the sales distribution throughout the day.
    - Prop Interface:
      - `salesData`: An array of SalesRecord objects.
    - Library: recharts
    - State Management: None
    - Mock Event Handling: None
    - Style: Tailwind CSS for styling. Chart should use a cyan color scheme.
    - Chart should render labels and tooltips for each data point.
  </description>
</component>