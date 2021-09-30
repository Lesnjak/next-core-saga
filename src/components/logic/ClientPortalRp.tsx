// ! Delete this comment or delete component if its doesn't use
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const ClientPortalRp: FC = (props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};
