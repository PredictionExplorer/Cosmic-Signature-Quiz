# Cosmic Signature Game Quiz

How well do you really know Cosmic Signature? This quiz tests your mastery of the game's mechanics, strategies, prizes, and special roles. Whether you are a newcomer or a seasoned veteran, see how deep your knowledge goes.

- **Section 1: Basic** (Questions 1--50)
- **Section 2: Medium** (Questions 51--100)
- **Section 3: Hard** (Questions 101--200)

Each question has exactly one correct answer. Every question ships with a plain-language explanation, shown whenever an answer is wrong, plus a short rationale for each individual option so you can learn why the others miss.

---

## Section 1: Basic (Questions 1--50)

**1. At its core, what type of on-chain game is Cosmic Signature?**
- A) A prediction market where players stake ETH on outcomes of future events.
- B) A last-bidder-wins auction where a countdown timer is refreshed by each bid.
- C) A yield-farming vault that pays interest on deposited ETH and CST.
- D) A marketplace that matches CST buyers and sellers automatically.

**Explanation:** Cosmic Signature is a last-bidder-wins game. Every bid pushes the main-prize countdown further into the future; when the timer finally runs out, whoever placed the most recent bid is entitled to claim the main prize.
- A) Wrong — the game involves no external events or outcome prediction; players only compete over bid timing.
- B) Correct — a bid makes you the "last bidder" and extends the countdown; the last bidder at expiry wins.
- C) Wrong — there is no passive yield on held ETH or CST; rewards come from actively bidding or staking.
- D) Wrong — there is no built-in exchange inside the game; CST trades, if any, happen elsewhere.

**2. Which blockchain network is Cosmic Signature designed to run on?**
- A) Ethereum mainnet, to benefit from the largest validator set.
- B) Polygon, for near-zero transaction fees.
- C) Arbitrum, a layer-2 network that settles to Ethereum.
- D) Optimism, another popular layer-2 network.

**Explanation:** The game is deployed on Arbitrum and uses features of that network to generate its random numbers on-chain.
- A) Wrong — mainnet fees would make the many small bids impractical, and the random-number logic relies on Arbitrum.
- B) Wrong — Polygon is a different network; the game is not deployed there.
- C) Correct — the game lives on Arbitrum.
- D) Wrong — Optimism is a different layer-2; the game is not there.

**3. A player can place a bid using which two currencies?**
- A) ETH only, with or without an attached Random Walk NFT.
- B) ETH or the Cosmic Signature Token (CST).
- C) USDC or ETH, depending on the round.
- D) CST or the Cosmic Signature NFT (COSMIC).

**Explanation:** There are two bid types: an ETH bid and a CST bid. ETH bids can optionally include a Random Walk NFT for a discount, but that is a modifier — not a separate currency.
- A) Wrong — ETH is one bid type, but CST is a fully separate bid type.
- B) Correct — ETH and CST are the two bid currencies accepted by the game.
- C) Wrong — USDC is not supported.
- D) Wrong — the Cosmic Signature NFT is a prize, never a bid medium.

**4. What ends a bidding round?**
- A) A fixed clock expires exactly 24 hours after the round starts, regardless of bids.
- B) Someone burns enough CST to trigger an early close.
- C) A user successfully claims the main prize after the countdown has elapsed.
- D) The operator of the game manually closes the round at their discretion.

**Explanation:** A round only ends when someone claims the main prize. That claim can only happen after the main-prize countdown has finished.
- A) Wrong — the deadline is extended by every new bid, so it is not a fixed clock.
- B) Wrong — CST burns happen as part of CST bids, but they do not close the round.
- C) Correct — the main-prize claim distributes prizes and advances the round counter.
- D) Wrong — the operator cannot force-close a round; closure happens via a user's claim.

**5. What is the ticker symbol of the Cosmic Signature Token?**
- A) COSIG
- B) CSG
- C) CST
- D) COSMIC

**Explanation:** The Cosmic Signature Token's ticker is CST. COSMIC is the separate ticker used by the Cosmic Signature NFT.
- A) Wrong — COSIG is not the configured symbol.
- B) Wrong — CSG is not the configured symbol.
- C) Correct — CST is the ticker of the Cosmic Signature Token.
- D) Wrong — COSMIC is the ticker of the Cosmic Signature NFT, not the token.

**6. What is the ticker symbol of the Cosmic Signature NFT?**
- A) CST
- B) COSMIC
- C) CSNFT
- D) SIG

**Explanation:** The NFT's symbol is COSMIC, distinct from the token's CST ticker.
- A) Wrong — CST is the fungible token, not the NFT.
- B) Correct — the NFT uses the COSMIC symbol.
- C) Wrong — CSNFT is not used.
- D) Wrong — SIG is not used anywhere in the game.

**7. Which role is awarded to the player who remained the last bidder for the longest single uninterrupted stretch of time in a round?**
- A) Chrono-Warrior
- B) Endurance Champion
- C) Last CST Bidder
- D) Main Prize Winner

**Explanation:** The Endurance Champion is the person whose single continuous run as last bidder is the longest of the round.
- A) Wrong — the Chrono-Warrior recognizes holding the Endurance Champion title, not the raw last-bidder streak.
- B) Correct — the Endurance Champion has the longest single continuous last-bidder interval.
- C) Wrong — that role goes to whoever most recently bid with CST, independent of duration.
- D) Wrong — the Main Prize Winner is simply whoever successfully claims the main prize.

**8. Who receives the main ETH prize when a round ends?**
- A) The Endurance Champion, automatically sent at round end.
- B) The Chrono-Warrior, as part of the Chrono-Warrior prize bundle.
- C) Whoever successfully claims the main prize — normally the last bidder, or anyone after a timeout.
- D) A randomly drawn bidder selected during the prize distribution.

**Explanation:** The main prize is paid directly to whoever calls the claim action. Only the last bidder can claim during the exclusive window; after a timeout, anyone can.
- A) Wrong — the Endurance Champion gets CST and a Cosmic Signature NFT, not the main ETH prize.
- B) Wrong — the Chrono-Warrior receives a separate smaller ETH prize, not the main prize.
- C) Correct — the main prize goes to whoever successfully claims it.
- D) Wrong — random draws distribute smaller raffle prizes, not the main prize.

**9. What are the two tokens minted by the Cosmic Signature game itself?**
- A) CST and RWLK
- B) CST and the Cosmic Signature NFT (COSMIC)
- C) RWLK and COSMIC
- D) ETH and CST

**Explanation:** The game is the sole source of newly minted CST and newly minted COSMIC NFTs. Everything else flows in from outside.
- A) Wrong — RWLK is a third-party NFT; the game cannot mint it.
- B) Correct — CST and COSMIC are the two tokens the game mints.
- C) Wrong — the game never mints RWLK.
- D) Wrong — ETH is received and distributed, not minted.

**10. What is the purpose of the Charity Wallet?**
- A) To hold CST that will later fund marketing efforts.
- B) To collect a percentage of each round's ETH balance, to be sent to charity.
- C) To lock bidder deposits until the next round begins.
- D) To pay gas rebates to users who place many bids.

**Explanation:** At the end of each round, a set percentage of the game's ETH balance is transferred toward charity. The Charity Wallet holds that ETH until someone forwards it to the chosen charity.
- A) Wrong — that is the role of the Marketing Wallet, which holds CST.
- B) Correct — the Charity Wallet receives ETH earmarked for charity.
- C) Wrong — bidder deposits immediately become part of the game's prize pool.
- D) Wrong — the game does not refund gas to frequent bidders.

**11. What is the purpose of the Marketing Wallet?**
- A) To reward ETH to bidders who promote the project on social media.
- B) To accept third-party NFT donations during a round.
- C) To hold the CST supply used to fund marketing initiatives.
- D) To manage the treasury's ETH reserves.

**Explanation:** At the end of every round, a fixed amount of new CST (3,000 CST by default) is minted to the Marketing Wallet. A treasurer appointed by the operator distributes it to fund marketing work.
- A) Wrong — the wallet holds CST, not ETH.
- B) Wrong — donated NFTs go to the Prizes Wallet instead.
- C) Correct — it is CST-denominated and funds the marketing program.
- D) Wrong — there is no ETH treasury managed by this wallet.

**12. How are governance decisions made for the Cosmic Signature ecosystem?**
- A) A multi-signature wallet controlled by the founding team signs each change.
- B) A DAO where voting power is based on CST holdings votes on proposals.
- C) Off-chain polls that the operator executes manually.
- D) The operator decides alone, with no community governance.

**Explanation:** There is a dedicated DAO whose voting power comes from how much CST each voter has delegated. Holders propose and vote on changes.
- A) Wrong — there is no multi-sig governance layer.
- B) Correct — CST holders vote in the DAO.
- C) Wrong — governance happens on-chain, not on external polls.
- D) Wrong — the operator has administrative powers, but a DAO exists on top.

**13. What restriction applies to the very first bid of every new round?**
- A) It must be placed using CST to prove CST liquidity exists.
- B) It must be placed using ETH.
- C) It must come from a Random Walk NFT holder.
- D) There is no restriction; any bid type opens the round.

**Explanation:** The first bid of every round is required to be ETH; the game refuses a CST bid when no one has bid yet. An ETH first bid also kicks off the CST pricing clock for the round.
- A) Wrong — a CST first bid is specifically refused.
- B) Correct — the first bid must be ETH.
- C) Wrong — Random Walk NFTs are optional on ETH bids; they do not constrain the first bid.
- D) Wrong — the first-bid-must-be-ETH rule is strictly enforced.

**14. What happens to the round's countdown each time a new bid is placed?**
- A) The deadline is pushed further into the future.
- B) The deadline is shortened to create urgency.
- C) The deadline resets only on CST bids; ETH bids leave it unchanged.
- D) The deadline is frozen while a bid is being processed.

**Explanation:** Every bid extends the main-prize deadline; the countdown never moves backward.
- A) Correct — every bid pushes the deadline later.
- B) Wrong — the countdown is never shortened by a bid.
- C) Wrong — both bid types extend the deadline equally.
- D) Wrong — the deadline is updated in one step; nothing is "frozen".

**15. What role does the Prizes Wallet play in the system?**
- A) It stores ETH donations until the next round's activation.
- B) It safekeeps secondary ETH prizes, donated tokens, and donated NFTs until winners withdraw them.
- C) It manages the CST supply available for DAO proposals.
- D) It runs the Dutch auction mechanism for CST.

**Explanation:** The Prizes Wallet holds secondary ETH prizes, donated tokens, and donated NFTs on behalf of winners. Winners can withdraw any time before a 5-week timeout, after which anyone can sweep them.
- A) Wrong — ETH donations go straight into the game's own balance.
- B) Correct — the Prizes Wallet custodies secondary and donated prizes.
- C) Wrong — the DAO reads CST balances directly, not from this wallet.
- D) Wrong — Dutch auctions run inside the main game, not in this wallet.

**16. How many stages does a bidding round pass through?**
- A) Two: open and finished.
- B) Three: inactive, active before any bid, and active after the first bid.
- C) Four: pending, open, closing, and archived.
- D) One: a round is always live until someone wins it.

**Explanation:** A round is inactive until its activation time, then active-with-no-bids until the first bid arrives, then active-with-bids from that point on.
- A) Wrong — this misses the "active before any bid" stage, which is functionally distinct.
- B) Correct — inactive, active-no-bid, active-with-bid.
- C) Wrong — the game distinguishes three stages, not four.
- D) Wrong — there is a deliberate delay between rounds, so a round is not always live.

**17. Who is permitted to mint new CST tokens?**
- A) Any CST holder, on demand.
- B) The operator, via an admin function.
- C) Only the Cosmic Signature game itself, as part of bid rewards and round payouts.
- D) The Marketing Wallet, when it runs low.

**Explanation:** Only the Cosmic Signature game itself is permitted to create new CST. Regular holders can only burn their own balance.
- A) Wrong — holders can only burn their own tokens, never mint.
- B) Wrong — the operator cannot mint directly; minting is automatic in the game's flow.
- C) Correct — only the game creates new CST.
- D) Wrong — the Marketing Wallet receives newly minted CST but does not mint it itself.

**18. Can the Cosmic Signature game be upgraded after deployment?**
- A) No, it is fully immutable once deployed.
- B) Yes, but only by the operator while the current round is idle between sessions.
- C) Yes, by anyone at any time through a public upgrade action.
- D) Only through a DAO vote during an active round.

**Explanation:** The operator can push an upgrade, but only while the game is between rounds — never during an active round — which preserves trust mid-round.
- A) Wrong — the game is designed to be upgradeable.
- B) Correct — only the operator, and only between rounds, can upgrade.
- C) Wrong — only the operator can trigger upgrades.
- D) Wrong — the DAO does not have upgrade authority on its own, and upgrades cannot happen mid-round.

**19. Roughly what discount does attaching a Random Walk NFT give to an ETH bid?**
- A) 10%
- B) 25%
- C) 50%
- D) 90%

**Explanation:** Presenting a Random Walk NFT cuts the ETH you need to pay roughly in half.
- A) Wrong — the discount is much larger than 10%.
- B) Wrong — the discount is half, not a quarter.
- C) Correct — about 50% off the ETH price.
- D) Wrong — 90% is far too generous.

**20. What does a bidder receive simply for placing a bid (before any round-end prizes)?**
- A) A small amount of newly minted CST, given for every bid regardless of type.
- B) A guaranteed Cosmic Signature NFT per bid.
- C) A free Random Walk discount on their next ETH bid.
- D) Nothing; rewards only arrive at round end.

**Explanation:** Every bid — ETH or CST — causes the game to mint a small CST reward (100 CST by default) directly to the bidder.
- A) Correct — each bid mints CST to the bidder as an immediate reward.
- B) Wrong — NFTs are minted only at round end to specific winners and raffle picks.
- C) Wrong — the Random Walk discount requires owning and presenting such an NFT; it is not a reward.
- D) Wrong — the CST reward is minted in the same transaction as the bid.

**21. The Chrono-Warrior earns which prize at round end?**
- A) A share of the main ETH prize proportional to their streak.
- B) An ETH prize equal to 8% of the game's balance, plus CST and a Cosmic Signature NFT.
- C) Only CST, with no ETH.
- D) Nothing; the role is purely honorary.

**Explanation:** The Chrono-Warrior receives 8% of the game's ETH balance, a 1,000-CST payout, and one newly minted Cosmic Signature NFT.
- A) Wrong — the main prize is separate and goes to the main-prize claimer.
- B) Correct — 8% ETH plus CST and an NFT.
- C) Wrong — CST alone describes the Endurance Champion, not the Chrono-Warrior.
- D) Wrong — the role carries a real ETH prize.

**22. Which round-end role receives CST and a Cosmic Signature NFT but no ETH?**
- A) Endurance Champion
- B) Chrono-Warrior
- C) Main Prize Winner
- D) The Marketing Wallet

**Explanation:** The Endurance Champion's prize bundle is 1,000 CST plus one newly minted Cosmic Signature NFT — no ETH.
- A) Correct — CST and NFT, no ETH.
- B) Wrong — the Chrono-Warrior also gets an ETH prize.
- C) Wrong — the Main Prize Winner gets the main ETH prize plus CST and an NFT.
- D) Wrong — the Marketing Wallet receives CST, but no NFT.

**23. Roughly what percentage of the game's ETH balance is awarded as the main prize at round end?**
- A) 5%
- B) 25%
- C) 50%
- D) 100%

**Explanation:** Exactly 25% of the game's ETH balance at claim time is paid out as the main prize.
- A) Wrong — the main prize is much larger than 5%.
- B) Correct — 25% by default.
- C) Wrong — 50% is the sum of all round-end ETH payouts, not the main prize alone.
- D) Wrong — the entire balance is never paid out in one round; about half carries over.

**24. Approximately what percentage of the game's ETH balance goes to charity each round?**
- A) 1%
- B) 7%
- C) 25%
- D) 50%

**Explanation:** 7% of the balance is sent toward charity each round by default.
- A) Wrong — the charity share is larger than 1%.
- B) Correct — 7% by default.
- C) Wrong — 25% is the main prize.
- D) Wrong — only about half of the balance is distributed each round.

**25. How many secondary ETH raffle prizes are drawn for random bidders at round end?**
- A) 1
- B) 3
- C) 10
- D) One per bidder in the round

**Explanation:** Three random bidders each receive an equal share of the ETH raffle pool.
- A) Wrong — more than one ETH raffle winner is drawn per round.
- B) Correct — three ETH raffle winners per round.
- C) Wrong — 10 is the NFT raffle count, not the ETH raffle count.
- D) Wrong — the number is fixed at 3, independent of how many bidders there are.

**26. What type of token is the Cosmic Signature NFT (COSMIC)?**
- A) A standard fungible currency-style token.
- B) A unique collectible, with each one individually distinguishable.
- C) A multi-token used for in-game items.
- D) A stablecoin pegged to the dollar.

