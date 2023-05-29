import { useEffect, useState } from "react";

function GoToTheTop() {
    const [showBtn, setShowBtn] = useState(true); // 스크롤을 어느정도 내리면 버튼이 보이게 됨 

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
        showBtn ? <button style={{ right:"10px", bottom:"10px", position:"fixed" }} onClick={GoTop}>TOP</button> : null
    );
}

export default GoToTheTop;