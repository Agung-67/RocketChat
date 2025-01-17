import { Meteor } from 'meteor/meteor';

import { MessageAction } from '../../../app/ui-utils/client';
import { setMessageJumpQueryStringParameter } from '../../lib/utils/setMessageJumpQueryStringParameter';

Meteor.startup(() => {
	MessageAction.addButton({
		id: 'jump-to-pin-message',
		icon: 'jump',
		label: 'Jump_to_message',
		context: ['pinned', 'message-mobile', 'direct'],
		action(_, { message }) {
			setMessageJumpQueryStringParameter(message._id);
		},
		condition({ subscription }) {
			return !!subscription;
		},
		order: 100,
		group: 'message',
	});
});
