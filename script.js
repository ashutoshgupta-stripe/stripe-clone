// Sample data matching the reference image
const accountingPeriods = [
    {
        period: "July 1 - July 31, 2024",
        status: "open",
        totalEntries: 6,
        groupedBy: "Event type",
        lastUpdated: "Jul 28, 2024 8:01 AM"
    },
    {
        period: "June 1 - June 30, 2024",
        status: "closed",
        totalEntries: 6,
        groupedBy: "Event type",
        lastUpdated: "Jul 2, 2024 8:01 AM"
    },
    {
        period: "May 1 - May 31, 2024",
        status: "closed",
        totalEntries: 12,
        groupedBy: "Event type",
        lastUpdated: "Jul 1, 2024 8:01 AM"
    },
    {
        period: "April 1 - April 30, 2024",
        status: "closed",
        totalEntries: 6,
        groupedBy: "Event type",
        lastUpdated: "Apr 2, 2024 8:01 AM"
    },
    {
        period: "March 1 - March 31, 2024",
        status: "closed",
        totalEntries: 12,
        groupedBy: "Event type",
        lastUpdated: "Apr 2, 2024 8:01 AM"
    }
];

// Sample journal entries data for detailed view
const journalEntries = [
    {
        jeNumber: 'JE-000079',
        eventType: 'Credit note created',
        glAccounts: 'GST output tax',
        stripeAccounts: 'GST output tax',
        debitAmount: '$ 30.80',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Individual lessons',
        stripeAccounts: 'Individual lessons',
        debitAmount: '$ 342.20',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Account receivable',
        stripeAccounts: 'Account receivable',
        debitAmount: '$ 0.00',
        creditAmount: '$ 373.00'
    },
    {
        jeNumber: 'JE-000078',
        eventType: 'Customer balance transaction',
        glAccounts: 'Customer balance adjustment',
        stripeAccounts: 'Customer balance adjustment',
        debitAmount: '$ 3,089.00',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Customer balance',
        stripeAccounts: 'Customer balance',
        debitAmount: '$ 0.00',
        creditAmount: '$ 3,089.00'
    },
    {
        jeNumber: 'JE-000077',
        eventType: 'Invoice line item finalized',
        glAccounts: 'Account receivable',
        stripeAccounts: 'Account receivable',
        debitAmount: '$ 130,055.70',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Customer balance',
        stripeAccounts: 'Customer balance',
        debitAmount: '$ 5,640.25',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Deferred Income Individual Lessons',
        stripeAccounts: 'Deferred Income Individual Lessons',
        debitAmount: '$ 12,970.80',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Discount Given',
        stripeAccounts: 'Discount Given',
        debitAmount: '$ 831.72',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: 'JE-000077',
        eventType: 'Invoice line item finalized',
        glAccounts: 'Discount Given - Registration fee',
        stripeAccounts: 'Discount Given - Registration fee',
        debitAmount: '$ 320.00',
        creditAmount: '$ 0.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Deferred Pre-Payment Discounts',
        stripeAccounts: 'Deferred Pre-Payment Discounts',
        debitAmount: '$ 0.00',
        creditAmount: '$ 16.67'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Enrollment Deposit',
        stripeAccounts: 'Enrollment Deposit',
        debitAmount: '$ 0.00',
        creditAmount: '$ 14,343.00'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'GST output tax',
        stripeAccounts: 'GST output tax',
        debitAmount: '$ 0.00',
        creditAmount: '$ 10,020.49'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Individual lessons',
        stripeAccounts: 'Individual lessons',
        debitAmount: '$ 0.00',
        creditAmount: '$ 123,944.07'
    },
    {
        jeNumber: '',
        eventType: '',
        glAccounts: 'Registration fees',
        stripeAccounts: 'Registration fees',
        debitAmount: '$ 0',
        creditAmount: '$ 1,494.24'
    }
];

// DOM elements
const tableBody = document.getElementById('data-table-body');
const tabButtons = document.querySelectorAll('.tab-btn');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    populateTable();
    initializeTabNavigation();
    initializeSidebarNavigation();
    initializeResponsiveSidebar();
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
            showPeriodDetails(period);
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
                showMainView();
            } else {
                showComingSoon(tabName); // Show coming soon for all other tabs
            }
            
            console.log('Selected tab:', tabName);
        });
    });
}

