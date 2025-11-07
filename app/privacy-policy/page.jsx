import PrivacyPolicyWrapper from '@/components/wrapper/privacyPolicy'
import React from 'react'
import privacyData from "@/lib/data/privacy-policy/data.json"

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyWrapper data={privacyData}/>
  )
}

export default PrivacyPolicy