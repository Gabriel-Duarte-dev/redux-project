import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }

  100% {
    background-position: 300px 0;
  }
`;

export const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #44475a 25%, #55576a 50%, #44475a 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 4px;
`;

export const SkeletonAvatar = styled(SkeletonBox)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const SkeletonText = styled(SkeletonBox)`
  height: 14px;
  margin-bottom: 8px;
`;