// Initialize sidebar navigation
function initializeSidebarNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Handle expandable items
            if (this.classList.contains('expandable') && !this.classList.contains('expanded')) {
                const chevron = this.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = chevron.style.transform === 'rotate(180deg)' 
                        ? 'rotate(0deg)' 
                        : 'rotate(180deg)';
                }
                return;
            }
            
            // Skip if this is an already expanded item
            if (this.classList.contains('expandable') && this.classList.contains('expanded')) {
                return;
            }
            
            // Handle submenu links
            if (this.classList.contains('submenu-link')) {
                // Remove active class from all submenu links
                document.querySelectorAll('.submenu-link').forEach(subLink => subLink.classList.remove('active'));
                
                // Add active class to clicked submenu link
                this.classList.add('active');
                
                console.log('Selected submenu item:', this.textContent.trim());
                return;
            }
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Selected navigation:', this.textContent.trim());
        });
    });
}

// Initialize responsive sidebar for mobile
function initializeResponsiveSidebar() {
    // Add mobile menu button to header
    const header = document.querySelector('.header-left');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 18px;
        color: #374151;
        cursor: pointer;
        padding: 8px;
        margin-right: 12px;
    `;
    
    // Show mobile menu button on small screens
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMediaQuery(e) {
        if (e.matches) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            document.querySelector('.sidebar').classList.remove('open');
        }
    }
    
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
    
    header.insertBefore(mobileMenuBtn, header.firstChild);
    
    // Toggle sidebar on mobile
    mobileMenuBtn.addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        const sidebar = document.querySelector('.sidebar');
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(e.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuBtn && window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
}

// Add search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');
    
    if (!searchInput) {
        return;
    }
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const currentTableBody = document.getElementById('data-table-body');
        
        if (!currentTableBody) {
            return;
        }
        
        // Filter table rows based on search term
        const rows = currentTableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Initialize search after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading state simulation
function showLoadingState() {
    const currentTableBody = document.getElementById('data-table-body');
    
    if (!currentTableBody) {
        return;
    }
    
    currentTableBody.innerHTML = `
        <tr>
            <td colspan="5" style="text-align: center; padding: 40px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 24px; color: #6b7280;"></i>
                <p style="margin-top: 12px; color: #6b7280;">Loading data...</p>
            </td>
        </tr>
    `;
    
    // Simulate loading delay
    setTimeout(() => {
        populateTable();
    }, 1500);
}

// Add refresh functionality
function refreshData() {
    showLoadingState();
}

// Generate table rows with merged cells
function generateTableRows() {
    let rows = '';
    const totalRows = journalEntries.length;
    const lastTenStartIndex = totalRows - 10;
    
    journalEntries.forEach((entry, index) => {
        let jeCell = '';
        let eventCell = '';
        
        // Group 1: Rows 1-3 (indices 0-2) - merge first row spans 3
        if (index === 0) {
            jeCell = `<td class="merged-cell" rowspan="3">${entry.jeNumber || ''}</td>`;
            eventCell = `<td class="merged-cell" rowspan="3">${entry.eventType || ''}</td>`;
        } else if (index === 1 || index === 2) {
            jeCell = ''; // Skip these cells as they're merged with row 0
            eventCell = '';
        }
        // Group 2: Rows 4-5 (indices 3-4) - merge first row spans 2  
        else if (index === 3) {
            jeCell = `<td class="merged-cell" rowspan="2">${entry.jeNumber || ''}</td>`;
            eventCell = `<td class="merged-cell" rowspan="2">${entry.eventType || ''}</td>`;
        } else if (index === 4) {
            jeCell = ''; // Skip these cells as they're merged with row 3
            eventCell = '';
        }
        // Group 3: Last 10 rows - merge all into one cell
        else if (index === lastTenStartIndex) {
            jeCell = `<td class="merged-cell" rowspan="10">${entry.jeNumber || ''}</td>`;
            eventCell = `<td class="merged-cell" rowspan="10">${entry.eventType || ''}</td>`;
        } else if (index > lastTenStartIndex) {
            jeCell = ''; // Skip these cells as they're merged with the first row of last 10
            eventCell = '';
        }
        // Group 4: Middle rows (indices 5 to lastTenStartIndex-1) - individual rows
        else {
            jeCell = `<td class="merged-cell">${entry.jeNumber || ''}</td>`;
            eventCell = `<td class="merged-cell">${entry.eventType || ''}</td>`;
        }
        
        rows += `
            <tr>
                ${jeCell}
                ${eventCell}
                <td>${entry.glAccounts}</td>
                <td>${entry.stripeAccounts}</td>
                <td class="amount-debit">${entry.debitAmount}</td>
                <td class="amount-credit">${entry.creditAmount}</td>
            </tr>
        `;
    });
    
    return rows;
}

// Show period details function
function showPeriodDetails(period) {
    const mainContent = document.querySelector('.main-content');
    
    const detailsHTML = `
        <div class="period-details">
            <!-- Breadcrumb -->
            <div class="breadcrumb">
                <span class="breadcrumb-link" onclick="showMainView()">Summary journal entries</span>
                <i class="fas fa-chevron-right"></i>
                <span class="breadcrumb-current">${period.period}</span>
            </div>
            
            <!-- Page Header -->
            <div class="period-header">
                <div class="period-title-section">
                    <h1>${period.period}</h1>
                    <span class="status-badge ${period.status}">${period.status}</span>
                </div>
                ${period.status === 'open' ? '<p class="period-notice">This period is still open—new transactions will affect the data.</p>' : ''}
            </div>
            
            <!-- Currency Selector -->
            <div class="currency-section">
                <label>Currency</label>
                <select class="currency-dropdown">
                    <option value="USD">USD</option>
                </select>
            </div>
            
            <!-- Info Message -->
            <div class="info-message">
                <i class="fas fa-info-circle"></i>
                <span>By default, we group debits and credits by event type. <a href="#" class="settings-link">Go to settings</a> to change the format.</span>
                <button class="close-info" onclick="this.parentElement.style.display='none'">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <!-- Entries Header -->
            <div class="entries-header">
                <div class="entries-info">
                    <span class="entries-count">Showing ${journalEntries.length} entries</span>
                    <span class="update-time">Updated today, at 11:00 PM</span>
                </div>
                <div class="download-container">
                    <button class="download-btn" onclick="toggleDownloadPopover()">
                        <i class="fas fa-download"></i>
                        Download
                    </button>
                    <div class="download-popover" id="download-popover">
                        <div class="download-option" onclick="downloadSummary()">
                            <div class="download-option-title">Summary</div>
                            <div class="download-option-desc">Download summarized journal entries.</div>
                        </div>
                        <div class="download-option" onclick="downloadItemized()">
                            <div class="download-option-title">Itemized</div>
                            <div class="download-option-desc">Download individual journal entries.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Table -->
            <div class="content-area">
                <div class="table-container">
                                         <table class="detailed-table">
                         <thead>
                             <tr>
                                 <th>JE number</th>
                                 <th>Event type</th>
                                 <th>GL Accounts</th>
                                 <th>Stripe accounts</th>
                                 <th class="amount-header">Debit amount</th>
                                 <th class="amount-header">Credit amount</th>
                             </tr>
                         </thead>
                         <tbody id="detailed-table-body">
                             ${generateTableRows()}
                         </tbody>
                     </table>
                </div>
            </div>
        </div>
        
        <!-- Download Modal -->
        <div class="modal-backdrop" id="download-modal" onclick="if(event.target === this) hideDownloadModal()">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Download summary journal entries</h3>
                    <button class="modal-close" onclick="hideDownloadModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-info">
                        <i class="fas fa-info-circle"></i>
                        <span>Period July 1, 2025 - July 31, 2025 is open. New transactions will change this report. It was last updated today, at 11:00 PM UTC.</span>
                    </div>
                    <div class="modal-field">
                        <label>Currency</label>
                        <select class="modal-dropdown">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn cancel" onclick="hideDownloadModal()">Cancel</button>
                    <button class="modal-btn primary" onclick="confirmDownload()">Download</button>
                </div>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = detailsHTML;
}

