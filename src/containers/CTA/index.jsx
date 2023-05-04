import React from 'react';

import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { PageBanner, Hyperlink } from '@edx/paragon';

import messages from './messages';

/**
 * <CTA />
 */
export const CTA = () => (
  <PageBanner>
    <span>
      <FormattedMessage {...messages.ctaFeedbackMessage} />
      <Hyperlink
        isInline
        variant="muted"
        destination="https://docs.google.com/forms/d/e/1FAIpQLSfbywm3dLJkm9S7W6aJRDVUcmX_zy9ncZ7CgFGum3KNLg7NGw/viewform"
        target="_blank"
        showLaunchIcon={false}
      >
        <FormattedMessage {...messages.ctaLinkMessage} />
      </Hyperlink>
      <FormattedMessage {...messages.ctaLetUsKnowMessage} />
    </span>
  </PageBanner>
);

export default CTA;
