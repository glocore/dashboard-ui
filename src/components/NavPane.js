import React from "react";
import styled from "styled-components";
import {
  Beaker as BeakerIcon,
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Inbox as InboxIcon,
  Settings as SettingsIcon,
} from "../icons";
import profileImage from "../profile.jpg";
import { NavChild, NavItem } from "./navPane/NavItem";
import { Spacer } from "./common/Spacer";
import { Recents } from "./navPane/Recents";
import { Drawer, Hidden } from "@material-ui/core";

const Root = styled.nav`
  ${({ theme }) => `
    border-right: ${theme.surface.border};
    width: ${theme.ui.navPaneWidth};  
  `}
`;

const TopIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  color: #a09fa4;
  border-bottom: ${({ theme }) => theme.surface.border};
  ${({ theme }) => theme.clickable}
`;

const TopIcon = () => (
  <TopIconWrapper>
    <HomeIcon width={30} height={30} />
  </TopIconWrapper>
);

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
  background-image: url(${profileImage});
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

const NavPane = () => {
  return (
    <Root>
      <TopIcon />
      <ProfileRoot>
        <ProfileImage>
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
      <NavItem Icon={DashboardIcon} active={true} label="Dashboard">
        <NavChild active={true} label="Page Visitors" />
        <NavChild label="Post Performance" />
        <NavChild label="Team Overall" />
      </NavItem>
      <NavItem Icon={CalendarIcon} label="Calendar"></NavItem>
      <NavItem Icon={InboxIcon} label="Inbox"></NavItem>
      <NavItem Icon={BriefcaseIcon} label="Invoicing"></NavItem>
      <NavItem Icon={BeakerIcon} label="Lab / Experimental"></NavItem>

      <Recents />
    </Root>
  );
};

const container = window !== undefined ? () => window.document.body : undefined;

const NavDrawer = ({ open, onClose }) => (
  <>
    <Hidden lgUp>
      <Drawer
        variant="temporary"
        container={container}
        open={open}
        onClose={onClose}
      >
        <NavPane />
      </Drawer>
    </Hidden>
    <Hidden mdDown>
      <Drawer variant="permanent">
        <NavPane />
      </Drawer>
    </Hidden>
  </>
);

export { NavPane, NavDrawer };
