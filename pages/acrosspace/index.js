import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <Wrap>
      <Firstback>
        <Backcover>
          <Toplogo>
            <Logo src="/image/acrosspace.svg" />
          </Toplogo>
          <Mainlogo>
            <div>ENGOY</div>
            <div>CREAVIVE EXPERIENCES</div>
          </Mainlogo>
          <Maincomment>
            <div>
              생각의 모험이 어디에든 다다를 수 있도록 여러분의 아이디어에 멋진
              날개를 달아 드립니다.
            </div>
            <div>
              <Highlight>어크로스페이스</Highlight>가 여러분의 창의적인 경험을
              위한 즐거운 공간이 되어 드리겠습니다.
            </div>
          </Maincomment>
        </Backcover>
      </Firstback>
      <Secondback>
        <Margin>
          <Leftlogo src="/image/left.png" />
          <Right>
            <Rightlogo src="image/right.png" />
            <Rightcomment>
              폴리곤에이드는 3차원 VR 콘텐츠를 프로그래밍할 수 있는 <br />
              온라인 코딩교육 플랫폼으로서, 협력과 나눔을 통한 SW 교육의
              <br />
              올바른 방향을 제시해 줍니다.
              <br />
            </Rightcomment>
            <Buglogo src="image/bug.gif" />
          </Right>
        </Margin>
      </Secondback>
      <Thirdback>
        <Secondbackcover>
          <Logowrap>
            <Thirdlogo src="image/text_j.svg" />
          </Logowrap>
          <Thirdcomment>
            우주 너머 (across space) 미지의 세계로 향하는 인류의 끊임없는
            호기심과 도전 정신은
            <br />
            다양한 창의의 산물로서 과학, 기술, 문화, 사회 곳곳에 스며들어 우리의
            삶을 더욱 풍요롭게 만들어왔습니다.
            <br />
            어크로스페이스는 그 정신의 배턴을 이어 받아 여러분과 함께 새로운
            세상을 만들기 위한 공간을 일궈 나가고자 합니다.
            <br />
          </Thirdcomment>
          <Thirdroket>
            <Rocketimage src="image/rocket_yogaMan3_2.png" />
          </Thirdroket>
        </Secondbackcover>
      </Thirdback>
      <Footer>
        © ACROSSPACE Inc., All rights reserved.
        <br />
        Contact: <a href="http://www.acrosspace.com/">support@acrosspace.com</a>
        / +82-042-861-1011
      </Footer>
    </Wrap>
  );
};

export default index;

const Wrap = styled.div``;

const Firstback = styled.div`
  height: 900px;
  background-image: url('/image/01.banner.jpg');
  background-size: cover;
  position: relative;
`;

const Backcover = styled.div`
  background-color: #233069;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Toplogo = styled.div`
  display: flex;
  justify-content: end;
  height: 50px;
  padding-right: 70px;
`;

const Logo = styled.img`
  width: 300px;
  height: 40px;
`;

const Mainlogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  color: #ffff;
  font-size: 80px;
  font-weight: bold;
`;

const Maincomment = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const Secondback = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(85, 182, 251);
  height: 677px;
`;

const Margin = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Leftlogo = styled.img`
  height: 470px;
  width: 700px;
`;

const Rightlogo = styled.img`
  height: 400px;
  width: 500px;
`;

const Rightcomment = styled.div`
  color: #fff;
  position: absolute;
  top: 190px;
  left: 50px;
  line-height: 1.75;
`;

const Buglogo = styled.img`
  height: 100px;
  width: 200px;
  position: absolute;
  top: 300px;
  left: 150px;
`;

const Thirdback = styled.div`
  height: 900px;
  background-image: url(/image/background_img2.svg);
  position: relative;
  background-color: #2b293d;
`;

const Secondbackcover = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logowrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  position: relative;
`;

const Thirdlogo = styled.img`
  height: 300px;
  width: 50%;
  color: #fff;
`;

const Thirdcomment = styled.div`
  color: #fff;
  line-height: 1.75;
  font-size: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -50px;
`;

const Thirdroket = styled.div`
  text-align: center;
  margin-top: 168px;
`;
const Rocketimage = styled.img`
  height: 200px;
  width: 650px;
`;
const Footer = styled.div`
  color: #c9c9c9;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
