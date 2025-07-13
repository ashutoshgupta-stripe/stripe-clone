// Activity page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeSidebar('activity');
    initializeResponsiveSidebar();
    initializeSearch();
    initializeActivityPage();
});

function initializeActivityPage() {
    // Initialize filter functionality
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            console.log(`Filter changed: ${this.id} = ${this.value}`);
            // Add filter logic here
        });
    });

    // Initialize export functionality
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            console.log('Export button clicked');
            // Add export logic here
        });
    }

    // Initialize more filters button
    const moreFiltersBtn = document.querySelector('.more-filters-btn');
    if (moreFiltersBtn) {
        moreFiltersBtn.addEventListener('click', function() {
            console.log('More filters button clicked');
            // Add more filters logic here
        });
    }

    // Initialize sidebar action buttons
    const sidebarActionBtns = document.querySelectorAll('.sidebar-action-btn');
    sidebarActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i').className;
            console.log(`Sidebar action clicked: ${icon}`);
            // Add specific action logic here
        });
    });

    // Initialize table row hover effects
    const tableRows = document.querySelectorAll('.activity-data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9fafb';
        });
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('activity-total')) {
                this.style.backgroundColor = '';
            }
        });
    });
}

console.log('Activity page loaded'); 