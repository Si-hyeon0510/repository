/* ==========================================================================
   MOCK DATABASE & INITIAL SEED DATA
   ========================================================================== */

const INITIAL_MENUS = [
    // Monday (월)
    {
        id: "menu-mon-1",
        name: "고려대 시그니처 쇠고기국밥",
        price: 6000,
        day: "월",
        meal: "lunch",
        description: "한우 사골을 깊게 우려내어 시원한 무와 부드러운 소고기를 듬뿍 넣고 끓여낸 고려대 대표 보양 학식입니다.",
        allergies: ["쇠고기", "대두", "밀"],
        totalQty: 120,
        remainingQty: 45,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-mon-2",
        name: "남산식 왕 돈까스",
        price: 5500,
        day: "월",
        meal: "dinner",
        description: "바삭하게 튀겨낸 수제 돈까스에 달콤한 특제 데미글라스 소스를 얹은 추억의 왕 돈까스입니다.",
        allergies: ["돼지고기", "밀", "우유", "대두"],
        totalQty: 100,
        remainingQty: 12,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-mon-3",
        name: "든든한 전복죽 백반",
        price: 3500,
        day: "월",
        meal: "breakfast",
        description: "신선한 전복 내장을 함께 볶아 끓여 고소하고 영양 가득한 조식용 보양 죽 세트입니다.",
        allergies: ["조개류(전복)", "대두"],
        totalQty: 50,
        remainingQty: 0, // Sold out test
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600"
    },
    
    // Tuesday (화)
    {
        id: "menu-tue-1",
        name: "매콤달콤 춘천 닭갈비 덮밥",
        price: 5800,
        day: "화",
        meal: "lunch",
        description: "매콤한 양념에 아삭한 양배추와 국내산 닭다리살을 볶아 밥 위에 얹어낸 영양만점 덮밥입니다.",
        allergies: ["닭고기", "대두", "밀"],
        totalQty: 150,
        remainingQty: 85,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-tue-2",
        name: "불맛 가득 직화 제육볶음",
        price: 5500,
        day: "화",
        meal: "dinner",
        description: "강한 불에 볶아 은은한 불향이 나는 매콤한 제육볶음과 아삭한 쌈채소 세트입니다.",
        allergies: ["돼지고기", "대두", "밀"],
        totalQty: 120,
        remainingQty: 60,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-tue-3",
        name: "맑은 황태 해장국",
        price: 3500,
        day: "화",
        meal: "breakfast",
        description: "황태와 콩나물을 듬뿍 넣어 시원하고 깔끔하게 끓여낸 숙취 해소용 아침 국밥입니다.",
        allergies: ["대두", "밀"],
        totalQty: 60,
        remainingQty: 22,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600"
    },

    // Wednesday (수)
    {
        id: "menu-wed-1",
        name: "한우 수제 함박스테이크",
        price: 7000,
        day: "수",
        meal: "lunch",
        description: "한우를 정성껏 치대어 만든 패티를 그릴에 굽고 계란 후라이를 올린 고급 수식 메뉴입니다.",
        allergies: ["쇠고기", "돼지고기", "알류(계란)", "우유", "밀"],
        totalQty: 100,
        remainingQty: 35,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-wed-2",
        name: "삼겹살 김치찌개 정식",
        price: 6000,
        day: "수",
        meal: "dinner",
        description: "잘 익은 묵은지와 두툼한 삼겹살을 듬뿍 넣어 칼칼하게 끓여낸 뚝배기 김치찌개입니다.",
        allergies: ["돼지고기", "대두", "밀"],
        totalQty: 110,
        remainingQty: 74,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    },

    // Thursday (목)
    {
        id: "menu-thu-1",
        name: "오색 불고기 비빔밥",
        price: 6000,
        day: "목",
        meal: "lunch",
        description: "달콤 짭조름한 소불고기와 5가지 신선한 나물에 약고추장을 비벼먹는 전통 비빔밥입니다.",
        allergies: ["쇠고기", "대두", "밀", "알류(계란)"],
        totalQty: 130,
        remainingQty: 90,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-thu-2",
        name: "짜장면 & 찹쌀탕수육 세트",
        price: 6500,
        day: "목",
        meal: "dinner",
        description: "불맛 직화 짜장면과 바삭하고 쫄깃한 찹쌀 탕수육을 세트로 즐기는 특식 메뉴입니다.",
        allergies: ["돼지고기", "밀", "대두"],
        totalQty: 120,
        remainingQty: 55,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
    },

    // Friday (금)
    {
        id: "menu-fri-1",
        name: "프레시 연어 회덮밥",
        price: 7500,
        day: "금",
        meal: "lunch",
        description: "신선한 아틀란틱 생연어와 야채, 그리고 매콤새콤 초고추장의 완벽한 조화를 자랑합니다.",
        allergies: ["물고기(연어)", "대두", "밀"],
        totalQty: 80,
        remainingQty: 18,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "menu-fri-2",
        name: "단짠 숯불 치킨마요 덮밥",
        price: 5000,
        day: "금",
        meal: "dinner",
        description: "데리야끼 치킨에 부드러운 스크램블 에그와 고소한 마요네즈를 올린 식단입니다.",
        allergies: ["닭고기", "알류(계란)", "우유", "밀", "대두"],
        totalQty: 150,
        remainingQty: 110,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    }
];

const INITIAL_USERS = [
    { studentId: "2026123456", password: "password", name: "고대생", points: 50000, isAdmin: false },
    { studentId: "korea_admin", password: "admin", name: "식당 최고관리자", points: 0, isAdmin: true }
];

const INITIAL_ORDERS = [
    {
        id: "ORD-20260615-101",
        studentId: "2026123456",
        studentName: "고대생",
        items: [{ menuId: "menu-mon-1", name: "고려대 시그니처 쇠고기국밥", qty: 2, price: 6000 }],
        totalPrice: 12000,
        paymentMethod: "points",
        status: "completed", // Completed pickup
        date: "2026-06-15 12:15:30"
    },
    {
        id: "ORD-20260615-102",
        studentId: "2026999999",
        studentName: "김민재",
        items: [{ menuId: "menu-mon-2", name: "남산식 왕 돈까스", qty: 1, price: 5500 }],
        totalPrice: 5500,
        paymentMethod: "card",
        status: "completed",
        date: "2026-06-15 18:30:12"
    },
    {
        id: "ORD-20260616-201",
        studentId: "2026123456",
        studentName: "고대생",
        items: [{ menuId: "menu-tue-3", name: "맑은 황태 해장국", qty: 1, price: 3500 }],
        totalPrice: 3500,
        paymentMethod: "points",
        status: "completed",
        date: "2026-06-16 08:20:44"
    },
    {
        id: "ORD-20260616-202",
        studentId: "2026123456",
        studentName: "고대생",
        items: [{ menuId: "menu-tue-1", name: "매콤달콤 춘천 닭갈비 덮밥", qty: 1, price: 5800 }],
        totalPrice: 5800,
        paymentMethod: "points",
        status: "ready", // Waiting for pickup
        date: "2026-06-16 12:45:01"
    }
];

