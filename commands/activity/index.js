module.exports = {
	Name: "activity",
	Aliases: null,
	Author: "supinic",
	Last_Edit: "2020-09-08T17:25:36.000Z",
	Cooldown: 15000,
	Description: "Posts a link to the supinic website showing the current channel activity.",
	Flags: ["mention","pipe","skip-banphrase","whitelist"],
	Whitelist_Response: "Only available on Twitch (for now)!",
	Static_Data: null,
	Code: (async function activity (context, target) {
		const channel = sb.Channel.get(target ?? context.channel, context.platform);
		if (!channel) {
			return {
				success: false,
				reply: "Channel does not exist or has no activity available!" 
			};
		}
	
		return {
			reply: `Check channel's recent activity here: https://supinic.com/bot/channel/${channel.ID}/activity`
		};
	}),
	Dynamic_Description: null
};