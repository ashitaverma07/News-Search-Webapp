const apiKey = 'd95d490989384d94a4c489244c84e788';

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.articles;
    }
    catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = ""
    articles.forEach((artilce) =>{
        
    })
}


async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
};