const ALLERGY_TYPES = ["난류(계란)", "우유", "메밀", "땅콩", "밀", "대두", "호두", "잣", "쇠고기", "돼지고기", "닭고기", "조개류(굴/전복/홍합 포함)", "새우", "게", "오징어"];

/* ==========================================================================
   DATABASE MANAGER (LOCALSTORAGE WRAPPER)
   ========================================================================== */
const DB = {
    get(key, fallback) {
        const val = localStorage.getItem(`ku_cafeteria_${key}`);
        return val ? JSON.parse(val) : fallback;
    },
    set(key, val) {
        localStorage.setItem(`ku_cafeteria_${key}`, JSON.stringify(val));
    },
    init() {
        if (!localStorage.getItem("ku_cafeteria_initialized")) {
            this.set("menus", INITIAL_MENUS);
            this.set("users", INITIAL_USERS);
            this.set("orders", INITIAL_ORDERS);
            localStorage.setItem("ku_cafeteria_initialized", "true");
        }
    }
};

// Initialize DB on script load
DB.init();

/* ==========================================================================
   APP STATE VARIABLES
   ========================================================================== */
let currentRole = "student"; // "student" | "scanner" | "admin"
let currentUser = DB.get("currentUser", null); // Logged in user session
let selectedDay = "화"; // Default day of week
let selectedMealFilter = "all"; // "all" | "breakfast" | "lunch" | "dinner"
let cart = []; // Current cart items: { menuId, name, price, qty }
let activePaymentMethod = "points"; // "points" | "card"
let activeSelectedMenu = null; // Menu item for details modal
let adminActiveTab = "admin-dashboard"; // "admin-dashboard" | "admin-menu" | "admin-orders"
let adminOrdersFilter = "all"; // "all" | "paid" | "preparing" | "ready" | "completed" | "cancelled"

/* ==========================================================================
   CORE ROLE ROUTER & NAVIGATION
   ========================================================================== */
function switchRole(role) {
    currentRole = role;
    
    // Update Header active states
    document.querySelectorAll(".sim-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`btn-role-${role}`).classList.add("active");
    
    // Hide all portal sections
    document.querySelectorAll(".portal-section").forEach(sec => sec.classList.remove("active"));
    
    // Show active portal section and run initialization
    if (role === "student") {
        document.getElementById("portal-student").classList.add("active");
        initStudentPortal();
    } else if (role === "scanner") {
        document.getElementById("portal-scanner").classList.add("active");
        initScannerPortal();
    } else if (role === "admin") {
        document.getElementById("portal-admin").classList.add("active");
        initAdminPortal();
    }
}

/* ==========================================================================
   1. STUDENT PORTAL LOGIC
   ========================================================================== */
function initStudentPortal() {
    if (!currentUser) {
        // Show Auth Screen
        document.getElementById("student-auth").classList.remove("hidden");
        document.getElementById("student-dashboard").classList.add("hidden");
        document.getElementById("floating-cart-btn").classList.add("hidden");
    } else {
        // Show Dashboard Screen
        document.getElementById("student-auth").classList.add("hidden");
        document.getElementById("student-dashboard").classList.remove("hidden");
        document.getElementById("floating-cart-btn").classList.remove("hidden");
        
        // Load default day (if current local day is between Mon-Fri, select it)
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        const todayIdx = new Date().getDay();
        if (todayIdx >= 1 && todayIdx <= 5) {
            selectedDay = days[todayIdx];
        }
        
        // Render headers and items
        renderStudentHeader();
        renderDateTabs();
        renderStudentMenus();
        updateCartBadge();
    }
}

function toggleAuthForm(isSignup) {
    if (isSignup) {
        document.getElementById("login-form-container").classList.add("hidden");
        document.getElementById("signup-form-container").classList.remove("hidden");
    } else {
        document.getElementById("login-form-container").classList.remove("hidden");
        document.getElementById("signup-form-container").classList.add("hidden");
    }
}

function handleLogin() {
    const studentIdInput = document.getElementById("login-student-id").value.trim();
    const passwordInput = document.getElementById("login-password").value;
    
    if (!studentIdInput || !passwordInput) {
        alert("학번과 비밀번호를 입력해주세요.");
        return;
    }
    
    const users = DB.get("users", []);
    const user = users.find(u => u.studentId === studentIdInput && u.password === passwordInput);
    
    if (!user) {
        alert("학번 혹은 비밀번호가 일치하지 않습니다.");
        return;
    }
    
    // Save Session
    currentUser = user;
    DB.set("currentUser", user);
    
    // Clean inputs
    document.getElementById("login-student-id").value = "";
    document.getElementById("login-password").value = "";
    
    // Switch view
    initStudentPortal();
}

function handleSignup() {
    const studentIdInput = document.getElementById("signup-student-id").value.trim();
    const nameInput = document.getElementById("signup-name").value.trim();
    const passwordInput = document.getElementById("signup-password").value;
    
    if (!studentIdInput || !nameInput || !passwordInput) {
        alert("모든 필드를 입력해 주세요.");
        return;
    }
    
    if (studentIdInput.length < 5) {
        alert("학번은 5글자 이상 입력해 주세요.");
        return;
    }
    
    const users = DB.get("users", []);
    if (users.find(u => u.studentId === studentIdInput)) {
        alert("이미 등록된 학번입니다.");
        return;
    }
    
    const newUser = {
        studentId: studentIdInput,
        name: nameInput,
        password: passwordInput,
        points: 50000, // Default 50k points
        isAdmin: false
    };
    
    users.push(newUser);
    DB.set("users", users);
    
    alert("회원가입이 완료되었습니다! 로그인해 주세요.");
    toggleAuthForm(false);
}

function handleLogout() {
    currentUser = null;
    DB.set("currentUser", null);
    cart = [];
    initStudentPortal();
}

function renderStudentHeader() {
    document.getElementById("lbl-user-name").textContent = `${currentUser.name} 님`;
    document.getElementById("lbl-user-role").textContent = currentUser.isAdmin ? "ADMIN" : "STUDENT";
    document.getElementById("lbl-user-points").textContent = currentUser.points.toLocaleString();
}

function chargePoints() {
    const amount = prompt("충전할 포인트를 입력해 주세요 (최대 100,000 P):", "10000");
    if (amount === null) return; // Cancel
    const parsed = parseInt(amount);
    
    if (isNaN(parsed) || parsed <= 0) {
        alert("올바른 금액을 입력해 주세요.");
        return;
    }
    
    currentUser.points += parsed;
    DB.set("currentUser", currentUser);
    
    // Sync to users list
    const users = DB.get("users", []);
    const idx = users.findIndex(u => u.studentId === currentUser.studentId);
    if (idx !== -1) {
        users[idx].points = currentUser.points;
        DB.set("users", users);
    }
    
    renderStudentHeader();
    alert(`${parsed.toLocaleString()} 포인트가 성공적으로 충전되었습니다!`);
}

function renderDateTabs() {
    const days = ["월", "화", "수", "목", "금"];
    const container = document.getElementById("date-tabs");
    container.innerHTML = "";
    
    const today = new Date();
    const currentDayName = ["일", "월", "화", "수", "목", "금", "토"][today.getDay()];
    
    // Get start date of current week (Monday)
    const monDiff = today.getDay() - 1; 
    const monday = new Date(today);
    monday.setDate(today.getDate() - monDiff);

    days.forEach((day, idx) => {
        const dayDate = new Date(monday);
        dayDate.setDate(monday.getDate() + idx);
        const dateStr = `${dayDate.getMonth() + 1}/${dayDate.getDate()}`;
        
        const btn = document.createElement("button");
        btn.className = `date-tab-btn ${selectedDay === day ? 'active' : ''} ${currentDayName === day ? 'today' : ''}`;
        btn.onclick = () => {
            selectedDay = day;
            renderDateTabs();
            renderStudentMenus();
        };
        
        btn.innerHTML = `
            <span class="day-name">${day}요일</span>
            <span class="day-date">${dateStr}</span>
        `;
        
        container.appendChild(btn);
    });
}

function filterMeal(meal) {
    selectedMealFilter = meal;
    document.querySelectorAll(".meal-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-meal") === meal);
    });
    renderStudentMenus();
}

