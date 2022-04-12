const faqListItem = document.querySelectorAll('.faq-list-item');
faqListItem.forEach((question) => {
   const btn = question.querySelector('button');
   btn.addEventListener('click', function () {
      faqListItem.forEach((item) => {
         if (item !== question) {
            item.classList.remove('show');

         }
      });
      question.classList.toggle("show")
   });
})