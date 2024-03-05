const apiKey = "d95d490989384d94a4c489244c84e788";

const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

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


searchButton.addEventListener("click", async() => {
    
    const query = searchField.ariaValueMax.trim()
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query)
            displayBlogs(articles)
        }catch(error){
            console.error("Error fetching news by query", error)
        }
    }
})


function displayBlogs(articles) {
    blogContainer.innerHTML = ""
    articles.forEach((artilce) =>{
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card")
        const img = document.createElement("img")
        img.src = artilce.urlToImage
        img.alt = artilce.title
        const title = document.createElement("h2")
        const truncatedTitle = artilce.title.length > 30 ? artilce.title.slice(0, 30) + "...." : artilce.title
        title.textContent = truncatedTitle;
        const description = document.createElement("p")
        const truncatedDes = artilce.description.length > 120 ? artilce.description.slice(0, 120) + "...." : artilce.description;
        description.textContent = truncatedDes;

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogCard.addEventListener('click', () => {
            window.open(artilce.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
    });
}


(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();