once a card is spawned we lose the "object" concept of a card,
it is now a bunch of states on different arrays.
That might be a problem because if we attach a card on top of a card,
for example an armor, then if we move the card alesewhere on the board
it is pretty difficult to know to move the amor no?
however it's easy to apply effects that apply on neighboors (if they don't stick to a neighbor that moves elsewhere though)

what does a 0 mean in an effect matrix? untouched or set value to 0?
should we use null or -1 instead of 0 then?
or 0 doesn't matter for add and sub, only for mul and div? so thats ok?

Consider using TS+ ?
https://dev.to/matechs/the-case-for-ts-18b3#whats-next
* fluent functional API (extensions)
* tree-shakable
* integrates well with effectTS and fp-ts
* use JSDoc to specify TS+ specific typings infos

in a game we don't want to use big numbers so maybe using a custom number type would be good to ensure positive
and ensure our specific add sub mul div operations are used