function renderStudentMenus() {
    const menus = DB.get("menus", []);
    const grid = document.getElementById("menu-items-grid");
    grid.innerHTML = "";
    
    // Filter menus for selected day
    let filtered = menus.filter(m => m.day === selectedDay);
    
    // Filter meal type
    if (selectedMealFilter !== "all") {
        filtered = filtered.filter(m => m.meal === selectedMealFilter);
    }
    
    document.getElementById("lbl-selected-date").textContent = `6월 ${selectedDay === "월" ? "15일" : selectedDay === "화" ? "16일" : selectedDay === "수" ? "17일" : selectedDay === "목" ? "18일" : "19일"} (${selectedDay})`;
    document.getElementById("lbl-menu-count").textContent = `총 ${filtered.length}개 메뉴`;
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="log-empty" style="grid-column: 1/-1; padding: 48px;">선택한 조건의 학식 메뉴가 존재하지 않습니다.</div>`;
        return;
    }
    
    filtered.forEach(m => {
        const card = document.createElement("div");
        card.className = "menu-card glass-panel";
        card.onclick = () => openMenuDetail(m);
        
        const isSoldOut = m.remainingQty <= 0;
        const remainingText = isSoldOut ? "품절 (Sold Out)" : `잔여: ${m.remainingQty}개`;
        const mealTimeStr = m.meal === "breakfast" ? "🌅 아침" : m.meal === "lunch" ? "☀️ 점심" : "🌙 저녁";
        
        card.innerHTML = `
            <div class="menu-card-img-wrapper" style="background-image: url('${m.image}')">
                <span class="menu-card-tag ${m.meal}">${mealTimeStr}</span>
            </div>
            <div class="menu-card-content">
                <div class="menu-card-title-row">
                    <h3>${m.name}</h3>
                    <span class="menu-card-price">₩${m.price.toLocaleString()}</span>
                </div>
                <p class="menu-card-desc">${m.description}</p>
                <div class="menu-card-footer">
                    <span class="stock-indicator ${isSoldOut ? 'soldout' : m.remainingQty < 15 ? 'danger' : ''}">
                        ${isSoldOut ? '🔴' : m.remainingQty < 15 ? '⚠️' : '🟢'} ${remainingText}
                    </span>
                    <div class="allergy-indicator" title="알레르기 정보 있음">
                        ${m.allergies.length > 0 ? m.allergies.map(() => '<span class="allergy-dot"></span>').join('') : ''}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   2. DETAIL MODAL & SHOPPING CART
   ========================================================================== */
function openMenuDetail(menu) {
    activeSelectedMenu = menu;
    
    document.getElementById("detail-food-img").style.backgroundImage = `url('${menu.image}')`;
    document.getElementById("detail-meal-type").textContent = menu.meal === "breakfast" ? "🌅 아침" : menu.meal === "lunch" ? "☀️ 점심" : "🌙 저녁";
    document.getElementById("detail-menu-name").textContent = menu.name;
    document.getElementById("detail-menu-price").textContent = `₩${menu.price.toLocaleString()}`;
    document.getElementById("detail-menu-desc").textContent = menu.description;
    document.getElementById("detail-remaining-qty").textContent = menu.remainingQty;
    
    // Render Allergies
    const list = document.getElementById("detail-allergy-list");
    list.innerHTML = "";
    if (menu.allergies && menu.allergies.length > 0) {
        menu.allergies.forEach(a => {
            const tag = document.createElement("span");
            tag.className = "allergy-tag";
            tag.textContent = a;
            list.appendChild(tag);
        });
    } else {
        list.innerHTML = `<span class="allergy-tag no-allergy">알레르기 유발 정보 없음</span>`;
    }
    
    // Reset Qty
    document.getElementById("detail-qty-val").textContent = "1";
    
    // Enable/Disable cart button based on stock
    const btn = document.getElementById("btn-add-to-cart");
    if (menu.remainingQty <= 0) {
        btn.textContent = "품절되었습니다";
        btn.disabled = true;
        btn.style.opacity = 0.5;
    } else {
        btn.textContent = "장바구니 담기";
        btn.disabled = false;
        btn.style.opacity = 1;
    }
    
    openModal("modal-menu-detail");
}

function adjustDetailQty(amount) {
    if (!activeSelectedMenu || activeSelectedMenu.remainingQty <= 0) return;
    
    const qtyValEl = document.getElementById("detail-qty-val");
    let currentQty = parseInt(qtyValEl.textContent);
    currentQty += amount;
    
    if (currentQty < 1) currentQty = 1;
    if (currentQty > activeSelectedMenu.remainingQty) {
        alert(`금일 준비된 잔여 수량(${activeSelectedMenu.remainingQty}개)을 초과할 수 없습니다.`);
        currentQty = activeSelectedMenu.remainingQty;
    }
    
    qtyValEl.textContent = currentQty;
}

function addSelectedToCart() {
    if (!activeSelectedMenu) return;
    
    const qty = parseInt(document.getElementById("detail-qty-val").textContent);
    
    const existIdx = cart.findIndex(item => item.menuId === activeSelectedMenu.id);
    if (existIdx !== -1) {
        const total = cart[existIdx].qty + qty;
        if (total > activeSelectedMenu.remainingQty) {
            alert(`장바구니 총 수량이 잔여 수량(${activeSelectedMenu.remainingQty}개)을 초과할 수 없습니다.`);
            return;
        }
        cart[existIdx].qty = total;
    } else {
        cart.push({
            menuId: activeSelectedMenu.id,
            name: activeSelectedMenu.name,
            price: activeSelectedMenu.price,
            qty: qty
        });
    }
    
    updateCartBadge();
    closeModal("modal-menu-detail");
    
    // Mini animation confirmation
    const floatingCart = document.getElementById("floating-cart-btn");
    floatingCart.style.transform = "scale(1.15)";
    setTimeout(() => { floatingCart.style.transform = "none"; }, 300);
}

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-badge-count").textContent = totalQty;
    
    const cartBtn = document.getElementById("floating-cart-btn");
    if (totalQty > 0) {
        cartBtn.classList.remove("hidden");
    } else {
        cartBtn.classList.add("hidden");
    }
}

