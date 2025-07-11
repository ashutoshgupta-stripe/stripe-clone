// Create the perfect header HTML structure
function createHeaderHTML() {
    return `
        <div class="header-container">
            <div class="header-left">
                <div class="logo">
                    <div class="logo-icon">🦙</div>
                    <span>Cactus Practice</span>
                </div>
            </div>
            
            <div class="header-center">
                <div class="search-container">
                    <div class="search-bar">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" placeholder="Search" class="search-input">
                        <div class="keyboard-shortcut">
                            <span>/</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="header-right">
                <div class="header-actions">
                    <button class="action-btn help-btn" title="Help">
                        <img src="icon/Help.svg" alt="Help" class="action-icon">
                    </button>
                    <button class="action-btn notifications-btn" title="Notifications">
                        <img src="icon/Notifications.svg" alt="Notifications" class="action-icon">
                        <div class="notification-dot"></div>
                    </button>
                    <button class="action-btn settings-btn" title="Settings">
                        <img src="icon/Settings.svg" alt="Settings" class="action-icon">
                    </button>
                    <button class="action-btn create-btn" title="Create">
                        <img src="icon/Create.svg" alt="Create" class="create-icon">
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize header for any page
function initializeHeader() {
    const headerElement = document.querySelector('.header');
    if (headerElement) {
        headerElement.innerHTML = createHeaderHTML();
        // Re-initialize any header functionality if needed
        initializeHeaderActions();
    }
}

// Initialize header actions
function initializeHeaderActions() {
    // Add click handlers for header actions
    const helpBtn = document.querySelector('.help-btn');
    const notificationsBtn = document.querySelector('.notifications-btn');
    const settingsBtn = document.querySelector('.settings-btn');
    const createBtn = document.querySelector('.create-btn');
    const searchInput = document.querySelector('.search-input');

    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            console.log('Help clicked');
        });
    }

    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', () => {
            console.log('Notifications clicked');
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            console.log('Settings clicked');
        });
    }

    if (createBtn) {
        createBtn.addEventListener('click', () => {
            console.log('Create clicked');
        });
    }

    if (searchInput) {
        // Add keyboard shortcut handler
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }
}

// Create the perfect sidebar HTML structure
function createSidebarHTML(currentPage = '') {
    return `
        <nav class="sidebar-nav">
            <ul>
                <li><a href="index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}"><img src="icon/home.svg" alt="Home" class="nav-icon"> Home</a></li>
                <li><a href="#" class="nav-link ${currentPage === 'balances' ? 'active' : ''}"><img src="icon/balance.svg" alt="Balances" class="nav-icon"> Balances</a></li>
                <li><a href="#" class="nav-link ${currentPage === 'transactions' ? 'active' : ''}"><img src="icon/transactions.svg" alt="Transactions" class="nav-icon"> Transactions</a></li>
                <li><a href="#" class="nav-link ${currentPage === 'directory' ? 'active' : ''}"><img src="icon/directory.svg" alt="Directory" class="nav-icon"> Directory</a></li>
                <li><a href="#" class="nav-link ${currentPage === 'product-catalog' ? 'active' : ''}"><img src="icon/product_catalog.svg" alt="Product catalog" class="nav-icon"> Product catalog</a></li>
            </ul>
            
            <div class="sidebar-section">
                <h4>Products</h4>
                <ul>
                    <li class="nav-item-with-submenu">
                        <a href="#" class="nav-link expandable" data-toggle="connect">
                            <img src="icon/connect.svg" alt="Connect" class="nav-icon"> Connect 
                            <img src="icon/toggledown.svg" alt="Toggle" class="toggle-icon">
                        </a>
                        <ul class="submenu" id="connect-submenu">
                            <li><a href="#" class="submenu-link">Overview</a></li>
                            <li><a href="#" class="submenu-link">Connected accounts</a></li>
                            <li><a href="#" class="submenu-link">Accounts to review</a></li>
                            <li><a href="#" class="submenu-link">Treasury</a></li>
                            <li><a href="#" class="submenu-link">Capital</a></li>
                        </ul>
                    </li>
                    <li class="nav-item-with-submenu">
                        <a href="#" class="nav-link expandable" data-toggle="payments">
                            <img src="icon/Payments.svg" alt="Payments" class="nav-icon"> Payments 
                            <img src="icon/toggledown.svg" alt="Toggle" class="toggle-icon">
                        </a>
                        <ul class="submenu" id="payments-submenu">
                            <li><a href="#" class="submenu-link">Insights</a></li>
                            <li><a href="#" class="submenu-link">Disputes</a></li>
                            <li><a href="#" class="submenu-link">Radar</a></li>
                            <li><a href="#" class="submenu-link">Payment links</a></li>
                            <li><a href="#" class="submenu-link">Terminal readers</a></li>
                        </ul>
                    </li>
                    <li class="nav-item-with-submenu">
                        <a href="#" class="nav-link expandable" data-toggle="billing">
                            <img src="icon/billing.svg" alt="Billing" class="nav-icon"> Billing 
                            <img src="icon/toggledown.svg" alt="Toggle" class="toggle-icon">
                        </a>
                        <ul class="submenu" id="billing-submenu">
                            <li><a href="#" class="submenu-link">Overview</a></li>
                            <li><a href="#" class="submenu-link">Subscriptions</a></li>
                            <li><a href="#" class="submenu-link">Invoices</a></li>
                            <li><a href="#" class="submenu-link">Revenue recovery</a></li>
                        </ul>
                    </li>
                    <li class="nav-item-with-submenu">
                        <a href="#" class="nav-link expandable ${currentPage === 'index' || currentPage === 'reports' || currentPage === 'period-details' ? 'expanded' : ''}" data-toggle="reporting">
                            <img src="icon/reporting.svg" alt="Reporting" class="nav-icon"> Reporting 
                            <img src="icon/${currentPage === 'index' || currentPage === 'reports' || currentPage === 'period-details' ? 'toggleup' : 'toggledown'}.svg" alt="Toggle" class="toggle-icon">
                        </a>
                        <ul class="submenu ${currentPage === 'index' || currentPage === 'reports' || currentPage === 'period-details' ? 'expanded' : ''}" id="reporting-submenu">
                            <li><a href="#" class="submenu-link">Overview</a></li>
                            <li><a href="reports.html" class="submenu-link ${currentPage === 'reports' ? 'active' : ''}">Reports</a></li>
                            <li><a href="#" class="submenu-link">Metrics</a></li>
                            <li><a href="#" class="submenu-link">Sigma</a></li>
                            <li><a href="index.html" class="submenu-link ${currentPage === 'index' ? 'active' : ''}">Revenue recognition</a></li>
                            <li><a href="#" class="submenu-link">Data management</a></li>
                        </ul>
                    </li>
                    <li class="nav-item-with-submenu">
                        <a href="#" class="nav-link expandable" data-toggle="more">
                            <img src="icon/more.svg" alt="More" class="nav-icon"> More 
                            <img src="icon/toggledown.svg" alt="Toggle" class="toggle-icon">
                        </a>
                        <ul class="submenu" id="more-submenu">
                            <li><a href="#" class="submenu-link">Tax</a></li>
                            <li><a href="#" class="submenu-link">Identity</a></li>
                            <li><a href="#" class="submenu-link">Atlas</a></li>
                            <li><a href="#" class="submenu-link">Issuing</a></li>
                            <li><a href="#" class="submenu-link">Financial connections</a></li>
                            <li><a href="#" class="submenu-link">Capital</a></li>
                            <li><a href="#" class="submenu-link">Climate</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        
        <!-- Developer Footer Tab -->
        <div class="sidebar-footer">
            <a href="#" class="nav-link developer-link">
                <img src="icon/developer.svg" alt="Developer" class="nav-icon"> Developer
            </a>
        </div>
    `;
}

// Initialize sidebar for any page
function initializeSidebar(currentPage = '') {
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement) {
        const sidebarHTML = createSidebarHTML(currentPage);
        console.log('Generated sidebar HTML includes developer footer:', sidebarHTML.includes('sidebar-footer'));
        console.log('Setting sidebar innerHTML...');
        sidebarElement.innerHTML = sidebarHTML;
        
        // Check if developer footer was actually added
        setTimeout(() => {
            const developerFooter = document.querySelector('.sidebar-footer');
            console.log('Developer footer found after timeout:', !!developerFooter);
            if (developerFooter) {
                console.log('Developer footer element:', developerFooter);
            }
        }, 100);
        
        // Re-initialize navigation after creating the HTML
        initializeSidebarNavigation();
    }
}

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
            
            // Handle collapsible products section
            if (this.classList.contains('expandable')) {
                const toggleTarget = this.getAttribute('data-toggle');
                const submenu = document.getElementById(toggleTarget + '-submenu');
                const toggleIcon = this.querySelector('.toggle-icon');
                
                if (submenu && toggleIcon) {
                    // Toggle the submenu
                    if (submenu.classList.contains('expanded')) {
                        submenu.classList.remove('expanded');
                        this.classList.remove('expanded');
                        toggleIcon.src = 'icon/toggledown.svg';
                    } else {
                        // Close all other expanded submenus
                        document.querySelectorAll('.submenu.expanded').forEach(menu => {
                            menu.classList.remove('expanded');
                        });
                        document.querySelectorAll('.nav-link.expandable.expanded').forEach(expandedLink => {
                            expandedLink.classList.remove('expanded');
                            const expandedIcon = expandedLink.querySelector('.toggle-icon');
                            if (expandedIcon) {
                                expandedIcon.src = 'icon/toggledown.svg';
                            }
                        });
                        
                        // Open the clicked submenu
                        submenu.classList.add('expanded');
                        this.classList.add('expanded');
                        toggleIcon.src = 'icon/toggleup.svg';
                    }
                }
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
                } else if (submenuText === 'Revenue recognition') {
                    window.location.href = 'index.html';
                }
                
                return;
            }
            
            // Handle main navigation links
            if (!this.classList.contains('expandable')) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked nav link
                this.classList.add('active');
                
                const linkText = this.textContent.trim();
                
                if (linkText === 'Reports') {
                    window.location.href = 'reports.html';
                } else if (linkText === 'Home') {
                    window.location.href = 'index.html';
                }
            }
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