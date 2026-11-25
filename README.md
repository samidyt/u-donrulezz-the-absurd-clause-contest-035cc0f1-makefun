# The Absurd Clause Contest

[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/samidyt/u-donrulezz-the-absurd-clause-contest-035cc0f1-makefun/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/samidyt/u-donrulezz-the-absurd-clause-contest-035cc0f1-makefun/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

One line, 200 characters at most: an absurd clause hidden deep inside a
terms-of-service agreement. A judge model reads the clauses in pairs and the
funniest one takes the reward.

## The entry

> Section 14.7: by using this service, you agree that your soul is
> non-transferable, except on Tuesdays, when it may be lent to the company
> for morale purposes.

158 characters, one line, one sentence. Deadpan legal boilerplate — a numbered
section, "you agree", "non-transferable" — until the absurdity lands: your
soul, lent out on Tuesdays, for morale purposes.

## How it works

`main.ts` (Node 22.18+, no dependencies) writes exactly that line to
`/output/entry.txt` (no trailing newline). Before writing it self-checks the
sealed gate: 1–200 characters, not only whitespace, a single line. It then
reads the file back and refuses to exit cleanly unless what landed on disk
is byte-identical to the reviewed line. `OUTPUT_DIR` is an env override for
local verification only; the default is `/output`, as the rules require.

## Run

```sh
node main.ts
```

## Bounty

[The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
on [make.fun](https://make.fun) — $2 pot, 10 paid places.
