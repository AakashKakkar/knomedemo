document.addEventListener('DOMContentLoaded', function() {
    // School-specific theming
    const school = document.querySelector('.school-name').textContent.toLowerCase();
    document.body.setAttribute('data-school', school);

    // Infinite scroll simulation
    let page = 1;
    const loadMore = document.querySelector('.load-more');
    
    loadMore.addEventListener('click', () => {
        page++;
        fetchMoreUsers();
    });

    // User card click handler
    document.querySelectorAll('.user-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('connect-button')) {
                showUserProfile(card.dataset.userId);
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', debounce(handleSearch, 300));
});

function fetchMoreUsers() {
    // Simulate API call to fetch more users
    // Add more user cards to the grid
}

function showUserProfile(userId) {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'block';
}

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

function handleSearch(e) {
    // Implement search functionality
}

const users = [
    // Existing 6 users
    {
        name: "Anna Martinez",
        subject: "Psychology",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=7",
        profile: "profile_anna.html"
    },
    {
        name: "Kevin Lee",
        subject: "Computer Science",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=8",
        profile: "profile_kevin.html"
    },
    {
        name: "Rachel Brown",
        subject: "Environmental Science",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=9",
        profile: "profile_rachel.html"
    },
    {
        name: "Emily Rodriguez",
        subject: "Pre-Med Biology",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=10",
        profile: "profile_emily.html"
    },
    {
        name: "Michael Chen",
        subject: "Economics",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=11",
        profile: "profile_michael.html"
    },
    {
        name: "Thomas Anderson",
        subject: "Philosophy",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=12",
        profile: "profile_thomas.html"
    },

    // 10 New users
    {
        name: "Sarah Johnson",
        subject: "Art History",
        year: "2024",
        age: "22",
        avatar: "https://i.pravatar.cc/300?img=13",
        profile: "profile_sarah.html"
    },
    {
        name: "James Wilson",
        subject: "Physics",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=14",
        profile: "profile_james.html"
    },
    {
        name: "Maria Garcia",
        subject: "International Relations",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=15",
        profile: "profile_maria.html"
    },
    {
        name: "David Kim",
        subject: "Mathematics",
        year: "2025",
        age: "19",
        avatar: "https://i.pravatar.cc/300?img=16",
        profile: "profile_david.html"
    },
    {
        name: "Lisa Patel",
        subject: "Neuroscience",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=17",
        profile: "profile_lisa.html"
    },
    {
        name: "Alex Thompson",
        subject: "Music",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=18",
        profile: "profile_alex.html"
    },
    {
        name: "Sophie Williams",
        subject: "Chemistry",
        year: "2024",
        age: "22",
        avatar: "https://i.pravatar.cc/300?img=19",
        profile: "profile_sophie.html"
    },
    {
        name: "Daniel Nguyen",
        subject: "Political Science",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=20",
        profile: "profile_daniel.html"
    },
    {
        name: "Olivia Taylor",
        subject: "Literature",
        year: "2024",
        age: "21",
        avatar: "https://i.pravatar.cc/300?img=21",
        profile: "profile_olivia.html"
    },
    {
        name: "Ryan Jackson",
        subject: "Engineering",
        year: "2025",
        age: "20",
        avatar: "https://i.pravatar.cc/300?img=22",
        profile: "profile_ryan.html"
    }
];