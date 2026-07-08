// Khởi tạo mảng chứa các sản phẩm trong giỏ hàng
let cart = [];

// Hàm đóng/mở thanh giỏ hàng sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('active');
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
    // Kiểm tra sản phẩm đã tồn tại trong giỏ chưa
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    updateCartUI();
}

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // 1. Cập nhật số lượng hiển thị trên Header
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // 2. Cập nhật danh sách sản phẩm trong Sidebar
    if (cart.length === 0) {
        cartItems.innerHTML = `<p style="padding: 20px; color: #888; text-align:center;">Giỏ hàng trống.</p>`;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <small>${item.price.toLocaleString('vi-VN')} đ x ${item.quantity}</small>
                    </div>
                    <strong>${(item.price * item.quantity).toLocaleString('vi-VN')} đ</strong>
                </div>
            `;
        });
    }

    // 3. Cập nhật tổng tiền
    let totalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerText = totalMoney.toLocaleString('vi-VN') + ' đ';
}