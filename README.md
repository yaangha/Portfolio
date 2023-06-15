# Portfolio
<https://yaangha.github.io/Portfolio/>

## 사용기술 및 개발환경
* React
* HTML
* CSS
* VSCode

## 구현 기능
* 네비게이션 바

```javascript
function Home() {
    // navBar Btn
    const home = useRef();
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();

    const handleScroll = (el) => {
        window.scrollTo({ top: el.current.offsetTop, behavior: "smooth" });
    };

    // navBar Scroll fix
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScrollNavBar() {
        const {scrollY} = window;
        scrollY > 820 ? setScrollActive(true) : setScrollActive(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrollNavBar);
        return () => {
            window.removeEventListener("scroll", handleScrollNavBar);
        }
    }, []);

    return (
        <div className={homeStyles.fullBox}>
            <div ref={home} className={homeStyles.main_box}>
                <div className={homeStyles.content_box}>
                    <span className={homeStyles.title}>HAEUN<br/>PORTFOLIO</span>
                </div>

                <div>
                    {ScrollActive ? (
                        <div>
                            <div className={navStyle.navBar}>
                                <div className={navStyle.navBtn}>
                                    <button onClick={() => handleScroll(home)}>Home</button>
                                    <button onClick={() => handleScroll(section1)}>Biography</button>
                                    <button onClick={() => handleScroll(section2)}>Skills</button>
                                    <button onClick={() => handleScroll(section3)}>Projects</button>
                                    <button onClick={() => handleScroll(section4)}>Contact</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={navStyle.navBtn}>
                                <button onClick={() => handleScroll(home)}>Home</button>
                                <button onClick={() => handleScroll(section1)}>Biography</button>
                                <button onClick={() => handleScroll(section2)}>Skills</button>
                                <button onClick={() => handleScroll(section3)}>Projects</button>
                                <button onClick={() => handleScroll(section4)}>Contact</button>
                            </div>
                        </div>
                    )}
                </div>

                <div ref={section1}>
                    <AboutMe />
                </div>
                <div ref={section2}>
                    <Skills />
                </div>
                <div ref={section3}>
                    <Projects />
                </div>
                <div ref={section4}>
                    <ContactMe />
                </div>
                <GoToTheTop />
            </div>
        </div>
    );
}
```

* TOP 버튼

```javascript
function GoToTheTop() {
    const [showBtn, setShowBtn] = useState(false); // 스크롤을 어느정도 내리면 버튼이 보이게 됨 

    function handleScroll() {
        const { scrollY } = window; // 현재 어느정도 스크롤 됐는지 윈도우에서 받아옴  
        scrollY > 200 ? setShowBtn(true) : setShowBtn(false); // scrollY 값에 따라 상태 변화  
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // scroll 발생시 handleScroll 실행
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function GoTop() {
        window.scrollTo({ top:0, behavior:"smooth" });
    };

    return (
        showBtn ? <button className={styles.GoToTopBtn} onClick={GoTop}><FaArrowUp size="21"/></button> : null
    );
}
```