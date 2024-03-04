const apiKey = 'd95d490989384d94a4c489244c84e788';

const blogContainer = document.getElementById("blog-container");

function fetchRandom() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us`
    }
    catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}
