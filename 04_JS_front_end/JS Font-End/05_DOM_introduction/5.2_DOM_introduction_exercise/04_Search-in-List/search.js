function search() {
   const searchText = document.getElementById("searchText").value.toLowerCase();
   const towns = Array.from(document.getElementById("towns").children);

   let matches = 0;
   for (let town of towns) {
       const townName = town.textContent.toLowerCase();
       const isMatched = townName.includes(searchText);
       
       if (isMatched) {
           town.style.fontWeight = "bold";
           town.style.textDecoration = "underline";
           matches++;
       }
   }

   document.getElementById("result").textContent = `${matches} matches found`;
}
