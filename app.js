const faqListItem = document.querySelectorAll('.faq-list-item')
faqListItem.forEach((question) => {
   const btn = question.querySelector('button');
   const icon = question.querySelector('.fa-solid')
   btn.addEventListener('click', function () {
      faqListItem.forEach((item) => {
         if (item !== question) {
            item.classList.remove('show');
         }
      });

      question.classList.toggle("show")
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-xmark')
   })
   icon.classList.add('fa-plus');
})