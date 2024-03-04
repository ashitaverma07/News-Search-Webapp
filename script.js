const apiKey = 'd95d490989384d94a4c489244c84e788';

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}



async () => {
    try {
        const articles = await fetchRandomNews();
        console.log(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
};