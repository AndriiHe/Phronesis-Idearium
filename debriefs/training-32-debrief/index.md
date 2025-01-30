# Training 32 Debrief


## What made you smile?
We have found everything

## What did you find confusing?
No hot key to build a table




{% table .phronesis-32 .md %}
- Topic
- Clicks
---
- Find the getting started guide
- 2
---
- Document API described with OpenAPI
- 3
---
- Set up your navbar, footer, and sidebar.
- 3
---
- Change your logo.
- 3
---
- Change the color of a heading.
- 4
---
- Revert changes.
- 7
---
- Add admonition.
- 6
---
- Single source content from another repo.
- 4
---
- Version content.
- 2
---
- Find the changelog.
- 2
---
- Localize the content.
- 2
---
- Protect the content behind a login.
- 3
---
- Make advanced role-based access where different team members can access different content.
- 3
---
- Add a multi-product switcher.
- 3
---
- Use a CICD to single-source content.
- 4
---
- Add cards or tiles in Markdown pages.
- 4
---
- Adjust SEO tags.
- 4
{% /table %}


<script>
(function() {
    function initHighlightRows() {
        // Find all tables with our specific class
        const tables = document.querySelectorAll('.phronesis-32.md');
        
        tables.forEach(table => {
            // First, clean up any existing data attributes
            table.querySelectorAll('[data-high-value]').forEach(el => {
                el.removeAttribute('data-high-value');
            });

            // Find all rows in the tbody
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                // Get the last cell in each row
                const lastCell = row.querySelector('td:last-child');
                if (lastCell) {
                    // Convert cell content to number and check if >= 4
                    const value = parseInt(lastCell.textContent.trim());
                    if (!isNaN(value) && value >= 4) {
                        row.setAttribute('data-high-value', 'true');
                    }
                }
            });
        });
    }

    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHighlightRows);
    } else {
        initHighlightRows();
    }

    // Debounce function to prevent too many rapid calls
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounced version of initHighlightRows
    const debouncedInit = debounce(initHighlightRows, 100);

    // Observer with debounced callback
    const observer = new MutationObserver(debouncedInit);

    // Start observing the document for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
</script>