**Explanation:** Each Cosmic Signature NFT is unique; they are collectibles, not interchangeable units.
- A) Wrong — that describes CST, not the NFT.
- B) Correct — the NFT is a unique collectible.
- C) Wrong — each NFT is a single item, not a multi-token.
- D) Wrong — the NFT has no peg.

**27. What type of token is CST?**
- A) A unique non-fungible token.
- B) A multi-token used for achievements.
- C) A standard fungible token with a built-in governance-voting extension.
- D) A wrapped ETH derivative.

**Explanation:** CST is a regular fungible token — any unit is interchangeable with any other — and it also carries governance voting power.
- A) Wrong — CST is fungible; COSMIC is the non-fungible counterpart.
- B) Wrong — CST is a single fungible token.
- C) Correct — a fungible token usable for governance.
- D) Wrong — CST is not tied to ETH's price.

**28. Which wallet do staked Cosmic Signature NFTs live in?**
- A) The Prizes Wallet.
- B) The dedicated Cosmic Signature NFT staking wallet.
- C) The Marketing Wallet.
- D) The game's main program itself.

**Explanation:** Staked Cosmic Signature NFTs are transferred to and custodied by the dedicated staking wallet for the duration of the stake.
- A) Wrong — the Prizes Wallet holds prizes, not staked NFTs.
- B) Correct — the dedicated staking wallet holds each staked Cosmic Signature NFT.
- C) Wrong — the Marketing Wallet only holds CST.
- D) Wrong — the main game does not custody staked NFTs.

**29. What kind of reward do Cosmic Signature NFT stakers earn?**
- A) A share of the ETH deposited to the staking wallet at each round's end.
- B) A fixed monthly CST stipend.
- C) Guaranteed wins in every raffle draw.
- D) A free ETH bid every round.

**Explanation:** At every round's end, a portion of the game's ETH is deposited into the staking wallet and split across every currently staked Cosmic Signature NFT.
- A) Correct — stakers split the ETH deposited at each round's end.
- B) Wrong — there is no CST stipend; rewards are in ETH.
- C) Wrong — raffle picks are random; staking does not guarantee them.
- D) Wrong — bids always cost the current price; staking grants no bid subsidy.

**30. Which role is only awarded when at least one CST bid was placed in the round?**
- A) Chrono-Warrior
- B) Last CST Bidder
- C) Endurance Champion
- D) Main Prize Winner

**Explanation:** The Last CST Bidder prize — one Cosmic Signature NFT and 1,000 CST — is only awarded if at least one CST bid happened in the round. Otherwise that prize slot is simply skipped.
- A) Wrong — the Chrono-Warrior exists in every round that had any bids.
- B) Correct — the Last CST Bidder role is exclusive to rounds with a CST bid.
- C) Wrong — the Endurance Champion is awarded regardless of CST bids.
- D) Wrong — the Main Prize Winner is determined by the claim, not by CST bids.

**31. What is the hardcoded first-ever ETH bid price in round zero?**
- A) 0.00001 ETH
- B) 0.0001 ETH
- C) 0.001 ETH
- D) 0.01 ETH

**Explanation:** The very first bid of the very first round costs exactly 0.0001 ETH. This starting price is locked in at deployment and cannot be changed.
- A) Wrong — an order of magnitude too small.
- B) Correct — 0.0001 ETH.
- C) Wrong — ten times too high.
- D) Wrong — a hundred times too high.

**32. In how many rounds can a specific Random Walk NFT be used to bid?**
- A) Once ever across the lifetime of the game.
- B) Once per round, for unlimited rounds.
- C) As long as the owner holds it.
- D) Only in the first three rounds.

**Explanation:** Each Random Walk NFT carries a single lifetime "bid ticket" — once it has been used for a bid, the game remembers that forever.
- A) Correct — each Random Walk NFT can be used for a bid only once, ever.
- B) Wrong — there is no per-round reset.
- C) Wrong — the restriction follows the NFT itself, not its owner.
- D) Wrong — there is no round-count limit; the limit is absolute.

**33. What is the primary benefit of staking a Random Walk NFT?**
- A) A share of the ETH that the game deposits each round.
- B) Eligibility for a round-end raffle that awards newly minted Cosmic Signature NFTs and CST to random Random Walk stakers.
- C) The ability to bid with that Random Walk NFT for free.
- D) Voting rights in the Cosmic Signature DAO.

**Explanation:** Staking a Random Walk NFT has no ETH payout. Its only benefit is entering the round-end raffle that draws 10 random stakers, each receiving a Cosmic Signature NFT and 1,000 CST.
- A) Wrong — Random Walk staking pays no ETH rewards.
- B) Correct — the sole benefit is raffle eligibility.
- C) Wrong — staking does not affect bidding cost.
- D) Wrong — DAO voting comes from holding CST, not from staking.

**34. At round end, how is the Cosmic Signature NFT staker ETH reward distributed?**
- A) Entirely to the single largest staker.
- B) Split equally across every currently staked Cosmic Signature NFT.
- C) Proportionally to how long each NFT has been staked.
- D) To a single randomly drawn staker.

**Explanation:** The staking ETH deposit is divided equally across every Cosmic Signature NFT that is staked at that moment.
- A) Wrong — rewards are split per NFT, not concentrated.
- B) Correct — an equal per-NFT share.
- C) Wrong — tenure does not affect the current-round share; every currently staked NFT gets the same slice.
- D) Wrong — all staked NFTs share; there is no single-winner pick.

**35. Who assigns the Marketing Wallet's treasurer?**
- A) The DAO, via a governance vote.
- B) The wallet's owner (initially the deployer).
- C) Any CST holder via a direct transaction.
- D) The Endurance Champion of the most recent round.

**Explanation:** The Marketing Wallet has its own owner role. That owner picks the treasurer who is allowed to send CST out of the wallet.
- A) Wrong — the DAO only picks the treasurer if it has been given ownership of the wallet.
- B) Correct — the owner appoints the treasurer.
- C) Wrong — CST holders have no direct access to this setting.
- D) Wrong — round roles have no bearing on wallet administration.

**36. What happens to CST when it is used to pay for a CST bid?**
- A) It is transferred to the Marketing Wallet.
- B) It is permanently destroyed (burned) from the bidder's balance.
- C) It is transferred to the Charity Wallet.
- D) It is locked until the round ends.

**Explanation:** A CST bid burns the paid amount of CST forever. The bidder also receives a small CST reward for bidding, but the paid price itself is destroyed.
- A) Wrong — the paid CST is burned, not routed to Marketing.
- B) Correct — the paid CST is destroyed.
- C) Wrong — the Charity Wallet is ETH-only.
- D) Wrong — the CST is destroyed, not merely locked.

**37. After the main-prize deadline is reached, who is initially allowed to claim the main prize?**
- A) Any bidder from the current round.
- B) Only the last bidder.
- C) Only the DAO, via proposal.
- D) The game's operator.

**Explanation:** Once the deadline elapses, the last bidder has an exclusive window to claim. Only after a further grace period (one day by default) does anyone else become eligible.
- A) Wrong — non-last-bidders must wait for the grace period before being allowed to claim.
- B) Correct — the last bidder has an exclusive early-claim window.
- C) Wrong — the DAO has no special role in claiming.
- D) Wrong — the operator does not automatically get the prize.

**38. How many random bidders receive a Cosmic Signature NFT plus CST bundle at round end?**
- A) 3
- B) 5
- C) 10
- D) 100

**Explanation:** Ten random bidders are drawn; each winner receives one newly minted Cosmic Signature NFT and 1,000 CST.
- A) Wrong — three is the ETH raffle count, not the NFT raffle count.
- B) Wrong — the NFT raffle count is 10.
- C) Correct — ten random bidders each receive an NFT and 1,000 CST.
- D) Wrong — the pool is 10, not 100.

**39. How are the winners of the round-end bidder raffles selected?**
- A) Based on the largest bid amount, ranked by ETH spent.
- B) Randomly from all bids placed in that round.
- C) The first ten bidders of the round.
- D) The last ten bidders of the round.

**Explanation:** Each raffle draw picks a random bid from the full list of bids placed in the round. Bidding more often gives you more tickets in the draw.
- A) Wrong — the draw is random, not based on size spent.
- B) Correct — winners are random picks from every bid placed in the round.
- C) Wrong — bidding order does not decide raffle winners.
- D) Wrong — bidding last does not guarantee a raffle win.

**40. Can the same address win multiple raffle prizes in a single round?**
- A) No — the game explicitly deduplicates winners per round.
- B) Yes — each raffle draw is independent, so a frequent bidder can be drawn multiple times.
- C) Only if they placed more than 50 bids.
- D) Only if they are the Chrono-Warrior.

**Explanation:** Each raffle pick is independent. If you placed many bids, you have a better chance on every draw, and you can win more than one prize in a single round.
- A) Wrong — there is no deduplication between draws.
- B) Correct — independent draws, so multiple wins are possible.
- C) Wrong — no threshold applies; even one bid keeps you eligible.
- D) Wrong — Chrono-Warrior status does not change raffle eligibility.

**41. The Last CST Bidder role is awarded only when:**
- A) At least one CST bid was placed in the round.
- B) The last bidder overall paid with CST.
- C) The CST auction reached its floor price.
- D) The DAO approves awarding the role.

**Explanation:** The role only exists when someone bid with CST in the round. If no CST bid ever happened, the prize slot is simply skipped.
- A) Correct — the role exists only if someone bid with CST.
- B) Wrong — the last bid overall can be ETH; the Last CST Bidder is just the most recent CST bidder.
- C) Wrong — the auction floor has no effect on this role.
- D) Wrong — DAO approval is not involved.

**42. What prize bundle does the Last CST Bidder receive?**
- A) One Cosmic Signature NFT and 1,000 CST.
- B) Ten Cosmic Signature NFTs.
- C) 25% of the ETH balance.
- D) Nothing; the role is symbolic.

**Explanation:** The Last CST Bidder is awarded one newly minted Cosmic Signature NFT and 1,000 CST. No ETH is attached.
- A) Correct — one NFT and 1,000 CST.
- B) Wrong — only one NFT is awarded for this role.
- C) Wrong — ETH prizes go to other roles.
- D) Wrong — a real on-chain bundle is awarded.

**43. Where does an ETH donation made via the dedicated donation action go?**
- A) Directly to the Charity Wallet.
- B) Into the game's own ETH balance, where it will be shared across all future winners.
- C) Into the donor's personal Prizes Wallet balance for later withdrawal.
- D) Back to the donor at the end of the round.

**Explanation:** Donations simply add to the game's ETH balance. Because round-end payouts are percentages of that balance, the donation ends up benefiting current and future winners.
- A) Wrong — the donation is not earmarked specifically for charity.
- B) Correct — donated ETH enters the game's balance and is shared.
- C) Wrong — donors do not receive personal prize balances.
- D) Wrong — donations are not refunded.

**44. Does a pure ETH donation extend the main-prize countdown?**
- A) Yes, the same as a bid.
- B) No, a donation is not a bid and does not affect the timer.
- C) Yes, but only if at least 1 ETH is donated.
- D) Only during the first 24 hours of a round.

**Explanation:** Donations are intentionally separate from bids. A donation credits ETH to the game but never makes the donor the last bidder and never shifts the deadline.
- A) Wrong — only real bids extend the timer.
- B) Correct — donations leave the timer untouched.
- C) Wrong — no size threshold changes the rule.
- D) Wrong — donations never affect the timer, regardless of timing.

**45. Which statement about CST bidding best matches the game's design?**
- A) CST bids are refunded if the bidder does not win.
- B) CST bids permanently destroy (burn) the paid CST from the bidder's balance.
- C) CST bids require a minimum balance of 10,000 CST.
- D) CST bids replace the last bidder's ETH bid.

**Explanation:** The paid CST is burned — destroyed for good. There is no refund path.
- A) Wrong — burning is permanent; nothing is refunded.
- B) Correct — the paid CST is burned.
- C) Wrong — no hardcoded minimum balance applies beyond covering the current price.
- D) Wrong — ETH and CST bids coexist; a CST bid does not erase an earlier ETH bid.

**46. The game lengthens the between-bid timer increment slightly each round. Why?**
- A) To make the price bids cost more each round.
- B) To gradually stretch out how long a typical round takes.
- C) To increase the CST prize amount.
- D) To raise the charity percentage.

**Explanation:** The increment added to the deadline on each bid grows by about 1% at the end of every round, so future rounds can run a touch longer.
- A) Wrong — bid-price growth is a separate mechanism.
- B) Correct — future rounds get slightly longer by design.
- C) Wrong — the CST prize amount does not change automatically.
- D) Wrong — the charity percentage is a static setting.

**47. What is the default delay between one round ending and the next becoming active?**
- A) Zero — the next round activates immediately.
- B) 30 minutes.
- C) 24 hours.
- D) One week.

**Explanation:** There is a deliberate half-hour gap between a round's main-prize claim and the next round becoming active, which lets the operator re-tune parameters if needed.
- A) Wrong — there is a deliberate delay.
- B) Correct — 30 minutes.
- C) Wrong — the delay is minutes, not a day.
- D) Wrong — the delay is minutes, not a week.

**48. Which of the following is a prize awarded to the Marketing Wallet at each round's end?**
- A) 3,000 newly minted CST.
- B) Ten Cosmic Signature NFTs.
- C) 7% of the game's ETH balance.
- D) Nothing; the wallet is funded manually.

**Explanation:** The game mints 3,000 CST to the Marketing Wallet at each round's end to fund ongoing marketing activities.
- A) Correct — 3,000 CST minted per round.
- B) Wrong — the wallet receives no NFTs.
- C) Wrong — the charity donation is ETH; the Marketing Wallet never receives ETH.
- D) Wrong — funding is automatic.

**49. The bid message attached to a bid is limited to at most how many characters?**
- A) 32
- B) 140
- C) 280
- D) 1,024

**Explanation:** Bid messages are capped at 280 characters, similar to the classic short-post format on social media. Longer messages are rejected.
- A) Wrong — far shorter than the actual cap.
- B) Wrong — that is the old Twitter limit.
- C) Correct — 280 characters.
- D) Wrong — longer than the actual cap.

**50. Who is solely responsible for deciding what charity receives the Charity Wallet's ETH?**
- A) The main Cosmic Signature game.
- B) The DAO, which sets the wallet's charity address.
- C) The charity itself, by pulling funds.
- D) The Charity Wallet's owner (initially the deployer).

**Explanation:** The Charity Wallet has its own owner, and only that owner can set the charity address. Ownership can later be transferred to the DAO, but the decision lives with whoever owns the wallet at any given moment.
- A) Wrong — the main game doesn't decide the final charity recipient.
- B) Wrong — the DAO only picks the charity if it is given ownership of the wallet.
- C) Wrong — charities cannot pull funds; they have to wait to be sent ETH.
- D) Correct — the Charity Wallet's owner sets the charity.

---

## Section 2: Medium (Questions 51--100)

**51. After the first ETH bid of a round, each subsequent ETH bid's price is calculated as:**
- A) The prior bid price multiplied by two.
- B) The prior bid price, raised by about 1% (plus the tiniest possible amount of ETH so the price always grows).
- C) A price set by the DAO each time a bid arrives.
- D) A fixed amount per round, independent of the prior bid.

**Explanation:** Every same-round ETH bid costs about 1% more than the previous one — plus the smallest possible slice of ETH on top, to guarantee the price strictly grows even if the 1% rounds down to zero.
- A) Wrong — doubling would be far too aggressive.
- B) Correct — roughly 1% step per bid, plus a sliver.
- C) Wrong — the DAO does not set bid prices.
- D) Wrong — prices change on every bid, not once per round.

**52. When you place an ETH bid with a Random Walk NFT, the paid price is calculated as:**
- A) Exactly half of the current ETH bid price, rounded down.
- B) The current ETH price divided by two, rounded up (a single extra unit when the price is odd).
- C) The full ETH price, with the NFT giving CST back instead of a discount.
- D) Zero; the Random Walk NFT covers the entire price.

**Explanation:** The discount is half the current ETH price, rounded up by at most one indivisible unit of ETH. It is essentially a 50% discount, just never quite below exact half.
- A) Wrong — the formula rounds up, not down.
- B) Correct — half price, rounded up when the price is odd.
- C) Wrong — the Random Walk discount affects the ETH price directly; the usual CST bid reward is given separately.
- D) Wrong — the discount is not 100%.

**53. Which of these best describes how CST bid prices are formed inside a round?**
- A) A fixed starting price that never changes during the round.
- B) A Dutch auction (price declining over time) that resets every time someone places a CST bid.
- C) A doubling auction that must be won within a fixed 10-minute window.
- D) A price based on the total supply of CST.

