// 游戏网站交互功能脚本

// 侧边栏切换功能
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
    } else {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('expanded');
    }
}

// 响应式处理
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('show');
        if (!sidebar.classList.contains('hidden')) {
            mainContent.classList.remove('expanded');
        }
    }
});

// 侧边栏点击处理
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// 游戏卡片点击处理
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.game-title').textContent;
        alert(`打开游戏: ${title}`);
    });
}); 