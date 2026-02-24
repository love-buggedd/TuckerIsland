---
title: "Economy"
icon: lucide/hand-coins
---
# Economy
The economy system is managed by the Discord bot [UnbelievaBoat][unb]. The economy influences events that happen in the server, roles, and more.
<br/>
If you'd like to go through the commands yourself please refer to:

!!! tip inline end "Notice"
    Please only use economy-related commands in the designated channels, <span class="mention">#economy</span>, and <span class="mention">#cell-block</span>.

- typing `/` in <span class="mention">#economy</span>, pressing the UnbelievaBoat icon and scrolling through.

- visiting the official [command page][cmds] they provide. The server uses the default prefix, `!` for all commands.

## Getting Started
The economy system is simple, this cohesive guide will help you get started earning!

### Earning Money
Earning money is an essential part of the experience on Tucker Island. It's good to know the basics!

#### work
You pick up a job in the T-Regime and earn yourself ᛟ17-23.<br/>
This command is usable every two minutes.
```
/work
```

#### crime
You can commit a crime in the T-Regime and potentially earn `ᛟ600-1250`.<br/>
It's worth mentioning that there is a `60%` chance of failure and a fine of `20 - 40%`.<br/>
This command is usable every twenty-five minutes.
```
/crime
```

#### rob
Allows you to rob another member of the Discord server, taking all the Cash they have.<br/>
This command does have a chance of a fine, but all parameters of it are unknown.
```
/rob <user>
```

- `<user>` - <span class="transparent">Mention a user to attempt robbing them.</span>

#### collect-income
You have a government mandated ᛟ100 that you earn every day. This command allows you to recieve that money.<br/>
For anyone that has a government-related role, you will recieve an additional amount of money on top of the regularly mandated payout. This amount is determined based on the following formula, `(<people in server>*100)*0.05`.
```
/collect-income
```

### Storing Money
When your money is stored it ensures other members of the server cannot rob you of your cash.

#### deposit
Allows you to deposit `all` or a specific amount of cash into your bank.
```
/deposit <amount | all>
```

- `<amount | all>` - <span class="transparent">You can type a specific amount to deposit, or type `all` to deposit all the money you have into your bank. Optionally you can just leave it blank and use purely `/deposit` to deposit all, this method doesn't work with the `!` prefix.</span>

#### withdraw
Allows you to withdraw `all` or a specific amount of cash into your bank.
```
/withdraw <amount / all>
```

- `<amount | all>` - <span class="transparent">Refer to `deposit`'s explanation as it functions the same.</span>

### Spending Money
The ability to spend money is an important part of the server as you can buy collectables, and usable items of varying tradability. Some items will be exclusive or limited edition raising their value and encouraging in-server trading (selling). Usable items generally earn you benefits inside specific events, give your roles, or allow for other features.

#### store
Allows you to view all the items the T-Regime has in market.
```
/store [page]
```

- `[page]` - <span class="transparent">Intakes an integer number, that puts you at the specified store page.</span>

#### inventory
Allows you to access all the items in your inventory.
```
/inventory <user> [page]
```

- `<user>` - <span class="transparent">Mention and specify which user's inventory you'd like to see, if left blank it'll default to you.</span>
- `[page]` - <span class="transparent">Refer to `store`'s explanation as it functions the same.</span>

#### buy-item
Allows you to buy an item from the store.
```
/buy-item [quantity] <item name>
```

- `[quantity]` - <span class="transparent">Intakes an integer number, that buys the specified amount.</span>
- `<item name>` - <span class="transparent">Intakes a string value, that buys the item specified.</span>

#### sell-item
Allows you to sell (trade) an item in your inventory to another member for monetary gain.
```
/sell-item <member> [quantity] <item name>
```

- `<member>` - <span class="transparent">Mention and specify which user you'd like to sell to.</span>
- `[quantity]` - <span class="transparent">Intakes an integer number, that sells the specified amount.</span>

#### use-item
Allows you to use an item in your inventory.
```
/use-item [quantity] <item name>
```

- `[quantity]` - <span class="transparent">Intakes an integer number, that uses the specified amount.</span>
- `<item name>` - <span class="transparent">Refer to `buy-item`'s explanation as it functions the same.</span>

### Gambling
Let's go gambling!<br/>
The following gambling-related commands are available for usage.

#### blackjack

- `blackjack [bet]`

#### higher-lower

- `higher-lower [bet]`

#### roulette

- `roulette [bet] <space>`

#### cock-fight

- `cock-fight [bet]`

#### russian-roulette

- `russian-roulette [bet]`

#### roll

- `roll [max number or options to choose from]`

#### slot-machine

- `slot-machine [bet]`

!!! failure "Command Usage"
    Please note that some are only accessible with the `!` prefix.<br/>
    If you're having difficulties with any command please refer to the [command page][cmds] or contact staff.

<!-- Reference-Style Links -->
[unb]: https://unbelievaboat.com/
[cmds]: https://unbelievaboat.com/commands