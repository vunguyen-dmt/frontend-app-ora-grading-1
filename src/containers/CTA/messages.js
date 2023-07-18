/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';
import { StrictDict } from 'utils';

const messages = defineMessages({
  ctaFeedbackMessage: {
    id: 'ora-grading.CTA.feedbackMessage',
    defaultMessage: 'Thanks for using the new ORA staff grading experience. ',
    description: 'Thank user for using ora and ask for feed back',
  },
  ctaLinkMessage: {
    id: 'ora-grading.CTA.linkMessage',
    defaultMessage: 'Provide some feedback',
    description: 'placeholder for the feedback anchor link',
  },
  ctaLetUsKnowMessage: {
    id: 'ora-grading.CTA.letUsKnowMessage',
    defaultMessage: ' and let us know what you think!',
    description: 'inform user to provide feedback',
  },
  seeMoreInstructions: {
    id: 'ora-grading.CTA.seeMoreInstructions',
    defaultMessage: 'See more instructions',
    description: '',
  },
  here: {
    id: 'ora-grading.CTA.here',
    defaultMessage: 'here',
    description: '',
  },
});

export default StrictDict(messages);
