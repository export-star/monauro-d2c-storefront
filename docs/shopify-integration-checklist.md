# MONAURO Shopify Integration Checklist

## Current Demo Boundary

- Product data is stored in `src/data/products.ts`.
- Cart and order tracking are visible demo routes.
- Checkout is not connected to real Shopify payment or order flow yet.
- No real order, inventory, discount, tax, or shipping calculation is performed by this frontend.

## Required Shopify Inputs

- Shopify store domain
- Storefront API access token
- Product handles for all four products
- Variant IDs for each color / option
- Inventory rules
- Shipping profiles for Europe, the United States, and Southeast Asia
- Return and warranty policy wording
- Payment provider configuration
- Tax and duty handling rules
- Discount and bundle rules, if any

## Product Mapping

| Product | Current SKU / Model | Shopify Handle | Variant Rules |
| --- | --- | --- | --- |
| RecoveryAir Calf Pro | MC06 | To be confirmed | Colors and bundle logic needed |
| RecoveryAir Leg Elite | ML01 | To be confirmed | Colors needed |
| RelaxiWave Eye Mask | ME01 | To be confirmed | Colors needed |
| Back Massage Gun | MG01 | To be confirmed | Colors needed |

## Integration Steps

1. Create products in Shopify with final names, prices, images, variants, and inventory.
2. Add handles and variant IDs to a structured data layer or API adapter.
3. Replace placeholder add-to-cart links with Shopify cart creation.
4. Connect `/cart` to real cart line items.
5. Connect checkout handoff to Shopify Checkout.
6. Connect `/order-tracking` to Shopify order status or a logistics tracking provider.
7. Test payment, shipping, taxes, returns, discounts, and order emails.

## Verification

- Product page add-to-cart works for each product.
- Cart quantity changes work.
- Checkout opens the correct Shopify checkout.
- No fake payment path remains.
- Shipping copy matches Shopify shipping profiles.
- Return and warranty copy matches published policies.
- Order tracking gives a real next step for customers.
