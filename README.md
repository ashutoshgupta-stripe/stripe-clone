# Cactus Practice Revenue Recognition Dashboard

A modern, responsive dashboard replicating the Revenue Recognition interface with a clean design and interactive features.

## Features

### 🎨 Modern UI Design
- Clean, professional interface matching the reference design
- Responsive layout that works on desktop, tablet, and mobile
- Modern color scheme with proper contrast ratios
- Smooth animations and transitions

### 📊 Data Display
- Interactive data table showing accounting periods
- Status badges with color-coded statuses (Open/Closed)
- Sortable columns and hover effects
- Real-time search functionality test

### 🧭 Navigation
- Fixed header with search bar and user controls
- Collapsible sidebar navigation with sections:
  - Main navigation (Home, Balances, Transactions, etc.)
  - Shortcuts (Fraud tools, Terminal)
  - Products (Connect, Payments, Billing, etc.)
  - Developer tools
- Tab navigation for different views
- Mobile-responsive hamburger menu

### ⚡ Interactive Features
- Clickable navigation items with active states
- Expandable sidebar sections
- Tab switching functionality
- Search filtering
- Mobile sidebar toggle
-  Loading states with animations

## File Structure

```
testproject/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript functionality and interactivity
└── README.md          # This documentation file
```

## Setup Instructions

1. **Open the dashboard:**
   - Simply open `index.html` in any modern web browser
   - No server setup required - it's a static web application

2. **Browser compatibility:**
   - Chrome, Firefox, Safari, Edge (latest versions)
   - Mobile browsers (iOS Safari, Chrome Mobile)

## Features Included

### Header
- **Logo:** Cactus Practice branding with green seedling icon
- **Search Bar:** Functional search with real-time filtering
- **User Controls:** Notification, help, settings, and user avatar icons

### Sidebar Navigation
- **Main Navigation:** Home, Balances, Transactions, Directory, Product catalog
- **Shortcuts:** Quick access to Fraud tools and Terminal
- **Products:** Expandable sections for Connect, Payments, Billing, Reporting, More
- **Developer:** API access link

### Main Content Area
- **Page Title:** Revenue Recognition with settings button
- **Tab Navigation:** Overview, Revenue waterfall, Summary journal entries (active), etc.
- **Data Table:** Accounting periods with status, entries count, grouping, and timestamps

### Responsive Design
- **Desktop:** Full sidebar and optimal spacing
- **Tablet:** Condensed sidebar, maintained functionality
- **Mobile:** Collapsible sidebar with hamburger menu

## Data Structure

The dashboard displays accounting periods with the following information:
- **Accounting Period:** Date ranges (e.g., "July 1 - July 31, 2024")
- **Status:** Open or Closed with color-coded badges
- **Total Entries:** Number of journal entries
- **Grouped By:** Organization method (Event type)
- **Last Updated:** Timestamp of last modification

## Customization

### Adding New Data
Edit the `accountingPeriods` array in `script.js`:

```javascript
const accountingPeriods = [
    {
        period: "August 1 - August 31, 2024",
        status: "open", // or "closed"
        totalEntries: 8,
        groupedBy: "Event type",
        lastUpdated: "Aug 28, 2024 9:00 AM"
    }
    // Add more entries...
];
```

### Styling Changes
Modify `styles.css` to customize:
- Colors (see CSS custom properties)
- Typography
- Spacing and layout
- Component styles

### Adding Functionality
Extend `script.js` to add:
- API integration
- Data sorting
- Export functionality
- Additional interactivity

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- Font Awesome icons via CDN

## Performance

- Optimized CSS with minimal dependencies
- Efficient JavaScript with event delegation
- Responsive images and icons
- Fast loading times

---

**Note:** This is a static demonstration. To integrate with real data, you'll need to connect to your backend API and replace the sample data with actual accounting information. # testproject
