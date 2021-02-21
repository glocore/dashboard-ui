import styled from "styled-components";
import { Home as HomeIcon, Settings as SettingsIcon } from "../icons";
import profileImage from "../profile.jpg";

const Root = styled.nav`
  border-right: ${({ theme }) => theme.surface.border};
  height: 100vh;
  overflow-y: auto;
`;

const TopIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  color: #a09fa4;
  border-bottom: ${({ theme }) => theme.surface.border};
  ${({ theme }) => theme.clickable}
`;

const TopIcon = () => (
  <TopIconWrapper>
    <HomeIcon width={30} height={30} />
  </TopIconWrapper>
);

const ProfileImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${profileImage});
  margin: ${({ theme }) => theme.padding(4)}px auto;
`;

const SettingsButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #a09fa4;
  ${({ theme }) => theme.clickable}
`;

const ProfileName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888888;
  margin-top: ${({ theme }) => theme.padding(1)}px;
`;

const OnlineIndicator = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: green;
  margin-left: ${({ theme }) => theme.padding(1)}px;
`;

const NavPane = () => {
  return (
    <Root>
      <TopIcon />
      <ProfileImage>
        <SettingsButton>
          <SettingsIcon width={24} height={24} />
        </SettingsButton>
      </ProfileImage>

      <ProfileName>
        Martha Blair
        <OnlineIndicator />
      </ProfileName>
      <ProfileTitle>Developer</ProfileTitle>
    </Root>
  );
};

export { NavPane };
