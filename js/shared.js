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

// Shared utility functions
function initializeSidebarNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
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
                
                const submenuText = this.textContent.trim();
                
                if (submenuText === 'Reports') {
                    window.location.href = 'reports.html';
                } else if (submenuText === 'Revenue Recognition') {
                    window.location.href = 'index.html';
                }
                
                console.log('Selected submenu item:', submenuText);
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

// Initialize tooltips
function initializeTooltips() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            const tooltipText = e.target.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
        });
        
        icon.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
} 