**Explanation:** CST bids use a Dutch auction: the price starts high and falls linearly over time. Each CST bid ends the current auction and starts a fresh one.
- A) Wrong — the price changes continuously and resets per CST bid.
- B) Correct — a Dutch auction that restarts after each CST bid.
- C) Wrong — the duration is much longer than 10 minutes by default.
- D) Wrong — the price is not derived from total supply.

**54. A round's first CST Dutch auction begins at what moment?**
- A) At the moment the game was originally deployed.
- B) When the first ETH bid of the round is placed; then again after every CST bid.
- C) At the end of each round.
- D) Whenever the DAO approves it.

**Explanation:** The round's first CST auction starts when the round's first ETH bid lands. After that, every CST bid starts a new auction.
- A) Wrong — CST auctions are round-scoped.
- B) Correct — the first ETH bid kicks off the first CST auction, and every CST bid resets the next one.
- C) Wrong — auctions begin inside a round, not at round end.
- D) Wrong — the DAO does not gate CST auctions.

**55. If a round's CST Dutch auction runs past its end duration with no bid, what is the "current" CST bid price?**
- A) The full beginning price.
- B) Zero.
- C) The configured CST starting-price floor.
- D) The price of the previous CST bid.

**Explanation:** Once the auction's configured duration has fully elapsed with no CST bid, the current price reported by the game is zero. A bidder at that moment would pay 0 CST (though the bid still triggers all the other per-bid effects).
- A) Wrong — the price declines, not stays put.
- B) Correct — zero once the duration elapses.
- C) Wrong — the floor applies only to the next auction's starting price, not the ongoing decline.
- D) Wrong — the floor is zero, not the last paid price.

**56. Who is recognized as the Endurance Champion if only one bidder ever bids in a round (no one outbids them)?**
- A) Nobody — the title is unassigned.
- B) That single bidder — they held the last-bidder position for the entire round, which becomes their winning streak.
- C) The DAO, as a fallback.
- D) The last bidder of the previous round.

**Explanation:** At claim time the game evaluates the current last-bidder as the Endurance Champion if nobody else ever took that title. A single bidder's run spans the whole round and wins automatically.
- A) Wrong — the title is always assigned once there is a bid.
- B) Correct — the sole bidder is the Endurance Champion.
- C) Wrong — the DAO has no fallback role.
- D) Wrong — previous-round roles do not carry over.

**57. Can the Endurance Champion and the Chrono-Warrior be the same person in one round?**
- A) No — the game explicitly prevents it.
- B) Yes — especially in rounds with few outbidding events, the same player often holds both titles.
- C) Only in round zero.
- D) Only if the player used a Random Walk NFT.

**Explanation:** The two titles can absolutely belong to the same person. When there is only one reign as Endurance Champion, the Chrono-Warrior is by definition that same person.
- A) Wrong — overlap is common.
- B) Correct — a single bidder frequently holds both.
- C) Wrong — nothing about this is round-specific.
- D) Wrong — Random Walk use is irrelevant to champion tracking.

**58. On a bid that is not the first of the round, which rule best describes how the deadline is extended?**
- A) The deadline becomes "now plus the timer-extension increment", ignoring the existing deadline.
- B) The deadline becomes "whichever is later of the existing deadline and now, plus the timer-extension increment".
- C) The deadline becomes "the existing deadline plus the increment", even if the existing deadline is already in the past.
- D) The deadline becomes "now plus twice the increment".

**Explanation:** The deadline is anchored to the later of (a) the current deadline or (b) the current time, and then the increment is added. This prevents a late bid from accidentally shortening the round.
- A) Wrong — using only "now" would shorten the deadline when a bid lands before expiry.
- B) Correct — the later of the two points, plus the increment.
- C) Wrong — if the current deadline is already past, the game anchors to now, not to the stale value.
- D) Wrong — the increment is added once, not doubled.

**59. What initial duration until the main prize is granted on the first bid of a round, at default configuration?**
- A) About 5 minutes.
- B) About 24 hours.
- C) Exactly 7 days.
- D) It varies every round and has no typical value.

**Explanation:** With default settings, the first bid sets a roughly day-long countdown until the main prize is first claimable.
- A) Wrong — the default is on the order of a day.
- B) Correct — approximately 24 hours.
- C) Wrong — longer than the default.
- D) Wrong — the default has a consistent target when settings are unchanged.

**60. Roughly what total percentage of the game's ETH balance is paid out each round across all ETH prizes?**
- A) 25%
- B) 50%
- C) 75%
- D) 100%

**Explanation:** Summing the defaults: 25% (main prize) + 8% (Chrono-Warrior) + 4% (bidder raffle) + 6% (NFT stakers) + 7% (charity) = 50%. The other 50% rolls over to the next round.
- A) Wrong — that is only the main prize alone.
- B) Correct — about half of the balance is paid out each round.
- C) Wrong — overstates the payout share.
- D) Wrong — the design deliberately rolls half over.

**61. What does the Cosmic Signature DAO use to measure voting power on a proposal?**
- A) ETH balance.
- B) The voter's CST voting weight at the moment the proposal's snapshot was taken.
- C) The number of bids placed in the previous round.
- D) The number of Cosmic Signature NFTs held.

**Explanation:** DAO votes are weighted by how much CST voting power each voter has when the proposal was snapshotted. CST holdings power governance.
- A) Wrong — ETH confers no voting power.
- B) Correct — snapshot CST voting weight decides the vote.
- C) Wrong — bid history is not used.
- D) Wrong — Cosmic Signature NFTs have no voting weight.

**62. What is the default share of CST that must back a DAO proposal for it to reach quorum?**
- A) 1%
- B) 3%
- C) 10%
- D) 51%

**Explanation:** The DAO intentionally uses a low 3% quorum to make it easier for proposals to reach the threshold.
- A) Wrong — below the configured value.
- B) Correct — 3% of CST supply at snapshot.
- C) Wrong — far higher than the configured default.
- D) Wrong — 51% is not the quorum threshold.

**63. What is the default DAO voting period (the window in which votes can be cast on a proposal)?**
- A) 1 hour.
- B) 2 days.
- C) 2 weeks.
- D) 30 days.

**Explanation:** Voters have about two weeks to cast their votes after a proposal's voting window opens.
- A) Wrong — much longer than an hour.
- B) Wrong — 2 days is the voting *delay* (the wait before voting opens), not the voting period.
- C) Correct — 2 weeks.
- D) Wrong — less than a month.

**64. What is the default DAO voting delay (the wait between proposal creation and voting opening)?**
- A) Zero — voting opens immediately.
- B) 2 days.
- C) 2 weeks.
- D) 6 months.

**Explanation:** After a proposal is created there is a 2-day wait before voting can actually begin, giving voters time to read it.
- A) Wrong — there is a deliberate delay.
- B) Correct — 2 days.
- C) Wrong — 2 weeks is the voting period, not the delay.
- D) Wrong — unrealistically long.

**65. What is the default proposal threshold — the minimum CST a submitter needs to create a DAO proposal?**
- A) 1 CST.
- B) 100 CST.
- C) 1,000 CST.
- D) 1,000,000 CST.

**Explanation:** Submitting a proposal requires at least 100 CST of voting weight. That figure matches the per-bid CST reward, so any bidder who participated a bit has enough to propose.
- A) Wrong — the threshold is higher than one token.
- B) Correct — 100 CST.
- C) Wrong — that is the per-winner CST prize, not the proposal threshold.
- D) Wrong — far higher than the real threshold.

**66. On a successful main-prize claim, which ETH transfer is attempted last and, if it fails, will reverse the whole claim?**
- A) The transfer to charity.
- B) The direct transfer of the main prize to the claimer.
- C) The deposit to Cosmic Signature NFT stakers.
- D) The raffle deposit to the Prizes Wallet.

**Explanation:** If the main-prize transfer to the claimer fails, the entire claim is rolled back. The charity transfer, by contrast, is allowed to fail silently so the round still closes.
- A) Wrong — a failed charity transfer is logged and ignored.
- B) Correct — a failed main-prize transfer reverses the whole claim.
- C) Wrong — the staker deposit happens earlier and has its own safety net.
- D) Wrong — raffle deposits happen earlier in the flow.

**67. What happens if the charity transfer fails during the round-end payout?**
- A) The entire claim is reversed, and the prize goes unclaimed.
- B) The failure is logged, the ETH stays in the game, and the remaining prizes still distribute.
- C) The charity ETH is rolled into the main prize.
- D) The charity address is automatically cleared.

**Explanation:** The game deliberately tolerates a failed charity transfer: it logs an event, keeps the charity ETH in the game's balance, and carries on with the rest of the payout.
- A) Wrong — the claim does not reverse on a charity failure.
- B) Correct — the failure is non-fatal; the payout continues.
- C) Wrong — the failed charity ETH simply stays in the game; it is not redirected to the main prize.
- D) Wrong — no auto-clear of the charity address.

**68. If the Cosmic Signature NFT staking deposit cannot happen because there are no stakers (you cannot divide by zero), what happens?**
- A) The round's claim is aborted.
- B) The game catches the problem safely; the 6% of ETH earmarked for stakers simply stays in the game for the next round.
- C) The ETH is forwarded to charity instead.
- D) The ETH is destroyed.

**Explanation:** The game watches for exactly this case. When the staker count is zero, it absorbs the problem, keeps the ETH, and lets the rest of the round-end payout complete.
- A) Wrong — the claim completes gracefully.
- B) Correct — the staker ETH stays in the game and carries over.
- C) Wrong — there is no redirect to charity.
- D) Wrong — the ETH is not destroyed.

**69. For how long after a round's end can a prize winner exclusively withdraw their ETH from the Prizes Wallet?**
- A) 1 day.
- B) 1 week.
- C) 5 weeks.
- D) Forever.

**Explanation:** Winners have a 5-week exclusive withdrawal window. Once that elapses, anyone else can sweep an unclaimed prize.
- A) Wrong — the exclusivity window is weeks, not a day.
- B) Wrong — 5 weeks is the default, not 1.
- C) Correct — 5 weeks of exclusivity.
- D) Wrong — exclusivity ends at 5 weeks.

**70. After the Prizes Wallet withdrawal timeout, who may withdraw an unclaimed ETH prize?**
- A) Only the winner, still; anyone else fails.
- B) Anyone; the unclaimed balance is sent to whoever calls the withdraw action.
- C) Only the Charity Wallet.
- D) Only the operator.

**Explanation:** After the 5-week timeout, any address can call the withdraw action for a stale prize, and the ETH is paid to the caller — not to the original winner.
- A) Wrong — exclusivity ends at the timeout.
- B) Correct — any caller can sweep the unclaimed prize to themselves.
- C) Wrong — the Charity Wallet has no special claim.
- D) Wrong — the operator has no built-in claim privilege.

**71. What is the maximum number of characters a bid message may contain by default?**
- A) 32
- B) 140
- C) 280
- D) 1,024

**Explanation:** Bid messages are capped at 280 characters, the classic short-post size. Longer messages are rejected.
- A) Wrong — far shorter than the actual cap.
- B) Wrong — the cap is 280, not 140.
- C) Correct — 280 characters.
- D) Wrong — much larger than the actual cap.

**72. At the end of a round, the next round's first CST Dutch auction beginning price equals:**
- A) Zero — CST always starts free.
- B) Twice the first CST bid price of the current round (not below the configured floor), or unchanged if no CST bid occurred.
- C) The Marketing Wallet's current CST balance.
- D) The main prize amount converted at a market rate.

**Explanation:** When the round's first CST bid lands, the game notes "double that price, clamped to the floor" as the starting price for next round's first CST auction. If no CST bid ever happened, this value is untouched.
- A) Wrong — the floor keeps the starting price above zero.
- B) Correct — twice the first CST paid price, clamped to the floor, or unchanged without a CST bid.
- C) Wrong — the Marketing Wallet plays no role in CST pricing.
- D) Wrong — there is no market-rate conversion.

**73. Can the same Random Walk NFT be used for a bid twice across two different rounds?**
- A) Yes — the "used" flag resets each round.
- B) No — once it has been used for a bid, it is marked forever and cannot be used again.
- C) Only if the NFT is transferred to a new owner.
- D) Only if the owner stakes it in between.

**Explanation:** A Random Walk NFT's bid-use flag is permanent. Even transferring it to someone else does not reset the flag.
- A) Wrong — no per-round reset.
- B) Correct — the flag persists forever.
- C) Wrong — transferring does not clear the flag.
- D) Wrong — staking and bidding are tracked separately, but the bid-use flag is permanent.

**74. Can a Random Walk NFT that has already been used for a bid still be staked later?**
- A) Yes — the bid-use mark and the stake-use mark are separate tracks.
- B) No — the game treats them as the same flag.
- C) Only after a 24-hour cool-down.
- D) Only if the owner burns 1,000 CST first.

**Explanation:** The game keeps two independent "used" lists: one for bid-uses, one for stake-uses. Being used for a bid does not prevent the NFT from being staked.
- A) Correct — the two marks are separate; staking is still allowed.
- B) Wrong — the two lists are independent.
- C) Wrong — no cool-down exists.
- D) Wrong — no CST fee is involved.

**75. Once a Cosmic Signature NFT has been unstaked, can it be staked again?**
- A) Yes, immediately.
- B) No — each Cosmic Signature NFT can only be staked once in its lifetime.
- C) Yes, but only after one round passes.
- D) Yes, but the new owner has to burn 100 CST.

**Explanation:** Each Cosmic Signature NFT has a one-stake lifetime cap. Once it has been unstaked, the game refuses any further stake attempt for that NFT.
- A) Wrong — re-staking is blocked.
- B) Correct — one stake, ever.
- C) Wrong — no time-based reset.
- D) Wrong — no unlock via burn.

**76. When you unstake a Cosmic Signature NFT, how are your accumulated ETH rewards transferred?**
- A) You must call a separate claim action afterward.
- B) The NFT and the accrued ETH come back to you in the same transaction.
- C) The ETH is routed to the Prizes Wallet first and must be withdrawn from there.
- D) The ETH is converted to CST and sent to you.

**Explanation:** Unstaking both returns your NFT and pays out your accrued ETH rewards in a single transaction.
- A) Wrong — no separate claim is required.
- B) Correct — NFT and ETH come out together.
- C) Wrong — rewards are delivered directly.
- D) Wrong — rewards are paid in ETH, not CST.

**77. If you stake multiple Cosmic Signature NFTs at different times, how do their rewards accrue?**
- A) All staked NFTs earn the same amount regardless of when they were staked.
- B) Each NFT accumulates independently from deposits made while it was staked.
- C) Only the most recently staked NFT earns rewards.
- D) Rewards are pooled and divided equally at the end of the year.

**Explanation:** Each NFT remembers the per-NFT total reward level at the moment it was staked. On unstake, you collect the difference — so each NFT only captures what came in during its own time staked.
- A) Wrong — earlier-staked NFTs may have collected more past deposits.
- B) Correct — each NFT earns only from deposits made during its own stake window.
- C) Wrong — every currently staked NFT earns.
- D) Wrong — rewards are not annual.

**78. The Cosmic Signature NFT staker reward accrual formula on each round-end deposit is:**
- A) The entire deposit is added to every staked NFT.
- B) The deposit is split equally across every currently staked NFT.
- C) The deposit is split by NFT id.
- D) The deposit is split by how much CST each staker holds.

**Explanation:** Every currently staked Cosmic Signature NFT gets the same per-NFT share of each deposit.
- A) Wrong — each NFT gets a share, not the full deposit.
- B) Correct — equal per-NFT share.
- C) Wrong — NFT id is not a weighting factor.
- D) Wrong — CST balances do not factor into staking rewards.

**79. Which of these can donate a standard fungible token into the prize pool along with a bid?**
- A) Any bidder, using the special "bid with donation" variants of either ETH or CST bids.
- B) Only the DAO.
- C) Only the operator.
- D) Only the Marketing Wallet.

**Explanation:** Both ETH and CST bid entry points have companion variants that let a bidder attach a third-party token donation in the same transaction.
- A) Correct — any bidder can attach a token donation to a bid.
- B) Wrong — no DAO-only path exists.
- C) Wrong — the operator has no special privilege here.
- D) Wrong — the Marketing Wallet is not a donor.

**80. Who can claim donated standard tokens from a particular round?**
- A) The CST holder with the highest balance.
- B) The main prize winner of that round, or — after the withdrawal timeout — anyone.
- C) The DAO.
- D) The Random Walk NFT holders.

**Explanation:** Inside the timeout window, only the round's main prize winner can claim donated tokens. After the 5-week timeout, anyone may claim them.
- A) Wrong — CST holdings do not gate the claim.
- B) Correct — round winner during the window; anyone after timeout.
- C) Wrong — the DAO has no special claim.
- D) Wrong — Random Walk NFT holders have no special claim.

**81. When a standard token is donated to a round, where does it physically land?**
- A) Directly in the Prizes Wallet.
- B) In a per-round "donated-token holder" helper created on the first donation of that round.
- C) In the main game.
- D) Destroyed (burned) to a dead address.

