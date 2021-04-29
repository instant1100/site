import { ReactElement } from 'react';

type CheckFunctionType = () => boolean;

type CheckComponentProps = { children: ReactElement, check: CheckFunctionType }
type CheckComponentType = (props: CheckComponentProps) => ReactElement

const CheckComponent: CheckComponentType = ({ children, check }) => {
  const available = check();

  return available && children;
};

export default CheckComponent;
