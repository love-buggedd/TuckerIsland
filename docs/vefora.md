---
title: "Vefora"
status: wip
icon: lucide/bot
---

# Vefora
... is a bot made with [Tucker Island][disc] in mind. It's an automated logging tool for moderators and users alike. Most logs are posted in <span class="mention">#public-logs</span> under `VEFORA __LOGS`. Created by <span class="mention">@xyb</span> it's a dependable tool that tracks a large amount of data related to the server.

??? question "Common Q&A"
    <b>Q:</b> <i>Why can't I use some commands that Vefora has?</i>
    <br/>
    <b>A:</b> Not all commands/information is accessible to the general public. If you'd like to request specific information that you cannot access as a regular user please contact <span class="mention">@xyb</span> to submit the data-request.
    
    <b>Q:</b> <i>Am I allowed to privately request data in court?</i>
    <br/>
    <b>A:</b> No, if participating in court please refer to using a verbal request rather than a private one. This action when used in court counts as using a witness if you decide to pull <span class="mention">@xyb</span> up for a testimony in regards to accessing the data desired.

## Documentation
Vefora has a variety of functions.

### Tracked Data
<span class="transparent"><i>Note: This only includes publically available data, and not what moderators can see.</i></span>
=== ":lucide-users-round: User Tracked Data"
    | <b>Data Name</b>    | <b>Data Type</b> |
    |---------------------|-----------------:|
    | User ID             |            `int` |
    | Jails               |            `int` |
    | Unjails             |            `int` |
    | Jail Timestamp      |           `time` |
    | House Arrests       |            `int` |
    | Probations          |            `int` |
    | Tax Audits          |            `int` |
    | License Suspensions |            `int` |
    | Dunces              |            `int` |
    | Ordered Nicknames   |            `int` |
    | Clown Kidnappings   |            `int` |
=== ":lucide-server: Server Tracked Data"
    |   <b>Data Name</b>  | <b>Data Type</b> |
    |---------------------|-----------------:|
    | Bans                |       `int`      |
    | Kicks               |       `int`      |
    | Timeouts            |       `int`      |
    | Elapsed Timeout     |      `float`     |
    | Jails               |       `int`      |
    | Unjails             |       `int`      |
    | Elapsed Jail Time   |      `float`     |
    | House Arrests       |       `int`      |
    | Probations          |       `int`      |
    | Tax Audits          |       `int`      |
    | Total Tax Audit     |      `float`     |
    | License Suspensions |       `int`      |
    | Dunces              |       `int`      |
    | Ordered Nicknames   |       `int`      |
    | Clown Kidnappings   |       `int`      |

### Commands

#### info
```
/info <server | user> <@user>
```

- `<server | user>` - <span class="transparent">Choose between viewing server information and user-specific information.</span>
- `<@user>` - <span class="transparent">Only accessible if `user` is chosen for the first argument. Specifies which user you want to inspect.</span>

!!! bug "Vefora Disclaimer"
    This bot is still under development at the moment. Please refer to the [manual logs][logs] that <span class="mention">@xyb</span> has provided.
    
    Thank you!
<!-- Reference-Style Links -->
[disc]: https://discord.gg/UPQwaM3HsJ
[logs]: https://docs.google.com/spreadsheets/d/1MWMWmnFSWyMHuTw040OLp5K5FXwgz5jpAqs19EjJUGQ/edit?usp=sharing