**Explanation:** Donated tokens of any given round are custodied by a per-round helper that the Prizes Wallet creates on the first donation of that round.
- A) Wrong — the Prizes Wallet coordinates but does not hold the tokens directly.
- B) Correct — a per-round helper holds donated tokens.
- C) Wrong — the main game never holds donated tokens.
- D) Wrong — tokens are not burned on donation.

**82. What does the "donate ETH with info" action do beyond a plain donation?**
- A) Rejects the call if the sender has no CST.
- B) Records the donor, round number, amount, and a small message on-chain for later reference.
- C) Doubles the donation's impact on the timer.
- D) Destroys the donated ETH.

**Explanation:** "Donate with info" adds the same ETH as a plain donation, but also stores a message tagged with who donated, when, and how much. It is still not a bid.
- A) Wrong — no CST requirement.
- B) Correct — a detailed record is stored alongside the donation.
- C) Wrong — donations never affect the timer.
- D) Wrong — the ETH is retained, not destroyed.

**83. What happens when someone simply sends raw ETH to the main game (no specific action, just a plain transfer)?**
- A) It is treated as an ETH bid with no attached Random Walk NFT and no message.
- B) It is treated as a donation with no info.
- C) It always fails.
- D) It is redirected to the Prizes Wallet.

**Explanation:** Plain ETH transfers to the main game enter the ETH bid path as if the sender had called the ETH-bid action with no options. If the amount is not enough for the current price or the round is not active, the transaction fails.
- A) Correct — it is a plain ETH bid.
- B) Wrong — donations require the dedicated donation action.
- C) Wrong — only fails if the bid itself cannot go through.
- D) Wrong — no redirect exists.

**84. Which of the following settings can be changed even while the round is live (as long as no bid has been placed yet)?**
- A) The charity percentage.
- B) The delay before the next round activates.
- C) The round's activation time.
- D) The starting page address for Cosmic Signature NFT metadata.

**Explanation:** Most settings can only be changed while a round is idle between sessions, but the round's activation time has a looser rule: as long as no one has bid yet, the operator can shift it.
- A) Wrong — the charity percentage requires a fully idle round to change.
- B) Wrong — the between-round delay has its own rule; it is not the looser one described here.
- C) Correct — the activation time's guard is specifically "no bid yet has been placed".
- D) Wrong — that setting lives on the separate NFT side of the system with different rules.

**85. Roughly how much ETH stays in the game's balance after a typical round ends, on default parameters?**
- A) 0%
- B) About 50%
- C) About 75%
- D) 100%

**Explanation:** Default percentages pay out about 50% of the balance each round (main prize 25, Chrono-Warrior 8, raffle 4, stakers 6, charity 7). The remaining 50% seeds the next round.
- A) Wrong — about half carries over.
- B) Correct — roughly half the balance persists.
- C) Wrong — payout is closer to 50%, not 25%.
- D) Wrong — payout happens each round.

**86. On the first bid of a non-zero round, the ETH Dutch auction begins at what price relative to the previous round?**
- A) The same first-bid price as the previous round.
- B) Twice the first-bid price of the previous round.
- C) Half the first-bid price of the previous round.
- D) Zero — it always starts from zero.

**Explanation:** At the start of every new round (except the very first), the Dutch auction begins at double the first-bid price paid in the previous round.
- A) Wrong — the starting price doubles each round by default.
- B) Correct — starts at twice the previous first-bid price.
- C) Wrong — halving is an emergency lever, not the standard starting rule.
- D) Wrong — round zero starts at a hardcoded nonzero; other rounds at double.

**87. What is the ETH Dutch auction's ending (floor) price on a given round?**
- A) Always 0 ETH.
- B) A small fraction of the beginning price (with a tiny nudge so it cannot be exactly zero).
- C) 0.0001 ETH in every round.
- D) Exactly twice the beginning price.

**Explanation:** The floor is the beginning price divided by a configured number, plus a tiny extra amount so it is always strictly positive. With defaults, the floor is roughly 1/200 of the beginning price.
- A) Wrong — there is always a tiny nonzero floor.
- B) Correct — a small fraction of the beginning, with a tiny nudge above zero.
- C) Wrong — 0.0001 ETH is only the hardcoded round-zero first-bid price.
- D) Wrong — the floor is below, not above, the beginning.

**88. In which situation can the ETH bid price become exactly the Dutch auction's ending (floor) price?**
- A) Only immediately after a claim.
- B) Whenever the auction's configured duration has fully elapsed with nobody bidding.
- C) Only when the operator pulls the emergency halving lever.
- D) Never — the floor is purely theoretical.

**Explanation:** The price falls to the floor once the auction duration has fully elapsed without a bid. The emergency lever lets the operator push it even lower, but reaching the normal floor just requires waiting out the auction.
- A) Wrong — the floor is reached via waiting, not by post-claim state.
- B) Correct — the floor pins once the duration is up.
- C) Wrong — that lever lowers the floor further, but the floor was already reachable.
- D) Wrong — reaching the floor is explicitly supported.

**89. Which role, if assigned, always receives exactly one Cosmic Signature NFT and no ETH beyond that NFT?**
- A) Main Prize Winner.
- B) Endurance Champion.
- C) Chrono-Warrior.
- D) Bidder raffle NFT winners.

**Explanation:** The Endurance Champion always receives one Cosmic Signature NFT and 1,000 CST, with no ETH attached. The Main Prize Winner and the Chrono-Warrior both get ETH on top of their NFT.
- A) Wrong — the Main Prize Winner also receives the main ETH prize.
- B) Correct — no ETH for the Endurance Champion.
- C) Wrong — the Chrono-Warrior gets 8% ETH in addition to the NFT.
- D) Wrong — that describes a group of winners, not a single one.

**90. What happens when someone tries to bid with ETH but sends less than the current price?**
- A) The game accepts the funds and records a partial bid.
- B) The transaction fails and the funds are not taken.
- C) The game treats the call as a donation instead.
- D) The game auto-tops-up the shortfall from the Prizes Wallet.

**Explanation:** If the ETH sent is below the required price, the game rejects the bid. No partial bids exist.
- A) Wrong — partial bids are not supported.
- B) Correct — the transaction fails.
- C) Wrong — only the dedicated donation action triggers donation behavior.
- D) Wrong — no auto top-up exists.

**91. What is the net CST change for a bidder who places a CST bid that pays a price p?**
- A) Their balance drops by p and nothing else.
- B) Their balance drops by p and then rises by the per-bid CST reward (100 CST by default).
- C) Their balance rises by p as a reward.
- D) Their balance is unaffected.

**Explanation:** Every bid, including a CST bid, mints a 100-CST reward to the bidder. So the net change from a CST bid is "minus price paid, plus 100".
- A) Wrong — the 100 CST reward is still minted.
- B) Correct — burn p, mint 100, net is -p + 100.
- C) Wrong — the price is never returned as a reward.
- D) Wrong — bids always change the bidder's CST balance unless price exactly equals 100.

**92. When is the Chrono-Warrior state updated during the round?**
- A) On every bid, including the first.
- B) On every bid after the first, and once more on the main-prize claim.
- C) Only on CST bids.
- D) Only at round-end, never during bidding.

**Explanation:** The Chrono-Warrior is updated on every non-first bid inside the round, and then once more at claim time to finalize the standings.
- A) Wrong — the first bid does not trigger the update.
- B) Correct — non-first bids and the final claim drive updates.
- C) Wrong — both bid types trigger updates.
- D) Wrong — updates happen during the round, not only at the end.

**93. If nobody bids for the entire Dutch auction duration in round 1, and then someone bids at the floor price, what happens to the next round's beginning ETH price?**
- A) It becomes 0 because the floor bid was tiny.
- B) It becomes twice the floor price of round 1 — very small, so round 2 starts cheap.
- C) It resets to 0.0001 ETH like round zero.
- D) It becomes the price at which the Dutch auction started.

**Explanation:** The next round's starting price is always twice the first bid price of the previous round. If that first bid was at the floor, the next round also starts very cheaply.
- A) Wrong — doubling the floor gives a small nonzero price.
- B) Correct — next round's start is 2× the floor price.
- C) Wrong — round zero's hardcoded price is not re-applied.
- D) Wrong — the starting value is tied to the paid price, not to the auction's original starting value.

**94. What happens to the CST Dutch auction state when a new CST bid is placed?**
- A) Nothing — the auction keeps ticking unchanged.
- B) The start-time and start-price are reset, and a fresh declining auction begins.
- C) The auction pauses until the next ETH bid.
- D) The auction finishes and the CST bidder earns a special prize.

**Explanation:** Every CST bid ends the current auction and begins a fresh one: the start-time is reset to now, and the start-price is set to twice the paid price (clamped to the floor).
- A) Wrong — the auction explicitly restarts.
- B) Correct — the timestamp and starting price both reset.
- C) Wrong — CST auctions are not gated on ETH bids after the round's first ETH bid.
- D) Wrong — CST bids do not award a special prize.

**95. When is the carry-over CST starting price for the next round's first CST auction actually written?**
- A) On every CST bid.
- B) Only on the first CST bid of the round; any later CST bids do not change it.
- C) On every ETH bid.
- D) Only at round end.

**Explanation:** The value that seeds the next round's first CST auction is saved only when the round's first CST bid arrives. Subsequent CST bids in the same round do not change it.
- A) Wrong — only the first CST bid writes it.
- B) Correct — only the round's first CST bid.
- C) Wrong — ETH bids do not touch this value.
- D) Wrong — it is set mid-round, not at end.

**96. How are DAO voting timings measured?**
- A) In block numbers.
- B) In seconds (a real-time clock).
- C) In rounds of the game.
- D) There is no clock; timing is manual.

**Explanation:** CST and the DAO are configured to run on a real-time seconds clock, so voting delays and voting periods are measured in seconds, not in blocks.
- A) Wrong — the project explicitly opts out of block-based timing.
- B) Correct — timing is in real-time seconds.
- C) Wrong — rounds are a game concept, unrelated to DAO timing.
- D) Wrong — timing is automatic and on-chain.

**97. How many Cosmic Signature NFTs can a given address receive from the round-end bidder NFT raffle?**
- A) At most one.
- B) As many as the number of times it is randomly drawn (possibly more than once).
- C) Exactly one per CST bid placed.
- D) Proportional to ETH spent.

**Explanation:** Each of the 10 raffle draws is independent. A bidder with many bids can get drawn multiple times in the same round.
- A) Wrong — draws are independent.
- B) Correct — a frequent bidder can win multiple raffle NFTs.
- C) Wrong — the raffle is independent of bid type or count.
- D) Wrong — ETH spend is not the weighting.

**98. When a CST Dutch auction's time has fully elapsed (no bid during the window), what price does the game report?**
- A) A roll-over price from the previous round.
- B) Zero.
- C) The configured starting-price floor.
- D) The maximum possible value (and the transaction fails).

**Explanation:** Once the CST auction's full duration has passed, the reported price is zero. A CST bid at that moment costs no CST (though the bid still produces all the other per-bid effects).
- A) Wrong — there is no roll-over from prior rounds in this calculation.
- B) Correct — the current price is zero.
- C) Wrong — the floor clamps the next auction's starting price, not the ongoing decline.
- D) Wrong — no failure; the price is simply zero.

**99. Why is the next CST auction's starting price set to "twice the paid price, but not below the configured floor"?**
- A) To ensure the CST price never falls below a sensible floor even if bidders paid a tiny amount.
- B) To prevent bidders from winning multiple CST bids in one round.
- C) To align CST auctions with ETH auctions.
- D) For gas savings.

**Explanation:** The floor keeps subsequent auctions meaningful even if someone bid at a moment when the price had decayed almost to zero. Without the floor, a near-zero bid could leave the next auction starting at almost nothing.
- A) Correct — the floor keeps later auctions sensible.
- B) Wrong — bidders can win multiple CST bids regardless.
- C) Wrong — ETH and CST auctions run independently.
- D) Wrong — the floor is a semantic safeguard, not a cost optimization.

**100. Which statement about the main-prize claim is correct in the default configuration?**
- A) It can only be called in a 1-hour window after the deadline.
- B) Before the deadline plus a 1-day grace period, only the last bidder can claim; after that, anyone can.
- C) The operator can always claim.
- D) It can be called at any time after the first bid.

**Explanation:** The last bidder has an exclusive claim window that lasts from the deadline until the 1-day grace period ends. After the grace period, anyone can claim.
- A) Wrong — the last bidder's window lasts until the grace period ends, then anyone can claim.
- B) Correct — last bidder first, then open to anyone.
- C) Wrong — the operator has no special claim right.
- D) Wrong — the deadline must elapse before claiming is possible.

---

## Section 3: Hard (Questions 101--200)

**101. In round 1 the first bid paid 0.0002 ETH. Round 2 begins and nobody bids for exactly half the Dutch auction duration. What is the current ETH bid price at that moment, assuming the floor is about 1/200 of the starting price?**
- A) 0.0002 ETH, because the starting price applies until the auction ends.
- B) About 0.000201 ETH — the starting price minus half the distance down to the floor.
- C) About 0.0002005 ETH — halfway between the 0.0004 ETH start and a ~0.000002 ETH floor, computed in the wrong direction.
- D) About 0.0001 ETH — halfway between 0.0002 ETH and zero.

**Explanation:** Round 2 starts at twice the previous first bid, so 0.0004 ETH. The floor is about 0.0004 / 200 ≈ 0.000002 ETH. Halfway through a linear decline between those, the price is about 0.0004 minus half of 0.000398, which lands near 0.000201 ETH.
- A) Wrong — the auction declines continuously while it runs.
- B) Correct — about 0.000201 ETH, roughly midway between start and floor.
- C) Wrong — this reasoning runs the decline in the wrong direction.
- D) Wrong — the auction does not decline toward zero from the prior first bid price; it starts at twice that.

**102. A round has seen 50 consecutive ETH bids after the initial one, each raising the price by about 1%. Roughly what factor is the 50th subsequent bid's price above the first bid's paid price?**
- A) About 1.5x, because each bid adds 1%.
- B) About 1.64x — 1.01 compounded 50 times.
- C) Exactly 50x.
- D) About 2.72x — the mathematical constant e.

**Explanation:** Each bid multiplies the price by about 1.01. Compounding that 50 times gives about 1.64.
- A) Wrong — 1.01 compounded 50 times is more than 1.5.
- B) Correct — about 1.64x after 50 bids.
- C) Wrong — 1% compounds, not adds linearly.
- D) Wrong — the constant e is the limit of this compounding over 100+ steps, not 50.

**103. Alice places an ETH bid with a Random Walk NFT when the current ETH price is 99 of the smallest units of ETH. How many units must she send at minimum?**
- A) 49 units.
- B) 50 units.
- C) 99 units.
- D) 148 units.

**Explanation:** The discount rule is "half the price, rounded up". Half of 99 is 49.5, so rounded up the bidder pays 50.
- A) Wrong — the rounding goes up, not down.
- B) Correct — 50 units: half of 99, rounded up.
- C) Wrong — that is the non-Random-Walk price.
- D) Wrong — 148 would be 1.5x the base, not a discount.

**104. In a round with exactly one bidder (Alice, bidding once) and no further bids until the deadline plus the grace period elapse, who can claim the main prize?**
- A) Only Alice.
- B) Only the operator.
- C) Alice during the exclusive window; after the grace period, anybody (including Alice).
- D) Nobody — the round must be abandoned.

**Explanation:** Alice has her exclusive window from the deadline onward. After the grace period, the claim opens up to anyone, including Alice.
- A) Wrong — after the grace period, anyone can claim.
- B) Wrong — the operator has no privileged role here.
- C) Correct — Alice only in the exclusive window, then open to any address.
- D) Wrong — a valid claim path always exists.

**105. In a round where no CST bid is ever placed, which prizes are skipped?**
- A) The main prize is not awarded.
- B) The Last CST Bidder prize bundle is skipped; other prizes still distribute.
- C) The Chrono-Warrior prize is skipped.
- D) The entire payout is skipped.

**Explanation:** Only the Last CST Bidder bundle depends on a CST bid existing. If none ever happened, that slot is omitted; every other round-end prize proceeds as normal.
- A) Wrong — the main prize still goes to the claimer.
- B) Correct — only the Last CST Bidder slot is skipped.
- C) Wrong — the Chrono-Warrior exists as long as any bid happened.
- D) Wrong — all other prize categories run.

**106. A CST bid that is accepted at a paid price of 0 (because the CST auction duration has fully elapsed) still triggers which effects?**
- A) Nothing happens because the price is zero.
- B) The CST-auction reset, timer extension, champion updates, and 100-CST reward all still happen; nothing gets burned.
- C) A free Cosmic Signature NFT is minted to the bidder.
- D) The round is abandoned to prevent abuse.