function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById("drawer-cart");
    const panel = drawer.querySelector(".drawer-panel");
    
    if (isOpen) {
        drawer.classList.add("active");
        setTimeout(() => panel.classList.add("active"), 10);
        renderCartItems();
    } else {
        panel.classList.remove("active");
        setTimeout(() => drawer.classList.remove("active"), 300);
    }
}

function handleDrawerOutsideClick(e) {
    if (e.target.id === "drawer-cart") {
        toggleCartDrawer(false);
    }
}

function renderCartItems() {
    const container = document.getElementById("cart-items-list");
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="log-empty" style="padding: 60px 0;">장바구니가 비어 있습니다.</div>`;
        document.getElementById("lbl-cart-total-qty").textContent = "0개";
        document.getElementById("lbl-cart-total-price").textContent = "0원";
        return;
    }
    
    let totalPrice = 0;
    let totalQty = 0;
    
    cart.forEach((item, idx) => {
        const cost = item.price * item.qty;
        totalPrice += cost;
        totalQty += item.qty;
        
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="item-meta">₩${item.price.toLocaleString()} × ${item.qty}개</div>
            </div>
            <div class="cart-item-price-row">
                <span class="cart-item-total">₩${cost.toLocaleString()}</span>
                <button class="cart-item-remove" onclick="removeCartItem(${idx})">삭제</button>
            </div>
        `;
        container.appendChild(row);
    });
    
    document.getElementById("lbl-cart-total-qty").textContent = `${totalQty}개`;
    document.getElementById("lbl-cart-total-price").textContent = `${totalPrice.toLocaleString()}원`;
}

function removeCartItem(idx) {
    cart.splice(idx, 1);
    renderCartItems();
    updateCartBadge();
}

function selectPaymentMethod(method) {
    activePaymentMethod = method;
    
    document.getElementById("pay-card-points").classList.toggle("active", method === "points");
    document.getElementById("pay-card-card").classList.toggle("active", method === "card");
    
    const cardForm = document.getElementById("card-payment-form");
    if (method === "card") {
        cardForm.classList.remove("hidden");
    } else {
        cardForm.classList.add("hidden");
    }
}

// Simulated Card Flipping logic
function updateVirtualCard() {
    const numInput = document.getElementById("card-num-input").value;
    const expInput = document.getElementById("card-exp-input").value;
    
    // Card Number Masking
    let numFormatted = "•••• •••• •••• ••••";
    if (numInput) {
        const parts = numInput.match(/.{1,4}/g) || [];
        numFormatted = parts.join(" ");
        // fill rest with dots
        if (numFormatted.length < 19) {
            numFormatted += "•••• •••• •••• ••••".substring(numFormatted.length);
        }
    }
    document.getElementById("lbl-vcard-number").textContent = numFormatted;
    
    // Expiry Masking
    let expFormatted = "MM/YY";
    if (expInput) {
        expFormatted = expInput;
    }
    document.getElementById("lbl-vcard-expiry").textContent = expFormatted;
}

function processOrderCheckout() {
    if (cart.length === 0) {
        alert("장바구니가 비어 있습니다.");
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    // Check validation of points
    if (activePaymentMethod === "points") {
        if (currentUser.points < totalPrice) {
            alert(`보유 포인트가 부족합니다. (보유: ${currentUser.points.toLocaleString()} P / 필요: ${totalPrice.toLocaleString()} P)`);
            return;
        }
        
        // Deduct points
        currentUser.points -= totalPrice;
        DB.set("currentUser", currentUser);
        
        // Sync points in global list
        const users = DB.get("users", []);
        const idx = users.findIndex(u => u.studentId === currentUser.studentId);
        if (idx !== -1) {
            users[idx].points = currentUser.points;
            DB.set("users", users);
        }
    } else {
        // Validate credit card inputs
        const cardNum = document.getElementById("card-num-input").value;
        const cardExp = document.getElementById("card-exp-input").value;
        const cardCvv = document.getElementById("card-cvv-input").value;
        
        if (cardNum.length < 16 || cardExp.length < 5 || cardCvv.length < 3) {
            alert("카드 결제 정보를 올바르게 입력해 주세요.");
            return;
        }
    }
    
    // Deduct stock levels in database
    const menus = DB.get("menus", []);
    let stockValid = true;
    
    cart.forEach(cartItem => {
        const menuIdx = menus.findIndex(m => m.id === cartItem.menuId);
        if (menuIdx !== -1) {
            if (menus[menuIdx].remainingQty < cartItem.qty) {
                alert(`죄송합니다. [${cartItem.name}] 메뉴의 남은 잔여량이 부족해 주문할 수 없습니다. (현재 잔여: ${menus[menuIdx].remainingQty}개)`);
                stockValid = false;
            }
        }
    });
    
    if (!stockValid) return;
    
    // Update quantities
    cart.forEach(cartItem => {
        const menuIdx = menus.findIndex(m => m.id === cartItem.menuId);
        if (menuIdx !== -1) {
            menus[menuIdx].remainingQty -= cartItem.qty;
        }
    });
    DB.set("menus", menus);
    
    // Create new order record
    const orders = DB.get("orders", []);
    const now = new Date();
    const timeStr = now.getFullYear() + "-" + 
                    String(now.getMonth() + 1).padStart(2, '0') + "-" + 
                    String(now.getDate()).padStart(2, '0') + " " + 
                    String(now.getHours()).padStart(2, '0') + ":" + 
                    String(now.getMinutes()).padStart(2, '0') + ":" + 
                    String(now.getSeconds()).padStart(2, '0');
                    
    const dateNumStr = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    const orderNo = `ORD-${dateNumStr}-${Math.floor(100 + Math.random() * 900)}`;
    
    const newOrder = {
        id: orderNo,
        studentId: currentUser.studentId,
        studentName: currentUser.name,
        items: [...cart],
        totalPrice: totalPrice,
        paymentMethod: activePaymentMethod,
        status: "paid", // Paid -> Preparing -> Ready -> Completed
        date: timeStr
    };
    
    orders.push(newOrder);
    DB.set("orders", orders);
    
    // Reset cart
    cart = [];
    updateCartBadge();
    toggleCartDrawer(false);
    
    // Clear card fields
    document.getElementById("card-num-input").value = "";
    document.getElementById("card-exp-input").value = "";
    document.getElementById("card-cvv-input").value = "";
    document.getElementById("lbl-vcard-number").textContent = "•••• •••• •••• ••••";
    document.getElementById("lbl-vcard-expiry").textContent = "MM/YY";
    
    // Render menu and dashboard
    renderStudentHeader();
    renderStudentMenus();
    
    // Open Receipt
    showOrderReceipt(newOrder);
}

/* ==========================================================================
   3. QR CODE & RECEIPTS
   ========================================================================== */
function showOrderReceipt(order) {
    document.getElementById("lbl-receipt-order-id").textContent = order.id;
    document.getElementById("lbl-receipt-time").textContent = order.date;
    document.getElementById("lbl-receipt-method").textContent = order.paymentMethod === "points" ? "학식 식권 포인트" : "신용카드 결제";
    
    // Render list of items
    const list = document.getElementById("receipt-items-list");
    list.innerHTML = "";
    order.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "receipt-item-line";
        row.innerHTML = `
            <span>${item.name} (x${item.qty})</span>
            <span>₩${(item.price * item.qty).toLocaleString()}</span>
        `;
        list.appendChild(row);
    });
    
    document.getElementById("lbl-receipt-total").textContent = `₩${order.totalPrice.toLocaleString()}`;
    
    // Generate simulated QR Code on Canvas
    generateQRCode(order.id, "qr-canvas");
    
    openModal("modal-receipt");
}

