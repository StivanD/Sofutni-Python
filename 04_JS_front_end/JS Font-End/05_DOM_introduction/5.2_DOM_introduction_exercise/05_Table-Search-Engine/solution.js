function solve() {
   const searchBtn = document.querySelector("#searchBtn");
   const tableRows = Array.from(document.querySelectorAll("tbody tr"));

   searchBtn.addEventListener("click", onClick);

   function onClick() {
      const searched = document.getElementById("searchField").value;
      const regex = new RegExp(searched, "g");

      tableRows.forEach(row => {
         const cells = Array.from(row.children);
         let matched = false;

         for (const cell of cells) {
            if (cell.textContent.match(regex)) {
               matched = true;
               break;
            }
         }

         row.classList.toggle("select", matched);
      });
   }
}