**Explanation:** Even at paid price 0, the bid still resets the CST auction, extends the timer, updates champions, and mints the 100-CST reward. Only the burn amount is zero.
- A) Wrong — bids still have side effects.
- B) Correct — all normal per-bid effects fire; only the burn is zero.
- C) Wrong — NFTs are not minted per bid.
- D) Wrong — no special abandonment exists.

**107. If you stake a Cosmic Signature NFT after the game has already distributed five prior rounds' ETH to the staking wallet, how much of that historical ETH do you earn?**
- A) Your pro-rata share of everything ever distributed.
- B) Nothing — your stake records the then-current per-NFT total as your baseline.
- C) 10% of historical deposits.
- D) Only the first round's deposit.

**Explanation:** Each stake notes the cumulative per-NFT reward at the moment of staking. On unstake, the payout is only what came in after that moment.
- A) Wrong — staking is strictly forward-looking.
- B) Correct — you only collect deposits made while you were staked.
- C) Wrong — no share of past deposits accrues.
- D) Wrong — earlier deposits are baked into your baseline.

**108. On a non-first bid, the deadline extension is computed as "whichever is later of (the current deadline) or (now), plus the increment". What is the best reason for anchoring on the later of the two points rather than just on now?**
- A) To avoid tiny arithmetic edge cases.
- B) So a bid placed while the existing deadline is still ahead does not accidentally shorten the remaining time.
- C) To avoid gas spikes when many bids arrive at once.
- D) Because the game language forbids assigning the current time directly.

**Explanation:** If the deadline is still in the future, anchoring on the current time would reduce the remaining time to only the increment. Anchoring on the later of the two points guarantees the timer never moves backward.
- A) Wrong — this is not about numeric edge cases.
- B) Correct — the rule ensures every bid extends (never shortens) the deadline.
- C) Wrong — the rule does not concern gas.
- D) Wrong — nothing in the language forbids such assignments.

**109. In a round with 200 bids from 50 distinct bidders, Alice placed 40 of the 200 bids. The ETH bidder raffle picks 3 winners. What is the approximate probability Alice wins at least one raffle?**
- A) 20%.
- B) About 49% — 1 minus the chance of losing all three draws, which is 0.8 × 0.8 × 0.8 ≈ 0.512.
- C) 60%.
- D) 100%, since she has many bids.

**Explanation:** Each of the three draws picks one of 200 bids uniformly at random. Alice's per-draw chance is 40/200 = 0.2, so her miss chance per draw is 0.8. Across three independent draws, P(miss all) ≈ 0.512, so P(win at least one) ≈ 0.488.
- A) Wrong — that is the one-draw probability.
- B) Correct — about 49%.
- C) Wrong — overestimates.
- D) Wrong — nothing guarantees a win.

**110. In the same round, for the 10-NFT bidder raffle (independent of the ETH raffle), what is the probability Alice wins at least one Cosmic Signature NFT?**
- A) Exactly 20%.
- B) About 89% — 1 minus 0.8 to the 10th power.
- C) 100%.
- D) About 40%.

**Explanation:** Ten independent draws, each picking from 200 bids uniformly, with Alice holding 40. The chance she misses all 10 is 0.8 to the 10th ≈ 0.107, so P(at least one win) ≈ 89%.
- A) Wrong — that is the one-draw probability.
- B) Correct — about 89%.
- C) Wrong — still a small chance she misses all 10.
- D) Wrong — incorrect formula.

**111. In a single round the game draws 3 ETH raffle prizes, 10 bidder NFT raffle prizes, and 10 Random Walk staker NFT raffle prizes. If nobody has staked a Random Walk NFT, how many total raffle picks happen?**
- A) 13.
- B) 23.
- C) 3.
- D) 20.

**Explanation:** With zero Random Walk stakers, the 10-winner staker raffle returns an empty list; no picks are made for that category. So only 3 ETH draws plus 10 bidder NFT draws happen — 13 total.
- A) Correct — 3 + 10 = 13.
- B) Wrong — includes the staker draws that do not run.
- C) Wrong — that's only the ETH raffle.
- D) Wrong — undercounts or miscounts.

**112. Bob owns a Random Walk NFT. He uses it for a bid in round 4 and later tries to stake that same NFT in round 7. What happens?**
- A) Staking fails because the NFT was already used for bidding.
- B) Staking succeeds because bid-used and stake-used are tracked separately.
- C) Staking succeeds, but the NFT is stuck forever.
- D) Staking succeeds only after Bob burns 100 CST.

**Explanation:** The game keeps two separate "used" lists — one for bidding, one for staking. Using an NFT for a bid does not mark it as stake-used.
- A) Wrong — staking checks a different flag.
- B) Correct — the two flags are independent.
- C) Wrong — Bob can still unstake later.
- D) Wrong — no CST burn is required.

**113. During a round the CST starting-price floor is 200 CST. The previous CST bid was paid at 50 CST. What is the starting price of the next CST auction?**
- A) 50 CST.
- B) 100 CST.
- C) 200 CST — because the floor is larger than 2 × 50.
- D) 400 CST.

**Explanation:** The formula is "twice the paid price, but not below the floor". Twice 50 is 100, which is below the 200 CST floor, so the floor wins.
- A) Wrong — the formula doubles and enforces a floor.
- B) Wrong — the floor clamps upward.
- C) Correct — the 200 CST floor wins.
- D) Wrong — the doubling applies to the paid price, not to the floor.

**114. During the round-end payout, a charity transfer that fails triggers which of the following?**
- A) The main prize claim is reversed, and all earlier steps roll back.
- B) A non-fatal failure event is emitted; the charity ETH stays in the game and the payout continues.
- C) The charity balance is rerouted to the Marketing Wallet.
- D) The claimer forfeits their main prize.

**Explanation:** The charity transfer is deliberately non-fatal: if it fails, the game logs an event, keeps the ETH, and proceeds.
- A) Wrong — the claim does not reverse on a charity failure.
- B) Correct — event logged, ETH stays, payout continues.
- C) Wrong — no auto-rerouting exists.
- D) Wrong — the main-prize transfer is separate and not affected.

**115. Over a round with 100 bids, Alice places 10 and Bob places 90. What is the expected number of NFTs Alice wins from the 10-winner bidder NFT raffle?**
- A) 0.1.
- B) 1.
- C) 5.
- D) 10.

**Explanation:** Per draw Alice has 10/100 = 0.1 probability. Across 10 independent draws, her expected wins are 10 × 0.1 = 1.
- A) Wrong — that is per-draw, not total.
- B) Correct — expected wins total 1.
- C) Wrong — overestimates her share.
- D) Wrong — would require guaranteed wins.

**116. In a round where three players A, B, C successively hold the Endurance Champion title, which of the following is TRUE about the Chrono-Warrior?**
- A) The Chrono-Warrior is the player who held the Endurance Champion title the longest, which could be A, B, or C depending on timings.
- B) The Chrono-Warrior is always the final Endurance Champion.
- C) The Chrono-Warrior is always A, the first Endurance Champion.
- D) The Chrono-Warrior is elected by bidders.

**Explanation:** The Chrono-Warrior is whoever held the Endurance Champion title for the longest single period. The specific identity depends on how long each reign lasted.
- A) Correct — it could be any of A, B, or C.
- B) Wrong — the final Endurance Champion may have held the title only briefly.
- C) Wrong — A can easily be dethroned quickly.
- D) Wrong — voting does not decide champions.

**117. If Alice is the last bidder but never calls to claim the main prize, when exactly can Bob (an earlier bidder) successfully call the claim?**
- A) Immediately — non-last-bidders can always claim.
- B) At or after the deadline plus the grace period of 1 day.
- C) Never; only the last bidder can claim.
- D) Only after the DAO approves it.

**Explanation:** Before the grace period ends, a claim attempt by anyone other than the last bidder fails. Once it ends, any caller can claim.
- A) Wrong — before the grace period, non-last-bidders are refused.
- B) Correct — Bob can claim once the grace period elapses.
- C) Wrong — the game opens up to any caller after the grace period.
- D) Wrong — governance does not gate prize claims.

**118. A round has a single bidder, Alice, who bids once at time 100 and never again. The round is eventually claimed at time 5000 by Bob (after the grace period). Which of the following describes the Endurance Champion and Chrono-Warrior?**
- A) Nobody — champions require at least two bidders.
- B) Endurance Champion is Alice with duration 4900; Chrono-Warrior is also Alice with the same duration.
- C) Endurance Champion is Bob; Chrono-Warrior is Alice.
- D) Endurance Champion is Alice; Chrono-Warrior is Bob.

**Explanation:** The champion-tracking step on the claim promotes Alice (the only last bidder) to Endurance Champion with duration 4900, and then the Chrono-Warrior is updated to the same Alice with the same duration.
- A) Wrong — a single bidder can still be both.
- B) Correct — Alice is both champions with a 4900 duration.
- C) Wrong — Bob never bid, so he cannot be a champion.
- D) Wrong — Bob is only the claimer, not a champion.

**119. Approximately how does the timer-extension increment evolve across rounds under default parameters?**
- A) It stays constant.
- B) It grows by about 1% per round, because round-end math adds the previous value divided by 100.
- C) It halves each round.
- D) It doubles each round.

**Explanation:** At the end of each round, the increment that is added to the deadline on each bid grows by about 1%.
- A) Wrong — it grows each round.
- B) Correct — about 1% growth per round.
- C) Wrong — no halving.
- D) Wrong — doubling would balloon the timer quickly.

**120. Which statement about Cosmic Signature NFT staking ETH distribution is FALSE?**
- A) Each currently staked NFT earns an equal share of each round-end deposit.
- B) When there are zero staked NFTs, the deposit is safely skipped and the ETH carries over.
- C) Unstaking pays the accumulated reward in the same transaction.
- D) Stakers who stake late retroactively share deposits made before they staked.

**Explanation:** Each stake records the per-NFT running total at stake time, so late stakers earn only from deposits that happen after they staked. The claim in D is the false one; the other three are true.
- A) True — equal per-NFT share.
- B) True — the zero-staker case is safely handled.
- C) True — NFT and ETH come out together.
- D) Correct answer — this claim is FALSE.

**121. In a round with 100 bidders, 10 of whom staked Cosmic Signature NFTs, how much ETH does each Cosmic Signature NFT staker earn from one round-end deposit of 6 ETH, assuming each staked exactly one NFT?**
- A) 6 ETH total to one random staker.
- B) 0.6 ETH per staked NFT.
- C) 0.06 ETH per staked NFT.
- D) 0 ETH.

**Explanation:** The deposit is split equally: 6 ETH / 10 NFTs = 0.6 ETH per NFT.
- A) Wrong — this is not a raffle.
- B) Correct — 0.6 ETH per NFT.
- C) Wrong — off by a factor of 10.
- D) Wrong — Cosmic Signature NFT staking is an ETH reward mechanism.

**122. Alice placed 3 bids in round 5 and never withdrew her prize from the Prizes Wallet. Six weeks later, Charlie notices and calls the withdraw action naming Alice as the winner. What happens?**
- A) The call fails — only Alice can ever withdraw.
- B) Alice's unclaimed ETH is sent to Charlie, because the 5-week timeout has elapsed.
- C) The ETH is returned to the main game.
- D) Alice is refunded automatically.

**Explanation:** After the 5-week withdrawal timeout, any caller can sweep an unclaimed prize, and the ETH is paid to the caller (not to the original winner).
- A) Wrong — the timeout opens claiming to anyone.
- B) Correct — Charlie sweeps the prize to himself.
- C) Wrong — no rollback to the game.
- D) Wrong — no automatic refund exists.

**123. In round 7, the first ETH bid paid 0.0005 ETH. The round 8 Dutch auction begins. If someone bids at the moment the Dutch auction hits its floor, and the floor is about 1/200 of the starting price (with a tiny nudge above zero), approximately how much ETH do they pay?**
- A) About 0.0005 ETH.
- B) About 0.000005 ETH (five-millionths of an ETH).
- C) 0.0001 ETH.
- D) Zero.

**Explanation:** Round 8 starts at 2 × 0.0005 = 0.001 ETH. The floor is about 0.001 / 200, which is 0.000005 ETH — plus a negligible amount to keep it above zero.
- A) Wrong — that is roughly the previous round's first bid, not the new floor.
- B) Correct — about five-millionths of an ETH.
- C) Wrong — that is the round-zero hardcoded price.
- D) Wrong — the floor is strictly positive.

**124. In round 3: first ETH bid at 0.002 ETH, then a bid using a Random Walk NFT, then another non-Random-Walk ETH bid. Approximately what price is paid on the third bid?**
- A) Exactly 0.002 ETH.
- B) About 0.00204 ETH — because each bid grows the next bid's price by ~1%, even when the current bidder used a Random Walk discount. After two 1% steps the price is near 0.00204 ETH.
- C) About 0.001 ETH.
- D) About 0.004 ETH.

**Explanation:** Using a Random Walk NFT cuts what you pay, but the game still advances the next bid's ETH price using the full (non-discounted) price. So two 1% steps apply, and the third bid pays about 0.00204 ETH.
- A) Wrong — the price grows after every bid.
- B) Correct — two 1% steps compound from 0.002 to about 0.00204.
- C) Wrong — the price does not halve; the Random Walk discount is on the payment, not on the stored price.
- D) Wrong — one step is only about 1%, not double.

**125. A player bids in round 10 using a Random Walk NFT estimated at 0.3 ETH of off-chain value, paying an on-chain bid price of 0.02 ETH (half of the 0.04 ETH price). If they win the 10 ETH main prize, what is their direct ETH-equivalent profit/loss from the bid (ignoring gas)?**
- A) +9.98 ETH (10 ETH won minus 0.02 ETH bid).
- B) +9.68 ETH (10 ETH minus the 0.02 ETH bid minus the 0.3 ETH value of the consumed Random Walk NFT).
- C) −0.02 ETH, because the main prize is separate.
- D) 0 — the Random Walk NFT is returned after use.

**Explanation:** Using a Random Walk NFT permanently consumes its bid-use slot. Correct accounting includes the ~0.3 ETH sunk value of that consumption. Net in ETH terms: 10 − 0.02 − 0.3 ≈ 9.68 ETH.
- A) Wrong — ignores the sunk value of the consumed Random Walk NFT.
- B) Correct — the Random Walk NFT's bid-use value is permanently gone.
- C) Wrong — the main prize does go to the claimer.
- D) Wrong — the bid-use slot is not refunded.

**126. Alice stakes 5 Cosmic Signature NFTs at time T in a single transaction. No other stakers exist. Two rounds later, 3 ETH is deposited to the staking wallet each round. Alice unstakes all 5 immediately after the second deposit. How much ETH does she receive?**
- A) 1.2 ETH total.
- B) 6 ETH total.
- C) 3 ETH total.
- D) 30 ETH total.

**Explanation:** Each round each NFT earns 3/5 = 0.6 ETH. Across two rounds, that is 1.2 ETH per NFT, for a total of 6 ETH across her 5 NFTs.
- A) Wrong — that is per NFT, not in total.
- B) Correct — she receives the full 6 ETH deposited because she is the only staker.
- C) Wrong — this halves the deposited amount.
- D) Wrong — only the deposited ETH is available.

**127. Which of the following is NOT a valid way for ETH to leave the main game at round end?**
- A) Direct transfer to the main prize winner.
- B) Deposit to the Cosmic Signature NFT staking wallet for reward distribution.
- C) Deposit to the Marketing Wallet as a share of round balance.
- D) Transfer to the charity address.

**Explanation:** The Marketing Wallet only receives CST, never ETH. The other three are real ETH outflow paths.
- A) Valid — main prize is a direct ETH transfer.
- B) Valid — the staker share goes to the staking wallet.
- C) Correct — Marketing never receives ETH.
- D) Valid — charity receives its ETH share.

**128. In a round where all 20 bids were placed by the same address, what happens to the 10 raffle NFT draws?**
- A) Only one NFT is minted, because duplicates are removed.
- B) Ten NFTs are minted, all to the same address.
- C) The raffle is skipped entirely.
- D) Ten NFTs are minted to an invalid "zero" address.

**Explanation:** Draws pick a random bid without deduplication. If every bid came from one address, the only possible winner every time is that address, so all 10 NFTs mint to them.
- A) Wrong — no deduplication step exists.
- B) Correct — all 10 NFTs mint to the single bidder.
- C) Wrong — the raffle runs regardless of distinct bidders.
- D) Wrong — the address is always a real bidder.

**129. A bidder's message is 281 characters. What happens?**
- A) The bid succeeds because the 280-character cap is inclusive.
- B) The bid fails because 281 exceeds the 280-character limit.
- C) The bid succeeds but the message is silently truncated to 280 characters.
- D) The bid succeeds but the bidder is not recorded as the last bidder.

**Explanation:** The cap is 280 characters, so 280 passes but 281 fails.
- A) Wrong — 281 exceeds 280.
- B) Correct — the bid fails for exceeding the length cap.
- C) Wrong — no silent truncation occurs.
- D) Wrong — a failed bid leaves no state change.

