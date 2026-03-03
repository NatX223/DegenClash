# DegenClash
Gamified prediction market. 1V1 firends and the market.

DegenClash is a 1v1 and team-based prediction market platform built for the next generation of DeFi power users. By turning price predictions into a competitive "arena," DegenClash combines social gaming with robust cross-chain oracle verification.
🚀 Core Idea: Battle-style Prediction Markets
DegenClash moves away from static, lonely betting. It’s built for the "clash."
1v1 Arenas: Create a custom market (e.g., "Will BTC hit $90k by midnight?"), generate a unique game link, and challenge a friend directly.
Team Warfare: Join forces with other users to bet collectively against an opposing squad. Larger pool sizes mean higher stakes and bigger payouts.
Social Connectivity: Every game is a social event. Share your battle link across socials to find opponents or recruit teammates.
🎮 Gamification: The "Arena" Interface
We’ve stripped away the boring order books of traditional finance and replaced them with a game-first UI.
Dynamic UI Scaling: The more you stake, the more dominant your presence becomes on the UI. Watch your side of the "Clash Meter" grow in real-time as you increase your position.
Live Commentary: Integrated "Trash-Talk" modules allow players and spectators to comment on the market as price action unfolds.
Visual Stakes: See the weight of the "Degen" sentiment through a localized, high-energy interface designed for speed and clarity.
🛡️ Technical Architecture: The USC Oracle Flow
DegenClash leverages Creditcoin Universal Smart Contracts (USC) to bridge real-world data from Ethereum Sepolia into a secure, verifiable execution environment.
The Verification Loop:
Request: A market reaches its expiration time.
Oracle Fetch: The system targets Chainlink Price Feeds on the Sepolia network.
USC Verification: The Creditcoin USC intercepts the price data. It verifies the cryptographic proof that the data originated from the official Chainlink Aggregator.
Resolution: Once verified, the USC triggers the resolveMarket function on the DegenClash contract.
Settlement: Winners are paid out instantly based on the immutable price feed data.
🏦 Utility: The Lending Protocol
DegenClash isn't just a place to bet; it’s a capital-efficient ecosystem. We’ve built a Lending Protocol directly on top of the prediction engine.
Positions as Collateral: Don't let your capital sit idle while waiting for a market to resolve. Users can use their active "long" or "short" prediction positions as collateral.
Instant Liquidity: Borrow stablecoins or gas tokens against the value of your stake.
Risk Management: If your prediction moves significantly against you, the lending protocol manages the LTV (Loan-to-Value) to ensure the platform remains solvent, creating a seamless loop between prediction and production.
🛠️ Specifications
Chain: Creditcoin USC (Universal Smart Contract)
Data Source: Chainlink Aggregator V3 (Sepolia)
Frontend: Next.js + Tailwind CSS
Relayer: Off-chain worker (Node.js) for proof submission
Persistence: Firestore for real-time game state and block tracking
