// Script to handle the search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const btnSearch = document.querySelector('.btn-search');

    if (searchInput && btnSearch) {
        btnSearch.addEventListener('click', () => {
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                alert(`Searching for: ${query}`);
                // Implement actual search functionality here
            } else {
                alert('Please enter a search query.');
            }
        });
    }
});

// Script to handle adding items to the cart
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productItem = button.closest('.product-item');
            if (productItem) {
                const productName = productItem.querySelector('h3')?.textContent || 'Unknown Product';
                const productPrice = productItem.querySelector('p')?.textContent || 'Unknown Price';
                alert(`Added ${productName} (${productPrice}) to cart`);
                // Implement actual cart addition functionality here
            }
        });
    });
});

// Script to handle removing items from the cart
document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.btn-remove');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.closest('.cart-item');
            if (cartItem) {
                cartItem.remove();
                alert('Item removed from cart');
                // Implement actual cart removal functionality here
            }
        });
    });
});

// Script to handle profile editing
document.addEventListener('DOMContentLoaded', () => {
    const editProfileButton = document.querySelector('.btn');

    if (editProfileButton) {
        editProfileButton.addEventListener('click', () => {
            const profileInfo = document.querySelector('.profile-info');
            if (profileInfo) {
                const profileNameElement = profileInfo.querySelector('h3');
                const newProfileName = prompt('Enter new profile name:', profileNameElement?.textContent);
                if (newProfileName) {
                    profileNameElement.textContent = newProfileName;
                    alert('Profile updated');
                    // Implement actual profile editing functionality here
                }
            }
        });
    }
});

// Script for smooth scroll to sections
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Script for back-to-top button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.footer .top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