**130. If the operator tries to use the emergency price-lowering lever during the very first round of the game, what happens?**
- A) The floor price for the next ETH Dutch auction is roughly halved.
- B) The action fails because the lever is explicitly disabled during round zero.
- C) The current round's ETH price is halved immediately.
- D) The CST auction is halved instead.

**Explanation:** The emergency halving lever is intentionally locked out during the very first round. It only becomes usable from round 1 onward, between rounds.
- A) Wrong — it cannot run in round zero.
- B) Correct — the round-zero guard blocks it.
- C) Wrong — the lever adjusts settings for the next auction, not the current price mid-flight.
- D) Wrong — CST is untouched.

**131. In a round, Bob places 30 ETH bids with no Random Walk NFT, and then one CST bid. How does his CST balance change across all those bids?**
- A) It rises by 30 × 100 − (CST bid paid price) + 100 = 3,100 − (CST bid paid price) CST.
- B) It rises by 30 × 100 + (CST bid paid price) CST.
- C) It falls by exactly the CST bid paid price.
- D) It is unchanged by bidding.

**Explanation:** Each of the 30 ETH bids mints 100 CST (3,000 total). The CST bid burns the paid CST price and mints another 100 CST. Net: 3,000 + 100 − paid price = 3,100 − paid price.
- A) Correct — the net change is 3,100 CST minus the CST bid's paid price.
- B) Wrong — the CST bid burns the paid price; it does not add it.
- C) Wrong — ignores the per-bid CST rewards.
- D) Wrong — every bid mints rewards.

**132. At the end of a round with 50 ETH in balance, how much ETH goes to the Chrono-Warrior under default parameters?**
- A) 12.5 ETH (25%).
- B) 4 ETH (8% of 50).
- C) 0.5 ETH (1% of 50).
- D) 3.5 ETH (7% of 50).

**Explanation:** The Chrono-Warrior receives 8% of the game's balance. 8% of 50 is 4 ETH.
- A) Wrong — 25% is the main prize.
- B) Correct — 4 ETH at 8%.
- C) Wrong — 1% is not one of the configured percentages.
- D) Wrong — 7% is the charity share.

**133. The Cosmic Signature NFT staking wallet has 100 stakers. The 6% ETH deposit at round-end is 0.3 ETH. What is the per-NFT share?**
- A) Zero, because of rounding.
- B) 0.003 ETH per NFT.
- C) 30 ETH per NFT.
- D) 0.3 ETH per NFT (same for all).

**Explanation:** 0.3 ETH divided by 100 is 0.003 ETH per NFT — well above any rounding edge.
- A) Wrong — the result is not zero at this scale.
- B) Correct — 0.003 ETH per NFT.
- C) Wrong — the formula divides, not multiplies.
- D) Wrong — the whole deposit is split.

**134. In the CST Dutch auction, at exactly half the elapsed duration the current price is:**
- A) The full starting price.
- B) Half the starting price.
- C) A quarter of the starting price.
- D) Zero.

**Explanation:** The CST auction declines linearly from the starting price to zero. Halfway through, the price is exactly half the starting price.
- A) Wrong — that's the start of the auction.
- B) Correct — half at halfway.
- C) Wrong — would be the three-quarter mark.
- D) Wrong — that is the end.

**135. If the game's ETH balance is exactly 20 ETH at claim time under default parameters, how much is paid to charity?**
- A) 0.02 ETH.
- B) 1.4 ETH (7% of 20).
- C) 2 ETH.
- D) 5 ETH (25% of 20).

**Explanation:** 7% of 20 ETH is 1.4 ETH.
- A) Wrong — this assumes a 0.1% rate.
- B) Correct — 1.4 ETH at 7%.
- C) Wrong — 10% is not a configured percentage.
- D) Wrong — 25% is the main prize.

**136. Which rule governs the operator's ability to change the charity percentage?**
- A) They can change it any time, including mid-round after the first bid.
- B) They can only change it while the round is idle between sessions.
- C) Any address can change it.
- D) No setting exists; the percentage is fixed.

**Explanation:** Most settings, including the charity percentage, can only be changed between rounds.
- A) Wrong — the change is not allowed mid-round.
- B) Correct — only between rounds.
- C) Wrong — only the operator can change it.
- D) Wrong — the percentage is configurable.

**137. In round 10 the operator wants to upgrade to a new version of the game. Which condition is necessary?**
- A) The round is active but no bids have been placed yet.
- B) The round is idle between sessions, and the caller is the operator.
- C) The DAO has approved the upgrade.
- D) The round's Chrono-Warrior duration is zero.

**Explanation:** Upgrades are only allowed when both the operator is the caller and the round is idle between sessions.
- A) Wrong — "active with no bid" passes a looser guard but fails the upgrade guard.
- B) Correct — operator plus idle round.
- C) Wrong — the DAO does not veto upgrades.
- D) Wrong — champion state has no effect on upgradeability.

**138. A bidder sends 0.01 ETH to the ETH bid action when the current price is 0.004 ETH, with no Random Walk NFT. What happens to the excess 0.006 ETH?**
- A) The game keeps it forever.
- B) If the excess is larger than the gas cost of refunding it, it is refunded; otherwise the game keeps it as part of the bid.
- C) It is always refunded in full.
- D) It is forwarded to the Charity Wallet.

**Explanation:** The game only refunds an overpayment when doing so is worth more than the gas it would burn on the refund transfer. If the excess is tiny, the game keeps it to avoid wasting more gas than the refund's worth.
- A) Wrong — large excesses are refunded.
- B) Correct — refund or absorb depending on whether the excess is larger than the gas cost.
- C) Wrong — tiny excesses are deliberately absorbed.
- D) Wrong — no charity redirect.

**139. The primary reason the game absorbs tiny ETH overpayments (rather than refunding them) is:**
- A) Refunding would cost more gas than the refund is worth.
- B) The game language forbids refunds.
- C) The operator keeps the difference as a tip.
- D) The DAO requires the excess.

**Explanation:** The refund transfer itself costs gas. If the overpayment is smaller than that cost, sending it would be a net loss for the bidder.
- A) Correct — economics of the refund transfer.
- B) Wrong — refunds are allowed; the choice is economic.
- C) Wrong — no tip flows to anyone; the excess simply joins the prize pool.
- D) Wrong — the DAO is unrelated.

**140. In a round with zero CST bids, which state remains unset at claim time, causing the Last CST Bidder slot to be skipped?**
- A) The Chrono-Warrior record.
- B) The Last CST Bidder record.
- C) The Endurance Champion record.
- D) The charity address.

**Explanation:** The Last CST Bidder record is only written when a CST bid happens. With none in the round, that record stays empty and the matching prize slot is skipped.
- A) Wrong — the Chrono-Warrior is recorded whenever any bid happens.
- B) Correct — the Last CST Bidder slot is the one skipped.
- C) Wrong — the Endurance Champion is recorded on any bid.
- D) Wrong — the charity address is set at deployment.

**141. Which of the following is TRUE about "donate ETH with info"?**
- A) It counts as a bid and extends the timer.
- B) It records the round, donor, amount, and a small message on-chain, and adds the ETH to the game's balance, but it is not a bid and does not affect the timer.
- C) It is refunded after 30 days.
- D) It routes the donation to the Charity Wallet.

**Explanation:** The action stores a detailed record alongside adding the ETH to the game's balance; it never acts as a bid.
- A) Wrong — donations are strictly separate from bids.
- B) Correct — the record is stored, the ETH stays, and no bid effects fire.
- C) Wrong — donations are not refunded.
- D) Wrong — the ETH joins the general pool, not charity specifically.

**142. In a round with 3 bids placed, each by a distinct address, what is the Chrono-Warrior's duration equal to?**
- A) Zero, because only 3 bids occurred.
- B) The longest single reign as Endurance Champion among the transitions in that round.
- C) The full time between the first and last bid.
- D) Always zero when fewer than 10 bids.

**Explanation:** The Chrono-Warrior is defined by the longest single reign as Endurance Champion. Three bids give up to two transitions; whichever reign was longest wins.
- A) Wrong — the duration is nonzero as long as transitions happened.
- B) Correct — longest single Endurance Champion reign.
- C) Wrong — not the whole bid-to-bid span.
- D) Wrong — no bid-count threshold applies.

**143. In round 0 the Marketing Wallet starts with zero CST. How soon after the first main-prize claim does it have CST?**
- A) Immediately upon deployment.
- B) After the first main-prize claim, which mints its CST share.
- C) Only after the DAO votes to fund it.
- D) Only after a manual admin transfer.

**Explanation:** The Marketing Wallet's 3,000 CST per-round contribution is minted at each round's main-prize claim. After the first round ends, it has its first 3,000 CST.
- A) Wrong — no initial mint at deployment.
- B) Correct — the first successful claim funds the wallet.
- C) Wrong — funding is automatic.
- D) Wrong — no manual transfer required.

**144. A non-bidder Charlie tries to claim the main prize exactly at the main-prize deadline (no grace time has passed). What happens?**
- A) He claims successfully.
- B) The call fails because the grace period has not elapsed.
- C) The main prize is split between Charlie and the last bidder.
- D) Charlie gets the main prize but loses any other prizes.

**Explanation:** Before the grace period elapses, non-last-bidders are refused. Charlie has to wait for the full timeout to pass.
- A) Wrong — the exclusive window still holds for the last bidder only.
- B) Correct — non-last-bidders must wait for the 1-day grace period.
- C) Wrong — splits are not a concept here.
- D) Wrong — no partial claims exist.

**145. Why does each new ETH bid cost strictly more than the prior bid, even by the smallest possible amount?**
- A) The game adds "the prior price divided by a configured number, plus the tiniest possible slice of ETH" — so even when the division rounds down to zero, that tiny extra keeps the new price strictly above the old one.
- B) To hide opportunities for front-running.
- C) To make gas costs predictable.
- D) To match a standard token convention.

**Explanation:** Without the tiny extra slice, a very small prior price could round to zero on the 1% increment, leaving the new price equal to the old. The extra slice guarantees the price always grows.
- A) Correct — the tiny extra slice guarantees the price strictly increases.
- B) Wrong — front-running is not the motive.
- C) Wrong — the tiny slice does not affect gas predictability.
- D) Wrong — no external convention requires this.

**146. A user calls the main-prize claim action while the round is still active (before the deadline). They are not the last bidder. The transaction:**
- A) Succeeds and awards them the prize.
- B) Fails — non-last-bidders can only claim after the grace period, which has not arrived.
- C) Refunds their gas automatically.
- D) Converts them into the last bidder.

**Explanation:** The claim requires either being the last bidder after the deadline or being any caller after the grace period. Neither condition holds here.
- A) Wrong — non-last-bidders fail before the grace period.
- B) Correct — they are refused.
- C) Wrong — no gas refund on failure.
- D) Wrong — failed claims do not rewrite bidder state.

**147. Over a long game, which of the following grows most clearly over time in expectation?**
- A) The CST total supply, because each bid mints 100 CST and each round mints thousands more through prizes.
- B) The charity percentage per round.
- C) The main prize percentage per round.
- D) The staker count automatically.

**Explanation:** CST is minted on every bid and at every round-end, with no built-in burn to offset it beyond CST bids. Over time, supply tends to grow.
- A) Correct — CST supply grows with activity.
- B) Wrong — the charity percentage is a static setting.
- C) Wrong — the main prize percentage is a static setting.
- D) Wrong — staker count is user-driven.

**148. Which of the following can the operator NOT do directly?**
- A) Reassign the Marketing Wallet address before any bid has been placed in the round.
- B) Change the charity percentage while a round is already active with bids.
- C) Pause the game at will.
- D) Transfer ownership to a new address.

**Explanation:** There is no pause capability in the game — so there is no way for the operator to pause it. Option B is also blocked during an active round, but the absolute "cannot do" answer here is the pause.
- A) Allowed — under the right guard before bids.
- B) Not allowed mid-round; but a pause mechanism simply does not exist.
- C) Correct answer — the operator has no pause capability at all.
- D) Allowed — ownership transfer is a standard capability.

**149. Alice has 50 CST and Bob has 50 CST. Both have delegated their voting power to themselves. A DAO proposal is about to go live. What is required for either of them to vote on it?**
- A) At least one of them must have 100 CST to submit the proposal; voting itself only needs any nonzero delegated balance at the snapshot.
- B) Both must each have at least 3% of the CST supply.
- C) They cannot vote; only bidders can.
- D) They must be the last bidder of the most recent round.

**Explanation:** The 100-CST threshold is for proposing, not voting. Voters only need some voting weight at the snapshot. Quorum (3%) is a collective requirement across the whole vote.
- A) Correct — 100 CST is for proposing; any positive delegated balance votes.
- B) Wrong — 3% is the aggregate quorum, not a per-voter minimum.
- C) Wrong — bidding is unrelated to voting rights.
- D) Wrong — bidding history does not gate voting.

**150. When does the game publicly announce that a new round has just gone live with its first bid?**
- A) On every bid.
- B) Only on the first bid of each new round (which must be ETH).
- C) Only on CST bids.
- D) Never.

**Explanation:** The "round is now live" event fires exactly once per round, on the first bid (which must be ETH). Subsequent bids emit a different event.
- A) Wrong — this event is for the first bid only.
- B) Correct — fired once per round on the first bid.
- C) Wrong — the first bid must be ETH, not CST.
- D) Wrong — the event exists in production code.

**151. If a malicious automated wallet becomes the last bidder and refuses to accept ETH when it tries to claim the main prize, what happens?**
- A) The claim fails because the main-prize transfer reverts.
- B) The claim succeeds and the ETH is silently lost.
- C) The ETH is sent to charity instead.
- D) The claim succeeds but the ETH stays in the Prizes Wallet.

**Explanation:** The main-prize transfer must succeed for the claim to complete. If the transfer reverts, the whole claim reverts. Unlike the charity transfer, this one is not wrapped in a safety net.
- A) Correct — the main-prize transfer must succeed or the claim fails.
- B) Wrong — no silent loss.
- C) Wrong — no charity redirect.
- D) Wrong — the main prize does not fall back to the Prizes Wallet.

**152. When only one stake action exists and that NFT has been staked for a long time, what does the staker count equal right before the owner unstakes?**
- A) The NFT id.
- B) 1.
- C) 0.
- D) The round number when it was staked.

**Explanation:** The staker count tracks currently staked NFTs. A single staked NFT makes it 1.
- A) Wrong — the count is not tied to any specific id.
- B) Correct — one staked NFT, count is 1.
- C) Wrong — zero would mean not staked.
- D) Wrong — unrelated to round numbers.

**153. How does the game produce a seed that is hard to predict on Arbitrum?**
- A) It relies solely on a single blockchain difficulty value.
- B) It mixes Arbitrum-specific built-in values (which change every transaction) with other on-chain sources to build a seed no script can easily predict.
- C) It uses an off-chain oracle per call.
- D) It uses the CST total supply as a source of randomness.

**Explanation:** Arbitrum exposes special built-in values whose outputs change every transaction. The game mixes those with additional on-chain sources so a script cannot realistically pre-compute the seed.
- A) Wrong — a single difficulty value would be easy to predict.
- B) Correct — mixing Arbitrum's built-in values is the approach.
- C) Wrong — no external oracle is used.
- D) Wrong — CST supply is not used for entropy.

**154. The game assumes the operator is well-intentioned ("benevolent"). Which of these is a specific implication?**
- A) The operator cannot upgrade the game at all.
- B) The operator could in principle upgrade to a version that drains the Prizes Wallet; the design relies on the operator choosing not to.
- C) Only the DAO has any administrative powers.
- D) The contracts are audited by the operator personally.

**Explanation:** The operator can push upgrades between rounds, and those upgrades could be hostile. The system's design trusts them not to do it.
- A) Wrong — upgrades are allowed between rounds.
- B) Correct — benevolent-operator assumption acknowledges this theoretical risk.
- C) Wrong — the DAO is not the sole administrator.
- D) Wrong — audits are performed by third parties.

**155. Suppose a round has 4 distinct bidders with bid counts 10, 20, 30, 40. What is the probability that all 3 ETH raffle draws pick only the 40-bid player?**
- A) 0.4 × 0.4 × 0.4 = 0.064, or about 6.4%.
- B) 40%.
- C) 100% — most bids wins.
- D) 0.4 × 3 = 1.2 (impossible).

**Explanation:** The three draws are independent uniform picks over 100 bids. P(pick = 40-bid player) = 0.4 per draw; P(all three pick them) = 0.4 cubed ≈ 0.064.
- A) Correct — about 6.4%.
- B) Wrong — that is a single-draw probability.
- C) Wrong — draws are random across all bids.
- D) Wrong — probabilities cannot exceed 1.

