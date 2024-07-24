document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.overall #product');
    const totalPriceElement = document.querySelector('.total-price');
    const likeCountElement = document.getElementsByClassName('.count-like');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = '$' + total;
    }

    function updateLikeCount() {
        let likeCount = 0;
        cartItems.forEach(item => {
            const likeButton = item.querySelector('.like-item');
            const itemLikeCount = item.querySelector('.count-like');
            if (likeButton.classList.contains('liked')) {
                likeCount++;
                itemLikeCount.textContent = 1;
            } else {
                itemLikeCount.textContent = 0;
            }
        });
        likeCountElement.textContent = likeCount;
    }

    cartItems.forEach(itemx => {
        const minusButton = itemx.querySelector('.bi-dash-lg');
        const plusButton = itemx.querySelector('.bi-plus-lg');
        const deleteButton = itemx.querySelector('.delete-item');
        const likeButton = itemx.querySelector('.like-item');
        const quantityElement = itemx.querySelector('.item-quantity');
    

        minusButton.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = --quantity;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotalPrice();
        });

        deleteButton.addEventListener('click', function () {
            itemx.remove();
            updateTotalPrice();
            updateLikeCount();
        });

        likeButton.addEventListener('click', function () {
            likeButton.classList.toggle('liked');
            updateLikeCount();
        });
    });

    updateTotalPrice();
    updateLikeCount();
});



