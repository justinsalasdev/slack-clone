import React from "react";
import styled from "styled-components";
import GroupIcon from "@material-ui/icons/Group";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useHistory, Link } from "react-router-dom";

function SidebarLink({ title, id }) {


  const styleLink = {
    textDecoration: "none"
  }

  return (
    <SidebarOptionContainer>
      <span>
        <GroupIcon style={{ marginBottom: 5 }} />
      </span>
      <Link Icon={PeopleAltIcon} to={`/dm/${id}/${title}`} style={styleLink}>
        {title}
      </Link>
    </SidebarOptionContainer>
  );
}

export default SidebarLink;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 4px;
  cursor: pointer;

  > a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin-left: 10px;
  }

  > span {
    color: white;
  }

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > .MuiSvgIcon-root {
    font-size: 17px;
    /* padding: 10; */
  }
`;
