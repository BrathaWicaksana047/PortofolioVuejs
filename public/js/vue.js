const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Buku Cerita Malin Kundang', price: 20000, image: 'img/malinkundang.jpeg' },
                { name: 'Buku Cerita Timun Mas', price: 30000, image: 'img/timunmas.jpeg' },
                { name: 'Buku Cerita Rakyat Nusantara', price: 30000, image: 'img/nusantara.jpeg' },
                { name: 'Buku Cerita Lutung Kasarung', price: 30000, image: 'img/lutung.jpeg' },
                { name: 'Buku Cerita Si Kerbau Yang Rakus', price: 30000, image: 'img/kerbau.jpeg' },
                { name: 'Buku Cerita Helang Terbang Seekor', price: 25000, image: 'img/helang.jpeg' },
                { name: 'Buku Cerita Si Kancil', price: 25000, image: 'img/kancil.jpeg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 1000 },
                { amount: 2000 },
                { amount: 5000 },
                { amount: 10000 },
                { amount: 20000 },
                { amount: 50000 },
                { amount: 100000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');