/**
 * Deterministic client-side QR code drawing simulation.
 * Draws corners aligning boxes and a hashed pattern representing QR data.
 */
function generateQRCode(text, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    
    // Clear canvas
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);
    
    ctx.fillStyle = "#000000";
    
    // Drawing Helper: 3 Outer corner markers (TopLeft, TopRight, BottomLeft)
    // QR positioning squares are 7x7 modules
    const modSize = size / 21; // 21x21 grid
    
    function drawPositionFinder(x, y) {
        // Outer 7x7 black
        ctx.fillRect(x * modSize, y * modSize, 7 * modSize, 7 * modSize);
        // Inner 5x5 white
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect((x + 1) * modSize, (y + 1) * modSize, 5 * modSize, 5 * modSize);
        // Center 3x3 black
        ctx.fillStyle = "#000000";
        ctx.fillRect((x + 2) * modSize, (y + 2) * modSize, 3 * modSize, 3 * modSize);
    }
    
    // Top-Left Finder
    drawPositionFinder(0, 0);
    // Top-Right Finder
    drawPositionFinder(14, 0);
    // Bottom-Left Finder
    drawPositionFinder(0, 14);
    
    // Generate hash code from input text
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Draw pseudo-random grid data based on string hash
    ctx.fillStyle = "#000000";
    for (let r = 0; r < 21; r++) {
        for (let c = 0; c < 21; c++) {
            // Skip positioning anchors
            if ((r < 8 && c < 8) || (r < 8 && c >= 13) || (r >= 13 && c < 8)) {
                continue;
            }
            
            // Draw dummy pattern that changes deterministically based on hash
            const val = Math.sin((r * 13 + c * 37) * hash);
            if (val > 0) {
                ctx.fillRect(c * modSize, r * modSize, modSize + 0.5, modSize + 0.5);
            }
        }
    }
}

/* ==========================================================================
   4. ORDER HISTORY (STUDENT)
   ========================================================================== */
function openOrderHistory() {
    renderOrderHistory();
    openModal("modal-history");
}

function renderOrderHistory() {
    const orders = DB.get("orders", []);
    const container = document.getElementById("student-history-list");
    container.innerHTML = "";
    
    // Filter orders for active user
    const userOrders = orders.filter(o => o.studentId === currentUser.studentId).reverse(); // newest first
    
    if (userOrders.length === 0) {
        container.innerHTML = `<div class="history-empty">아직 주문하신 내역이 없습니다.</div>`;
        return;
    }
    
    userOrders.forEach(o => {
        const item = document.createElement("div");
        item.className = "history-item";
        
        let statusText = "";
        if (o.status === "paid") statusText = "결제완료";
        else if (o.status === "preparing") statusText = "조리중";
        else if (o.status === "ready") statusText = "수령대기";
        else if (o.status === "completed") statusText = "수령완료";
        else if (o.status === "cancelled") statusText = "주문취소";
        
        const isCancellable = (o.status === "paid");
        const isReadyForPickup = (o.status === "ready" || o.status === "preparing" || o.status === "paid");
        
        const itemsSummary = o.items.map(it => `${it.name} x ${it.qty}`).join(", ");
        
        item.innerHTML = `
            <div class="history-item-header">
                <div class="history-date-id">
                    <span class="history-date">${o.date}</span>
                    <span class="history-id">${o.id}</span>
                </div>
                <span class="status-badge ${o.status}">${statusText}</span>
            </div>
            <div class="history-item-body">
                <div class="history-menu-summary">${itemsSummary}</div>
                <div class="history-amount">₩${o.totalPrice.toLocaleString()} (${o.paymentMethod === "points" ? "포인트" : "카드"})</div>
            </div>
            <div class="history-item-actions">
                ${isReadyForPickup ? `<button class="btn btn-primary btn-sm" onclick="viewActiveQR('${o.id}')">🎫 식권 QR보기</button>` : ''}
                ${isCancellable ? `<button class="btn btn-outline btn-sm" onclick="handleCancelOrder('${o.id}')">주문 취소</button>` : ''}
            </div>
        `;
        
        container.appendChild(item);
    });
}

function viewActiveQR(orderId) {
    const orders = DB.get("orders", []);
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    closeModal("modal-history");
    showOrderReceipt(order);
}

function handleCancelOrder(orderId) {
    if (!confirm("정말로 주문을 취소하시겠습니까? 즉시 환불 처리됩니다.")) return;
    
    const orders = DB.get("orders", []);
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    
    const order = orders[idx];
    if (order.status !== "paid") {
        alert("이미 조리가 시작되어 주문을 취소할 수 없습니다.");
        return;
    }
    
    // Refund point/card
    if (order.paymentMethod === "points") {
        // Add back points
        currentUser.points += order.totalPrice;
        DB.set("currentUser", currentUser);
        
        // Sync global users
        const users = DB.get("users", []);
        const uIdx = users.findIndex(u => u.studentId === currentUser.studentId);
        if (uIdx !== -1) {
            users[uIdx].points = currentUser.points;
            DB.set("users", users);
        }
    } else {
        // Card refund simulation
        alert(`신용카드 승인 취소 및 ₩${order.totalPrice.toLocaleString()} 환불이 접수되었습니다.`);
    }
    
    // Return stock back to inventory
    const menus = DB.get("menus", []);
    order.items.forEach(item => {
        const mIdx = menus.findIndex(m => m.id === item.menuId);
        if (mIdx !== -1) {
            menus[mIdx].remainingQty += item.qty;
        }
    });
    DB.set("menus", menus);
    
    // Change status
    order.status = "cancelled";
    DB.set("orders", orders);
    
    renderStudentHeader();
    renderStudentMenus();
    renderOrderHistory();
    
    alert("주문 취소 및 환불 처리가 완료되었습니다.");
}

