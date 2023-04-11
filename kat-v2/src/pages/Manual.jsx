import React from "react";
import { RiKakaoTalkFill, RiGithubFill } from "react-icons/ri";
import { SiNotion } from "react-icons/si";

import Comments from "../components/Comments/Comments";

const Manual = () => {
  return (
    <div className="flex flex-wrap items-start p-8 gap-8 z-10 scrollbar-hide lg:flex-nowrap">
      <div className="card w-full max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide lg:w-1/2">
        <div className="card-body">
          <h2 className="card-title">환영합니다!</h2>
          <div className="w-full">
            <strong>각종 문의 및 버그 제보</strong>는&nbsp;
            <a
              className="btn btn-warning gap-2"
              href="mailto:tjddnjsjo@kakao.com"
              target="_top"
            >
              <RiKakaoTalkFill />
              카카오 메일
            </a>
            &nbsp;또는 댓글로 편하게 해주세요 😊
          </div>
          <div className="w-full">
            <a
              className="btn btn-primary gap-2"
              href="https://github.com/wontory/KAT-V2"
            >
              <RiGithubFill />
              Github
            </a>
            &nbsp;<strong>이슈 또는 PR</strong>도 환영입니다!
          </div>
          <div className="w-full">
            <a className="btn btn-outline gap-2" href="/">
              <SiNotion />
              릴리즈 노트 바로가기
            </a>
          </div>
          <div className="divider" />
          <h2 className="card-title">사용 방법</h2>
          <div
            className="overflow-y-scroll scrollbar-hide"
            style={{ maxHeight: "calc(100vh - 489px)" }}
          >
            <ol>
              <li>
                1. 수강할 강의의 정보를&nbsp;
                <a
                  className="badge badge-error badge-lg"
                  href="https://kutis.kyonggi.ac.kr/webkutis/view/indexWeb.jsp"
                >
                  KUTIS
                </a>
                &nbsp;또는&nbsp;
                <a
                  className="badge badge-success badge-lg"
                  href="http://sugang.kyonggi.ac.kr/"
                >
                  경기대학교 수강신청 시스템
                </a>
                에서 찾습니다.
              </li>
              <li>2. 강좌 추가를 눌러 과목명과 학점을 입력합니다.</li>
              <li>
                3. 강좌를 추가한 이후에는 수정/삭제가 불가능하니 신중하게
                입력해주세요.
              </li>
              <li>
                4. 강좌를 하나 이상 추가해야 시간표 생성 버튼이 활성화됩니다.
              </li>
              <li>
                5. 같은 과목명을 공유하는 모든 강의는 분반으로 추가합니다.
              </li>
              <li>6. 분반 추가를 눌러 요일과 시간, 교수 이름을 입력합니다.</li>
              <li>
                7. 분반 입력 폼이 활성화 되어있을 때는 과목 정보 변경이
                불가능합니다.
              </li>
              <li>
                8. 분반을 추가한 이후에는 수정/삭제가 불가능하니 신중하게
                입력해주세요.
              </li>
              <li>
                9. 강좌와 분반을 모두 입력하였으면, 시간표 생성을 클릭해주세요.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Manual;
