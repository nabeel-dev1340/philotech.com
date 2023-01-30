import styled from "styled-components";

interface TechCapsuleProps {
  name?: string;
}

const TechCapsule = ({ name }: TechCapsuleProps) => {
  return <CapsuleContainer>{name}</CapsuleContainer>;
};

export default TechCapsule;

const CapsuleContainer = styled.div`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  color: #fff;
  padding: 5px;
  font-size: 1rem;
  border-radius: 5px;
`;
