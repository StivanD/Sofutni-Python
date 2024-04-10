function create(words) {
   const contentElement = document.getElementById('content');
   
   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);
         
         // divElement.addEventListener('click', () => {
         //    pElement.style.display = 'block';
         // })
         
         return divElement;
      });

   divElements
      .forEach(divElement => {
      divElement.addEventListener('click', () => {
         const pElement = divElement.querySelector('p');
         pElement.style.display = 'block';
      })
   }); 
   
   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement));
   contentElement.appendChild(divElementsFragment)
   
   // Not effective
   // divElements.forEach(divElement => contentElement.appendChild(divElement)); 
   
   // Doesn't work in the Judge system
   // contentElement.append(...divElements);
}