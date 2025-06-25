// Dashboard specific functionality
document.addEventListener('DOMContentLoaded', function() {
    populateTable();
    initializeTabNavigation();
    initializeSidebarNavigation();
    initializeResponsiveSidebar();
    initializeSearch();
});

// Populate the data table
function populateTable() {
    const currentTableBody = document.getElementById('data-table-body');
    
    if (!currentTableBody) {
        console.error('Table body not found');
        return;
    }
    
    currentTableBody.innerHTML = '';
    
    accountingPeriods.forEach((period, index) => {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.innerHTML = `
            <td><strong>${period.period}</strong></td>
            <td><span class="status-badge ${period.status}">${period.status}</span></td>
            <td>${period.totalEntries}</td>
            <td>${period.groupedBy}</td>
            <td>${period.lastUpdated}</td>
        `;
        
        // Add click handler to each row
        row.addEventListener('click', () => {
            const encodedPeriod = encodeURIComponent(period.period);
            window.location.href = `period-details.html?period=${encodedPeriod}`;
        });
        
        currentTableBody.appendChild(row);
    });
}

// Initialize tab navigation
function initializeTabNavigation() {
    const currentTabButtons = document.querySelectorAll('.tab-btn');
    
    currentTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            currentTabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle different tab content
            const tabName = this.textContent.trim();
            
            if (tabName === 'Summary journal entries') {
                // Stay on current page
                return;
            } else {
                // For now, just show an alert - you can implement other tabs later
                alert(`${tabName} tab functionality coming soon!`);
            }
            
            console.log('Selected tab:', tabName);
        });
    });
} 