import PricingPolicyWrapper from '@/components/wrapper/pricingPolicy'
import React from 'react'
import pricingData from "@/lib/data/pricing/data.json"

const PricingPolicy = () => {
  return (
    <PricingPolicyWrapper data={pricingData} />
  )
}

export default PricingPolicy