**156. Alice stakes 1 Cosmic Signature NFT when the cumulative per-NFT reward total is 0 ETH. Bob stakes 1 NFT later when the cumulative is 5 ETH. Soon after Bob stakes, a deposit raises the cumulative to 7 ETH. Alice unstakes. How much does she receive?**
- A) 7 ETH.
- B) 5 ETH.
- C) 2 ETH.
- D) Nothing.

**Explanation:** Alice's baseline was 0, so on unstake she collects 7 − 0 = 7 ETH. If Bob were to unstake at the same time, he'd collect 7 − 5 = 2 ETH.
- A) Correct — 7 ETH, because her baseline was 0.
- B) Wrong — her baseline is 0, not 5.
- C) Wrong — 2 is Bob's share.
- D) Wrong — she accrues while staked.

**157. Alice is the last bidder at "deadline minus 1 second" with no intent to claim. Bob bids at "deadline plus 10 seconds". What happens to the deadline?**
- A) Bob cannot bid because the timer expired.
- B) Bob's bid is accepted (the round is still active until claimed), and the deadline becomes "now plus the timer-extension increment".
- C) Bob's bid fails because the round is inactive.
- D) The round ends and Bob gets no prize.

**Explanation:** The round is still active until someone claims. Bob's late bid is accepted, and because the old deadline is in the past, the new deadline anchors to "now" plus the increment.
- A) Wrong — the deadline controls claim eligibility, not whether more bids are allowed.
- B) Correct — Bob's bid is accepted and extends the deadline from now.
- C) Wrong — the round is only inactive before its activation time.
- D) Wrong — bids remain valid until someone claims.

**158. With defaults, the raffle ETH pool is 4% of the game's balance, split across 3 draws. If the game's balance is 25 ETH at claim, how much ETH does each of the 3 raffle winners receive?**
- A) About 0.333 ETH — 25 × 0.04 / 3.
- B) 0.0133 ETH.
- C) 1 ETH.
- D) 0.25 ETH each (25% of 1).

**Explanation:** 25 × 4/100 = 1 ETH total pool. 1 / 3 ≈ 0.333 ETH per winner.
- A) Correct — about 0.333 ETH each.
- B) Wrong — off by an order of magnitude.
- C) Wrong — that is the whole pool.
- D) Wrong — 25% is the main prize, not the raffle.

**159. In a round with zero Random Walk stakers, what happens to the 10 Random Walk staker raffle slots?**
- A) They mint 10 NFTs and CST bundles to an invalid "zero" address.
- B) The staker lookup returns no stakers, so the staker raffle loop does not run and no bundles are minted for that category.
- C) They roll over to the next round.
- D) They are redistributed to charity.

**Explanation:** With no stakers, the lookup returns an empty list, so the round-end payout simply skips the Random Walk staker raffle section entirely.
- A) Wrong — no zero-address mints.
- B) Correct — empty list skips the loop.
- C) Wrong — no rollover for NFT prizes.
- D) Wrong — no charity redirect.

**160. During a successful main-prize claim, which of the following happens LAST in the payout?**
- A) Main prize ETH transfer.
- B) Minting of CST and Cosmic Signature NFTs for all winners.
- C) Charity transfer.
- D) Champion updates.

**Explanation:** The payout order is: champion updates, then ETH flows (raffle, Chrono-Warrior, staker deposit, charity, main prize), then the CST and NFT mints for every winner. The mints are last.
- A) Wrong — the token mints happen after this.
- B) Correct — mints are last.
- C) Wrong — charity runs before the main-prize transfer.
- D) Wrong — champion updates are first.

**161. If the game's balance is 0 ETH at claim time (hypothetically), what happens?**
- A) The claim fails because the main prize would be zero.
- B) The claim succeeds; every ETH prize amount is zero but the CST and Cosmic Signature NFT prizes still mint.
- C) The claim succeeds and the caller is compensated in CST.
- D) The claim is postponed to a later time.

**Explanation:** Zero-value ETH transfers are still valid. They simply pay out 0 ETH where a percentage of the balance would have been, and the CST and NFT bundles still mint normally.
- A) Wrong — zero-value transfers do not fail by default.
- B) Correct — ETH prizes are zero, tokens still mint.
- C) Wrong — no special CST compensation.
- D) Wrong — no postponement mechanic exists.

**162. The operator pulls the emergency price-lowering lever in round 3 after the Dutch auction has fully elapsed. What is the intent?**
- A) To double the ending price and slow the next round down.
- B) To reduce the auction's floor by roughly half, so a would-be bidder can pay a lower price.
- C) To close the round.
- D) To refund all ETH to previous bidders.

**Explanation:** The lever is an emergency knob: if bidding has stalled at the floor price and nothing is happening, the operator can halve the floor to restart the downward movement.
- A) Wrong — the lever lowers, not raises.
- B) Correct — it halves the floor while keeping the current price smooth.
- C) Wrong — it does not close the round.
- D) Wrong — no refunds are triggered.

**163. When a main-prize claim completes successfully, which of the following variables get reset so the next round starts clean?**
- A) The last bidder, the last CST bidder, the Endurance Champion, the Chrono-Warrior, the previous Endurance Champion duration, and the Chrono-Warrior duration (set to a sentinel "not set yet" value).
- B) The CST auction beginning price.
- C) Only the last bidder.
- D) None — the next round inherits everything.

**Explanation:** The round-reset step wipes all the per-round bidder and champion state, increments the round counter, lengthens the timer increment slightly, and schedules the next activation.
- A) Correct — all the per-round bidder/champion state is cleared.
- B) Wrong — that value is carried via a separate mechanism, not a reset.
- C) Wrong — more than just the last bidder is cleared.
- D) Wrong — there is an explicit reset.

**164. The Chrono-Warrior's duration is initialized each round to what value?**
- A) Zero.
- B) A sentinel value that acts like negative infinity, so the first real candidate always beats it.
- C) The previous round's duration.
- D) The round number.

**Explanation:** The Chrono-Warrior duration is initialized to a special "not set yet" sentinel, so the first real candidate immediately overrides it.
- A) Wrong — zero would fail to be beaten by a zero candidate.
- B) Correct — a sentinel meaning "not set yet".
- C) Wrong — no round-to-round inheritance.
- D) Wrong — unrelated to round number.

**165. The combined burn-and-mint utility on the CST token is used for what?**
- A) Manually rebalancing the token's supply.
- B) CST bids, where the paid CST is burned and the 100-CST reward is minted in the same step.
- C) DAO proposals that require burning CST.
- D) Charity Wallet refills.

**Explanation:** CST bids use a single step that both burns the paid price and mints the bidding reward at the same time.
- A) Wrong — no general rebalance utility.
- B) Correct — atomically burns and mints for a CST bid.
- C) Wrong — DAO proposals do not use this directly.
- D) Wrong — the Charity Wallet is ETH-only.

**166. Alice and Bob each hold 4% of total CST. A DAO proposal goes to a vote. Neither has delegated voting power. What is their effective voting weight?**
- A) Both vote with 4% each.
- B) Both have zero voting power until they delegate (to themselves or anyone).
- C) Only Alice has voting power because she created her account first.
- D) Both have voting power after the round ends.

**Explanation:** Governance requires an explicit delegate step; simply holding CST gives no weight until the holder delegates.
- A) Wrong — balance alone does not vote.
- B) Correct — they must delegate to gain voting power.
- C) Wrong — ordering does not matter.
- D) Wrong — rounds do not trigger delegation.

**167. In a round with four bids — Alice, Bob, Alice, Bob — which statement about the Endurance Champion is correct?**
- A) Alice is always Endurance Champion as the first bidder.
- B) The Endurance Champion is whoever held the last-bidder spot for the single longest uninterrupted stretch.
- C) Bob is Endurance Champion because he placed the most recent bid.
- D) Champions are chosen randomly.

**Explanation:** The Endurance Champion title is based on the longest single continuous reign as last bidder. The first-bidder or last-bidder identity does not decide it.
- A) Wrong — the first bidder can be dethroned.
- B) Correct — time-based, not count- or order-based.
- C) Wrong — bidding last does not win this title.
- D) Wrong — the title is deterministic from bid timings.

**168. In the same example, what happens to Alice's reign as Endurance Champion when Bob outbids her?**
- A) Her reign is erased from history.
- B) Her reign's duration is locked in. The title flips to Bob only if his ongoing reign surpasses hers; otherwise the record stays Alice's.
- C) She keeps the title forever.
- D) The title transfers to a random address.

**Explanation:** Bob's reign is tracked from the moment he becomes last bidder. The title switches to him only when his reign exceeds the recorded champion duration; otherwise Alice's record stands.
- A) Wrong — her recorded duration is not erased.
- B) Correct — promotion is conditional on surpassing the recorded duration.
- C) Wrong — anyone can overtake her with a longer reign.
- D) Wrong — promotion is deterministic, not random.

**169. Two stakers: Alice staked 1 Cosmic Signature NFT at time 0; Bob staked 5 at time 100. The game deposits 10 ETH at time 200. At time 300, both unstake. Which of these best describes their rewards?**
- A) Alice earns (10/6) ≈ 1.67 ETH; Bob earns 5 × (10/6) ≈ 8.33 ETH.
- B) Alice earns 5 ETH; Bob earns 5 ETH.
- C) Alice earns 10 ETH; Bob earns 0.
- D) Both earn 0.

**Explanation:** At deposit time there are 6 staked NFTs (Alice's 1 + Bob's 5). Each NFT earns 10/6 ≈ 1.67 ETH. Alice has 1 NFT, Bob has 5.
- A) Correct — split per NFT at deposit time.
- B) Wrong — rewards are per NFT, not per wallet.
- C) Wrong — Bob was staked at deposit time too.
- D) Wrong — both accrue during the window.

**170. The CST Dutch auction current-price formula during the auction is:**
- A) Starting price × (elapsed time / total duration) — increasing over time.
- B) Starting price × (remaining time / total duration) — declining to zero at the end.
- C) Starting price × 2 minus elapsed time.
- D) Starting price minus a tiny fixed amount per second.

**Explanation:** The CST auction is a linear Dutch auction: price is proportional to the remaining time, reaching zero once the auction's duration is fully elapsed.
- A) Wrong — the auction declines, not rises.
- B) Correct — linear decline to zero.
- C) Wrong — not a doubling-and-subtract formula.
- D) Wrong — not a flat per-second step.

**171. Which formula defines the initial main-prize deadline set when the first bid of a round is placed?**
- A) The total round length.
- B) The timer-extension base value divided by the initial-duration divisor — essentially a day-scale window at defaults.
- C) The between-round delay.
- D) The charity timeout.

**Explanation:** The first bid sets the deadline to a day-scale window derived from the timer-extension base value divided by a configured divisor.
- A) Wrong — "total round length" is informal.
- B) Correct — the base divided by the initial-duration divisor.
- C) Wrong — that is the between-round delay, not the initial deadline.
- D) Wrong — no charity timeout applies here.

**172. A player sends ETH directly to the main game during the inactive stage of round 5 (before its activation time). What happens?**
- A) It is treated as a bid attempt, which fails because the round is inactive.
- B) The ETH is accepted as a donation automatically.
- C) The ETH is queued until the round activates.
- D) The ETH is returned immediately without any transaction cost.

**Explanation:** Raw ETH sent to the game enters the ETH bid path. While the round is inactive, the first-bid guard refuses the bid.
- A) Correct — the bid attempt fails.
- B) Wrong — donations require the dedicated donation action.
- C) Wrong — no queuing exists.
- D) Wrong — the transaction reverts, which still costs gas.

**173. Two bidders place ETH bids exactly one second apart. Who becomes Endurance Champion after those two bids?**
- A) The first bidder, with duration about 1 second.
- B) The second bidder, because they are the current last bidder.
- C) Neither — you need at least 3 bids.
- D) Whichever has more CST.

**Explanation:** The second bid triggers the champion-tracking step. Since no Endurance Champion existed yet, the previous last bidder (the first bidder) gets the title with a duration equal to the time they held the position.
- A) Correct — the first bidder becomes Endurance Champion on the second bid.
- B) Wrong — the new last bidder is only a future candidate.
- C) Wrong — two bids are enough.
- D) Wrong — CST holdings do not decide.

**174. On Cosmic Signature, DAO voting durations are measured in:**
- A) Block numbers.
- B) Seconds (real time).
- C) Rounds of the game.
- D) Batch heights.

**Explanation:** CST and the DAO explicitly use a real-time seconds clock for voting delays and voting periods.
- A) Wrong — the project specifically avoids block-based timing.
- B) Correct — seconds.
- C) Wrong — rounds are unrelated to DAO timing.
- D) Wrong — no such measure.

**175. The Cosmic Signature NFT round-end raffle uses which randomness approach for each winner?**
- A) A single random seed reused for all winners, producing identical picks.
- B) A fresh random number for each draw, advancing an internal seed chain so each pick is independent.
- C) An off-chain random source per round.
- D) A seed supplied by the caller.

**Explanation:** Each raffle pick advances the internal seed chain, so every draw yields a distinct random number and a potentially different winner.
- A) Wrong — reusing one seed would always give the same winner.
- B) Correct — each draw advances the seed.
- C) Wrong — no off-chain randomness is used.
- D) Wrong — callers do not supply randomness.

**176. If the number of Cosmic Signature NFT raffle winners for bidders is changed to 0, what is TRUE about the design?**
- A) The claim fails due to an internal consistency check.
- B) The game expects this count to stay positive; setting it to 0 is outside the intended range, and internal consistency checks enabled during development signal that the operator is not expected to do so.
- C) The raffle runs normally.
- D) Only the Random Walk staker raffle runs.

**Explanation:** There are internal consistency checks (enabled in debug builds) that assume the bidder raffle count is positive. Setting it to zero is outside the design envelope.
- A) Wrong — the checks only fire in debug builds.
- B) Correct — the code assumes it remains positive.
- C) Wrong — production code may limp along but the design does not expect it.
- D) Wrong — not what the code does.

**177. A bidder places 5 identical ETH bids with the same intent. Is there any "duplicate bid" protection?**
- A) Yes — a nonce-based replay protection kicks in after 3 identical bids.
- B) No — each bid is independent and fully recorded; all 5 bids count separately.
- C) Yes — the Prizes Wallet deduplicates.
- D) Yes — the DAO catches it.

**Explanation:** No deduplication exists. Five bids are five bids: five price steps up, five timer extensions, five CST rewards, five raffle tickets.
- A) Wrong — no such protection exists.
- B) Correct — all 5 bids count independently.
- C) Wrong — the Prizes Wallet is unrelated.
- D) Wrong — governance is unrelated.

**178. Which of these is GUARANTEED to receive at least one Cosmic Signature NFT at round end?**
- A) The Main Prize Winner.
- B) The Last CST Bidder.
- C) A Random Walk NFT staker.
- D) Each bidder, proportional to their bids.

**Explanation:** The Main Prize Winner always receives one Cosmic Signature NFT and 1,000 CST as part of claiming the main prize.
- A) Correct — guaranteed as part of the main-prize bundle.
- B) Wrong — only if a CST bid was placed.
- C) Wrong — only if any Random Walk NFT is staked.
- D) Wrong — bids reward CST but not a guaranteed NFT.

**179. A deep-pocketed player wants to maximize their probability of at least one NFT raffle win in a round. Ignoring price dynamics, which strategy is best?**
- A) Place one very high-value ETH bid.
- B) Place many small bids.
- C) Donate ETH to the game.
- D) Stake many Cosmic Signature NFTs.

**Explanation:** Raffle draws pick from the bid list, one entry per bid. More bids means more tickets. Bid size does not add extra entries.
- A) Wrong — bid size does not change raffle weight; only bid count does.
- B) Correct — raffle probability scales with number of bids.
- C) Wrong — donations add no raffle tickets.
- D) Wrong — Cosmic Signature NFT staking is for the staker reward pool, not the bidder raffle.

**180. Which of the following is NOT one of the shared per-bid steps the game performs each time any bid is placed?**
- A) Enforce the message length limit.
- B) Update who the last bidder is.
- C) Extend the deadline, except on the first bid of the round.
- D) Transfer ETH from the bidder.

**Explanation:** The ETH transfer only applies to ETH bids and happens earlier, in the ETH-specific bid path. The shared step that both bid types share is about the common bookkeeping (message, last bidder, deadline, champion updates, etc.), not about ETH transfer.
- A) Shared step — the message length check happens here.
- B) Shared step — the last bidder is updated.
- C) Shared step — the deadline is extended on non-first bids.
- D) Correct answer — the ETH transfer is not part of the shared per-bid step; it is specific to ETH bids.

**181. The net ETH "cost" of a successful main-prize claim for the claimer is:**
- A) Zero, because they receive the main prize.
- B) Positive — gas fees plus the ETH paid across their bids, minus any ETH they win (main prize, other prizes, staker rewards).
- C) Exactly the size of the main prize.
- D) Always negative, regardless of inputs.

