import TermsAndConditionsWrapper from '@/components/wrapper/termsAndConditions'
import React from 'react'
import tAndCData from "@/lib/data/terms-and-conditions/data.json"

const TermsAndConditions = () => {
  return (
    <TermsAndConditionsWrapper data={tAndCData} />
  )
}

export default TermsAndConditions