/* ==========================================================================
   5. CAFE KITCHEN / STAFF SCANNER PORTAL
   ========================================================================== */
function initScannerPortal() {
    renderScannerPortal();
}

function renderScannerPortal() {
    const orders = DB.get("orders", []);
    const quickList = document.getElementById("scanner-quick-list");
    quickList.innerHTML = "";
    
    // Filter orders ready for pickup (paid or ready)
    const readyOrders = orders.filter(o => o.status === "ready" || o.status === "paid" || o.status === "preparing");
    
    if (readyOrders.length === 0) {
        quickList.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted);">수령 대기 중인 주문이 없습니다.</span>`;
    } else {
        readyOrders.forEach(o => {
            const btn = document.createElement("button");
            btn.className = "quick-order-btn";
            btn.textContent = o.id;
            btn.onclick = () => {
                document.getElementById("scanner-manual-input").value = o.id;
                simulateManualScan();
            };
            quickList.appendChild(btn);
        });
    }
}

function playBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime); // High pitch beep
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        
        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
            audioCtx.close();
        }, 110);
    } catch(e) {
        console.log("Audio feedback not supported or blocked by browser:", e);
    }
}

function simulateManualScan() {
    const input = document.getElementById("scanner-manual-input").value.trim();
    if (!input) {
        alert("주문 코드를 선택하거나 입력해 주세요.");
        return;
    }
    
    const orders = DB.get("orders", []);
    const orderIdx = orders.findIndex(o => o.id === input);
    
    if (orderIdx === -1) {
        alert("존재하지 않는 주문 번호입니다.");
        return;
    }
    
    const order = orders[orderIdx];
    if (order.status === "completed") {
        alert("이미 수령 처리가 완료된 식권입니다.");
        return;
    }
    if (order.status === "cancelled") {
        alert("취소 처리된 주문 번호입니다.");
        return;
    }
    
    // Trigger virtual camera scan animation
    const idleMsg = document.getElementById("scanner-idle-msg");
    const loadingMsg = document.getElementById("scanner-loading-msg");
    const successMsg = document.getElementById("scanner-success-msg");
    
    idleMsg.classList.add("hidden");
    loadingMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
    
    setTimeout(() => {
        // Success
        playBeep();
        
        loadingMsg.classList.add("hidden");
        successMsg.classList.remove("hidden");
        
        // Update Order Status
        orders[orderIdx].status = "completed";
        DB.set("orders", orders);
        
        // Clear input
        document.getElementById("scanner-manual-input").value = "";
        
        // Log history entry
        addScannerLog(order);
        
        // Refresh Scanner view
        renderScannerPortal();
        
        // Timeout to return scanner to idle
        setTimeout(() => {
            successMsg.classList.add("hidden");
            idleMsg.classList.remove("hidden");
        }, 2000);
        
    }, 1200);
}

function addScannerLog(order) {
    const list = document.getElementById("scanner-logs-list");
    
    // Remove empty log placeholder if it exists
    const emptyLog = list.querySelector(".log-empty");
    if (emptyLog) emptyLog.remove();
    
    const now = new Date();
    const timeStr = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0') + ":" + String(now.getSeconds()).padStart(2, '0');
    
    const itemsStr = order.items.map(it => `${it.name} x ${it.qty}`).join(", ");
    
    const log = document.createElement("div");
    log.className = "log-item";
    log.innerHTML = `
        <div class="log-item-header">
            <span>주문 승인: ${order.id}</span>
            <span class="log-item-time">${timeStr}</span>
        </div>
        <div class="log-item-details">
            수령인: ${order.studentName} (${order.studentId}) <br>
            메뉴: ${itemsStr} (₩${order.totalPrice.toLocaleString()})
        </div>
    `;
    
    list.prepend(log);
}

/* ==========================================================================
   6. ADMIN PORTAL (DASHBOARD & DATA MANAGEMENTS)
   ========================================================================== */
function initAdminPortal() {
    switchAdminTab(adminActiveTab);
}

