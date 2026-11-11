(()=>{
document.querySelectorAll('[data-modal]').forEach(button=>button.addEventListener('click',()=>{const dialog=document.getElementById(button.dataset.modal);dialog.showModal();document.body.classList.add('modal-open');}));
document.querySelectorAll('.detail-modal').forEach(dialog=>{dialog.querySelector('.modal-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));});

})();