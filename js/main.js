// 币圈导航 - 主脚本

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 卡片悬停效果
document.querySelectorAll('.exchange-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 注册按钮点击追踪
document.querySelectorAll('.btn-register').forEach(btn => {
    btn.addEventListener('click', function() {
        const exchange = this.closest('.exchange-card').querySelector('h3').textContent;
        console.log(`注册点击: ${exchange}`);
        // 这里可以添加Google Analytics追踪代码
    });
});

// FAQ折叠
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// 滚动时Header效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
    }
});

// 添加Google Analytics（替换为你的GA ID）
/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'YOUR_GA_ID', 'auto');
ga('send', 'pageview');
*/

console.log('币圈导航 - 加载完成');
