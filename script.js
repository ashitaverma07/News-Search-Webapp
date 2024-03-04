const apiKey = "d95d490989384d94a4c489244c84e788";

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
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card")
        const img = document.createElement("img")
        img.src = artilce.urlToImage
        img.alt = artilce.title
        const title = document.createElement("h2")
        title.textContent = artilce.title
        const description = document.createElement("p")
        description.textContent = artilce.description

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogContainer.appendChild(blogCard)
    })
}


(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();