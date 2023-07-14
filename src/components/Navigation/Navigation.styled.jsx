import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  color: #f1a702;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;
