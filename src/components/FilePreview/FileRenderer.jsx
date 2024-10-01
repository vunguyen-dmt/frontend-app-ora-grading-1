import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';
import FileCard from './FileCard';
import { ErrorBanner, LoadingBanner } from './Banners';
import { renderHooks } from './hooks';
import messages from './messages';

/**
 * <FileRenderer />
 */
export const FileRenderer = ({
  file,
  intl,
}) => {
  const {
    Renderer,
    isLoading,
    errorStatus,
    error,
    rendererProps,
  } = renderHooks({ file, intl });
  return (
    <FileCard key={file.downloadUrl} file={file}>
      {isLoading && file.downloadUrl && <LoadingBanner />}
      {errorStatus ? (
        <ErrorBanner {...error} />
      ) : (
        <>
          {file.downloadUrl && <Renderer {...rendererProps} />}
          {!file.downloadUrl && (
          <Alert variant="danger"><FormattedMessage {...messages.fileNotFoundError} /></Alert>
          )}
        </>
      )}
    </FileCard>
  );
};

FileRenderer.defaultProps = {};
FileRenderer.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string,
    downloadUrl: PropTypes.string,
  }).isRequired,
  // injected
  intl: intlShape.isRequired,
};

export default injectIntl(FileRenderer);
