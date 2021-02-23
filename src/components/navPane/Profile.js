import styled from "styled-components";
import { Spacer } from "../common/Spacer";
import { Settings as SettingsIcon } from "../../icons";

const ProfileRoot = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px 0;
  border-bottom: ${({ theme }) => theme.surface.border};
`;

const ProfileImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => image});
  margin: 0 auto;
`;

const SettingsButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -5px;
  bottom: -5px;
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
  color: ${({ theme }) => theme.fontColor.dark};
  font-weight: 500;
`;

const ProfileTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.fontColor.light};
  margin-top: ${({ theme }) => theme.padding(1)}px;
`;

const OnlineIndicator = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #32a941;
  margin-left: ${({ theme }) => theme.padding(1)}px;
`;

const Profile = ({ profileImage }) => {
  return (
    <ProfileRoot>
      <ProfileImage image={profileImage}>
        <SettingsButton>
          <SettingsIcon width={24} height={24} />
        </SettingsButton>
      </ProfileImage>
      <Spacer v={4} />
      <ProfileName>
        Martha Blair
        <OnlineIndicator />
      </ProfileName>
      <ProfileTitle>Developer</ProfileTitle>
    </ProfileRoot>
  );
};

export { Profile };
