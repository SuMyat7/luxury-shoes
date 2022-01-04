const buttons = document.querySelectorAll('.category');
const items = document.querySelectorAll('.items');

buttons.forEach(function(button){
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        items.forEach(function(item){
            if(filter == "all"){
                item.style.display = "block";
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        })
    })
})

const search = document.getElementById("search");

search.addEventListener("keyup", function(e){
    const searchFilter = e.target.value.toLowerCase().trim();

    items.forEach(function(item){
        if(item.textContent.includes(searchFilter)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
})