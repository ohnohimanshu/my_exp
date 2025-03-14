document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bars
    initProgressBars();

    // Initialize copy buttons
    initCopyButtons();

    // Initialize floating animations with different delays
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Initialize command demos
    initCommandDemos();

    // Initialize tooltips
    initTooltips();

    // Enhanced button interactions
    document.querySelectorAll('.run-command, .copy-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Magnetic effect for tech cards
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height / 2) / 20}deg)
                rotateY(${(x - rect.width / 2) / 20}deg)
                translateZ(10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });
});

function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
}

function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.parentElement.querySelector('code');
            navigator.clipboard.writeText(codeBlock.textContent);

            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    });
}

function initCommandDemos() {
    const commandDemos = document.querySelectorAll('.command-demo');
    commandDemos.forEach(demo => {
        const runButton = demo.querySelector('.run-command');
        const output = demo.querySelector('.command-output');
        if (runButton && output) {
            runButton.addEventListener('click', () => {
                const command = demo.querySelector('.command-text').value;
                output.textContent = `Executing: ${command}\nCommand completed successfully.`;
            });
        }
    });
}

function initTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', () => {
            const tooltipText = tooltip.querySelector('.tooltiptext');
            if (tooltipText) {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            }
        });

        tooltip.addEventListener('mouseout', () => {
            const tooltipText = tooltip.querySelector('.tooltiptext');
            if (tooltipText) {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            }
        });
    });
}

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Function to show modal with specific content
    window.showModal = function(title, content) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-content').innerHTML = content;
        modal.style.display = 'block';
    };
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-animation');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        multiplier: 1,
        lerp: 1
    });

    // Refresh Locomotive Scroll on image load
    scroll.on('call', func => {
        if (func === 'refresh') {
            scroll.update();
        }
    });

    // Add parallax effects
    document.querySelectorAll('[data-scroll]').forEach(section => {
        section.setAttribute('data-scroll-speed', Math.random() * 2 - 1);
    });
});