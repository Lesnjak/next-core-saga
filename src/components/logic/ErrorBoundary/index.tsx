import { Component, ErrorInfo, ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

import { ContentLimiter } from '../../common/ContentLimiter';
import { ReactIcon } from '../../common/ReactIcon';
import { Typography } from '../../common/Typography';

type Props = {
  children: () => ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <ContentLimiter>
          <div>
            <ReactIcon size="xl">
              <IoMdClose />
            </ReactIcon>

            <Typography variant="body1" align="center">
              We’re sorry - something has gone wrong. Please try again or
              contact the Client Services Desk.
            </Typography>
          </div>
        </ContentLimiter>
      );
    }

    return children();
  }
}
