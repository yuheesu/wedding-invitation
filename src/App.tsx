import { useEffect } from "react"
import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { STATIC_ONLY } from "./env"

// ✅ Kakao SDK 불러오기 (한 번만 실행되게)
if (typeof window !== "undefined" && !window.Kakao) {
  const script = document.createElement("script")
  script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
  script.integrity = "sha384-mg+2dlrJ9Ihp+fT/2RFgrVJDLNZo1l6O8n9nHd7UD1ZglvAjmDx1LkKk4ljZqLX4"
  script.crossOrigin = "anonymous"
  document.head.appendChild(script)

  script.onload = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_SDK_JS_KEY)
      console.log("✅ Kakao SDK Initialized!")
    }
  }
}


function App() {
  return (
    <div className="background">
      <BGEffect />
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />

          {/* 모시는 글 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 결혼식 날짜 (달력) */}
          <Calendar />

          {/* 겔러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 마음 전하기 */}
          <Information />
          {/* 방명록 */}
          {!STATIC_ONLY && <GuestBook />}
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