**Explanation:** A full accounting subtracts bid spend and gas from total winnings. It only clears positive if winnings exceed what was spent.
- A) Wrong — gas and bid spend matter.
- B) Correct — a careful accounting subtracts spend and gas from wins.
- C) Wrong — ignores spend and gas.
- D) Wrong — can easily be negative for a whale who overspent.

**182. If the charity address is itself an automated program that consumes more gas than expected, what mitigation exists?**
- A) None — the claim fails.
- B) The charity transfer is allowed to fail safely, so the claim continues even if the charity misbehaves.
- C) The DAO steps in automatically.
- D) The Charity Wallet auto-refunds the charity.

**Explanation:** The charity transfer is a best-effort call. On failure, an event is emitted, the ETH stays, and the rest of the payout continues.
- A) Wrong — a specific mitigation exists.
- B) Correct — the failure is absorbed.
- C) Wrong — the DAO is uninvolved.
- D) Wrong — no auto-refund feature exists on the Charity Wallet.

**183. What is the purpose of the "only the game itself may call this" rule seen on several parts of the system?**
- A) It allows any caller to invoke the action.
- B) It restricts specific cross-component calls (like minting CST or depositing to the Prizes Wallet) so only the main game can trigger them.
- C) It requires DAO approval for those calls.
- D) It prevents front-running.

**Explanation:** The rule is the trust boundary between the main game and its helpers. Only the main game is allowed to trigger sensitive cross-component actions.
- A) Wrong — the rule is a restriction.
- B) Correct — it enforces the "only the main game can do this" boundary.
- C) Wrong — the DAO is not the gate.
- D) Wrong — not a front-running defense.

**184. If the CST auction duration divisor is set to a very small number (e.g., 1), what is the effect?**
- A) The CST Dutch auction ends almost immediately.
- B) The CST Dutch auction lasts a very long time, because a small divisor yields a large duration.
- C) The CST auction is disabled.
- D) CST bids become ineligible.

**Explanation:** The CST auction duration is computed by dividing the timer-extension base value by the divisor. A very small divisor means a very large duration.
- A) Wrong — a smaller divisor produces a longer, not shorter, auction.
- B) Correct — tiny divisor creates a very long auction.
- C) Wrong — the auction is not disabled.
- D) Wrong — CST bids remain valid.

**185. A bidder's CST balance is slightly less than the current CST bid price. What happens when they try to bid with CST?**
- A) The bid succeeds and the shortfall is minted.
- B) The bid fails because the burn cannot deduct an amount the bidder does not have.
- C) Their ETH balance is used to cover the shortfall.
- D) The bid is queued until they get more CST.

**Explanation:** The burn requires the bidder to actually hold the required CST. If they do not, the transaction fails; there is no auto-mint or ETH-to-CST conversion.
- A) Wrong — no auto-mint covers shortfalls.
- B) Correct — the burn fails, and the bid fails.
- C) Wrong — ETH cannot cover CST shortfalls.
- D) Wrong — no queuing exists.

**186. At deployment, the very first round's activation time is set to what kind of value?**
- A) The exact deployment timestamp.
- B) A deliberately far-future placeholder, which the deployer lowers to a realistic time after finishing the initial setup.
- C) 30 minutes after deployment.
- D) 24 hours after deployment.

**Explanation:** The activation time defaults to a far-future sentinel so nobody can bid while the deployer is still wiring up the system. Once configuration is done, the deployer moves it to a real time.
- A) Wrong — the default is a far-future placeholder.
- B) Correct — a far-future placeholder, manually brought forward.
- C) Wrong — no 30-minute default for first activation.
- D) Wrong — no 24-hour default.

**187. Why is the first bid of a round required to be ETH rather than CST?**
- A) CST is considered more valuable than ETH and should not start auctions.
- B) The first bid of a round sets the start time for the round's CST Dutch auction. Since CST pricing depends on that start time being set, the first bid has to be ETH.
- C) It is a rule of the underlying blockchain.
- D) The DAO voted to block first-bid CST.

**Explanation:** The round's first bid initializes the CST auction's start time. Because CST pricing needs that to work, the first bid must be ETH.
- A) Wrong — the reasoning is mechanical, not about token value.
- B) Correct — CST pricing depends on a timestamp set by the first ETH bid.
- C) Wrong — nothing about the blockchain forbids this.
- D) Wrong — no governance rule.

**188. Two players place bids at the exact same timestamp (same block). What does the Endurance Champion calculation do?**
- A) Rejects the second bid.
- B) Processes them sequentially within the block. The champion-tracking step for the second bid sees a zero-duration reign from the first bidder, which does not beat the current record, so no promotion happens.
- C) Endurance Champion is assigned based on whoever has more ETH.
- D) Endurance Champion flips to a null value.

**Explanation:** Even within a block, transactions run in sequence. The second bid's champion-tracking step sees a zero duration from the first bidder, which does not exceed any existing record, so no promotion occurs.
- A) Wrong — both bids can still succeed.
- B) Correct — zero durations do not promote a new Endurance Champion.
- C) Wrong — ETH amounts do not decide this.
- D) Wrong — the champion is not reset.

**189. Which of the following best describes what the Marketing Wallet CAN do with its CST?**
- A) Transfer CST to designated recipients via the treasurer's payment actions.
- B) Burn CST to reduce supply.
- C) Swap CST for ETH on an exchange.
- D) Delegate CST voting power to bidders.

**Explanation:** The Marketing Wallet offers treasurer-only CST payment actions to reward marketing partners. It does not burn, swap, or delegate.
- A) Correct — treasurer-controlled transfers to recipients.
- B) Wrong — no burn action on the wallet.
- C) Wrong — no exchange integration.
- D) Wrong — no delegation action exists.

**190. When a bid is accompanied by a donated collectible (NFT) via the "bid-with-NFT-donation" action, the donated NFT ends up at:**
- A) The main game.
- B) The Prizes Wallet, and it is claimable by that round's main prize winner (or anyone after the 5-week timeout).
- C) The Marketing Wallet.
- D) Destroyed to a sacrifice address.

**Explanation:** The Prizes Wallet stores donated NFTs with claim rules similar to donated tokens: the round's main prize winner can claim them during the timeout window; after the timeout, anyone can.
- A) Wrong — the game does not hold donated NFTs.
- B) Correct — the Prizes Wallet holds and gates claims.
- C) Wrong — the Marketing Wallet is CST-only.
- D) Wrong — not destroyed.

**191. Suppose the DAO is given ownership of the main game. Once done, what changes?**
- A) Nothing — DAO ownership is the same as deployer ownership.
- B) The DAO gains the same administrative privileges the operator had, under the same round-state rules (for example, upgrades still require an idle round).
- C) Users can no longer bid.
- D) The Charity Wallet is also automatically governed by the DAO.

**Explanation:** Handing the game's ownership to the DAO preserves all existing rules — the DAO gets the same administrative powers the operator had, subject to the same round-state guards.
- A) Wrong — ownership transfer means the DAO now acts through its own vote flows.
- B) Correct — the DAO inherits the same powers and guards.
- C) Wrong — user bidding is unaffected.
- D) Wrong — the Charity Wallet has its own owner.

**192. Which of the following is TRUE about the claim-after-timeout flow?**
- A) After the deadline plus the grace period, any caller can claim the main prize and receive it; the last bidder loses their exclusive right.
- B) The DAO must approve each late claim.
- C) Late claimers must pay a fee to the Marketing Wallet.
- D) Late claimers forfeit the secondary prizes.

**Explanation:** Once the grace period is up, any caller is permitted. The main prize goes to the caller, regardless of whether they bid.
- A) Correct — anyone can claim after the grace period.
- B) Wrong — no governance gate.
- C) Wrong — no fee mechanism.
- D) Wrong — the claimer still receives the main-prize bundle.

**193. Default percentages are: main 25%, Chrono-Warrior 8%, raffle 4%, stakers 6%, charity 7% — totaling 50%. If there are zero Cosmic Signature NFT stakers in a given round, what fraction of the game's balance is actually paid out?**
- A) 50%, unchanged.
- B) 44% — the 6% staker deposit is safely skipped and that ETH stays in the game.
- C) 0%.
- D) 94%.

**Explanation:** With no stakers, the staker deposit is skipped and the 6% stays. The other 25 + 8 + 4 + 7 = 44% does leave the game.
- A) Wrong — the staker share is effectively skipped.
- B) Correct — 44% leaves.
- C) Wrong — many prizes still pay.
- D) Wrong — does not match the formula.

**194. Which of these is FALSE about the Prizes Wallet?**
- A) ETH balances are tracked per winner per round.
- B) Donated tokens are custodied by a per-round helper component.
- C) Donated collectibles are held by the Prizes Wallet itself.
- D) Cosmic Signature NFT staking rewards are held here.

**Explanation:** Cosmic Signature NFT staking rewards live in the dedicated staking wallet, not in the Prizes Wallet. The other three statements are true.
- A) True — tracked per winner per round.
- B) True — a helper holds donated tokens.
- C) True — donated NFTs are held by the Prizes Wallet directly.
- D) Correct answer — this claim is FALSE.

**195. In round 10: Alice 50 bids, Bob 50 bids, Charlie 1 bid. The raffle picks 10 NFT winners. What is the approximate probability Charlie wins at least one?**
- A) About 0.99%.
- B) About 9.6% — 1 minus (100/101) to the 10th power.
- C) Exactly 1%.
- D) About 50%.

**Explanation:** Charlie's per-draw chance is 1/101. Miss-all probability across 10 draws is (100/101) to the 10th ≈ 0.905, so win-at-least-one ≈ 0.095.
- A) Wrong — that is a single-draw probability.
- B) Correct — about 9.6%.
- C) Wrong — 10 draws boost the probability above 1%.
- D) Wrong — far too high.

**196. The ETH bid price grows by about 1% per bid. A bid at price P followed by exactly 100 more bids produces what new price, approximately?**
- A) P plus a tiny 100-unit nudge.
- B) About P × e, where e ≈ 2.718.
- C) Exactly 2P.
- D) A price approaching infinity.

**Explanation:** (1 + 1/100) compounded 100 times approaches the mathematical constant e ≈ 2.718.
- A) Wrong — the tiny additive slice is negligible compared to compounding.
- B) Correct — 1% compounded 100 times approaches e.
- C) Wrong — 1.01 to the 100 is about 2.705, very close to e.
- D) Wrong — 100 bids is finite.

**197. Why does the game enforce "the ETH you send must be greater than zero" only when no bid has been placed in the round yet?**
- A) To require that the first bid of each round is ETH.
- B) To allow CST bids after the first bid without forcing them to send ETH.
- C) Both A and B — the single check serves as both the first-bid-must-be-ETH rule and the permission for later CST bids to skip ETH.
- D) Neither — it is a vestigial check.

**Explanation:** That one check both enforces "first bid must be ETH" and allows later CST bids (which of course send no ETH) to proceed.
- A) Partial — correct but incomplete.
- B) Partial — correct but incomplete.
- C) Correct — the check serves both purposes in one line.
- D) Wrong — the check is essential.

**198. What is the primary reason the champion-tracking step runs on every non-first bid and also on the main-prize claim?**
- A) To keep the Endurance Champion and Chrono-Warrior accurate through every transition and at the final evaluation moment.
- B) To prevent front-running.
- C) To reward bidders with CST.
- D) To refresh the random-number generator.

**Explanation:** Champions are computed incrementally. Running the step on every non-first bid catches each transition; running it once more on claim captures the final reign up to the claim time.
- A) Correct — accuracy at every transition plus finalization.
- B) Wrong — unrelated.
- C) Wrong — the CST reward is a separate step.
- D) Wrong — the random-number seed comes from other helpers.

**199. An attacker force-sends ETH to the main game in a way that does not call any specific action (for example, by destroying a different wallet-program that held the ETH). What happens?**
- A) The ETH simply credits the game's balance, with no bid and no event logged.
- B) The game rejects the incoming ETH.
- C) A raffle is triggered.
- D) The ETH is returned to the sender automatically.

**Explanation:** Force-sending ETH this way bypasses the game's normal receive path entirely. The game's balance goes up, but no bid runs and no donation is logged.
- A) Correct — the balance increases silently.
- B) Wrong — there is no way to reject a force-send.
- C) Wrong — no raffle is triggered.
- D) Wrong — no automatic bounce-back exists.

**200. A round closes with the game holding a balance of 40 ETH, 200 bids from 50 bidders, 10 staked Cosmic Signature NFTs, 0 staked Random Walk NFTs, and a Last CST Bidder, Endurance Champion, and Chrono-Warrior. Under default parameters, approximately how much ETH stays in the game after all payouts complete?**
- A) 0 ETH.
- B) About 20 ETH (50% remains).
- C) 40 ETH — nothing is distributed.
- D) About 10 ETH.

**Explanation:** Defaults pay out about 50%: main 10 + charity 2.8 + Chrono-Warrior 3.2 + raffle 1.6 + stakers 2.4 = 20 ETH paid out; 20 ETH remains. No Random Walk stakers does not change ETH flows — only the NFT-and-CST raffle bundles for that category are skipped.
- A) Wrong — half carries over by design.
- B) Correct — about 20 ETH remains after the 50% payout.
- C) Wrong — distribution does happen.
- D) Wrong — does not match the defaults.

---

## Answer Key

### Section 1: Basic
| Q | A | Q | A | Q | A | Q | A | Q | A |
|---|---|---|---|---|---|---|---|---|---|
| 1 | B | 11 | C | 21 | B | 31 | B | 41 | A |
| 2 | C | 12 | B | 22 | A | 32 | A | 42 | A |
| 3 | B | 13 | B | 23 | B | 33 | B | 43 | B |
| 4 | C | 14 | A | 24 | B | 34 | B | 44 | B |
| 5 | C | 15 | B | 25 | B | 35 | B | 45 | B |
| 6 | B | 16 | B | 26 | B | 36 | B | 46 | B |
| 7 | B | 17 | C | 27 | C | 37 | B | 47 | B |
| 8 | C | 18 | B | 28 | B | 38 | C | 48 | A |
| 9 | B | 19 | C | 29 | A | 39 | B | 49 | C |
| 10 | B | 20 | A | 30 | B | 40 | B | 50 | D |

### Section 2: Medium
| Q | A | Q | A | Q | A | Q | A | Q | A |
|---|---|---|---|---|---|---|---|---|---|
| 51 | B | 61 | B | 71 | C | 81 | B | 91 | B |
| 52 | B | 62 | B | 72 | B | 82 | B | 92 | B |
| 53 | B | 63 | C | 73 | B | 83 | A | 93 | B |
| 54 | B | 64 | B | 74 | A | 84 | C | 94 | B |
| 55 | B | 65 | B | 75 | B | 85 | B | 95 | B |
| 56 | B | 66 | B | 76 | B | 86 | B | 96 | B |
| 57 | B | 67 | B | 77 | B | 87 | B | 97 | B |
| 58 | B | 68 | B | 78 | B | 88 | B | 98 | B |
| 59 | B | 69 | C | 79 | A | 89 | B | 99 | A |
| 60 | B | 70 | B | 80 | B | 90 | B | 100 | B |

### Section 3: Hard
| Q | A | Q | A | Q | A | Q | A | Q | A |
|---|---|---|---|---|---|---|---|---|---|
| 101 | B | 121 | B | 141 | B | 161 | B | 181 | B |
| 102 | B | 122 | B | 142 | B | 162 | B | 182 | B |
| 103 | B | 123 | B | 143 | B | 163 | A | 183 | B |
| 104 | C | 124 | B | 144 | B | 164 | B | 184 | B |
| 105 | B | 125 | B | 145 | A | 165 | B | 185 | B |
| 106 | B | 126 | B | 146 | B | 166 | B | 186 | B |
| 107 | B | 127 | C | 147 | A | 167 | B | 187 | B |
| 108 | B | 128 | B | 148 | C | 168 | B | 188 | B |
| 109 | B | 129 | B | 149 | A | 169 | A | 189 | A |
| 110 | B | 130 | B | 150 | B | 170 | B | 190 | B |
| 111 | A | 131 | A | 151 | A | 171 | B | 191 | B |
| 112 | B | 132 | B | 152 | B | 172 | A | 192 | A |
| 113 | C | 133 | B | 153 | B | 173 | A | 193 | B |
| 114 | B | 134 | B | 154 | B | 174 | B | 194 | D |
| 115 | B | 135 | B | 155 | A | 175 | B | 195 | B |
| 116 | A | 136 | B | 156 | A | 176 | B | 196 | B |
| 117 | B | 137 | B | 157 | B | 177 | B | 197 | C |
| 118 | B | 138 | B | 158 | A | 178 | A | 198 | A |
| 119 | B | 139 | A | 159 | B | 179 | B | 199 | A |
| 120 | D | 140 | B | 160 | B | 180 | D | 200 | B |
