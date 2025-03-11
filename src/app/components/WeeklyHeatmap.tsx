xml
<project>
  <name>GitHub Activity Visualizer</name>
  <framework>next-on-pages</framework>
  <overview>
    <user-summary>
      This app visualizes a user's GitHub activity as a weekly heatmap, similar to GitHub's contribution graph. Users will input their GitHub username, and the app will fetch and display their commit history for the past year.
    </user-summary>
    <technical-metadata>
      The application will use Next.js (deployed via next-on-pages on Cloudflare) for the frontend. It will integrate with the GitHub API to fetch a user's commit history. The backend logic will calculate the commit counts for each day of the week over the past year. Styling will be done with Tailwind CSS. Charting will utilize Recharts library, and the whole thing will be client-side.
    </technical-metadata>
      <styling>
        The styling uses Tailwind CSS, and aims for a clean, visually appealing representation of the heatmap data. Color scheme focuses on shades of green for commit intensity.
      </styling>
  </overview>
</project>

<component>
  <path>src/app/components/GithubUsernameInput.tsx</path>
  <description>
    "use client";
    This component provides a text input field for the user to enter their GitHub username.

    - Purpose:  To capture the user's GitHub username and trigger the data fetching process.
    - Prop Interface:
      - `onUsernameSubmit`:  A function that takes the GitHub username (string) as an argument and is called when the user submits the form.
    - State Management:  useState for the input field value.
    - Event Handling:  onSubmit for the form, onChange for the input field.
    - Styling: Tailwind CSS for styling (input field, button, and basic layout).
    - Animation: None.
    - Edge Compatibility: Uses client-side functionality ("use client").
  </description>
</component>

<component>
  <path>src/app/components/WeeklyHeatmap.tsx</path>
  <description>
    "use client";
    This component displays the GitHub activity as a weekly heatmap using Recharts.

    - Purpose:  To visualize the commit data in a calendar-like heatmap format.
    - Prop Interface:
      - `data`:  An array of objects, where each object represents a day and contains the date and commit count (e.g., `{ date: '2024-01-01', count: 5 }`).
    - State Management: None.
    - Charting:  Uses the Recharts library to create the heatmap.  Each rectangle in the heatmap represents a day, and the color intensity indicates the commit count.
    - Styling:  Tailwind CSS for overall layout and Recharts for chart styling.
    - Animation:  None.
    - Data Transformation: The component receives data formatted as an array of `{ date: string, count: number }` objects.
    - Color Scheme: Use different shades of green to represent the commit intensity.
    - Accessibility: Ensure the component is accessible by providing appropriate ARIA attributes.
    - Responsiveness: Make the chart responsive to different screen sizes, using ResponsiveContainer from Recharts.
    - Mock Data: A `generateMockData` function that returns an array of objects, as described above, for testing the component in isolation.
    - Edge Compatibility: Uses client-side functionality ("use client").
  </description>
</component>

<page>
  <path>src/app/page.tsx</path>
  <description>
    "use client";
    This is the main page of the application where users input their GitHub username and view the generated heatmap.

    - Layout:  A single-column layout with a header, input area (using the GithubUsernameInput component), and heatmap area (using the WeeklyHeatmap component). Responsive design using Tailwind CSS classes.
    - State Management:  useState hook for managing the GitHub username input and the commit data. Also use a loading and error state.
    - API Integration:  Fetch data from the GitHub API when the username is submitted.  This involves constructing the appropriate API URL and handling the response.
    - Data Transformation:  Transform the raw GitHub API response into the format required by the WeeklyHeatmap component (an array of `{ date: string, count: number }` objects).
    - Error Handling: Display appropriate error messages if the API request fails or if the user has no commit data.
    - Accessibility: Ensure the page is accessible.
    - Animation: Use Framer Motion for loading and data transitions.
  </description>
</page>