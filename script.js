const characterItems = document.querySelectorAll("#character-list li");
characterItems.forEach(item => {
    item.addEventListener("click", () => {
    
        const votesElement = item.querySelector("span");
        let votes = parseInt(votesElement.textContent);
        votes++;
        votesElement.textContent = votes;
    });
});
