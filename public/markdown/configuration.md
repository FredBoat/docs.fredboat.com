# Configuration
FredBoat supports a few options when it comes to customizing it's behavior in your server. __You must be a server admin to change any of these settings.__

## The ;;lang command
Want to use FredBoat in your native language? Server admins can set the language of FredBoat in their server. Say for instance I wanted to change the language to French:

```
;;lang fr_FR 
```

Run the `;;lang` command with no arguments to get a full list of supported languages. All translations are crowdsourced and we could really use some help bringing FredBoat to the world! [Click here to help](https://crowdin.com/project/fredboat).

## The ;;config command
This command allows you to change a couple server specific settings for the bot. Running the `;;config` command without args should show you something like this:

```
track_announce = false
auto_resume = false
```

If you want FredBoat to start announcing new tracks being played, you can enable that feature with:

```
;;config track_announce true
```

If you want to get the bot to unpause when someone joins the voice chat, you can change this setting:

```
;;config auto_resume true
```

## Enabling/disabling automatic deletion of ;;play requests
If FredBoat has permission to delete messages, it will automatically delete any valid ;;play requests in case the spam  gets too much. If you prefer to keep the messages, you can just disable this bot's delete messages permission. 