function switchAdminTab(tab) {
    adminActiveTab = tab;
    
    // Update sidebar buttons
    document.querySelectorAll(".admin-nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
    
    // Switch tab views
    document.querySelectorAll(".admin-tab-content").forEach(tc => {
        tc.classList.remove("active");
    });
    document.getElementById(`tab-${tab}`).classList.add("active");
    
    // Execute specific Tab loader
    if (tab === "admin-dashboard") {
        renderAdminDashboard();
    } else if (tab === "admin-menu") {
        renderAdminMenus();
    } else if (tab === "admin-orders") {
        renderAdminOrders();
    }
}

function renderAdminDashboard() {
    const orders = DB.get("orders", []);
    const menus = DB.get("menus", []);
    
    // Calculate dashboard statistics
    const nonCancelled = orders.filter(o => o.status !== "cancelled");
    const totalSales = nonCancelled.reduce((sum, o) => sum + o.totalPrice, 0);
    const totalOrdersCount = nonCancelled.length;
    
    // Completion rate
    const completedCount = nonCancelled.filter(o => o.status === "completed").length;
    const pickupRate = totalOrdersCount > 0 ? Math.round((completedCount / totalOrdersCount) * 100) : 0;
    
    // Payment ratios
    const pointsAmt = nonCancelled.filter(o => o.paymentMethod === "points").reduce((sum, o) => sum + o.totalPrice, 0);
    const pointsPct = totalSales > 0 ? Math.round((pointsAmt / totalSales) * 100) : 0;
    const cardPct = totalSales > 0 ? 100 - pointsPct : 0;
    
    document.getElementById("lbl-admin-sales").textContent = `${totalSales.toLocaleString()}원`;
    document.getElementById("lbl-admin-orders-count").textContent = `${totalOrdersCount}건`;
    document.getElementById("lbl-admin-pickup-rate").textContent = `${pickupRate}%`;
    document.getElementById("lbl-admin-payment-ratio").textContent = `${pointsPct}% / ${cardPct}%`;
    
    // ----------------------------------------------------
    // Popular Menus Chart rendering
    // ----------------------------------------------------
    const menuStats = {};
    nonCancelled.forEach(o => {
        o.items.forEach(item => {
            if (!menuStats[item.name]) {
                menuStats[item.name] = { name: item.name, count: 0, revenue: 0 };
            }
            menuStats[item.name].count += item.qty;
            menuStats[item.name].revenue += (item.price * item.qty);
        });
    });
    
    const menuStatsArr = Object.values(menuStats).sort((a, b) => b.revenue - a.revenue);
    
    // Render ranking list
    const rankingList = document.getElementById("popular-ranking-list");
    rankingList.innerHTML = "";
    
    if (menuStatsArr.length === 0) {
        rankingList.innerHTML = `<div class="log-empty">주문 매출 데이터가 없습니다.</div>`;
    } else {
        menuStatsArr.slice(0, 4).forEach((stat, idx) => {
            const item = document.createElement("div");
            item.className = "ranking-item";
            item.innerHTML = `
                <span class="rank-number">${idx + 1}</span>
                <div class="rank-details">
                    <span class="rank-name">${stat.name}</span>
                    <span class="rank-sales-count">총 ${stat.count}개 판매</span>
                </div>
                <span class="rank-amount">₩${stat.revenue.toLocaleString()}</span>
            `;
            rankingList.appendChild(item);
        });
    }
    
    // ----------------------------------------------------
    // Custom SVG Bar Chart rendering
    // ----------------------------------------------------
    const chartWrapper = document.getElementById("sales-chart-wrapper");
    chartWrapper.innerHTML = "";
    
    if (menuStatsArr.length === 0) {
        chartWrapper.innerHTML = `<div class="log-empty">매출 그래프 표시 데이터 부족</div>`;
        return;
    }
    
    const maxRev = Math.max(...menuStatsArr.map(s => s.revenue), 1);
    
    // Draw columns
    menuStatsArr.slice(0, 5).forEach(stat => {
        const col = document.createElement("div");
        col.className = "chart-bar-group";
        
        const barHeightPct = Math.max(Math.round((stat.revenue / maxRev) * 100), 5); // Minimum height 5% for visuals
        
        col.innerHTML = `
            <div class="chart-bar-fill" style="height: ${barHeightPct}%;">
                <span class="chart-bar-val">${Math.round(stat.revenue / 1000)}k</span>
            </div>
            <span class="chart-bar-label" title="${stat.name}">${stat.name}</span>
        `;
        chartWrapper.appendChild(col);
    });
}

function renderAdminMenus() {
    const menus = DB.get("menus", []);
    const tbody = document.getElementById("admin-menu-list");
    tbody.innerHTML = "";
    
    // Sort menus by day of week Mon-Fri
    const dayWeights = { "월": 1, "화": 2, "수": 3, "목": 4, "금": 5 };
    const sorted = [...menus].sort((a, b) => {
        if (dayWeights[a.day] !== dayWeights[b.day]) {
            return dayWeights[a.day] - dayWeights[b.day];
        }
        return a.meal.localeCompare(b.meal);
    });
    
    sorted.forEach(m => {
        const tr = document.createElement("tr");
        const mealTimeStr = m.meal === "breakfast" ? "🌅 아침" : m.meal === "lunch" ? "☀️ 점심" : "🌙 저녁";
        
        tr.innerHTML = `
            <td><strong>[${m.day}요일]</strong> <br> ${mealTimeStr}</td>
            <td><strong>${m.name}</strong><br><small style="color:var(--text-secondary)">${m.description.substring(0, 25)}...</small></td>
            <td>₩${m.price.toLocaleString()}</td>
            <td>${m.totalQty}개</td>
            <td style="font-weight:700; color: ${m.remainingQty === 0 ? 'var(--danger-color)' : 'var(--success-color)'}">
                ${m.remainingQty}개
            </td>
            <td>${m.allergies.length > 0 ? m.allergies.join(", ") : '없음'}</td>
            <td>
                <div class="action-btn-group">
                    <button class="btn btn-outline btn-sm" onclick="openMenuFormModal('${m.id}')">수정</button>
                    <button class="btn btn-text btn-sm" style="color:var(--danger-color)" onclick="deleteAdminMenu('${m.id}')">삭제</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openMenuFormModal(menuId) {
    // Render Allergy Checkbox Fields
    const grid = document.getElementById("form-allergy-grid");
    grid.innerHTML = "";
    ALLERGY_TYPES.forEach((type, idx) => {
        const label = document.createElement("label");
        label.className = "allergy-check-label";
        label.innerHTML = `
            <input type="checkbox" name="form-allergy-chk" value="${type}">
            <span>${type}</span>
        `;
        grid.appendChild(label);
    });

    if (!menuId) {
        // Create Mode
        document.getElementById("lbl-menu-form-title").textContent = "🍲 신규 학식 메뉴 등록";
        document.getElementById("form-menu-id").value = "";
        document.getElementById("form-menu-day").value = "월";
        document.getElementById("form-menu-meal").value = "lunch";
        document.getElementById("form-menu-name").value = "";
        document.getElementById("form-menu-price").value = "";
        document.getElementById("form-menu-qty").value = "";
        document.getElementById("form-menu-desc").value = "";
    } else {
        // Edit Mode
        const menus = DB.get("menus", []);
        const m = menus.find(item => item.id === menuId);
        if (!m) return;
        
        document.getElementById("lbl-menu-form-title").textContent = "🍲 학식 메뉴 상세 정보 수정";
        document.getElementById("form-menu-id").value = m.id;
        document.getElementById("form-menu-day").value = m.day;
        document.getElementById("form-menu-meal").value = m.meal;
        document.getElementById("form-menu-name").value = m.name;
        document.getElementById("form-menu-price").value = m.price;
        document.getElementById("form-menu-qty").value = m.totalQty;
        document.getElementById("form-menu-desc").value = m.description;
        
        // Check checkboxes
        const chks = document.getElementsByName("form-allergy-chk");
        chks.forEach(chk => {
            if (m.allergies.includes(chk.value)) {
                chk.checked = true;
            }
        });
    }
    
    openModal("modal-admin-menu-form");
}

function saveAdminMenuForm() {
    const id = document.getElementById("form-menu-id").value;
    const day = document.getElementById("form-menu-day").value;
    const meal = document.getElementById("form-menu-meal").value;
    const name = document.getElementById("form-menu-name").value.trim();
    const price = parseInt(document.getElementById("form-menu-price").value);
    const qty = parseInt(document.getElementById("form-menu-qty").value);
    const desc = document.getElementById("form-menu-desc").value.trim();
    
    if (!name || isNaN(price) || isNaN(qty) || !desc) {
        alert("빈칸 없이 모든 필수 입력사항을 채워주세요.");
        return;
    }
    
    // Gather checked allergies
    const checkedAllergies = [];
    const chks = document.getElementsByName("form-allergy-chk");
    chks.forEach(chk => {
        if (chk.checked) checkedAllergies.push(chk.value);
    });
    
    const menus = DB.get("menus", []);
    
    if (!id) {
        // Insert new
        const newId = `menu-custom-${Date.now()}`;
        const newMenu = {
            id: newId,
            name: name,
            price: price,
            day: day,
            meal: meal,
            description: desc,
            allergies: checkedAllergies,
            totalQty: qty,
            remainingQty: qty,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" // Default generic Unsplash food pic
        };
        menus.push(newMenu);
        alert("성공적으로 신규 메뉴가 등록되었습니다.");
    } else {
        // Edit existing
        const idx = menus.findIndex(m => m.id === id);
        if (idx !== -1) {
            // If total qty increased, add the difference to remaining
            const diff = qty - menus[idx].totalQty;
            menus[idx].name = name;
            menus[idx].price = price;
            menus[idx].day = day;
            menus[idx].meal = meal;
            menus[idx].description = desc;
            menus[idx].allergies = checkedAllergies;
            menus[idx].totalQty = qty;
            menus[idx].remainingQty = Math.max(menus[idx].remainingQty + diff, 0);
        }
        alert("학식 정보가 정상 수정되었습니다.");
    }
    
    DB.set("menus", menus);
    closeModal("modal-admin-menu-form");
    renderAdminMenus();
}

function deleteAdminMenu(menuId) {
    if (!confirm("정말 이 메뉴를 삭제하시겠습니까? 데이터가 유실됩니다.")) return;
    
    const menus = DB.get("menus", []);
    const filtered = menus.filter(m => m.id !== menuId);
    
    DB.set("menus", filtered);
    renderAdminMenus();
}

function filterAdminOrders(status) {
    adminOrdersFilter = status;
    document.querySelectorAll(".filter-tag").forEach(tag => {
        tag.classList.toggle("active", tag.getAttribute("data-status") === status);
    });
    renderAdminOrders();
}

function renderAdminOrders() {
    const orders = DB.get("orders", []);
    const tbody = document.getElementById("admin-orders-list");
    tbody.innerHTML = "";
    
    // Sort reverse chronological
    let filtered = [...orders].reverse();
    
    if (adminOrdersFilter !== "all") {
        filtered = filtered.filter(o => o.status === adminOrdersFilter);
    }
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="log-empty" style="text-align:center; padding: 48px;">관리할 실시간 주문 내역이 없습니다.</td></tr>`;
        return;
    }
    
    filtered.forEach(o => {
        const tr = document.createElement("tr");
        
        let statusBadge = "";
        let actionButtons = "";
        
        // Determine badge markup
        if (o.status === "paid") {
            statusBadge = '<span class="status-badge paid">결제완료</span>';
            actionButtons = `<button class="btn btn-secondary btn-sm" onclick="setOrderStatus('${o.id}', 'preparing')">조리 시작</button>`;
        } else if (o.status === "preparing") {
            statusBadge = '<span class="status-badge preparing">조리중</span>';
            actionButtons = `<button class="btn btn-primary btn-sm" onclick="setOrderStatus('${o.id}', 'ready')">조리완료 (수령대기)</button>`;
        } else if (o.status === "ready") {
            statusBadge = '<span class="status-badge ready">수령대기</span>';
            actionButtons = `<button class="btn btn-secondary btn-sm" onclick="setOrderStatus('${o.id}', 'completed')">수령 완료</button>`;
        } else if (o.status === "completed") {
            statusBadge = '<span class="status-badge completed">수령완료</span>';
            actionButtons = `<span style="font-size:0.85rem; color:var(--text-muted)">완료 처리됨</span>`;
        } else if (o.status === "cancelled") {
            statusBadge = '<span class="status-badge cancelled">주문취소</span>';
            actionButtons = `<span style="font-size:0.85rem; color:var(--text-muted)">환불 완료</span>`;
        }
        
        // Add Admin Cancel/Refund option for active order states
        if (o.status !== "completed" && o.status !== "cancelled") {
            actionButtons += ` <button class="btn btn-text btn-sm" style="color:var(--danger-color)" onclick="adminCancelOrder('${o.id}')">취소/환불</button>`;
        }
        
        const itemsStr = o.items.map(it => `<strong>${it.name}</strong> × ${it.qty}개`).join("<br>");
        
        tr.innerHTML = `
            <td><small style="color:var(--text-secondary)">${o.date}</small><br><strong>${o.id}</strong></td>
            <td><strong>${o.studentName}</strong><br><small style="color:var(--text-secondary)">${o.studentId}</small></td>
            <td>${itemsStr}</td>
            <td>${o.paymentMethod === "points" ? "🎫 포인트" : "💳 카드"}<br><strong>₩${o.totalPrice.toLocaleString()}</strong></td>
            <td>${statusBadge}</td>
            <td>${actionButtons}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

function setOrderStatus(orderId, newStatus) {
    const orders = DB.get("orders", []);
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    
    orders[idx].status = newStatus;
    DB.set("orders", orders);
    
    renderAdminOrders();
    // If scanner page is open, refresh too
    if (currentRole === "scanner") renderScannerPortal();
}

function adminCancelOrder(orderId) {
    if (!confirm("관리자 권한으로 이 주문을 즉시 강제 취소 및 환불 처리 하시겠습니까?")) return;
    
    const orders = DB.get("orders", []);
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    
    const order = orders[idx];
    
    // Perform point refund if points were used
    if (order.paymentMethod === "points") {
        const users = DB.get("users", []);
        const uIdx = users.findIndex(u => u.studentId === order.studentId);
        if (uIdx !== -1) {
            users[uIdx].points += order.totalPrice;
            DB.set("users", users);
            
            // Sync current active user session if they are currently logged in
            if (currentUser && currentUser.studentId === order.studentId) {
                currentUser.points = users[uIdx].points;
                DB.set("currentUser", currentUser);
            }
        }
    } else {
        alert("카드 취소 승인이 진행되었습니다.");
    }
    
    // Return items to menu stock levels
    const menus = DB.get("menus", []);
    order.items.forEach(item => {
        const mIdx = menus.findIndex(m => m.id === item.menuId);
        if (mIdx !== -1) {
            menus[mIdx].remainingQty += item.qty;
        }
    });
    DB.set("menus", menus);
    
    // Set status cancelled
    order.status = "cancelled";
    DB.set("orders", orders);
    
    renderAdminOrders();
    alert("주문 강제 취소 및 환불 완료되었습니다.");
}

/* ==========================================================================
   GLOBAL UTILITIES: MODAL SHOW/HIDE
   ========================================================================== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
        
        // Accessibility focus trap / escape key handle
        window.addEventListener("keydown", handleModalEsc);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        window.removeEventListener("keydown", handleModalEsc);
    }
}

function handleModalEsc(e) {
    if (e.key === "Escape") {
        const activeModal = document.querySelector(".modal-overlay.active");
        if (activeModal) closeModal(activeModal.id);
    }
}

// Close modals when clicking outside the card
document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", function(e) {
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
window.onload = () => {
    // Read and initialize active role
    switchRole("student");
};
