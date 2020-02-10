import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Work } from './Work';
import './WorkPlayerView.scss';

interface Props {
  work?: Work;
  visible?: boolean;
  handleClose(): void;
}

export const WorkPlayerView: React.FC<Props> = props => {
  const iframeRef = React.useRef<HTMLIFrameElement>();

  const handleReload = React.useCallback(() => {
    iframeRef.current?.contentDocument.location.reload();
  }, [iframeRef]);

  return (
    <div className="work-player">
      <div className="work-player__header">
        <div>
          <span className="work-player__name">{props.work?.name}</span>{' '}
          {props.work?.date}
        </div>
        <div className="work-player__reload">
          <button onClick={handleReload}>
            <FontAwesomeIcon icon="redo" size="lg" />
          </button>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        className="work-player__iframe"
        src={props.work?.pageSrc}
      ></iframe>
    </div>
  );
};
