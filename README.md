# ⚔️ DegenClash

**Gamified 1v1 & Team-Based Prediction Markets on Creditcoin USC**

DegenClash is a battle-style prediction market platform built for the next generation of DeFi power users. By transforming price predictions into competitive arenas, DegenClash merges social gaming with cross-chain oracle verification powered by Creditcoin Universal Smart Contracts.

---

## 🚀 Core Idea — Battle-Style Prediction Markets

DegenClash moves away from static, isolated betting and introduces **competitive prediction arenas**.

### 🥊 1v1 Arenas
- Create a custom market  
  _Example:_ “Will BTC hit $90k by midnight?”
- Generate a unique game link
- Challenge a friend directly
- Winner takes the pool

### 🛡️ Team Warfare
- Join forces with other users
- Bet collectively against an opposing squad
- Larger pool sizes = higher stakes = bigger payouts

### 🌍 Social Connectivity
- Every game is a social event
- Share battle links across social platforms
- Recruit teammates or find worthy opponents

---

## 🎮 Gamification — The Arena Interface

We removed boring order books and replaced them with a **game-first experience**.

### 📊 Dynamic UI Scaling
- The more you stake, the more dominant your presence becomes
- Watch your side of the **Clash Meter** grow in real-time

### 💬 Live Commentary
- Integrated trash-talk modules
- Players and spectators comment as price action unfolds

### ⚡ Visual Stakes
- High-energy, localized interface
- Designed for speed, clarity, and competitive immersion

---

## 🛡️ Technical Architecture — The USC Oracle Flow

DegenClash leverages **Creditcoin Universal Smart Contracts (USC)** to securely bridge real-world data from Ethereum Sepolia into a verifiable execution environment.

### 🔁 The Verification Loop

1. **Request**
   - A market reaches expiration time.

2. **Oracle Fetch**
   - The system targets Chainlink Price Feeds on Ethereum Sepolia.

3. **USC Verification**
   - Creditcoin USC intercepts the price data.
   - Verifies cryptographic proof that the data originated from the official Chainlink Aggregator.

4. **Resolution**
   - Once verified, USC triggers `resolveMarket()` on the DegenClash contract.

5. **Settlement**
   - Winners are paid instantly based on immutable oracle data.

---

## 🏦 Utility — The Lending Protocol

DegenClash is more than a prediction platform — it's a **capital-efficient ecosystem**.

### 💰 Positions as Collateral
- Use active long/short prediction positions as collateral
- No idle capital while waiting for resolution

### ⚡ Instant Liquidity
- Borrow stablecoins or gas tokens
- Unlock liquidity without closing positions

### 📉 Risk Management
- Dynamic Loan-to-Value (LTV) management
- If a position moves against you, protocol adjusts risk parameters
- Ensures platform-wide solvency

This creates a seamless loop between **prediction and production capital**.

---

## 🛠️ Technical Specifications

| Layer        | Stack |
|--------------|-------|
| **Chain**    | Creditcoin USC (Universal Smart Contract) |
| **Data Source** | Chainlink Aggregator V3 (Sepolia) |
| **Frontend** | Next.js + Tailwind CSS |
| **Relayer**  | Off-chain worker (Node.js) for proof submission |
| **Persistence** | Firestore (real-time game state + block tracking) |

---

## 🧠 Why DegenClash?

- Social-first prediction markets  
- Cross-chain verified oracle settlement  
- Gamified, competitive UI  
- Built-in capital efficiency through lending  
- Designed for DeFi natives  

---

## 📌 Vision

To transform prediction markets from passive speculation into competitive, social financial arenas — where conviction becomes visible, liquidity becomes productive, and every trade is a clash.

---

**DegenClash — Where Conviction Meets Combat.**Positions as Collateral: Don't let your capital sit idle while waiting for a market to resolve. Users can use their active "long" or "short" prediction positions as collateral.
Instant Liquidity: Borrow stablecoins or gas tokens against the value of your stake.
Risk Management: If your prediction moves significantly against you, the lending protocol manages the LTV (Loan-to-Value) to ensure the platform remains solvent, creating a seamless loop between prediction and production.
🛠️ Specifications
Chain: Creditcoin USC (Universal Smart Contract)
Data Source: Chainlink Aggregator V3 (Sepolia)
Frontend: Next.js + Tailwind CSS
Relayer: Off-chain worker (Node.js) for proof submission
Persistence: Firestore for real-time game state and block tracking
