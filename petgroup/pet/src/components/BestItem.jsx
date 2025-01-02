import React from 'react';
import "./BestItem.scss";

import { Link } from "react-router-dom";

const BestItem = () => {
  return (
    <>
      <section className="bestItem">
        <div className="layout-fix">
          <div className="heading">
            <h2>Best Item</h2>
            <p>Anniversary Sale early</p>
          </div>
          <div className="best">
            <ul className="flexbox">
              <li>
                <Link to="">
                  <div className="betstsp">
                    <div className="bestTxt">
                      <strong>루나 베이직 물병식기</strong>
                      <p>보급형 물병은 퍼피의 체형에 맞게 높이 조절가능 <br/>모든 구성품 분리가 가능해 세척 용이</p>
                      <span><button>MORE</button></span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
              <ul className="best-list">
                      <li>
                        <Link to="">
                          <div className="aWrap">
                            <strong>반자동급식</strong>
                            <p>외출시에도 끼니 걱정 No! <br/>반려동물이 자율적으로<br/>먹을 수 있어요!</p>
                          </div>
                          <div className="aWrap">
                            <button>MORE</button>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to=""></Link>
                      </li>
                      <li>
                        <Link to=""></Link>
                      </li>
                      <li>
                        <Link to="">
                          <div className="aWrap">
                            <strong>반려동물 접이식 밥그릇 2p 세트</strong>
                            <p>늘렸다 줄였다<br/>높이 조절로 평안하게~<br/>반려동물 휴대용 접이식 밥그릇</p>
                          </div>
                          <div className="aWrap">
                            <button>MORE</button>
                          </div>
                        </Link>
                      </li>
                    </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestItem;