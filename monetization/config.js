/**
 * 💰 ChainList Monetization Configuration
 * ==========================================
 * Complete monetization strategy automation
 */

export const MONETIZATION_CONFIG = {
  // ===== API PRICING =====
  API_TIERS: {
    FREE: {
      name: "Free",
      price: 0,
      requests_per_month: 10000,
      rate_limit: 10, // per second
      features: ['basic_data', 'public_rpcs'],
      description: "Basic access to chainlist data"
    },
    STARTER: {
      name: "Starter",
      price: 50,
      requests_per_month: 100000,
      rate_limit: 100,
      features: ['basic_data', 'private_rpcs', 'analytics', 'priority_support'],
      description: "Perfect for small projects"
    },
    PROFESSIONAL: {
      name: "Professional",
      price: 200,
      requests_per_month: 1000000,
      rate_limit: 500,
      features: ['all_data', 'private_rpcs', 'analytics', 'webhook', 'priority_support', 'custom_chains'],
      description: "For growing platforms"
    },
    ENTERPRISE: {
      name: "Enterprise",
      price: 1000,
      requests_per_month: null,
      rate_limit: 5000,
      features: ['all_data', 'dedicated_support', 'sla_99.9', 'custom_integration', 'white_label'],
      description: "Custom solutions"
    }
  },

  // ===== RPC MARKETPLACE =====
  RPC_MARKETPLACE: {
    RANKS: {
      PREMIUM: { position: 1, price: 500, color: "gold" },
      FEATURED: { position: 2, price: 300, color: "silver" },
      STANDARD: { position: 3, price: 100, color: "bronze" },
      FREE: { position: 4, price: 0, color: "gray" }
    },
    min_uptime: 99.5,
    min_response_time: 500
  },

  // ===== AFFILIATE PROGRAM =====
  AFFILIATE: {
    new_network_commission: 0.05,
    rpc_provider_commission: 0.10,
    validator_commission: 0.03,
    cookie_duration: 30
  },

  // ===== PAYMENT GATEWAYS =====
  PAYMENTS: {
    stripe: {
      enabled: true,
      fee: 0.029,
      key: process.env.STRIPE_SECRET_KEY
    },
    crypto: {
      enabled: true,
      accepted: ['ETH', 'USDC', 'USDT'],
      wallet: process.env.CRYPTO_WALLET_ADDRESS,
      fee: 0.01
    }
  }
};

export const COMMISSION_TIERS = {
  0: { min_revenue: 0, max_revenue: 1000, rate: 0.10 },
  1: { min_revenue: 1000, max_revenue: 10000, rate: 0.08 },
  2: { min_revenue: 10000, max_revenue: 100000, rate: 0.06 },
  3: { min_revenue: 100000, max_revenue: Infinity, rate: 0.05 }
};
