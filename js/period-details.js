// Period details page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeSidebar('period-details');
    initializeResponsiveSidebar();
    initializeSearch();
    loadPeriodDetails();
    initializeDownloadFunctionality();
});

// Load period details from URL parameters
function loadPeriodDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const periodParam = urlParams.get('period');
    
    if (periodParam) {
        const periodName = decodeURIComponent(periodParam);
        
        // Update page elements with period information
        document.getElementById('period-name').textContent = periodName;
        document.getElementById('period-title').textContent = periodName;
        document.getElementById('modal-period-name').textContent = periodName;
        document.getElementById('itemized-period-name').textContent = periodName;
        
        // Load journal entries
        populateJournalEntries();
    } else {
        // Redirect to dashboard if no period specified
        window.location.href = 'index.html';
    }
}

// Populate journal entries table
function populateJournalEntries() {
    const tableBody = document.getElementById('journal-entries-table');
    
    if (!tableBody) {
        console.error('Journal entries table body not found');
        return;
    }
    
    tableBody.innerHTML = '';
    
    journalEntries.forEach((entry, index) => {
        const row = document.createElement('tr');
        
        // Apply merged cell styling for specific rows
        let jeNumberCell = `<td class="merged-cell">${entry.jeNumber}</td>`;
        let eventTypeCell = `<td class="merged-cell">${entry.eventType}</td>`;
        
        // Empty cells for merged entries
        if (entry.jeNumber === '') {
            jeNumberCell = '<td class="merged-cell"></td>';
        }
        if (entry.eventType === '') {
            eventTypeCell = '<td class="merged-cell"></td>';
        }
        
        row.innerHTML = `
            ${jeNumberCell}
            ${eventTypeCell}
            <td>${entry.glAccounts}</td>
            <td>${entry.stripeAccounts}</td>
            <td class="amount-debit">${entry.debitAmount}</td>
            <td class="amount-credit">${entry.creditAmount}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize download functionality
function initializeDownloadFunctionality() {
    const downloadBtn = document.getElementById('download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', toggleDownloadPopover);
    }
    
    // Close popover when clicking outside
    document.addEventListener('click', function(event) {
        const downloadContainer = event.target.closest('.download-container');
        if (!downloadContainer) {
            hideDownloadPopover();
        }
    });
}

// Download popover functions
function toggleDownloadPopover() {
    const popover = document.getElementById('download-popover');
    if (popover) {
        popover.classList.toggle('show');
    }
}

function hideDownloadPopover() {
    const popover = document.getElementById('download-popover');
    if (popover) {
        popover.classList.remove('show');
    }
}

// Modal functions
function showDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    hideDownloadPopover();
}

function hideDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showItemizedModal() {
    const modal = document.getElementById('itemized-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    hideDownloadPopover();
}

function hideItemizedModal() {
    const modal = document.getElementById('itemized-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function confirmDownload() {
    console.log('Starting download...');
    alert('Download started!');
    hideDownloadModal();
}

function confirmItemizedDownload() {
    const checkbox = document.getElementById('email-notification');
    const emailNotification = checkbox ? checkbox.checked : false;
    
    console.log('Starting itemized download...', { emailNotification });
    alert(`Itemized download started! ${emailNotification ? 'Email notification enabled.' : ''}`);
    hideItemizedModal();
}

console.log('Period details page loaded'); 