// Show coming soon function
function showComingSoon(activeTab = 'Overview') {
    const mainContent = document.querySelector('.main-content');
    
    const comingSoonHTML = `
        <div class="content-header">
            <h1>Revenue Recognition</h1>
            <button class="settings-btn">
                <i class="fas fa-cog"></i>
                Settings
            </button>
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
            <button class="tab-btn ${activeTab === 'Overview' ? 'active' : ''}">Overview</button>
            <button class="tab-btn ${activeTab === 'Revenue waterfall' ? 'active' : ''}">Revenue waterfall</button>
            <button class="tab-btn ${activeTab === 'Summary journal entries' ? 'active' : ''}">Summary journal entries</button>
            <button class="tab-btn ${activeTab === 'Statements' ? 'active' : ''}">Statements</button>
            <button class="tab-btn ${activeTab === 'Data import' ? 'active' : ''}">Data import</button>
            <button class="tab-btn ${activeTab === 'Rules' ? 'active' : ''}">Rules</button>
            <button class="tab-btn ${activeTab === 'Chart of accounts' ? 'active' : ''}">Chart of accounts</button>
            <button class="tab-btn dropdown ${activeTab === 'More' ? 'active' : ''}">
                More
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>

        <!-- Coming Soon Content -->
        <div class="content-area">
            <div class="coming-soon-container">
                <div class="coming-soon-content">
                    <i class="fas fa-rocket coming-soon-icon"></i>
                    <h2>Coming Soon</h2>
                    <p>This feature is currently under development and will be available soon.</p>
                </div>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = comingSoonHTML;
    
    // Re-initialize tab navigation for the new content
    initializeTabNavigation();
}

// Show main view function
function showMainView() {
    const mainContent = document.querySelector('.main-content');
    
    const mainHTML = `
        <div class="content-header">
            <h1>Revenue Recognition</h1>
            <button class="settings-btn">
                <i class="fas fa-cog"></i>
                Settings
            </button>
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
            <button class="tab-btn">Overview</button>
            <button class="tab-btn">Revenue waterfall</button>
            <button class="tab-btn active">Summary journal entries</button>
            <button class="tab-btn">Statements</button>
            <button class="tab-btn">Data import</button>
            <button class="tab-btn">Rules</button>
            <button class="tab-btn">Chart of accounts</button>
            <button class="tab-btn dropdown">
                More
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>

        <!-- Content Area -->
        <div class="content-area">
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Accounting period</th>
                            <th>Status</th>
                            <th>Total entries</th>
                            <th>Grouped by</th>
                            <th>Last updated</th>
                        </tr>
                    </thead>
                    <tbody id="data-table-body">
                        <!-- Data will be populated by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = mainHTML;
    
    // Re-initialize the main view
    populateTable();
    initializeTabNavigation();
    initializeSearch();
}

