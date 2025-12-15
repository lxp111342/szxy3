<script>
        // 移动端菜单切换
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });
        
        // 导航链接点击事件
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                // 移除所有active类
                document.querySelectorAll('nav a').forEach(item => {
                    item.classList.remove('active');
                });
                
                // 为当前点击的链接添加active类
                this.classList.add('active');
                
                // 如果是移动端，点击后隐藏菜单
                if (window.innerWidth <= 768) {
                    document.getElementById('mainNav').classList.remove('active');
                }
                
                // 平滑滚动到目标位置
                const targetId = this.getAttribute('href');
                if(targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // 照片墙图片点击事件
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.addEventListener('click', function() {
                alert('这是彭于晏的照片 ' + (index + 1) + '，李孝平的偶像！');
            });
        });
        
        // 页面加载时显示欢迎信息
        window.addEventListener('load', function() {
            setTimeout(function() {
                console.log("欢迎来到李孝平的个人博客！");
            }, 500);
        });
    </script>