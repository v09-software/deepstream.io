var Deepstream = require( '../deepstream.io' );

function readMessage( message ) {
	var TOPIC = Deepstream.constants.TOPIC;
	var ACTIONS = Deepstream.constants.ACTIONS;
	return {
		isRecord: message.topic === TOPIC.RECORD,
		isEvent: message.topic === TOPIC.EVENT,
		isRPC: message.topic === TOPIC.RPC,

		isCreate: message.action === ACTIONS.CREATEORREAD,
		isRead: message.action === ACTIONS.CREATEORREAD,
		isChange: (
			message.action === ACTIONS.PATCH || message.action === ACTIONS.UPDATE
		),
		isDelete: message.action === ACTIONS.DELETE,

    isAck: message.action === ACTIONS.ACK,
    isSubscribe: message.action === ACTIONS.SUBSCRIBE,
    isUnsubscribe: message.action === ACTIONS.UNSUBSCRIBE,
    isUnsubscribe: message.action === ACTIONS.UNSUBSCRIBE,
    isProviderUpdate: message.action === ACTIONS.PROVIDER_UPDATE,
    isQuery: message.action === ACTIONS.QUERY,
    isRPC: message.action === ACTIONS.RPC,
    isRequest: message.action === ACTIONS.REQUEST,
    isRejection: message.action === ACTIONS.REJECTION,

		name: message.data[ 0 ],
		path: message.action === ACTIONS.PATCH ? message.data[ 2 ] : undefined,
		data: message.action === ACTIONS.PATCH ? message.data[ 3 ] : message.data[ 2 ]
	};
}

module.exports = readMessage;