// Download popover functions
function toggleDownloadPopover() {
    const popover = document.getElementById('download-popover');
    if (popover) {
        popover.classList.toggle('show');
    }
}

function downloadSummary() {
    console.log('Opening download summary modal...');
    hideDownloadPopover();
    showDownloadModal();
}

function downloadItemized() {
    console.log('Downloading individual journal entries...');
    // Add actual download logic here
    alert('Downloading individual journal entries...');
    hideDownloadPopover();
}

function hideDownloadPopover() {
    const popover = document.getElementById('download-popover');
    if (popover) {
        popover.classList.remove('show');
    }
}

function showDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function hideDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function confirmDownload() {
    console.log('Starting download...');
    alert('Download started!');
    hideDownloadModal();
}

// Close popover when clicking outside
document.addEventListener('click', function(event) {
    const downloadContainer = event.target.closest('.download-container');
    if (!downloadContainer) {
        hideDownloadPopover();
    }
});

// Export functions for potential external use
window.dashboardFunctions = {
    refreshData,
    populateTable,
    showLoadingState,
    showPeriodDetails,
    showMainView,
    showComingSoon,
    toggleDownloadPopover,
    downloadSummary,
    downloadItemized,
    showDownloadModal,
    hideDownloadModal,
    confirmDownload
}; 